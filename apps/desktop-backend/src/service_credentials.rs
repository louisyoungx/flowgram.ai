//! Host-owned outbound HTTP credentials. Bundles contain environment-slot names only.
use crate::store::Store;
use crate::{
    error::{Error, Result},
    model::Node,
};
use serde_json::Value;
use std::collections::BTreeSet;

impl Store {
    pub async fn run_connection_secret(&self, _run: &str, slot: &str) -> Result<String> {
        std::env::var(slot)
            .ok()
            .filter(|s| s.len() >= 8)
            .ok_or_else(|| Error::Execution(format!("Credential slot is unavailable: {slot}")))
    }
}

pub fn slot(node: &Node) -> Result<Option<(String, String, String)>> {
    let binding = &node.data["inputsValues"]["credentialEnv"];
    if binding.is_null() {
        return Ok(None);
    }
    let configured = |field: &str, default: &str| -> Result<String> {
        let value = &node.data["inputsValues"][field];
        if value.is_null() {
            return Ok(default.into());
        }
        if value["type"] != "constant" {
            return Err(Error::Invalid(
                "HTTP credential configuration must use static constant bindings".into(),
            ));
        }
        value["content"]
            .as_str()
            .map(str::to_owned)
            .ok_or_else(|| Error::Invalid("HTTP credential configuration must be text".into()))
    };
    let name = configured("credentialEnv", "")?;
    if name.is_empty() {
        return Ok(None);
    }
    if !name.starts_with("FLOWGRAM_CONNECTION_")
        || name.len() > 128
        || !name
            .bytes()
            .all(|c| c.is_ascii_uppercase() || c.is_ascii_digit() || c == b'_')
    {
        return Err(Error::Invalid(
            "HTTP credential slots must use FLOWGRAM_CONNECTION_ environment variables".into(),
        ));
    }
    let header = configured("credentialHeader", "Authorization")?;
    reqwest::header::HeaderName::from_bytes(header.as_bytes())
        .map_err(|_| Error::Invalid("Invalid credential header name".into()))?;
    let prefix = configured("credentialPrefix", "Bearer ")?;
    if prefix.contains(['\r', '\n']) {
        return Err(Error::Invalid("Invalid credential prefix".into()));
    }
    Ok(Some((name, header, prefix)))
}
pub fn required(nodes: &Value) -> Result<BTreeSet<String>> {
    let mut names = BTreeSet::new();
    for value in nodes.as_array().into_iter().flatten() {
        let node: Node = serde_json::from_value(value.clone())?;
        if node.kind == "http" {
            if let Some((name, _, _)) = slot(&node)? {
                names.insert(name);
            }
            let headers = &node.data["inputsValues"]["headers"];
            if headers["type"] == "constant"
                && headers["content"].as_object().is_some_and(|m| {
                    m.iter().any(|(k, v)| {
                        [
                            "authorization",
                            "proxy-authorization",
                            "x-api-key",
                            "api-key",
                            "cookie",
                        ]
                        .contains(&k.to_ascii_lowercase().as_str())
                            && v.as_str().is_some_and(|s| !s.is_empty())
                    })
                })
            {
                return Err(Error::Invalid("Published HTTP credentials must use a host environment slot, not literal secret headers".into()));
            }
        }
        names.extend(required(&value["blocks"])?);
    }
    Ok(names)
}

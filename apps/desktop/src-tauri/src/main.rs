use serde::Serialize;
use std::{
    path::PathBuf,
    process::{Child, Command, Stdio},
    sync::Mutex,
    time::Duration,
};
use tauri::Manager;

#[derive(Clone, Serialize)]
struct Connection {
    endpoint: String,
    token: String,
}
struct Backend {
    child: Mutex<Option<Child>>,
    connection: Connection,
}
impl Drop for Backend {
    fn drop(&mut self) {
        if let Ok(child) = self.child.get_mut()
            && let Some(mut process) = child.take()
        {
            let _ = process.kill();
            let _ = process.wait();
        }
    }
}
#[tauri::command]
fn backend_connection(backend: tauri::State<'_, Backend>) -> Connection {
    backend.connection.clone()
}
fn start_backend(app: &tauri::App) -> Result<Backend, Box<dyn std::error::Error>> {
    let dir = std::env::var_os("FLOWGRAM_DATA_DIR")
        .map(PathBuf::from)
        .map(Ok)
        .unwrap_or_else(|| app.path().app_data_dir())?;
    std::fs::create_dir_all(&dir)?;
    let executable: PathBuf = if cfg!(debug_assertions) {
        PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("../../../target/debug/flowgram-server")
    } else {
        std::env::current_exe()?
            .parent()
            .ok_or("Application executable directory is unavailable")?
            .join(if cfg!(windows) {
                "flowgram-server.exe"
            } else {
                "flowgram-server"
            })
    };
    let connection_file = dir.join("connection.json");
    if connection_file.exists() {
        std::fs::remove_file(&connection_file)?;
    }
    let mut child = Command::new(executable)
        .env("FLOWGRAM_DATA_DIR", &dir)
        .env("FLOWGRAM_PORT", "0")
        .stdin(Stdio::null())
        .stdout(Stdio::null())
        .stderr(Stdio::inherit())
        .spawn()?;
    // Wait only for metadata written by this owned process.
    for _ in 0..100 {
        if let Some(status) = child.try_wait()? {
            return Err(format!("FlowGram backend exited: {status}").into());
        }
        if let Ok(bytes) = std::fs::read(&connection_file)
            && let Ok(value) = serde_json::from_slice::<serde_json::Value>(&bytes)
            && let (Some(endpoint), Some(token)) =
                (value["endpoint"].as_str(), value["token"].as_str())
        {
            let address = endpoint.trim_start_matches("http://");
            if std::net::TcpStream::connect_timeout(&address.parse()?, Duration::from_millis(100))
                .is_ok()
            {
                return Ok(Backend {
                    child: Mutex::new(Some(child)),
                    connection: Connection {
                        endpoint: endpoint.into(),
                        token: token.into(),
                    },
                });
            }
        }
        std::thread::sleep(Duration::from_millis(100));
    }
    let _ = child.kill();
    let _ = child.wait();
    Err("FlowGram backend did not become ready".into())
}
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_single_instance::init(|app, _, _| {
            if let Some(window) = app.get_webview_window("main") {
                let _ = window.unminimize();
                let _ = window.show();
                let _ = window.set_focus();
            }
        }))
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let backend = start_backend(app)?;
            app.manage(backend);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![backend_connection])
        .build(tauri::generate_context!())
        .expect("Unable to start FlowGram")
        .run(|app, event| {
            if matches!(event, tauri::RunEvent::Exit) {
                let backend = app.state::<Backend>();
                if let Ok(mut child) = backend.child.lock()
                    && let Some(mut process) = child.take()
                {
                    let _ = process.kill();
                    let _ = process.wait();
                }
            }
        });
}

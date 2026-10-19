use flowgram_desktop_backend::{
    project::{atomic_json, read_project},
    project_transfer::{export_project, import_project},
    registry::Registry,
    runtime,
};
use serde_json::{Value, json};

#[tokio::test]
async fn initial_content_has_real_workflows_runs_and_consistent_editable_conversations() {
    let dir = tempfile::tempdir().unwrap();
    let model =
        json!({"baseUrl":"http://127.0.0.1:1","model":"not-called","apiKey":"keep-model-settings"});
    atomic_json(&dir.path().join("model.json"), &model)
        .await
        .unwrap();
    let registry = Registry::open(dir.path()).await.unwrap();
    assert!(registry.initialize_projects("zh-CN").await.unwrap());
    assert!(!registry.initialize_projects("en").await.unwrap());
    let projects = registry.projects().await;
    assert_eq!(projects.len(), 3);
    let mut workflows_count = 0;
    let mut sessions_count = 0;
    let mut turns_count = 0;
    let mut runs_count = 0;
    let mut failed_count = 0;
    for project in &projects {
        assert!(project.name.starts_with("示例 · "));
        let store = registry.resolve(&project.id).await.unwrap();
        let workflows = store.workflows().await.unwrap();
        workflows_count += workflows.len();
        let sessions = store.sessions().await.unwrap();
        sessions_count += sessions.len();
        for workflow in &workflows {
            assert!(
                runtime::validate(&workflow.schema).unwrap().is_empty(),
                "{}",
                workflow.name
            );
            assert_eq!(workflow.project_id, project.id);
            assert!(
                workflow.schema["nodes"]
                    .as_array()
                    .unwrap()
                    .iter()
                    .all(|n| n["meta"]["position"]["x"].is_number())
            );
            for node in workflow.schema["nodes"].as_array().unwrap() {
                if node["type"] == "llm" {
                    assert!(
                        node["data"]["inputsValues"]["prompt"]["content"]
                            .as_str()
                            .unwrap()
                            .is_ascii()
                    );
                }
            }
        }
        for session in sessions {
            assert_eq!(session.status, "idle");
            let conversation = store.conversation(&session.id, None).await.unwrap();
            assert!(conversation["inputs"].as_array().unwrap().is_empty());
            let turns = conversation["turns"].as_array().unwrap();
            turns_count += turns.len();
            let items = conversation["items"].as_array().unwrap();
            for turn in turns {
                assert_eq!(turn["status"], "completed");
                assert!(
                    items
                        .iter()
                        .any(|i| i["id"] == turn["initiatingInputId"] && i["kind"] == "user")
                );
                assert!(
                    items
                        .iter()
                        .any(|i| i["id"] == turn["finalItemId"] && i["phase"] == "final")
                );
            }
            for item in items.iter().filter(|i| i["kind"] == "tool") {
                assert_eq!(item["status"], "completed");
                assert_eq!(item["payload"]["isError"], false);
                if item["payload"]["name"] == "get_run" {
                    let run = store
                        .run(item["payload"]["arguments"]["runId"].as_str().unwrap())
                        .await
                        .unwrap();
                    let expected = store
                        .tool(
                            &project.id,
                            Some(&session.id),
                            "get_run",
                            json!({"runId":run.id}),
                        )
                        .await
                        .unwrap();
                    assert_eq!(
                        item["payload"]["result"],
                        flowgram_desktop_backend::conversation::display_payload(&expected)
                    );
                }
            }
            for id in store.session_references(&session.id).await.unwrap()["workflowIds"]
                .as_array()
                .unwrap()
            {
                assert!(workflows.iter().any(|w| w.id == id.as_str().unwrap()));
            }
        }
        for run in store.runs().await.unwrap() {
            runs_count += 1;
            if run.status == "failed" {
                failed_count += 1;
            } else {
                assert_eq!(run.status, "succeeded");
            }
            assert!(store.run_definition(&run.id).await.unwrap().is_some());
        }
        assert!(
            std::path::Path::new(&project.directory)
                .join("assets/README.md")
                .exists()
        );
        assert!(
            std::path::Path::new(&project.directory)
                .join("assets/sample-input.json")
                .exists()
        );
    }
    assert_eq!(
        (
            workflows_count,
            sessions_count,
            turns_count,
            runs_count,
            failed_count
        ),
        (6, 9, 13, 6, 1)
    );
    let actual: Value = serde_json::from_slice(
        &tokio::fs::read(dir.path().join("model.json"))
            .await
            .unwrap(),
    )
    .unwrap();
    assert_eq!(actual, model);
    let order = registry.resolve(&projects[0].id).await.unwrap();
    let output = &order.runs().await.unwrap()[0].outputs;
    assert_eq!(output["duplicates"], 1);
    assert_eq!(output["results"].as_array().unwrap().len(), 3);
    assert!(output["errors"].as_array().unwrap().is_empty());
    assert_eq!(
        output["results"]
            .as_array()
            .unwrap()
            .iter()
            .map(|r| r["status"].as_str().unwrap())
            .collect::<Vec<_>>(),
        vec!["ready", "review", "backorder"]
    );
    let package = export_project(&order, true).await.unwrap();
    let imported = import_project(&registry, package, Some("Normal imported copy"), None)
        .await
        .unwrap();
    let copy = registry.resolve(&imported.id).await.unwrap();
    assert_eq!(copy.sessions().await.unwrap().len(), 3);
    assert_eq!(copy.runs().await.unwrap().len(), 1);
    let w = copy.workflows().await.unwrap().remove(0);
    copy.set_archived("workflow", &w.id, true).await.unwrap();
    copy.set_archived("workflow", &w.id, false).await.unwrap();
    registry
        .rename(&imported.id, "Renamed ordinary project", &imported.name)
        .await
        .unwrap();
    assert_eq!(
        read_project(std::path::Path::new(&imported.directory))
            .await
            .unwrap()
            .name,
        "Renamed ordinary project"
    );
}
#[tokio::test]
async fn initialization_is_language_scoped_atomic_and_does_not_refill_cleared_or_existing_workspaces()
 {
    let dir = tempfile::tempdir().unwrap();
    let registry = Registry::open(dir.path()).await.unwrap();
    assert!(registry.initialize_projects("fr").await.is_err());
    assert!(!dir.path().join("projects").exists());
    // A partially built, unpublished staging area is disposable on retry.
    tokio::fs::create_dir(dir.path().join(".flowgram-initializing"))
        .await
        .unwrap();
    tokio::fs::write(
        dir.path().join(".flowgram-initializing/partial"),
        "incomplete",
    )
    .await
    .unwrap();
    let (a, b) = tokio::join!(
        registry.initialize_projects("en"),
        registry.initialize_projects("en")
    );
    assert_ne!(a.unwrap(), b.unwrap());
    let projects = registry.projects().await;
    assert!(projects.iter().all(|p| p.name.starts_with("Example · ")));
    for p in projects {
        registry.delete_project(&p.id, &p.name).await.unwrap();
    }
    assert!(registry.projects().await.is_empty());
    assert!(!registry.initialize_projects("zh-CN").await.unwrap());
    drop(registry);
    let registry = Registry::open(dir.path()).await.unwrap();
    assert!(!registry.initialize_projects("en").await.unwrap());
    let dir = tempfile::tempdir().unwrap();
    let registry = Registry::open(dir.path()).await.unwrap();
    let user = registry.create("User project", None).await.unwrap();
    assert!(!registry.initialize_projects("en").await.unwrap());
    assert_eq!(registry.projects().await[0].id, user.id);
    let dir = tempfile::tempdir().unwrap();
    let registry = Registry::open(dir.path()).await.unwrap();
    tokio::fs::create_dir_all(dir.path().join("projects/unregistered"))
        .await
        .unwrap();
    assert!(!registry.initialize_projects("en").await.unwrap());
    assert!(registry.projects().await.is_empty());
}
#[tokio::test]
async fn completed_directory_move_is_recovered_without_recreating_content() {
    let dir = tempfile::tempdir().unwrap();
    let registry = Registry::open(dir.path()).await.unwrap();
    registry.initialize_projects("en").await.unwrap();
    let original = registry.projects().await;
    let folders: Vec<_> = original
        .iter()
        .map(|p| {
            std::path::Path::new(&p.directory)
                .file_name()
                .unwrap()
                .to_str()
                .unwrap()
                .to_owned()
        })
        .collect();
    atomic_json(
        &dir.path().join("projects/.initial-projects-ready.json"),
        &folders,
    )
    .await
    .unwrap();
    tokio::fs::remove_file(dir.path().join("projects.json"))
        .await
        .unwrap();
    drop(registry);
    let registry = Registry::open(dir.path()).await.unwrap();
    assert!(registry.initialize_projects("zh-CN").await.unwrap());
    assert_eq!(
        serde_json::to_value(registry.projects().await).unwrap(),
        serde_json::to_value(original).unwrap()
    );
    assert!(
        !dir.path()
            .join("projects/.initial-projects-ready.json")
            .exists()
    );
}

#[tokio::test]
async fn every_offline_example_can_be_rerun_through_normal_runtime_with_its_visible_defaults() {
    let dir = tempfile::tempdir().unwrap();
    let registry = Registry::open(dir.path()).await.unwrap();
    registry.initialize_projects("en").await.unwrap();
    let mut count = 0;
    for project in registry.projects().await {
        let store = registry.resolve(&project.id).await.unwrap();
        for workflow in store.workflows().await.unwrap() {
            if workflow.schema["nodes"]
                .as_array()
                .unwrap()
                .iter()
                .any(|n| n["type"] == "llm")
            {
                continue;
            }
            let start = workflow.schema["nodes"]
                .as_array()
                .unwrap()
                .iter()
                .find(|n| n["type"] == "start")
                .unwrap();
            let inputs: serde_json::Map<String, Value> = start["data"]["outputs"]["properties"]
                .as_object()
                .unwrap()
                .iter()
                .map(|(key, spec)| (key.clone(), spec["default"].clone()))
                .collect();
            let run = store
                .start_run(&workflow.id, None, Value::Object(inputs))
                .await
                .unwrap();
            let result = tokio::time::timeout(std::time::Duration::from_secs(5), async {
                loop {
                    let current = store.run(&run.id).await.unwrap();
                    if current.status != "running" {
                        break current;
                    }
                    tokio::time::sleep(std::time::Duration::from_millis(5)).await;
                }
            })
            .await
            .unwrap();
            assert_eq!(
                result.status, "succeeded",
                "{}: {:?}",
                workflow.name, result.error
            );
            count += 1;
        }
    }
    assert_eq!(count, 5);
}

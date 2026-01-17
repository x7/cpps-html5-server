import { getGameManager, getSceneManager } from "../../../main";

let errors = null;

export function displayError(key) {
    const sceneManager = getSceneManager();
    const gameManager = getGameManager();

    if(errors == null) {
        errors = gameManager.getGame().cache.json.get("error-json");
    }

    let errorMessage = errors[key] || "No error message found";

    sceneManager.pause(sceneManager.getCurrentScene().scene.key);
    sceneManager.add({
        sceneKey: "ErrorScene",
        scene: null,
        autoStart: false
    });

    sceneManager.launch("ErrorScene", { "message": errorMessage.text });
}

export function removeError() {
    const sceneManager = getSceneManager();

    sceneManager.stop("ErrorScene");
    sceneManager.resume(sceneManager.getCurrentScene().scene.key);
}
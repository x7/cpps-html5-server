import { getGameManager, getSceneManager } from "../../../main";

let errors = null;

export function displayError(errorMessage = "No error message provided", key = null) {
    const sceneManager = getSceneManager();
    const gameManager = getGameManager();

    if(errors == null) {
        errors = gameManager.getGame().cache.json.get("error-json");
    }

    sceneManager.pause(sceneManager.getCurrentScene().scene.key);
    sceneManager.launch("ErrorScene", { "message": (key == null ? errorMessage : errors[key]) });
}

export function removeError() {
    const sceneManager = getSceneManager();

    sceneManager.stop("ErrorScene");
    sceneManager.resume(sceneManager.getCurrentScene().scene.key);
}
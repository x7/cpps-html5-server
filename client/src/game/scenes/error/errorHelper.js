import { getGameManager, getSceneManager } from "../../../main";
import { SCENE_ERROR } from "../sceneNames";

let errors = null;

export function displayError({ errorMessage = "No error message provided", key = null }) {
    const sceneManager = getSceneManager();
    const gameManager = getGameManager();

    if(errors == null) {
        errors = gameManager.getGame().cache.json.get("error-json");
    }

    console.log(errorMessage)
    sceneManager.pause(sceneManager.getCurrentScene().scene.key);
    sceneManager.launch(SCENE_ERROR, { "message": (key == null ? errorMessage : errors[key].text) });
}

export function removeError() {
    const sceneManager = getSceneManager();

    sceneManager.stop(SCENE_ERROR);
    sceneManager.resume(sceneManager.getCurrentScene().scene.key);
}
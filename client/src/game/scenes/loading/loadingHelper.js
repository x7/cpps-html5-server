import { getSceneManager } from "../../../main";
import { SCENE_LOADING } from "../sceneNames";

let isLoadingRunning = false;

// Todo add minecart animation
export function pickRandomCharacter(data) {
    const arrayData = Object.keys(data);
    const randomCharacter = arrayData[Math.floor(Math.random() * arrayData.length)];
    return data[randomCharacter];
}

export function updateProgress(scene) {
    scene.load_screen_mask.visible = true;
    scene.load_screen_mask.displayWidth = scene.login_screen_background.displayWidth * scene.progress;
}

export function displayLoading(currentScene, text) {
    const sceneManager = getSceneManager();
    sceneManager.add({ sceneKey: SCENE_LOADING, scene: null, autoStart: false });
    sceneManager.launch(SCENE_LOADING, { text: text });
    sceneManager.sendToTop(SCENE_LOADING);
    sceneManager.pause(currentScene);
    isLoadingRunning = true;
}

export function removeLoading({ currentScene, goToScene = null, goToSceneText, goToSceneData = {}, callback = null }) {
    const sceneManager = getSceneManager();
    const waitDelay = 0.5 * 1000;
    
    if(goToScene == null) {
        setTimeout(() => {
            sceneManager.stop(SCENE_LOADING);
            sceneManager.resume(currentScene);
            sceneManager.setCurrentScene(sceneManager.get(currentScene));
            isLoadingRunning = false;

            if(callback && typeof callback == 'function') {
                callback();
            }
        }, waitDelay);
        return;
    }

    if(goToSceneText !== null) {
        sceneManager.get(SCENE_LOADING).text = goToSceneText
    }

    sceneManager.stop(currentScene);
    sceneManager.add({ sceneKey: goToScene, scene: null, autoStart: false });
    
    setTimeout(() => {
        const data = goToSceneData;
        data["loading"] = true;

        sceneManager.start(goToScene, data);
        const scene = getSceneManager().getCurrentScene();
        scene.events.on("sceneReady", () => {
            sceneManager.sendToTop(goToScene);
            sceneManager.stop(SCENE_LOADING);
            isLoadingRunning = false;
        });
    }, waitDelay);
}

export function updateLoadingText(text = "No loading text has been provided") {
    if(!isLoadingRunning) {
        return;
    }

    const sceneManager = getSceneManager();
    sceneManager.getCurrentScene().text = text;
}   
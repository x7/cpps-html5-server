import { getSceneManager } from "../main";

export function onGameReady() {
    const sceneManager = getSceneManager();
    sceneManager.add({ sceneKey: "LoadingScene", scene: null, autoStart: false });
    sceneManager.start("LoadingScene", { "text": "Loading Start"});
}
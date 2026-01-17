import { getSceneManager } from "../main";

export function onGameReady() {
    const sceneManager = getSceneManager();
    sceneManager.add({ sceneKey: "PreloadAssetsScene", scene: null, autoStart: false });
    sceneManager.start("PreloadAssetsScene");
}
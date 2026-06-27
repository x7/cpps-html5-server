import { SCENE_PRELOAD_ASSETS } from "../game/scenes/sceneNames";
import { getSceneManager } from "../main";

export function onGameReady() {
    const sceneManager = getSceneManager();
    sceneManager.add({ sceneKey: SCENE_PRELOAD_ASSETS, scene: null, autoStart: false });
    sceneManager.start(SCENE_PRELOAD_ASSETS);
}
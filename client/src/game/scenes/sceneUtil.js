import { classScenes } from "./sceneClasses.js";

export function returnSceneClass(sceneId) {
    sceneId = sceneId.toLowerCase();

    const scene = classScenes[sceneId];
    if(scene == null) {
        console.log('Invalid scene id ' + sceneId);
        return;
    }

    return scene;
}
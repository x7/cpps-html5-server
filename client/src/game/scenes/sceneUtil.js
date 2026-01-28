import { PreloadAssetsScene } from "./preload/PreloadAssetsScene.js";
import { LoadingScene } from "./loading/loading.js";
import { StartScene } from "./start/start.js";
import { RegisterScene } from './register/register.js';
import { LoginScene } from "./login/login.js";
import { SharedDevicePrompt } from "./login/components/sharedDevicePrompt.js";
import { LoginSavePasswordPrompt } from "./login/components/savePasswordPrompt.js";
import { ErrorScene } from "./error/error.js";
import { TownScene } from "./world/rooms/town/town.js";
import { ServerSelectionScene } from "./login/components/serverSelection.js";
import { MapScene } from "./interfaces/map.js";

export function returnSceneClass(sceneId) {
    console.log(sceneId)
    sceneId = sceneId.toLowerCase();

    const scenes = {
        "preloadassetsscene": PreloadAssetsScene,
        "loadingscene": LoadingScene,
        "startscene": StartScene,
        "registerscene": RegisterScene,
        "loginscene": LoginScene,
        "loginshareddevicepromptscene": SharedDevicePrompt,
        "loginsavepasswordpromptscene": LoginSavePasswordPrompt,
        "errorscene": ErrorScene,
        "serverselectionscene": ServerSelectionScene,
        "townscene": TownScene,
        "mapscene": MapScene,
    };

    const scene = scenes[sceneId];
    if(scene == null) {
        console.log('Invalid scene id ' + sceneId);
        return;
    }

    return scene;
}
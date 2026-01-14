import Phaser from 'phaser';
import { SceneManager } from './scenes/sceneManager.js';
import { connect } from './network/network.js';
import { GlobalAssetsScene } from './scenes/global/GlobalAssetsScene.js';
import { RegisterScene } from './scenes/register/register.js';
import { LoadingScene } from './scenes/loading/loading.js';
import { TownScene } from './scenes/world/rooms/town/town.js';
import { ErrorScene } from './scenes/error/error.js';
import { StartScene } from './scenes/start/start.js';
import { LoginScene } from './scenes/login/login.js';
import { ServerSelectionScene } from './scenes/login/components/serverSelection.js';

// dont connect websocket til we connect to the server
// call the launch scene for the error and add text ourself if invalid logins etc

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1280,
    height: 720,
    resolution: window.devicePixelRatio || 1,
    dom: { createContainer: true },
    backgroundColor: '#07c5ffff',
    scene: [LoadingScene],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);
const sceneManager = new SceneManager(game);

// game.events.once('ready', () => {
//     connect();
// });

export function getGameInstance() {
    return game;
}

export function getSceneManager() {
    return sceneManager;
}
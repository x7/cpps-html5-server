import Phaser from 'phaser';
import { SceneManager } from './game/scenes/sceneManager.js';
import { onGameReady } from './events/gameReady.js';
import { AssetManager } from './game/assets/assetManager.js';
import { GameManager } from './game/gameManager.js';
import { AudioManager } from './game/audio/audioManager.js';
import { ServerSelectionScene } from './game/scenes/login/components/serverSelection.js';
import { PreloadAssetsScene } from './game/scenes/preload/PreloadAssetsScene.js';
import { LoginScene } from './game/scenes/login/login.js';
import { TownScene } from './game/scenes/world/rooms/town/town.js';
import { MapScene } from './game/scenes/interfaces/map.js';
import { SnowFortsScene } from './game/scenes/world/rooms/snowforts/snowforts.js';
import { DocksScene } from './game/scenes/world/rooms/docks/docks.js';
import { BeachScene } from './game/scenes/world/rooms/beach/beach.js';
import { LighthouseScene } from './game/scenes/world/rooms/lighthouse/lighthouse.js';
import { BeaconScene } from './game/scenes/world/rooms/beacon/beacon.js';
import { PlazaScene } from './game/scenes/world/rooms/plaza/plaza.js';

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1280,
    height: 720,
    resolution: window.devicePixelRatio || 1,
    dom: { createContainer: true },
    backgroundColor: '#07c5ffff',
    // scene: [PreloadAssetsScene, LoginScene, ServerSelectionScene, TownScene],
    scene: [PlazaScene],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);
const gameManager = new GameManager(game);
const sceneManager = new SceneManager(game);
const assetManager = new AssetManager(game);
const audioManager = new AudioManager(game, sceneManager, assetManager);

// Use these for "in scenes"
game.registry.set("gameManager", gameManager);
game.registry.set("sceneManager", sceneManager);
game.registry.set("assetManager", assetManager);
game.registry.set("audioManager", audioManager);

// Use these outside scenes
export function getGameManager() {
    return gameManager;
}

export function getSceneManager() {
    return sceneManager;
}

export function getAssetManager() {
    return assetManager;
}

export function getAudioManager() {
    return audioManager;
}

// game.events.once('ready', () => {
//     onGameReady();
// });
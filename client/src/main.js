import Phaser from 'phaser';
import { SceneManager } from './game/scenes/sceneManager.js';
import { onGameReady } from './events/gameReady.js';
import { AssetManager } from './game/assets/assetManager.js';
import { GameManager } from './game/gameManager.js';
import { AudioManager } from './game/audio/audioManager.js';
import { PreloadAssetsScene } from './game/scenes/preload/PreloadAssetsScene.js';

const config = {
    type: Phaser.WEBGL,
    parent: 'game',
    width: 1520,
    height: 960,
    resolution: window.devicePixelRatio || 1,
    dom: { 
        createContainer: true 
    },
    backgroundColor: '#07c5ffff',
    scene: [PreloadAssetsScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    render: {
        antialias: true,
        antialiasGL: true
    },
    roundPixels: true,
    physics: {
        default: 'arcade',
        arcade: { 
            debug: true 
        }
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
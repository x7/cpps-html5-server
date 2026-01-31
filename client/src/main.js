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
import { ForestScene } from './game/scenes/world/rooms/forest/forest.js';
import { IcebergScene } from './game/scenes/world/rooms/iceberg/iceberg.js';
import { PuffleWildScene } from './game/scenes/world/rooms/puffleWild/puffleWild.js';
import { SchoolScene } from './game/scenes/world/rooms/school/school.js';
import { GiftshopScene } from './game/scenes/world/rooms/giftshop/giftshop.js';
import { DanceclubScene } from './game/scenes/world/rooms/danceclub/danceclub.js';
import { InterfaceScene } from './game/scenes/interfaces/interface.js';
import { SkihillScene } from './game/scenes/world/rooms/skihill/skihill.js';
import { BoilerRoomScene } from './game/scenes/world/rooms/boilerroom/boilerroom.js';
import { UnderwaterScene } from './game/scenes/world/rooms/underwater/underwater.js';
import { SkiVillageScene } from './game/scenes/world/rooms/skivillage/skivillage.js';
import { DojoScene } from './game/scenes/world/rooms/dojo/dojo.js';
import { FireDojoScene } from './game/scenes/world/rooms/dojo/fire/firedojo.js';
import { WaterDojoScene } from './game/scenes/world/rooms/dojo/water/waterdojo.js';
import { StartScene } from './game/scenes/start/start.js';
import { ErrorScene } from './game/scenes/error/error.js';
import { LoadingScene } from './game/scenes/loading/loading.js';
import { CoveScene } from './game/scenes/world/rooms/cove/cove.js';
import { MineShackScene } from './game/scenes/world/rooms/mineshack/mineshack.js';
import { RegisterScene } from './game/scenes/register/register.js';
import { InterfaceDanceScene } from './game/scenes/interfaces/dances.js';
import { InterfaceEmojiScene } from './game/scenes/interfaces/emojis.js';
import { CoffeeShopScene } from './game/scenes/world/rooms/coffeeshop/coffeeshop.js';
import { BookRoomScene } from './game/scenes/world/rooms/bookroom/bookroom.js';

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
    scene: [PreloadAssetsScene, BookRoomScene],
    // scene: [PreloadAssetsScene, LoginScene, ServerSelectionScene, TownScene, DanceclubScene, SnowFortsScene, GiftshopScene, DocksScene, InterfaceScene, RegisterScene, InterfaceDanceScene, InterfaceEmojiScene],
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
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
import { LoungeScene } from './game/scenes/world/rooms/lounge/lounge.js';
import { IceRinkScene } from './game/scenes/world/rooms/icerink/icerink.js';
import { CaveMineScene } from './game/scenes/world/rooms/cavemine/cavemine.js';
import { PetShopScene } from './game/scenes/world/rooms/petshop/petshop.js';
import { PizzaParlorScene } from './game/scenes/world/rooms/pizzaparlor/pizzaparlor.js';
import { BoxDimensionScene } from './game/scenes/world/rooms/boxdimension/boxdimension.js';
import { SkiLodgeScene } from './game/scenes/world/rooms/skilodge/skilodge.js';
import { AtticScene } from './game/scenes/world/rooms/attic/attic.js';
import { DojoCourtYardScene } from './game/scenes/world/rooms/dojocourtyard/dojocourtyard.js';
import { SnowDojoScene } from './game/scenes/world/rooms/dojo/snow/snowdojo.js';
import { PirateShipScene } from './game/scenes/world/rooms/pirateship/pirateship.js';
import { ShipHoldScene } from './game/scenes/world/rooms/shiphold/shiphold.js';
import { ShipNestScene } from './game/scenes/world/rooms/shipnest/shipnest.js';
import { HiddenLakeScene } from './game/scenes/world/rooms/hiddenlake/hiddenlake.js';
import { MineScene } from './game/scenes/world/rooms/mine/mine.js';
import { PuffleParkScene } from './game/scenes/world/rooms/pufflepark/pufflepark.js';
import { PuffleHotelLobby } from './game/scenes/world/rooms/pufflehotellobby/pufflehotellobby.js';
import { PuffleHotelSpa } from './game/scenes/world/rooms/pufflehotelspa/pufflehotelspa.js';
import { PuffleHotelRoof } from './game/scenes/world/rooms/pufflehotelroof/pufflehotelroof.js';
import { BerryMallScene } from './game/scenes/world/rooms/berrymall/berrymall.js';

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
    scene: [PreloadAssetsScene, BerryMallScene],
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
import Phaser from 'phaser';
import { ASSET_TYPES, ALLOWED_ASSET_EXTENSIONS } from './assetTypes.js';

// Todo: Validate the paths exist after verifying the extensions

export class AssetManager {
    constructor(game) {
        this.game = game;
        this.loadedAssets = new Set();
    }

    load({ scene, type, name, paths }) {
        if(scene == null || !(scene instanceof Phaser.Scene)) {
            return;
        }

        if(ASSET_TYPES[type] == null) {
            console.log("Invalid asset type provided.");
            return;
        }

        if(this.exist(name)) {
            console.log("Asset is already loaded. Saving duplication of loading asset");
            return;
        }

        this.loadedAssets.add(name);

        switch(type) {
            case ASSET_TYPES.AUDIO: {
                return this.loadAudio({
                    scene: scene,
                    name: name,
                    paths: paths
                });
            }

            case ASSET_TYPES.BITMAP_FONT: {
                return this.loadBitmapFont({
                    scene: scene,
                    name: name,
                    paths: paths
                });
            }

            case ASSET_TYPES.FONT: {
                return this.loadFont({
                    scene: scene,
                    name: name,
                    paths: paths
                });
            }

            case ASSET_TYPES.JSON: {
                return this.loadJson({
                    scene: scene,
                    name: name,
                    paths: paths
                });
            }

            case ASSET_TYPES.PACK: {
                return this.loadPack({
                    scene: scene,
                    name: name,
                    paths: paths
                });
            }

            case ASSET_TYPES.IMAGE: {
                return this.loadImage({
                    scene: scene,
                    name: name,
                    paths: paths
                });
            }
        }
    }

    exist(name) {
        return this.loadedAssets.has(name);
    }

    delete(name) {
        if(!this.exist(name)) {
            return;
        }

        this.loadedAssets.delete(name);
        this.game.textures.remove(name);
    }

    loadAudio({ scene, name, paths }) {
        const audioPath = paths[0];

        if(audioPath == null) {
            console.log(`Missing paths for ${name}. Unable to load audio`);
            return;
        }

        const audioPathExtension = audioPath.split(".").pop();
        if(!ALLOWED_ASSET_EXTENSIONS.AUDIO.includes(audioPathExtension)) {
            console.log(`Invalid paths provided for ${name}. Unable to load audio`);
            return;
        }

        // const audio = scene.load.audio(name, audioPath);
        // if(this.audios.has(name)) {
        //     return;
        // }

        // this.audios.set(name, audio);
        scene.load.audio(name, audioPath);
    }

    // Todo: Make it so theres 2 arrays 1 for valid image paths
    // 1 for valid data paths
    loadBitmapFont({ scene, name, paths }) {
        const [imagePath, dataPath] = paths;

        if(imagePath === null || dataPath === null) {
            console.log(`Missing paths for ${name}. Unable to load bitmapfont`);
            return;
        }

        const imagePathExtension = imagePath.split(".").pop();
        const dataPathExtension = dataPath.split(".").pop();

        if(!ALLOWED_ASSET_EXTENSIONS.BITMAP_FONT.includes(imagePathExtension) || !ALLOWED_ASSET_EXTENSIONS.BITMAP_FONT.includes(dataPathExtension)) {
            console.log(`Invalid paths provided for ${name}. Unable to load bitmapfont`);
            return;
        }

        scene.load.bitmapFont(name, imagePath, dataPath);
    }

    loadFont({ scene, name, paths }) {
        const fontPath = paths[0];

        if(fontPath == null) {
            console.log(`Missing paths for ${name}. Unable to load font`);
            return;
        }

        const fontPathExtension = fontPath.split(".").pop();
        if(!ALLOWED_ASSET_EXTENSIONS.FONT.includes(fontPathExtension)) {
            console.log(`Invalid paths provided for ${name}. Unable to load font`);
            return;
        }

        scene.load.font(name, fontPath);
    }

    loadJson({ scene, name, paths }) {
        const jsonPath = paths[0];

        if(jsonPath == null) {
            console.log(`Missing paths for ${name}. Unable to load json`);
            return;
        }

        const jsonPathExtension = jsonPath.split(".").pop();
        if(!ALLOWED_ASSET_EXTENSIONS.JSON.includes(jsonPathExtension)) {
            console.log(`Invalid paths provided for ${name}. Unable to load json`);
            return;
        }

        scene.load.json(name, jsonPath);
    }

    loadPack({ scene, name, paths }) {
        const packPath = paths[0];

        if(packPath == null) {
            console.log(`Missing paths for ${name}. Unable to load pack`);
            return;
        }

        const packPathExtension = packPath.split(".").pop();
        if(!ALLOWED_ASSET_EXTENSIONS.PACK.includes(packPathExtension)) {
            console.log(`Invalid paths provided for ${name}. Unable to load pack`);
            return;
        }

        scene.load.pack(name, packPath);
    }

    loadImage({ scene, name, paths }) {
        const imagePath = paths[0];

        if(imagePath == null) {
            console.log(`Missing paths for ${name}. Unable to load image`);
            return;
        }

        const imagePathExtension = imagePath.split(".").pop();
        if(!ALLOWED_ASSET_EXTENSIONS.IMAGE.includes(imagePathExtension)) {
            console.log(`Invalid paths provided for ${name}. Unable to load image`);
            return;
        }

        scene.load.image(name, imagePath);
    }
    // All loading assets end here
}
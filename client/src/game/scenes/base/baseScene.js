import Phaser from "phaser";
import { removeLoading } from "../loading/loadingHelper";
import { SCENE_LOADING } from "../sceneNames";

export class BaseScene extends Phaser.Scene {
    constructor(key) {
        super(key)
    }

    init(data) {
        if(data.loading) {
            this.loading = true;
            this.newScene = data.newScene ?? null;
            this.cameras.main.setAlpha(0);
		    this.input.enabled = false;
        }

        if(this.scene.key !== SCENE_LOADING) {
            this.getSceneManager().setCurrentScene(this);
        }
    }

    preloadContent() {
        this.preload()
    }

    preload() {
        this.preloadContent();
    }

    async createContent() {
        await this.create();
    }

    async create() {
        await this.createContent();

        if(this.loading) {
            this.input.enabled = true;
            this.cameras.main.setAlpha(1); // fuck this method -1hr
        }

        this.events.emit("scene-awake");
        this.events.emit("sceneReady");
    }

    getGameManager() {
        return this.game.registry.get("gameManager");
    }

    getSceneManager() {
        return this.game.registry.get("sceneManager");
    }

    getAssetManager() {
        return this.game.registry.get("assetManager");
    }

    getAudioManager() {
        return this.game.registry.get("audioManager");
    }

    stopAllMusic() {
        this.getAudioManager().stopAllMusic();
    }
}
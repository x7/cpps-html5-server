import Phaser from "phaser";
import { SCENE_INTERFACE_DANCE, SCENE_LOADING } from "./sceneNames";

export class BaseScene extends Phaser.Scene {
    constructor(key) {
        super(key)
    }

    init(data = {}) {
        this.gameManager = this.game.registry.get("gameManager");
        this.sceneManager = this.game.registry.get("sceneManager");
        this.assetManager = this.game.registry.get("assetManager");
        this.audioManager = this.game.registry.get("audioManager");

        if(data.loading) {
            this.loading = true;
            this.newScene = data.newScene ?? null;
            this.cameras.main.setAlpha(0);
		    this.input.enabled = false;
        }

        if(data.launchScene == null || !data.launchScene) {
            this.sceneManager.setCurrentScene(this);
        }
    }

    preloadContent() {
        
    }

    preload() {
        this.preloadContent();
    }

    async createContent() {
        
    }

    async create() {
        await this.createContent();

        if(this.loading) {
            this.input.enabled = true;
            this.cameras.main.setAlpha(1);
        }

        this.events.emit("scene-awake");
        this.events.emit("sceneReady");
    }
}
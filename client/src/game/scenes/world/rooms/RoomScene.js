import { BaseScene } from "../../baseScene";
import eventEmitter from "../../../../util/eventEmitter";
import { ClientPenguin } from "../../../penguin/clientPenguin";
import { RoomMouseMovemenet } from "../../../inputs/roomMouseMovement";
import { RoomKeyPressed } from "../../../inputs/roomKeyPressed";
import MovementManager from "../../../penguin/movementManager";
import { SCENE_INTERFACE } from "../../sceneNames";

export class RoomScene extends BaseScene {
    constructor(key) {
        super(key);
    }

    init(data) {
        super.init(data);
        this.sceneManager.setCurrentScene("TownScene");

        // Triggers
        this.triggers = [];
        this.startUpdate = false;
    }

    preloadContent() {
        super.preloadContent();
    }

    createContent(scene) {
        this.client = ClientPenguin.getClient();
        super.createContent();
        eventEmitter.emitEvent("scene-spawn-player-event", scene);

        this.movementManager = new MovementManager(this.client);
        this.roomMouseMovementManager = new RoomMouseMovemenet(this, this.client);
        this.roomKeyPressedManager = new RoomKeyPressed(this, this.client);

        // Set triggers
        if(this.triggers != null && this.triggers.length > 0) {
            for(const trigger of this.triggers) {
                const triggerImage = trigger[0];
                const callback = trigger[1];

                this.physics.add.overlap(this.client.body, triggerImage, callback);
            }
        }

        // Load interface
        this.sceneManager.launch(SCENE_INTERFACE);

        // add a shutdown event for stopping all music once this is called
        this.events.once("shutdown", this.audioManager.stopAllMusic, this.audioManager);
        this.startUpdate = true;
    }

    update() {
        if(!this.startUpdate) {
            return;
        }

        this.movementManager.update();
    }

    createCollisionMap(scene, x, y, atlasKey, frameKey) {
        const texture = scene.textures.get(atlasKey);
        const frame = texture.get(frameKey);

        const canvas = document.createElement('canvas');
        canvas.width = frame.width;
        canvas.height = frame.height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        const atlasImage = texture.source[0].image;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(atlasImage, frame.x, frame.y, frame.width, frame.height, 0, 0, frame.width, frame.height);

        const offsetX = x - frame.width / 2;
        const offsetY = y - frame.height / 2;

        return { canvas, ctx, offsetX, offsetY, isWalkable(worldX, worldY) {
                const localX = Math.floor(worldX - this.offsetX);
                const localY = Math.floor(worldY - this.offsetY);

                if (localX < 0 || localY < 0 || localX >= this.canvas.width || localY >= this.canvas.height) {
                    return true;
                }

                const pixel = this.ctx.getImageData(localX, localY, 1, 1).data;
                const a = pixel[3];

                if (a <= 10) {
                    return true;
                }

                return false;
            }
        };
    }
}
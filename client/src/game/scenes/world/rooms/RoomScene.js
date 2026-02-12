import { BaseScene } from "../../baseScene";
import eventEmitter from "../../../../util/eventEmitter";
import { ClientPenguin } from "../../../penguin/clientPenguin";
import { RoomMouseMovemenet } from "../../../inputs/roomMouseMovement";
import { RoomKeyPressed } from "../../../inputs/roomKeyPressed";
import MovementManager from "../../../penguin/movementManager";

export class RoomScene extends BaseScene {
    constructor(key) {
        super(key);
    }

    init(data) {
        super.init(data);
        this.sceneManager.setCurrentScene("TownScene");

        // Triggers
        this.triggers = [];
    }

    preloadContent() {
        super.preloadContent();
    }

    createContent(scene) {
        super.createContent();
        eventEmitter.emitEvent("scene-spawn-player-event", scene);

        const client = ClientPenguin.getClient();
        this.movementManager = new MovementManager(client);
        this.roomMouseMovementManager = new RoomMouseMovemenet(this, client);
        this.roomKeyPressedManager = new RoomKeyPressed(this, client);

        // Set triggers
        if(this.triggers != null && this.triggers.length > 0) {
            for(const trigger of this.triggers) {
                const triggerImage = trigger[0];
                const callback = trigger[1];

                this.physics.add.overlap(client.body, triggerImage, callback);
            }
        }

        // Load interface
        this.sceneManager.launch("InterfaceScene");
    }

    update() {
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

                console.log(`isWalkable called: world(${worldX}, ${worldY}) → local(${localX}, ${localY})`);

                if (localX < 0 || localY < 0 || localX >= this.canvas.width || localY >= this.canvas.height) {
                    console.log(`OUT OF BOUNDS: localX=${localX}, localY=${localY}, canvas=${this.canvas.width}x${this.canvas.height}`);
                    return true;
                }

                const pixel = this.ctx.getImageData(localX, localY, 1, 1).data;
                const a = pixel[3];

                console.log(`Pixel alpha: ${a} → ${a < 10 ? 'WALKABLE (transparent)' : 'BLOCKED (has color)'}`);

                if (a <= 10) return true;
                return false;
            }
        };
    }
}
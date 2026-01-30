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
}
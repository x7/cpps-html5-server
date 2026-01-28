import { getManager } from "../../network/network";

export class RoomMouseMovemenet {
    constructor(scene, penguin) {
        this.scene = scene;
        this.penguin = penguin;

        this.scene.input.on("pointerdown", (pointer) => {
            const penguinPose = penguin.getPose(pointer.worldX, pointer.worldY);
            if(penguinPose == 'unknown_pose') {
                return; 
            }

            scene.movementManager.moveTo(penguin, penguinPose, pointer.worldX, pointer.worldY);
        });

        // Change the penguin pose based on the players mouse movement
        this.scene.input.on("pointermove", (pointer) => {
            const penguinPose = penguin.getPose(pointer.worldX, pointer.worldY);
            console.log(penguinPose)
            if(penguinPose == 'unknown_pose') {
                return;
            }

            if(penguin.getPose().toLowerCase() == penguinPose.toLowerCase()) {
                return;
            }

            penguin.setPose(penguinPose, false);
        });
    }
}
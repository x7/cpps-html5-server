/*
    when a player collides we store the penguin pose it collided in 
    and if the next mouse click we ge tthe x and y and if its inside a trigger and that trigger is greater or less than based on the pose of the penguins caught pose
    we deny else we let them through
*/

export class RoomMouseMovemenet {
    constructor(scene, penguin) {
        this.scene = scene;
        this.penguin = penguin;

        this.scene.input.on("pointerdown", (pointer) => {
            const clickX = pointer.worldX;
            const clickY = pointer.worldY;
            const penguinPose = penguin.getPose(clickX, clickY);
            if(penguinPose == 'unknown_pose') {
                return; 
            }

            const currentX = this.penguin.getX();
            const currentY = this.penguin.getY();
            let checkX = currentX;
            let checkY = currentY;
            const threshold = 5;

            if(penguinPose === "up") {
                checkY -= threshold;
            }

            if(penguinPose === "down") {
                checkY += threshold;
            }
            
            if(penguinPose === "left") {
                checkX -= threshold;
            }

            if(penguinPose === "right") {
                checkX += threshold;
            }

            if(penguinPose === "top_left") { 
                checkX -= threshold; checkY -= threshold;
            }

            if(penguinPose === "top_right") {
                checkX += threshold; checkY -= threshold; 
            }

            if(penguinPose === "bottom_left") {
                checkX -= threshold; checkY += threshold; 
            }

            if(penguinPose === "bottom_right") {
                checkX += threshold; checkY += threshold;
            }

            if(!this.scene.collisionMap.isWalkable(checkX, checkY)) {
                return;
            }

            penguin.setPose(penguinPose, false, true);
            scene.movementManager.moveTo(penguin, penguinPose, pointer.worldX, pointer.worldY);
        });

        // Change the penguin pose based on the players mouse movement
        this.scene.input.on("pointermove", (pointer) => {
            const clickX = pointer.worldX;
            const clickY = pointer.worldY;
            const penguinPose = penguin.getPose(clickX, clickY);
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
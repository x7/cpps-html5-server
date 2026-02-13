import { ClientPenguin } from "../../../penguin/clientPenguin";

export function onWalkingTrigger(scene) {    
    const client = ClientPenguin.getClient();
    const penguinPose = client.pose;
    const penguinX = client.getX();
    const penguinY = client.getY();

    let checkX = penguinX;
    let checkY = penguinY;
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
        checkX -= threshold;
        checkY -= threshold;
    }

    if(penguinPose === "top_right") {
        checkX += threshold;
        checkY -= threshold; 
    }

    if(penguinPose === "bottom_left") {
        checkX -= threshold;
        checkY += threshold; 
    }

    if(penguinPose === "bottom_right") {
        checkX += threshold;
        checkY += threshold;
    }

    if(!scene.collisionMap || !scene.collisionMap.isWalkable(checkX, checkY)) {
        scene.movementManager.cancelMovement();
    }
}   
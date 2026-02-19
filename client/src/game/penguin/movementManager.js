import { getAnimation } from "../../animations/animations";
import * as animationKeys from "../../animations/animationKeys";
import { getManager } from "../../network/network";
import { sendMovementPacket } from "../../network/packets/penguin/movementPacket";
import { CLIENT_STOP_ANIMATION, SERVER_VERIFY_PACKET } from "../../network/topics";
import { PACKET_STOP_ANIMATION } from "../../network/types/packetTypes";
import { ClientPenguin } from "./clientPenguin";

export default class MovementManager {
    constructor() {
        this.moving = false;
        this.animationPlaying = false;
        this.pose = null;
        this.x = null;
        this.y = null;
        this.speed = 1.5;
        this.threshold = 1;
        this.xSpeed = null;
        this.ySpeed = null;
    }

    moveTo(penguin, pose, x, y) {
        this.penguin = penguin;
        this.penguin.stopAnimation();
        this.pose = pose;
        this.x = x;
        this.y = y;
        this.moving = true;
        this.animationPlaying = false;
        this.calculateMovement(this.x, this.y)
        
        if(this.penguin instanceof ClientPenguin) {
            sendMovementPacket(x, y, this.pose);
        }
    }

    cancelMovement() {
        if(!this.moving) {
            return;
        }

        this.moving = false;
        this.animationPlaying = false;
        this.penguin.stopAnimation();
        this.penguin.setPose(this.pose);
        const nw = getManager();
        nw.send(SERVER_VERIFY_PACKET, { "packet_type": PACKET_STOP_ANIMATION });
    }

    update() {
        if(!this.moving || this.penguin.getPenguinContainer() == null) {
            return;
        }

        this.pose = this.pose.toLowerCase();

        if(Math.abs(this.penguin.getX() - this.x) < this.threshold && Math.abs(this.penguin.getY() - this.y) < this.threshold) {
            this.cancelMovement();
            return;
        }

        switch(this.pose) {
            case "left": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_LEFT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_LEFT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "right": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_RIGHT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_RIGHT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "up": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_UP);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_UP, animation[0], animation[1]);
                    this.animationPlaying = true;
                }


                this.calculateMovement(this.x, this.y);
                break;
            }

            case "down": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_DOWN);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_DOWN, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "top_left": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_LEFT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_LEFT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "top_right": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_RIGHT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_RIGHT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "bottom_left": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_LEFT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_LEFT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "bottom_right": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_RIGHT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_RIGHT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }
        }

        this.penguin.state = "animation";
    }

    calculateMovement(goX, goY) {
        let penguinX = this.penguin.getX();
        let penguinY = this.penguin.getY();

        const dx = goX - penguinX;
        const dy = goY - penguinY;

        const distance = Math.sqrt(dx * dx + dy * dy);
        const threshold = 0.5;
        if (distance < threshold) {
            return;
        }

        const normalizedDx = dx / distance;
        const normalizedDy = dy / distance;

        const xSpeed = normalizedDx * this.speed;
        const ySpeed = normalizedDy * this.speed;

        penguinX += xSpeed;
        penguinY += ySpeed;

        this.penguin.setX(penguinX);
        this.penguin.setY(penguinY);
    }
}
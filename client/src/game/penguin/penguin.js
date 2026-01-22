import { getAnimation } from "../../animations/animations";
import { animationExist } from "../../animations/animations";
import * as animationKeys from "../../animations/animationKeys";
import { getSceneManager } from "../../main";
import { getManager } from "../../network/network";
import { CLIENT_PLAY_ANIMATION, SERVER_VERIFY_PACKET } from "../../network/topics";

/*
    this is the defult penguin class
*/

export class Penguin {
    constructor(username, connection = null) {
        this.sceneManager = getSceneManager();
        this.scene = this.sceneManager.getCurrentScene();
        this.id = 1;
        this.username = username;
        this.connection = connection;
        this.x = 500;
        this.y = 500;
        this.penguinContainer = null;
        this.body = null;
        this.overlay = null;
        this.chat = null;
        this.currentAnimation = null;
    }

    createPenguin(scene, x, y) {
        if(this.penguinContainer) {
            this.penguinContainer.destroy();
        }
        
        this.penguinContainer = scene.add.container(x, y);
        this.body = scene.add.sprite(0, 0, "penguin", "penguin/body/0");
        this.overlay = scene.add.sprite(0, 0, "penguin", "penguin/overlay/0");
        
        this.body.setTint(0xff0000);
        this.body.setScale(0.72);
        this.overlay.setScale(0.72);
        
        this.penguinContainer.add(this.body);
        this.penguinContainer.add(this.overlay);
        
        this.playersUsername = this.scene.add.text(0, 20, this.username)
        this.playersUsername.setFontFamily("Arial");
        this.playersUsername.setFontSize(18);
        this.playersUsername.setFontStyle("bold");
        this.playersUsername.setColor("#000000");
        this.playersUsername.setOrigin(0.5, 0);
        this.penguinContainer.add(this.playersUsername);

        this.chat = this.scene.add.text(0, -100, "test")
        this.chat.text = "";
        this.chat.setFontFamily("Arial");
        this.chat.setFontSize(18);
        this.chat.setFontStyle("bold");
        this.chat.setColor("#000000");
        this.chat.setOrigin(0.5, 0);
        this.chat.visible = false;
        this.penguinContainer.add(this.chat);
    }

    deletePenguin() {
        if(!this.penguinContainer) {
            return;
        }

        console.log(`deleted ${this.username}`)
        this.penguinContainer.destroy();
        this.penguinContainer = null;
    }

    getPenguinContainer() {
        return this.penguinContainer;
    }

    sendChat(text) {
        console.log(this.chat)
        this.chat.text = text;
        this.chat.visible = true;
        this.scene.time.addEvent({
            delay: 3000,
            callback: () => {
                this.chat.visible = false;
            },
            callbackScope: this,
            loop: false,
        });
        // const manager = getManager();
        // manager.send(SERVER_CHAT, { "text": text });
    }
 
    getId() {
        return this.id;
    }

    getUsername() {
        return this.username;
    }

    getConnection() {
        return this.connection;
    } 

    getX() {
        return this.penguinContainer.x;
    }

    setX(x) {
        this.penguinContainer.x = x;
    }

    getY() {
        return this.penguinContainer.y;
    }

    setY(y) {
        this.penguinContainer.y = y;
    }

    setPose(pose, sitting) {     
        console.log(this.getCurrentAnimation())
        if(this.getCurrentAnimation() != null && !this.getCurrentAnimation().startsWith("penguin_idle_look_")) {
            return;
        }  

        const penguinState = sitting ? "sitting" : "idle";
        pose = pose.toLowerCase();

        const networkManager = getManager();
        let animationKey = null;
        let bodyKey = null;
        let overlayKey = null;

        switch(pose) {
            case "left": {
                animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_LEFT : animationKeys.PENGUIN_IDLE_LOOK_LEFT;
                const animation = getAnimation(animationKey);
                bodyKey = animation[0];
                overlayKey = animation[1];

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "right": {
                animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_RIGHT : animationKeys.PENGUIN_IDLE_LOOK_RIGHT;
                const animation = getAnimation(animationKey);
                bodyKey = animation[0];
                overlayKey = animation[1];

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "down": {
                animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_DOWN : animationKeys.PENGUIN_IDLE_LOOK_DOWN;
                const animation = getAnimation(animationKey);
                bodyKey = animation[0];
                overlayKey = animation[1];

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "up": {
                animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_UP : animationKeys.PENGUIN_IDLE_LOOK_UP;
                const animation = getAnimation(animationKey);
                bodyKey = animation[0];
                overlayKey = animation[1];

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "bottom_right": {
                animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_BOTTOM_RIGHT : animationKeys.PENGUIN_IDLE_LOOK_BOTTOM_RIGHT;
                const animation = getAnimation(animationKey);
                bodyKey = animation[0];
                overlayKey = animation[1];

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "bottom_left": {
                animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_BOTTOM_LEFT : animationKeys.PENGUIN_IDLE_LOOK_BOTTOM_LEFT;
                const animation = getAnimation(animationKey);
                bodyKey = animation[0];
                overlayKey = animation[1];

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "top_right": {
                animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_TOP_RIGHT : animationKeys.PENGUIN_IDLE_LOOK_TOP_RIGHT;
                const animation = getAnimation(animationKey);
                bodyKey = animation[0];
                overlayKey = animation[1];

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "top_left": {
                animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_TOP_LEFT : animationKeys.PENGUIN_IDLE_LOOK_TOP_LEFT;
                const animation = getAnimation(animationKey);
                bodyKey = animation[0];
                overlayKey = animation[1];

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }
        }

        networkManager.send(SERVER_VERIFY_PACKET, { "packet_type": CLIENT_PLAY_ANIMATION, "animationKey": animationKey, "body": bodyKey, "overlay": overlayKey });
    }

    playAnimation(phaserAnimationKey, bodyAnimationKey, overlayAnimationKey, penguinState) {
        if(!animationExist(bodyAnimationKey)) {
            console.log("Cannot play animation " + bodyAnimationKey + " it does not exist");
            return;
        }

        if(!animationExist(overlayAnimationKey)) {
            console.log("Cannot play animation " + overlayAnimationKey + " it does not exist");
            return;
        }

        if(this.connection != null) {
            const networkManger = getManager();
            networkManger.send(SERVER_VERIFY_PACKET, { "packet_type": CLIENT_PLAY_ANIMATION, "animationKey": phaserAnimationKey, "body": bodyAnimationKey, "overlay": overlayAnimationKey });        }

        this.body.play(bodyAnimationKey);
        this.overlay.play(overlayAnimationKey);
        this.setCurrentAnimation(phaserAnimationKey);
        // this.state = penguinState;
    }

    stopAnimation() {
        const currentAnimation = this.getCurrentAnimation();
        if(currentAnimation == null) {
            return;
        }

        this.body.stop(currentAnimation);
        this.overlay.stop(currentAnimation);
        this.setCurrentAnimation(null);
        // this.state = "idle";
    }

    setCurrentPose() {

    }

    getCurrentAnimation() {
        return this.animation;
    }
    
    setCurrentAnimation(animation) {
        this.animation = animation;
    }

}
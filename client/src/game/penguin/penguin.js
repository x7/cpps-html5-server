import { getAnimation } from "../../animations/animations";
import { animationExist } from "../../animations/animations";
import * as animationKeys from "../../animations/animationKeys";
import { getSceneManager } from "../../main";
import { getManager } from "../../network/network";
import { CLIENT_PLAY_ANIMATION, CLIENT_STOP_ANIMATION, SERVER_VERIFY_PACKET } from "../../network/topics";
import { PACKET_PLAY_ANIMATION, PACKET_PLAYER_CHAT, PACKET_PLAYER_MOVEMENT, PACKET_STOP_ANIMATION } from "../../network/types/packetTypes";

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
        this.currentChat = null;
    }

    createPenguin(scene, x, y) {
        if(this.penguinContainer) {
            this.penguinContainer.destroy();
        }
        
        this.penguinContainer = scene.add.container(x, y);
        this.body = scene.physics.add.sprite(0, 0, "penguin", "penguin/body/0");
        this.overlay = scene.physics.add.sprite(0, 0, "penguin", "penguin/overlay/0");

        // Making the hitbox smaller
        this.body.setSize(95, 85, true);
        this.body.setOffset(50, 35);
        this.overlay.setSize(95, 85, true);
        this.overlay.setOffset(50, 35);

        // Collision checks
        this.body.setCollideWorldBounds(true);
        this.overlay.setCollideWorldBounds(true);

        this.body.setTint(0xff0000);
        this.body.setScale(0.87);
        this.overlay.setScale(0.87);
        
        this.penguinContainer.add(this.body);
        this.penguinContainer.add(this.overlay);
        
        this.playersUsername = this.scene.add.text(0, 20, this.username)
        this.playersUsername.setFontFamily("Arial");
        this.playersUsername.setFontSize(22);
        this.playersUsername.setFontStyle("bold");
        this.playersUsername.setColor("#000000");
        this.playersUsername.setOrigin(0.5, 0);
        this.penguinContainer.add(this.playersUsername);
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
        if(this.currentChat != null) {
            this.currentChat.destroy();
        }

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = '16px Arial';

        const stringArray = [];
        let stringIndex = 0;
        let currentString = "";

        for(const [index, character] of text.split('').entries()) {
            currentString = currentString + character;

            if(index === text.length - 1) {
                stringArray.push(currentString);
                break;
            }

            const width = context.measureText(currentString).width;

            if(width <= 160) {
                continue;
            }

            stringArray.push(currentString);
            stringIndex = stringIndex + 1;
            currentString = "";
        }

        this.interface_top_chat_png = this.scene.add.sprite(10, -91.5, "interface", "interface_top_chat.png");
        this.interface_top_chat_png.scaleX = 0.7668804733866763;
		this.interface_top_chat_png.scaleY = 0.3364117604157102;

        this.interface_bottom_chat_png = this.scene.add.sprite(10, -60, "interface", "interface_bottom_chat.png");
        this.interface_bottom_chat_png.scaleX = 0.7668805129470548;
		this.interface_bottom_chat_png.scaleY = 0.8905622635411576;

        let messageY = -85
        let message = "";
        if(stringArray.length > 1) {
            for(let i = 0; i < stringArray.length; i++) {
                message = message + stringArray[i] + "\n";
                messageY = messageY - 5;
                this.interface_top_chat_png.scaleY = this.interface_top_chat_png.scaleY + 0.2555280085;
                this.interface_top_chat_png.y = this.interface_top_chat_png.y - 10.5;
            }
        }

        this.chat = this.scene.add.text(10, messageY, "test")
        this.chat.text = (message === "" ? text : message);
        this.chat.setFontFamily("Arial");
        this.chat.setFontSize(16);
        this.chat.setColor("#000000");
        this.chat.setOrigin(0.5, 0.5);

        this.currentChat = this.scene.add.container(0, 0, [this.interface_top_chat_png, this.interface_bottom_chat_png, this.chat]);
        this.penguinContainer.add(this.currentChat);

        setTimeout(() => {
            this.currentChat.destroy()
        }, 5000);
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

        networkManager.send(SERVER_VERIFY_PACKET, { "packet_type": PACKET_PLAY_ANIMATION, "animationKey": animationKey, "body": bodyKey, "overlay": overlayKey });
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
            networkManger.send(SERVER_VERIFY_PACKET, { "packet_type": PACKET_PLAY_ANIMATION, "animationKey": phaserAnimationKey, "body": bodyAnimationKey, "overlay": overlayAnimationKey });
        }

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

    setCurrentPose(pose) {

    }

    getCurrentAnimation() {
        return this.animation;
    }
    
    setCurrentAnimation(animation) {
        this.animation = animation;
    }

}
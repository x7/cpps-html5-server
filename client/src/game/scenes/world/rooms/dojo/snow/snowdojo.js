import { createAnimation } from "../../../../../../animations/animations";
import { onWebsocketClose } from "../../../../../../network/connection/websocketClose";
import { ASSET_TYPES } from "../../../../../assets/assetTypes";
import { DOJO_SNOW_BATTLE_LAUGH, DOJO_SNOW_BRIDGE_BOUNCE, DOJO_SNOW_LIGHT_OFF, DOJO_SNOW_LIGHT_ON, DOJO_SNOW_ROOM_MUSIC } from "../../../../../audio/audioConstants";
import { SCENE_ROOM_DOJO, SCENE_ROOM_SNOW_DOJO } from "../../../../sceneNames";
import { onJoinRoomTrigger } from "../../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../../triggers/walkingTrigger";
import { RoomScene } from "../../RoomScene";

// TODO: Get bridge moving up animation when hovered over it
// TODO: Add the 2 small balls on the snow icon

export class SnowDojoScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_SNOW_DOJO);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "snowdojo",
            "paths": ["assets/world/rooms/dojo/snowdojo/snowdojo-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "snow_dojo_walking_trigger",
            "paths": ["assets/world/rooms/dojo/snowdojo/snow_dojo_walking_trigger.png"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_SNOW_ROOM_MUSIC,
            "paths": [`assets/world/rooms/dojo/snowdojo/${DOJO_SNOW_ROOM_MUSIC}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_SNOW_LIGHT_ON,
            "paths": [`assets/world/rooms/dojo/snowdojo/${DOJO_SNOW_LIGHT_ON}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_SNOW_LIGHT_OFF,
            "paths": [`assets/world/rooms/dojo/snowdojo/${DOJO_SNOW_LIGHT_OFF}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_SNOW_BRIDGE_BOUNCE,
            "paths": [`assets/world/rooms/dojo/snowdojo/${DOJO_SNOW_BRIDGE_BOUNCE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_SNOW_BATTLE_LAUGH,
            "paths": [`assets/world/rooms/dojo/snowdojo/${DOJO_SNOW_BATTLE_LAUGH}.mp3`]
        });
    }

    createContent() {
        // snow_dojo_background_sky_png
		const snow_dojo_background_sky_png = this.add.image(834, 134, "snowdojo", "snow_dojo_background_sky.png");

		// snow_dojo_background_png
		const snow_dojo_background_png = this.add.image(861, 460, "snowdojo", "snow_dojo_background.png");

		// snow_dojo_bridge0001_png
		const snow_dojo_bridge0001_png = this.add.sprite(1152, 384, "snowdojo", "snow_dojo_bridge0001.png");

		// symbol_259_png
		const symbol_259_png = this.add.image(688, 466, "snowdojo", "Symbol 259.png");

		// snow_dojo_exit_png
		const snow_dojo_exit_png = this.add.image(214, 575, "snowdojo", "snow_dojo_exit.png");

		// snow_dojo_exit_sign_png
		const snow_dojo_exit_sign_png = this.add.image(261, 702, "snowdojo", "snow_dojo_exit_sign.png");

		// snow_dojo_random_button_not_sure_what_this_triggers0001_png
		const snow_dojo_random_button_not_sure_what_this_triggers0001_png = this.add.image(1174, 469, "snowdojo", "snow_dojo_random_button_not_sure_what_this_triggers0001.png");

		// snow_dojo_random_button_not_sure_what_this_triggers0002_png
		const snow_dojo_random_button_not_sure_what_this_triggers0002_png = this.add.image(1174, 469, "snowdojo", "snow_dojo_random_button_not_sure_what_this_triggers0002.png");
		snow_dojo_random_button_not_sure_what_this_triggers0002_png.visible = false;

		// snow_dojo_dojo_cave_light_trigger0002_png
		const snow_dojo_dojo_cave_light_trigger0002_png = this.add.image(105, 648, "snowdojo", "snow_dojo_dojo_cave_light_trigger0002.png");
		snow_dojo_dojo_cave_light_trigger0002_png.visible = false;

		// snow_dojo_bottom_middle_png
		const snow_dojo_bottom_middle_png = this.add.image(624, 815, "snowdojo", "snow_dojo_bottom_middle.png");

		// snow_dojo_dojo_cave_light_trigger0004_png
		const snow_dojo_dojo_cave_light_trigger0004_png = this.add.image(118, 657, "snowdojo", "snow_dojo_dojo_cave_light_trigger0004.png");
		snow_dojo_dojo_cave_light_trigger0004_png.scaleX = 0.5767668052882362;
		snow_dojo_dojo_cave_light_trigger0004_png.scaleY = 0.7281062220765234;
		snow_dojo_dojo_cave_light_trigger0004_png.alpha = 0.001;
		snow_dojo_dojo_cave_light_trigger0004_png.alphaTopLeft = 0.001;
		snow_dojo_dojo_cave_light_trigger0004_png.alphaTopRight = 0.001;
		snow_dojo_dojo_cave_light_trigger0004_png.alphaBottomLeft = 0.001;
		snow_dojo_dojo_cave_light_trigger0004_png.alphaBottomRight = 0.001;

        // snow_dojo_bridge_animation_trigger0004_png
		const snow_dojo_bridge_animation_trigger0004_png = this.add.image(1163, 357, "snowdojo", "snow_dojo_bridge_animation_trigger0004.png");
		snow_dojo_bridge_animation_trigger0004_png.alpha = 0.001;
		snow_dojo_bridge_animation_trigger0004_png.alphaTopLeft = 0.001;
		snow_dojo_bridge_animation_trigger0004_png.alphaTopRight = 0.001;
		snow_dojo_bridge_animation_trigger0004_png.alphaBottomLeft = 0.001;
		snow_dojo_bridge_animation_trigger0004_png.alphaBottomRight = 0.001;

        // snow_dojo_random_button_not_sure_what_this_trigger
		const snow_dojo_random_button_not_sure_what_this_trigger = this.add.image(1176, 464, "snowdojo", "snow_dojo_dojo_cave_light_trigger0004.png");
		snow_dojo_random_button_not_sure_what_this_trigger.scaleX = 0.38866273617248126;
		snow_dojo_random_button_not_sure_what_this_trigger.scaleY = 0.46375461501702;
		snow_dojo_random_button_not_sure_what_this_trigger.alpha = 0.001;
		snow_dojo_random_button_not_sure_what_this_trigger.alphaTopLeft = 0.001;
		snow_dojo_random_button_not_sure_what_this_trigger.alphaTopRight = 0.001;
		snow_dojo_random_button_not_sure_what_this_trigger.alphaBottomLeft = 0.001;
		snow_dojo_random_button_not_sure_what_this_trigger.alphaBottomRight = 0.001;

        // snow_dojo_walking_trigger_png
		const snow_dojo_walking_trigger_png = this.physics.add.sprite(759, 481, "snow_dojo_walking_trigger");
		snow_dojo_walking_trigger_png.alpha = 0.001;
		snow_dojo_walking_trigger_png.alphaTopLeft = 0.001;
		snow_dojo_walking_trigger_png.alphaTopRight = 0.001;
		snow_dojo_walking_trigger_png.alphaBottomLeft = 0.001;
		snow_dojo_walking_trigger_png.alphaBottomRight = 0.001;
		snow_dojo_walking_trigger_png.body.setSize(1520, 960, false);
        this.collisionMap = this.createCollisionMap(this, 759, 481, "snow_dojo_walking_trigger");

		// snow_dojo_dojo_trigger
		const snow_dojo_dojo_trigger = this.physics.add.sprite(40, 663, "snowdojo", "snow_dojo_dojo_trigger.png");
		snow_dojo_dojo_trigger.alpha = 0.001;
		snow_dojo_dojo_trigger.alphaTopLeft = 0.001;
		snow_dojo_dojo_trigger.alphaTopRight = 0.001;
		snow_dojo_dojo_trigger.alphaBottomLeft = 0.001;
		snow_dojo_dojo_trigger.alphaBottomRight = 0.001;
		snow_dojo_dojo_trigger.body.setSize(248, 147, false);

         // Setting triggers starts here
        this.triggers.push([snow_dojo_walking_trigger_png, () => {
            onWalkingTrigger(this);
        }]);

        this.triggers.push([snow_dojo_dojo_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_DOJO);
        }]);
        // Setting triggers ends here

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "snow_dojo_bridge_moving_animation",
            "phaserAnimationKey": "snow_dojo_bridge_moving_animation_play",
            "textureKey": "snowdojo",
            "framePrefix": "snow_dojo_bridge",
            "frames": Array.from({ length: 140 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        snow_dojo_bridge0001_png.play("snow_dojo_bridge_moving_animation_play")
        // Creating animations ends here

        // Setting all interactives sprites starts here
        snow_dojo_dojo_cave_light_trigger0004_png.setInteractive({ useHandCursor: true });
        snow_dojo_random_button_not_sure_what_this_trigger.setInteractive({ useHandCursor: true });
        snow_dojo_bridge_animation_trigger0004_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        snow_dojo_dojo_cave_light_trigger0004_png.on("pointerover", () => {
            snow_dojo_dojo_cave_light_trigger0002_png.visible = true;
            this.audioManager.play(DOJO_SNOW_LIGHT_ON);
        });

        snow_dojo_dojo_cave_light_trigger0004_png.on("pointerout", () => {
            snow_dojo_dojo_cave_light_trigger0002_png.visible = false;
            this.audioManager.play(DOJO_SNOW_LIGHT_OFF);
        });

        snow_dojo_random_button_not_sure_what_this_trigger.on("pointerover", () => {
            snow_dojo_random_button_not_sure_what_this_triggers0001_png.visible = false;
            snow_dojo_random_button_not_sure_what_this_triggers0002_png.visible = true;
        });

        snow_dojo_random_button_not_sure_what_this_trigger.on("pointerout", () => {
            snow_dojo_random_button_not_sure_what_this_triggers0001_png.visible = true;
            snow_dojo_random_button_not_sure_what_this_triggers0002_png.visible = false;
        });

        snow_dojo_random_button_not_sure_what_this_trigger.on("pointerdown", () => {
            console.log("woo not sure what this is");
        });

        snow_dojo_bridge_animation_trigger0004_png.on("pointerover", () => {
            // play
            this.audioManager.play(DOJO_SNOW_BRIDGE_BOUNCE);
        });
        // All interactive events end here

        this.audioManager.play(DOJO_SNOW_ROOM_MUSIC);
        super.createContent(this);
    }

    update() {
        super.update();
    }
}
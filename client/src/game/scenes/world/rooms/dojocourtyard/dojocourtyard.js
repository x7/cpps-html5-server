import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { DOJO_COURTYARD_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_DOJO, SCENE_ROOM_DOJO_COURTYARD, SCENE_ROOM_MINE_SHACK } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class DojoCourtYardScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_DOJO_COURTYARD);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "dojocourtyard",
            "paths": ["assets/world/rooms/dojocourtyard/dojocourtyard-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "dojo_courtyard_walking_triggerr",
            "paths": ["assets/world/rooms/dojocourtyard/dojo_courtyard_walking_triggerr.png"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_COURTYARD_ROOM_MUSIC,
            "paths": [`assets/world/rooms/dojocourtyard/${DOJO_COURTYARD_ROOM_MUSIC}.mp3`]
        });
    }

    createContent() {
        // dojo_courtyard_sky_png
		const dojo_courtyard_sky_png = this.add.image(765, 125, "dojocourtyard", "dojo_courtyard_sky.png");

		// dojo_courtyard_left_side_mountains_png
		const dojo_courtyard_left_side_mountains_png = this.add.image(718, 465, "dojocourtyard", "dojo_courtyard_left_side_mountains.png");

		// dojo_courtyard_water_falling0001_png
		const dojo_courtyard_water_falling0001_png = this.add.sprite(306, 334, "dojocourtyard", "dojo_courtyard_water_falling0001.png");
		dojo_courtyard_water_falling0001_png.scaleX = 0.4733795267642118;
		dojo_courtyard_water_falling0001_png.scaleY = 0.44508198070976945;

		// dojo_courtyard_bridges_png
		const dojo_courtyard_bridges_png = this.add.image(844, 522, "dojocourtyard", "dojo_courtyard_bridges.png");

		// dojo_courtyard_fire_smoke0001_png
		const dojo_courtyard_fire_smoke0001_png = this.add.sprite(64, 143, "dojocourtyard", "dojo_courtyard_fire_smoke0001.png");
		dojo_courtyard_fire_smoke0001_png.scaleX = 0.27775185980857553;
		dojo_courtyard_fire_smoke0001_png.scaleY = 0.37184447132832504;

		// dojo_courtyard_dojo_door0001_png
		const dojo_courtyard_dojo_door0001_png = this.add.image(767, 490, "dojocourtyard", "dojo_courtyard_dojo_door0001.png");
		dojo_courtyard_dojo_door0001_png.scaleX = 0.44250407396913793;
		dojo_courtyard_dojo_door0001_png.scaleY = 0.39613651623813284;

		// dojo_courtyard_dojo_door0002_png
		const dojo_courtyard_dojo_door0002_png = this.add.image(767, 482, "dojocourtyard", "dojo_courtyard_dojo_door0002.png");
		dojo_courtyard_dojo_door0002_png.scaleX = 0.44250407396913793;
		dojo_courtyard_dojo_door0002_png.scaleY = 0.45816672818756327;
		dojo_courtyard_dojo_door0002_png.visible = false;

		// dojo_courtyard_dojo_house_png
		const dojo_courtyard_dojo_house_png = this.add.image(655, 467, "dojocourtyard", "dojo_courtyard_dojo_house.png");

		// dojo_courtyard_dojo_door0004_png
		const dojo_courtyard_dojo_door0004_png = this.add.image(769, 487, "dojocourtyard", "dojo_courtyard_dojo_door0004.png");
		dojo_courtyard_dojo_door0004_png.scaleX = 0.42636072620709137;
		dojo_courtyard_dojo_door0004_png.scaleY = 0.401011140070115;
		dojo_courtyard_dojo_door0004_png.alpha = 0.001;
		dojo_courtyard_dojo_door0004_png.alphaTopLeft = 0.001;
		dojo_courtyard_dojo_door0004_png.alphaTopRight = 0.001;
		dojo_courtyard_dojo_door0004_png.alphaBottomLeft = 0.001;
		dojo_courtyard_dojo_door0004_png.alphaBottomRight = 0.001;

		// dojo_courtyard_puffle_left_png
		const dojo_courtyard_puffle_left_png = this.add.image(453, 827, "dojocourtyard", "dojo_courtyard_puffle_left.png");

		// dojo_courtyard_puffle_right_png
		const dojo_courtyard_puffle_right_png = this.add.image(1107, 818, "dojocourtyard", "dojo_courtyard_puffle_right.png");

		// dojo_courtyard_bottom_right_bottom_tree_png
		const dojo_courtyard_bottom_right_bottom_tree_png = this.add.image(1494, 839, "dojocourtyard", "dojo_courtyard_bottom_right_bottom_tree.png");

		// dojo_courtyard_bottom_right_top_tree_png
		const dojo_courtyard_bottom_right_top_tree_png = this.add.image(1383, 682, "dojocourtyard", "dojo_courtyard_bottom_right_top_tree.png");

		// dojo_courtyard_bottom_right_left_tree_png
		const dojo_courtyard_bottom_right_left_tree_png = this.add.image(1282, 760, "dojocourtyard", "dojo_courtyard_bottom_right_left_tree.png");

        // dojo_courtyard_walking_triggerr_png
		const dojo_courtyard_walking_triggerr_png = this.physics.add.sprite(733, 452, "dojo_courtyard_walking_triggerr");
		dojo_courtyard_walking_triggerr_png.scaleX = 0.9301640891465893;
		dojo_courtyard_walking_triggerr_png.alpha = 0.001;
		dojo_courtyard_walking_triggerr_png.alphaTopLeft = 0.001;
		dojo_courtyard_walking_triggerr_png.alphaTopRight = 0.001;
		dojo_courtyard_walking_triggerr_png.alphaBottomLeft = 0.001;
		dojo_courtyard_walking_triggerr_png.alphaBottomRight = 0.001;
		dojo_courtyard_walking_triggerr_png.body.setSize(1600, 1040, false);
        this.collisionMap = this.createCollisionMap(this, 733, 452, "dojo_courtyard_walking_triggerr");

		// dojo_courtyard_mine_shack_trigger
		const dojo_courtyard_mine_shack_trigger = this.physics.add.sprite(769, 879, "dojocourtyard", "dojo_courtyard_mine_shack_trigger.png");
		dojo_courtyard_mine_shack_trigger.scaleX = 0.9730218092242524;
		dojo_courtyard_mine_shack_trigger.scaleY = 0.8342724400324608;
		dojo_courtyard_mine_shack_trigger.alpha = 0.001;
		dojo_courtyard_mine_shack_trigger.alphaTopLeft = 0.001;
		dojo_courtyard_mine_shack_trigger.alphaTopRight = 0.001;
		dojo_courtyard_mine_shack_trigger.alphaBottomLeft = 0.001;
		dojo_courtyard_mine_shack_trigger.alphaBottomRight = 0.001;
		dojo_courtyard_mine_shack_trigger.body.setSize(516, 168, false);

		// dojo_courtyard_dojo_trigger
		const dojo_courtyard_dojo_trigger = this.physics.add.sprite(766, 545, "dojocourtyard", "dojo_courtyard_dojo_trigger.png");
		dojo_courtyard_dojo_trigger.scaleX = 0.6815906689265991;
		dojo_courtyard_dojo_trigger.scaleY = 0.6965954702206402;
		dojo_courtyard_dojo_trigger.alpha = 0.001;
		dojo_courtyard_dojo_trigger.alphaTopLeft = 0.001;
		dojo_courtyard_dojo_trigger.alphaTopRight = 0.001;
		dojo_courtyard_dojo_trigger.alphaBottomLeft = 0.001;
		dojo_courtyard_dojo_trigger.alphaBottomRight = 0.001;
		dojo_courtyard_dojo_trigger.body.setSize(296, 111, false);

        // Setting triggers starts here
        this.triggers.push([dojo_courtyard_walking_triggerr_png, () => {
            onWalkingTrigger(this);
        }]);

        this.triggers.push([dojo_courtyard_dojo_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_DOJO);
        }]);

        this.triggers.push([dojo_courtyard_mine_shack_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_MINE_SHACK);
        }]);
        // Setting triggers ends here

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "dojo_courtyard_fire_smoke_animation",
            "phaserAnimationKey": "dojo_courtyard_fire_smoke_animation_play",
            "textureKey": "dojocourtyard",
            "framePrefix": "dojo_courtyard_fire_smoke",
            "framesExtension": ".png",
            "frames": Array.from({ length: 96 }, (_, i) => String(i + 1).padStart(4, "0")),
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "dojo_courtyard_water_falling_animation",
            "phaserAnimationKey": "dojo_courtyard_water_falling_animation_play",
            "textureKey": "dojocourtyard",
            "framePrefix": "dojo_courtyard_water_falling",
            "framesExtension": ".png",
            "frames": Array.from({ length: 24 }, (_, i) => String(i + 1).padStart(4, "0")),
            "frameRate": 24,
            "repeat": -1
        });

        dojo_courtyard_fire_smoke0001_png.play("dojo_courtyard_fire_smoke_animation_play");
        dojo_courtyard_water_falling0001_png.play("dojo_courtyard_water_falling_animation_play");
        // Creating animations ends here

        // Setting all interactives sprites starts here
        dojo_courtyard_dojo_door0004_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        dojo_courtyard_dojo_door0004_png.on("pointerover", () => {
            dojo_courtyard_dojo_door0001_png.visible = false;
            dojo_courtyard_dojo_door0002_png.visible = true;
        });

        dojo_courtyard_dojo_door0004_png.on("pointerout", () => {
            dojo_courtyard_dojo_door0001_png.visible = true;
            dojo_courtyard_dojo_door0002_png.visible = false;
        });
        // All interactive events ends here

        this.audioManager.play(DOJO_COURTYARD_ROOM_MUSIC);
        super.createContent(this);
    }

    update() {
        super.update();
    }
}
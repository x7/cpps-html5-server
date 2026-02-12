import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SCENE_ROOM_PIRATE_SHIP, SCENE_ROOM_SHIP_NEST } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

// TODO: Fix cannon animation

export class ShipNestScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_SHIP_NEST)
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "shipnest",
            "paths": ["assets/world/rooms/shipnest/shipnest-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "ship_nest_walking_trigger",
            "paths": ["assets/world/rooms/shipnest/ship_nest_walking_trigger.png"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "pirateship",
            "paths": ["assets/world/rooms/pirateship/pirateship-pack.json"]
        });
    }

    createContent() {
		// ship_nest_main_background_png
		const ship_nest_main_background_png = this.add.image(-75, -65, "shipnest", "ship_nest_main_background.png");
		ship_nest_main_background_png.setOrigin(0, 0);

		// ship_nest_powder_box0001_png
		const ship_nest_powder_box0001_png = this.add.image(979, 420, "shipnest", "ship_nest_powder_box0001.png");

		// ship_nest_snowballs_png
		const ship_nest_snowballs_png = this.add.image(1111, 515, "shipnest", "ship_nest_snowballs.png");

		// ship_nest_solo_snowball_png
		const ship_nest_solo_snowball_png = this.add.image(403, 643, "shipnest", "ship_nest_solo_snowball.png");

		// ship_nest_out_layer_png
		const ship_nest_out_layer_png = this.add.image(752, 659, "shipnest", "ship_nest_out_layer.png");

		// ship_nest_flag0001_png
		const ship_nest_flag0001_png = this.add.sprite(617, 186, "shipnest", "ship_nest_flag0001.png");
		ship_nest_flag0001_png.scaleX = 0.8506474536401656;
		ship_nest_flag0001_png.scaleY = 0.7600488186140033;

		// ship_nest_flag_pole_png
		const ship_nest_flag_pole_png = this.add.image(791, 294, "shipnest", "ship_nest_flag_pole.png");

		// pirate_ship_red_puffle0001_png
		const pirate_ship_red_puffle0001_png = this.add.sprite(311, 836, "pirateship", "pirate_ship_red_puffle0001.png");

		// ship_nest_cannon0001_png
		const ship_nest_cannon0001_png = this.add.sprite(296, 336, "shipnest", "ship_nest_cannon0001.png");

		// ship_nest_cannon_trigger0004_png
		const ship_nest_cannon_trigger0004_png = this.add.image(419, 427, "shipnest", "ship_nest_cannon_trigger0004.png");
		ship_nest_cannon_trigger0004_png.scaleX = 1.084700736595872;
		ship_nest_cannon_trigger0004_png.scaleY = 1.0650094102244463;
		ship_nest_cannon_trigger0004_png.alpha = 0.001;
		ship_nest_cannon_trigger0004_png.alphaTopLeft = 0.001;
		ship_nest_cannon_trigger0004_png.alphaTopRight = 0.001;
		ship_nest_cannon_trigger0004_png.alphaBottomLeft = 0.001;
		ship_nest_cannon_trigger0004_png.alphaBottomRight = 0.001;

		// ship_nest_pirate_ship_trigger
		const ship_nest_pirate_ship_trigger = this.physics.add.sprite(1067, 719, "shipnest", "ship_nest_exit_trigger.png");
		ship_nest_pirate_ship_trigger.alpha = 0.001;
		ship_nest_pirate_ship_trigger.alphaTopLeft = 0.001;
		ship_nest_pirate_ship_trigger.alphaTopRight = 0.001;
		ship_nest_pirate_ship_trigger.alphaBottomLeft = 0.001;
		ship_nest_pirate_ship_trigger.alphaBottomRight = 0.001;
		ship_nest_pirate_ship_trigger.body.setSize(272, 106, false);

		// ship_nest_walking_trigger_png
		const ship_nest_walking_trigger_png = this.physics.add.sprite(801, 482, "ship_nest_walking_trigger");
		ship_nest_walking_trigger_png.alpha = 0.001;
		ship_nest_walking_trigger_png.alphaTopLeft = 0.001;
		ship_nest_walking_trigger_png.alphaTopRight = 0.001;
		ship_nest_walking_trigger_png.alphaBottomLeft = 0.001;
		ship_nest_walking_trigger_png.alphaBottomRight = 0.001;
		ship_nest_walking_trigger_png.body.setSize(1520, 960, false);
        this.collisionMap = this.createCollisionMap(this, 801, 482, "ship_nest_walking_trigger");

        // Setting triggers starts here
        this.triggers.push([ship_nest_walking_trigger_png, () => {
            onWalkingTrigger(this);
        }]);

        this.triggers.push([ship_nest_pirate_ship_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_PIRATE_SHIP);
        }]);
        // Setting triggers ends here

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "ship_nest_flag_animation",
            "phaserAnimationKey": "ship_nest_flag_animation_play",
            "textureKey": "shipnest",
            "framePrefix": "ship_nest_flag",
            "frames": Array.from({ length: 13 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "ship_nest_cannon_animation",
            "phaserAnimationKey": "ship_nest_cannon_animation_play",
            "textureKey": "shipnest",
            "framePrefix": "ship_nest_cannon",
            "frames": Array.from({ length: 43 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pirate_ship_red_puffle_animation",
            "phaserAnimationKey": "pirate_ship_red_puffle_animation_play",
            "textureKey": "pirateship",
            "framePrefix": "pirate_ship_red_puffle",
            "frames": Array.from({ length: 468 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        ship_nest_flag0001_png.play("ship_nest_flag_animation_play");
        pirate_ship_red_puffle0001_png.play("pirate_ship_red_puffle_animation_play");
        // Creating animations ends here

        // Setting all interactives sprites starts here
        ship_nest_cannon_trigger0004_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        ship_nest_cannon_trigger0004_png.on("pointerover", () => {
            ship_nest_cannon0001_png.play("ship_nest_cannon_animation_play");
        });
        // All interactive events ends here

        super.createContent(this);
    }

    update() {
        super.update();
    }
}
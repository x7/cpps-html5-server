import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SCENE_ROOM_ICE_RINK, SCENE_ROOM_SCHOOL, SCENE_ROOM_SNOW_FORTS } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

// TODO: Get hq images for some sprites
// TODO: Get music

export class IceRinkScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_ICE_RINK);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "icehockey",
            "paths": ["assets/world/rooms/icerink/icehockey-pack.json"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "ice_hockey_walk_trigger",
            "paths": ["assets/world/rooms/icerink/ice_hockey_walk_trigger.png"]
        });
    }

    createContent() {
        // ice_hockey_background_png
		const ice_hockey_background_png = this.add.image(-123, -59, "icehockey", "ice_hockey_background.png");
		ice_hockey_background_png.scaleX = 0.9889126963868617;
		ice_hockey_background_png.scaleY = 0.9632448998464546;
		ice_hockey_background_png.setOrigin(0, 0);

		const a = this.add.nineslice(-123, -59, ice_hockey_background_png)

		// ice_hockey_top_ring_png
		const ice_hockey_top_ring_png = this.physics.add.sprite(753, 462, "icehockey", "ice_hockey_top_ring.png");
		ice_hockey_top_ring_png.scaleX = 0.9981907997029846;
		ice_hockey_top_ring_png.scaleY = 0.8925710281293826;
		ice_hockey_top_ring_png.body.setSize(1258, 380, false);

		// ice_hockey_bottom_snow_png
		const ice_hockey_bottom_snow_png = this.add.sprite(698, 759, "icehockey", "ice_hockey_bottom_snow.png");
		ice_hockey_bottom_snow_png.scaleX = 0.9972572436892888;
		ice_hockey_bottom_snow_png.scaleY = 1.0560363230470553;

		// ice_hockey_fish_dogs_stand0001_png
		const ice_hockey_fish_dogs_stand0001_png = this.add.image(105, 147, "icehockey", "ice_hockey_fish_dogs_stand0001.png");

		// ice_hockey_left_seats_png
		const ice_hockey_left_seats_png = this.add.image(91, 379, "icehockey", "ice_hockey_left_seats.png");

		// ice_hockey_left_seats_stand_png
		const ice_hockey_left_seats_stand_png = this.add.image(-52, 491, "icehockey", "ice_hockey_left_seats_stand.png");

		// ice_hockey_hockey_png
		const ice_hockey_hockey_png = this.add.image(746, 545, "icehockey", "ice_hockey_hockey.png");

		// ice_hockey_ring_door0001_png
		const ice_hockey_ring_door0001_png = this.add.image(754, 325, "icehockey", "ice_hockey_ring_door0001.png");
		ice_hockey_ring_door0001_png.scaleX = 1.11348697069287;

		// ice_hockey_ring_door0002_png
		const ice_hockey_ring_door0002_png = this.add.image(754, 325, "icehockey", "ice_hockey_ring_door0002.png");
		ice_hockey_ring_door0002_png.scaleX = 1.11348697069287;
		ice_hockey_ring_door0002_png.visible = false;

		// ice_hockey_left_seats_pizza_png
		const ice_hockey_left_seats_pizza_png = this.add.image(107, 365, "icehockey", "ice_hockey_left_seats_pizza.png");

		// ice_hockey_left_seats_idk_png
		const ice_hockey_left_seats_idk_png = this.add.image(17, 313, "icehockey", "ice_hockey_left_seats_idk.png");

		// ice_hockey_left_seats_drink_png
		const ice_hockey_left_seats_drink_png = this.add.image(70, 468, "icehockey", "ice_hockey_left_seats_drink.png");

		// ice_hockey_stadium_top_part0001_png
		const ice_hockey_stadium_top_part0001_png = this.add.image(521, 149, "icehockey", "ice_hockey_stadium_top_part0001.png");

		// ice_hockey_school_arrow_sign_png
		const ice_hockey_school_arrow_sign_png = this.add.image(1254, 209, "icehockey", "ice_hockey_school_arrow_sign.png");

		// ice_hockey_snacks_door0001_png
		const ice_hockey_snacks_door0001_png = this.add.image(1205, 204, "icehockey", "ice_hockey_snacks_door0001.png");

		// ice_hockey_snacks_door0002_png
		const ice_hockey_snacks_door0002_png = this.add.image(1205, 204, "icehockey", "ice_hockey_snacks_door0002.png");
		ice_hockey_snacks_door0002_png.visible = false;

		// ice_hockey_snacks_building0001_png
		const ice_hockey_snacks_building0001_png = this.add.image(1062, 161, "icehockey", "ice_hockey_snacks_building0001.png");

		// ice_hockey_right_seats_png
		const ice_hockey_right_seats_png = this.add.image(1416, 380, "icehockey", "ice_hockey_right_seats.png");
		ice_hockey_right_seats_png.scaleX = 1.0277987681700236;

		// ice_hockey_right_seats_railing_png
		const ice_hockey_right_seats_railing_png = this.add.image(1565, 475, "icehockey", "ice_hockey_right_seats_railing.png");

		// ice_hockey_left_seats_drink_png_1
		const ice_hockey_left_seats_drink_png_1 = this.add.image(1414, 301, "icehockey", "ice_hockey_left_seats_drink.png");
		ice_hockey_left_seats_drink_png_1.flipX = true;

		// ice_hockey_right_seats_newspaper_png
		const ice_hockey_right_seats_newspaper_png = this.add.image(1460, 444, "icehockey", "ice_hockey_right_seats_newspaper.png");

		// ice_hockey_right_net_bottom_png
		const ice_hockey_right_net_bottom_png = this.add.image(1244, 513, "icehockey", "ice_hockey_right_net_bottom.png");

		// ice_hockey_right_net_top_png
		const ice_hockey_right_net_top_png = this.add.image(1242, 514, "icehockey", "ice_hockey_right_net_top.png");

		// ice_hockey_left_net_bottom_png
		const ice_hockey_left_net_bottom_png = this.add.image(244, 508, "icehockey", "ice_hockey_left_net_bottom.png");

		// ice_hockey_left_net_top_png
		const ice_hockey_left_net_top_png = this.add.image(243, 514, "icehockey", "ice_hockey_left_net_top.png");

		// ice_hockey_school_trigger
		const ice_hockey_school_trigger = this.physics.add.sprite(1335, 236, "icehockey", "ice_hockey_school_trigger.png");
		ice_hockey_school_trigger.scaleX = 0.41643727795312274;
		ice_hockey_school_trigger.scaleY = 0.4829631893223174;
		ice_hockey_school_trigger.alpha = 0.001;
		ice_hockey_school_trigger.alphaTopLeft = 0.001;
		ice_hockey_school_trigger.alphaTopRight = 0.001;
		ice_hockey_school_trigger.alphaBottomLeft = 0.001;
		ice_hockey_school_trigger.alphaBottomRight = 0.001;
		ice_hockey_school_trigger.body.setSize(233, 200, false);

		// ice_hockey_snow_forts_trigger
		const ice_hockey_snow_forts_trigger = this.physics.add.sprite(762, 192, "icehockey", "ice_hockey_snow_forts_trigger.png");
		ice_hockey_snow_forts_trigger.alpha = 0.001;
		ice_hockey_snow_forts_trigger.alphaTopLeft = 0.001;
		ice_hockey_snow_forts_trigger.alphaTopRight = 0.001;
		ice_hockey_snow_forts_trigger.alphaBottomLeft = 0.001;
		ice_hockey_snow_forts_trigger.alphaBottomRight = 0.001;
		ice_hockey_snow_forts_trigger.body.setSize(100, 100, false);

		// ice_hockey_walk_trigger
		const ice_hockey_walk_trigger = this.physics.add.sprite(750, 477, "ice_hockey_walk_trigger");
		ice_hockey_walk_trigger.scaleX = 1.0213096271784012;
		ice_hockey_walk_trigger.alpha = 0.001;
		ice_hockey_walk_trigger.alphaTopLeft = 0.001;
		ice_hockey_walk_trigger.alphaTopRight = 0.001;
		ice_hockey_walk_trigger.alphaBottomLeft = 0.001;
		ice_hockey_walk_trigger.alphaBottomRight = 0.001;
		ice_hockey_walk_trigger.body.setSize(1520, 960, false);
		this.collisionMap = this.createCollisionMap(this, 750, 477, "ice_hockey_walk_trigger");

		// Setting triggers starts here
		this.triggers.push([ice_hockey_walk_trigger, () => {
			onWalkingTrigger(this);
		}]);

		this.triggers.push([ice_hockey_snow_forts_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_SNOW_FORTS);
		}]);

		this.triggers.push([ice_hockey_school_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_SCHOOL);
		}]);
		// Setting triggers ends here

		super.createContent(this);
    }

	update() {
		super.update();
	}
}
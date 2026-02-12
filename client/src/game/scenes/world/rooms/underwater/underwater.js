import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { UNDERWATER_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_HIDDEN_LAKE, SCENE_ROOM_UNDERWATER } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class UnderwaterScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_UNDERWATER);
    }

    init(data) {
		super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "underwater",
            "paths": ["assets/world/rooms/underwater/underwater-pack.json"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "underwater_walking_trigger",
            "paths": ["assets/world/rooms/underwater/underwater_walking_trigger.png"]
        });

		this.assetManager.load({
			"scene": this,
			"type": ASSET_TYPES.AUDIO,
			"name": UNDERWATER_ROOM_MUSIC,
			"paths": ["assets/world/rooms/underwater/underwater_music.mp3"]
		});
    }

    createContent() {
		// underwater_background_png
		const underwater_background_png = this.add.image(774, 90, "underwater", "underwater_background.png");
		underwater_background_png.scaleX = 1.1846812866425471;

		// underwater_main_png
		const underwater_main_png = this.add.image(-15, -5, "underwater", "underwater_main.png");
		underwater_main_png.scaleY = 1.0842976459461426;
		underwater_main_png.setOrigin(0, 0);

		// underwater_part_one_png
		const underwater_part_one_png = this.add.image(1301, 594, "underwater", "underwater_part_one.png");
		underwater_part_one_png.scaleX = 1.028760009714981;
		underwater_part_one_png.scaleY = 1.0122955304314076;

		// underwater_part_two_png
		const underwater_part_two_png = this.add.image(1435, 593, "underwater", "underwater_part_two.png");
		underwater_part_two_png.scaleX = 1.1985520363064837;
		underwater_part_two_png.scaleY = 1.1767734337114932;

		// underwater_clam_png
		const underwater_clam_png = this.add.image(635, 765, "underwater", "underwater_clam.png");
		underwater_clam_png.scaleX = 0.9515163713895719;
		underwater_clam_png.scaleY = 0.9096901654685811;

		// underwater_anvil_png
		this.add.image(1396, 730, "underwater", "underwater_anvil.png");

		// underwater_bottom_png
		const underwater_bottom_png = this.add.image(719, 453, "underwater", "underwater_bottom.png");
		underwater_bottom_png.scaleX = 1.0159250541673708;
		underwater_bottom_png.scaleY = 0.999086513007565;

		// underwater_bottom_left_side_png
		const underwater_bottom_left_side_png = this.add.image(165, 551, "underwater", "underwater_bottom_left_side.png");
		underwater_bottom_left_side_png.scaleX = 1.243965655910139;
		underwater_bottom_left_side_png.scaleY = 1.222918477067548;

		// underwater_left_side_png
		const underwater_left_side_png = this.add.image(401, 548, "underwater", "underwater_left_side.png");
		underwater_left_side_png.scaleX = 1.078849191444283;
		underwater_left_side_png.scaleY = 0.8803468490862291;

		// underwater_wheel_png
		const underwater_wheel_png = this.add.image(307, 529, "underwater", "underwater_wheel.png");
		underwater_wheel_png.scaleX = 0.8534497015134862;
		underwater_wheel_png.scaleY = 0.8461806348486637;
		underwater_wheel_png.visible = false;

		// underwater_see_weed_png
		const underwater_see_weed_png = this.add.image(93, 643, "underwater", "underwater_see_weed.png");
		underwater_see_weed_png.scaleX = 1.20588730120474;
		underwater_see_weed_png.scaleY = 1.375422161351825;

		// underwater_tower_png
		const underwater_tower_png = this.add.image(1146, 383, "underwater", "underwater_tower.png");
		underwater_tower_png.scaleX = 0.9569899407974465;
		underwater_tower_png.scaleY = 0.9458374915757124;

		// underwater_sea_weed_png
		const underwater_sea_weed_png = this.add.image(1483, 399, "underwater", "underwater_sea_weed.png");
		underwater_sea_weed_png.scaleX = 1.1658561707958939;
		underwater_sea_weed_png.scaleY = 1.1781489240984027;

		// underwater_hidden_lake_trigger
		const underwater_hidden_lake_trigger = this.add.ellipse(136, 368, 128, 128);
		underwater_hidden_lake_trigger.scaleX = 2.109394416502124;
		underwater_hidden_lake_trigger.scaleY = 0.5275136018473021;
		underwater_hidden_lake_trigger.alpha = 0.001;
		underwater_hidden_lake_trigger.isFilled = true;

		// underwater_walking_trigger
		const underwater_walking_trigger = this.physics.add.sprite(757, 177, "underwater_walking_trigger");
		underwater_walking_trigger.alpha = 0.001;
		underwater_walking_trigger.alphaTopLeft = 0.001;
		underwater_walking_trigger.alphaTopRight = 0.001;
		underwater_walking_trigger.alphaBottomLeft = 0.001;
		underwater_walking_trigger.alphaBottomRight = 0.001;
		underwater_walking_trigger.body.setSize(1520, 463, false);
		this.collisionMap = this.createCollisionMap(this, 757, 177, "underwater_walking_trigger");

		// Setting arcade physics sprites starts here
		this.physics.add.existing(underwater_hidden_lake_trigger);
		// Setting arcade physics sprites ends here

		// Setting triggers starts here
		this.triggers.push([underwater_walking_trigger, () => {
			onWalkingTrigger(this);
		}]);

		this.triggers.push([underwater_hidden_lake_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_HIDDEN_LAKE);
		}]);
		// Setting triggers ends here

		this.audioManager.play(UNDERWATER_ROOM_MUSIC);
		super.createContent(this);
    }

	update() {
		super.update();
	}
}
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SCENE_ROOM_BOILER_ROOM, SCENE_ROOM_CAVE, SCENE_ROOM_CAVE_MINE, SCENE_ROOM_MINE, SCENE_ROOM_PLAZA } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class CaveScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_CAVE);
    }

    init(data) {
        super.init(data);

        // Globals
        this.assetPath = "assets/world/rooms/cave/";
        this.textureKey = "cave";
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": this.textureKey,
            "paths": [`${this.assetPath}${this.textureKey}-pack.json`]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "cave_walking_trigger",
            "paths": [`${this.assetPath}cave_walking_trigger.png`]
        });
    }

    createContent() {
		// cave_bubbles0001_png_1
		const cave_bubbles0001_png_1 = this.add.sprite(602.7097727811744, 410.9862002840968, "cave", "cave_bubbles0001.png");

		// cave_bubbles0001_png_2
		const cave_bubbles0001_png_2 = this.add.sprite(825, 396, "cave", "cave_bubbles0001.png");

		// cave_bubbles0001_png_3
		const cave_bubbles0001_png_3 = this.add.sprite(1062, 388, "cave", "cave_bubbles0001.png");

		// cave_mr_krab0001_png
		const cave_mr_krab0001_png = this.add.sprite(882, 510, "cave", "cave_mr_krab0001.png");

		// cave_fish0001_png
		const cave_fish0001_png = this.add.sprite(1291, 417, "cave", "cave_fish0001.png");

		// cave_main_background_png
		const cave_main_background_png = this.add.image(-10, -12, "cave", "cave_main_background.png");
		cave_main_background_png.scaleX = 1.0230110432463828;
		cave_main_background_png.setOrigin(0, 0);

		// cave_top_part_png
		const cave_top_part_png = this.add.image(769, 397, "cave", "cave_top_part.png");

		// cave_bottom_left_part_png
		const cave_bottom_left_part_png = this.add.image(243, 559, "cave", "cave_bottom_left_part.png");

		// cave_boilerroom_door0001_png
		const cave_boilerroom_door0001_png = this.add.image(170, 468, "cave", "cave_boilerroom_door0001.png");

		// cave_red_hoop_png
		const cave_red_hoop_png = this.add.image(424, 346, "cave", "cave_red_hoop.png");

		// cave_white_chair_png
		const cave_white_chair_png = this.add.image(450, 500, "cave", "cave_white_chair.png");

		// cave_white_chair_arm_png
		const cave_white_chair_arm_png = this.add.image(399, 488, "cave", "cave_white_chair_arm.png");

		// cave_line_of_idk_png
		const cave_line_of_idk_png = this.add.image(820, 719, "cave", "cave_line_of_idk.png");
		cave_line_of_idk_png.scaleX = 1.057410409133954;
		cave_line_of_idk_png.scaleY = 1.2376878055619827;

		// cave_bottom_right_png
		const cave_bottom_right_png = this.add.image(1445, 853, "cave", "cave_bottom_right.png");

		// cave_left_side_board_1_png
		const cave_left_side_board_1_png = this.add.image(712, 498, "cave", "cave_left_side_board_1.png");
		cave_left_side_board_1_png.tintTopLeft = 12096874;
		cave_left_side_board_1_png.tintTopRight = 12096874;
		cave_left_side_board_1_png.tintBottomLeft = 12096874;
		cave_left_side_board_1_png.tintBottomRight = 12096874;

		// cave_left_side_board_2_png
		const cave_left_side_board_2_png = this.add.image(730, 504, "cave", "cave_left_side_board_2.png");
		cave_left_side_board_2_png.tintTopLeft = 9150029;
		cave_left_side_board_2_png.tintTopRight = 9150029;
		cave_left_side_board_2_png.tintBottomLeft = 9150029;
		cave_left_side_board_2_png.tintBottomRight = 9150029;

		// cave_right_side_board_png
		const cave_right_side_board_png = this.add.image(960, 487, "cave", "cave_right_side_board.png");
		cave_right_side_board_png.tintTopLeft = 12096874;
		cave_right_side_board_png.tintTopRight = 12096874;
		cave_right_side_board_png.tintBottomLeft = 12096874;
		cave_right_side_board_png.tintBottomRight = 12096874;

		// cave_boilerroom_door0002_png
		const cave_boilerroom_door0002_png = this.add.image(172, 487, "cave", "cave_boilerroom_door0002.png");
		cave_boilerroom_door0002_png.setOrigin(0.5104194107685572, 0.5559817474530273);
		cave_boilerroom_door0002_png.visible = false;

		// cave_cavemine_hover_trigger_png
		const cave_cavemine_hover_trigger_png = this.add.image(180, 470, "cave", "cave_cavemine_trigger.png");
		cave_cavemine_hover_trigger_png.scaleY = 1.445470565855288;
		cave_cavemine_hover_trigger_png.alpha = 0.001;
		cave_cavemine_hover_trigger_png.alphaTopLeft = 0.001;
		cave_cavemine_hover_trigger_png.alphaTopRight = 0.001;
		cave_cavemine_hover_trigger_png.alphaBottomLeft = 0.001;
		cave_cavemine_hover_trigger_png.alphaBottomRight = 0.001;

		// cave_walking_trigger
		const cave_walking_trigger = this.physics.add.sprite(755, 485, "cave_walking_trigger");
		cave_walking_trigger.alpha = 0.001;
		cave_walking_trigger.alphaTopLeft = 0.001;
		cave_walking_trigger.alphaTopRight = 0.001;
		cave_walking_trigger.alphaBottomLeft = 0.001;
		cave_walking_trigger.alphaBottomRight = 0.001;
		cave_walking_trigger.body.setSize(1520, 960, false);
		this.collisionMap = this.createCollisionMap(this, 755, 485, "cave_walking_trigger");

		// cave_boilerroom_trigger
		const cave_boilerroom_trigger = this.physics.add.sprite(106, 554, "cave", "cave_boilerroom_trigger.png");
		cave_boilerroom_trigger.alpha = 0.001;
		cave_boilerroom_trigger.alphaTopLeft = 0.001;
		cave_boilerroom_trigger.alphaTopRight = 0.001;
		cave_boilerroom_trigger.alphaBottomLeft = 0.001;
		cave_boilerroom_trigger.alphaBottomRight = 0.001;
		cave_boilerroom_trigger.body.setSize(226, 129, false);

		// cave_cavemine_trigger_png
		const cave_cavemine_trigger_png = this.physics.add.sprite(1506, 628, "cave", "cave_cavemine_trigger.png");
		cave_cavemine_trigger_png.alpha = 0.001;
		cave_cavemine_trigger_png.alphaTopLeft = 0.001;
		cave_cavemine_trigger_png.alphaTopRight = 0.001;
		cave_cavemine_trigger_png.alphaBottomLeft = 0.001;
		cave_cavemine_trigger_png.alphaBottomRight = 0.001;
		cave_cavemine_trigger_png.body.setSize(151, 223, false);

		// cave_plaza_trigger_png
		const cave_plaza_trigger_png = this.physics.add.sprite(1303, 522, "cave", "cave_plaza_trigger.png");
		cave_plaza_trigger_png.scaleX = 0.4624061075359891;
		cave_plaza_trigger_png.scaleY = 0.8209719436704068;
		cave_plaza_trigger_png.alpha = 0.001;
		cave_plaza_trigger_png.alphaTopLeft = 0.001;
		cave_plaza_trigger_png.alphaTopRight = 0.001;
		cave_plaza_trigger_png.alphaBottomLeft = 0.001;
		cave_plaza_trigger_png.alphaBottomRight = 0.001;
		cave_plaza_trigger_png.body.setSize(208, 101, false);

		// Setting triggers starts here
		this.triggers.push([cave_walking_trigger, () => {
			onWalkingTrigger(this);
		}]);

		this.triggers.push([cave_plaza_trigger_png, () => {
			onJoinRoomTrigger(SCENE_ROOM_PLAZA);
		}]);

		this.triggers.push([cave_cavemine_trigger_png, () => {
			onJoinRoomTrigger(SCENE_ROOM_MINE);
		}]);

		this.triggers.push([cave_boilerroom_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_BOILER_ROOM);
		}]);
		// Setting triggers ends here

        // Setting all interactives sprites starts here
        cave_cavemine_hover_trigger_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        cave_cavemine_hover_trigger_png.on("pointerover", () => {
            cave_boilerroom_door0001_png.visible = false;
            cave_boilerroom_door0002_png.visible = true;
        }); 

        cave_cavemine_hover_trigger_png.on("pointerout", () => {
            cave_boilerroom_door0001_png.visible = true;
            cave_boilerroom_door0002_png.visible = false;
        }); 
        // All interactive events ends here

		super.createContent(this);
    }

	update() {
		super.update();
	}
}
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { PLAZA_ROOM_MUSIC, PUFFLE_PARK_PUFFLE_SNORING, PUFFLE_PARK_ROOM_MUSIC, PUFFLE_PARK_SLIDE_DOWN, PUFFLE_PARK_SLIDE_DOWN_PUFFLE_CAT, PUFFLE_PARK_SLIDE_DOWN_PUFFLE_DOG, PUFFLE_PARK_ZIPLINE, PUFFLE_PARK_ZIPLINE_PUFFLE_CAT, PUFFLE_PARK_ZIPLINE_PUFFLE_DOG } from "../../../../audio/audioConstants";
import { SCENE_ROOM_PUFFLE_PARK } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

export class PuffleParkScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_PUFFLE_PARK)
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "pufflepark",
            "paths": ["assets/world/rooms/pufflepark/pufflepark-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_PARK_ROOM_MUSIC,
            "paths": [`assets/world/rooms/plaza/${PUFFLE_PARK_ROOM_MUSIC}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_PARK_PUFFLE_SNORING,
            "paths": [`assets/world/rooms/pufflepark/${PUFFLE_PARK_PUFFLE_SNORING}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_PARK_SLIDE_DOWN,
            "paths": [`assets/world/rooms/pufflepark/${PUFFLE_PARK_SLIDE_DOWN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_PARK_SLIDE_DOWN_PUFFLE_CAT,
            "paths": [`assets/world/rooms/pufflepark/${PUFFLE_PARK_SLIDE_DOWN_PUFFLE_CAT}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_PARK_SLIDE_DOWN_PUFFLE_DOG,
            "paths": [`assets/world/rooms/pufflepark/${PUFFLE_PARK_SLIDE_DOWN_PUFFLE_DOG}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_PARK_ZIPLINE,
            "paths": [`assets/world/rooms/pufflepark/${PUFFLE_PARK_SLIDE_DOWN_PUFFLE_DOG}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_PARK_ZIPLINE_PUFFLE_CAT,
            "paths": [`assets/world/rooms/pufflepark/${PUFFLE_PARK_ZIPLINE_PUFFLE_CAT}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_PARK_ZIPLINE_PUFFLE_DOG,
            "paths": [`assets/world/rooms/pufflepark/${PUFFLE_PARK_ZIPLINE_PUFFLE_DOG}.mp3`]
        });
    }

    createContent() {
		// puffle_park_sky_png
		const puffle_park_sky_png = this.add.image(779, 125, "pufflepark", "puffle_park_sky.png");
		puffle_park_sky_png.scaleY = 3.491414463448087;

		// puffle_park_clouds_png
		const puffle_park_clouds_png = this.add.image(936, 142, "pufflepark", "puffle_park_clouds.png");

		// puffle_park_background_png
		const puffle_park_background_png = this.add.image(-136, -4, "pufflepark", "puffle_park_background.png");
		puffle_park_background_png.setOrigin(0, 0);

		// puffle_park_berries_png
		const puffle_park_berries_png = this.add.image(423, 301, "pufflepark", "puffle_park_berries.png");

		// puffle_park_park_sign_png
		const puffle_park_park_sign_png = this.add.image(669, 182, "pufflepark", "puffle_park_park_sign.png");
		puffle_park_park_sign_png.scaleY = 1.1006750945214747;

		// puffle_park_puffle_park_text0005_png
		const puffle_park_puffle_park_text0005_png = this.add.image(670, 82, "pufflepark", "puffle_park_puffle_park_text0005.png");

		// puffle_park_pet_shop_png
		const puffle_park_pet_shop_png = this.add.image(110, 252, "pufflepark", "puffle_park_pet_shop.png");

		// puffle_park_pet_shop_door0001_png
		const puffle_park_pet_shop_door0001_png = this.add.image(147, 290, "pufflepark", "puffle_park_pet_shop_door0001.png");

		// symbol_337_png
		const symbol_337_png = this.add.image(-4, 380, "pufflepark", "Symbol 337.png");

		// puffle_park_purple_puffle_lg_png
		const puffle_park_purple_puffle_lg_png = this.add.image(240, 620, "pufflepark", "puffle_park_purple_puffle_lg.png");

		// puffle_park_puffle_bottom_right_right_sign_png
		const puffle_park_puffle_bottom_right_right_sign_png = this.add.image(344, 787, "pufflepark", "puffle_park_puffle_bottom_right_right_sign.png");

		// puffle_park_slide_png
		const puffle_park_slide_png = this.add.image(239, 708, "pufflepark", "puffle_park_slide.png");

		// puffle_park_purple_puffle_bottom_left_log_png
		const puffle_park_purple_puffle_bottom_left_log_png = this.add.image(190, 828, "pufflepark", "puffle_park_purple_puffle_bottom_left_log.png");

		// puffle_park_purple_puffle_left_logo_png
		const puffle_park_purple_puffle_left_logo_png = this.add.image(53, 647, "pufflepark", "puffle_park_purple_puffle_left_logo.png");

		// puffle_park_bottom_trees_png
		const puffle_park_bottom_trees_png = this.add.image(559, 895, "pufflepark", "puffle_park_bottom_trees.png");
		puffle_park_bottom_trees_png.scaleX = 1.0316787053426597;

		// puffle_park_middle_branch_png
		const puffle_park_middle_branch_png = this.add.image(472, 469, "pufflepark", "puffle_park_middle_branch.png");

		// puffle_park_bouncy_ball_png
		const puffle_park_bouncy_ball_png = this.add.image(1126, 845, "pufflepark", "puffle_park_bouncy_ball.png");

		// puffle_park_middle_branch_right0001_png
		const puffle_park_middle_branch_right0001_png = this.add.image(540, 435, "pufflepark", "puffle_park_middle_branch_right0001.png");

		// puffle_park_middle_branch_left_png
		const puffle_park_middle_branch_left_png = this.add.image(469, 451, "pufflepark", "puffle_park_middle_branch_left.png");

		// puffle_park_middle_ropes_png
		const puffle_park_middle_ropes_png = this.add.image(713, 571, "pufflepark", "puffle_park_middle_ropes.png");

		// puffle_park_middle_branch_lef0001_png
		const puffle_park_middle_branch_lef0001_png = this.add.image(460, 441, "pufflepark", "puffle_park_middle_branch_lef0001.png");

		// puffle_park_blue_rope_thing0001_png
		const puffle_park_blue_rope_thing0001_png = this.add.image(593, 240, "pufflepark", "puffle_park_blue_rope_thing0001.png");

		// puffle_park_middle_bottom_branch_png
		const puffle_park_middle_bottom_branch_png = this.add.image(889, 758, "pufflepark", "puffle_park_middle_bottom_branch.png");

		// puffle_park_tree_line_wheel_shadow_png
		const puffle_park_tree_line_wheel_shadow_png = this.add.image(1350, 710, "pufflepark", "puffle_park_tree_line_wheel_shadow.png");

		// puffle_park_puffle_bottom_right_sign_png
		const puffle_park_puffle_bottom_right_sign_png = this.add.image(1410, 811, "pufflepark", "puffle_park_puffle_bottom_right_sign.png");

		// puffle_park_bottom_right_tree_png
		const puffle_park_bottom_right_tree_png = this.add.image(-42, 653, "pufflepark", "puffle_park_bottom_right_tree.png");

		// puffle_park_bottom_middle_bush_png
		const puffle_park_bottom_middle_bush_png = this.add.image(36, 736, "pufflepark", "puffle_park_bottom_middle_bush.png");

		// puffle_park_tree_behind_bridge_png
		const puffle_park_tree_behind_bridge_png = this.add.image(881, 340, "pufflepark", "puffle_park_tree_behind_bridge.png");

		// puffle_park_bush_behind_bridge_png
		const puffle_park_bush_behind_bridge_png = this.add.image(945, 426, "pufflepark", "puffle_park_bush_behind_bridge.png");

		// puffle_park_bridge_png
		const puffle_park_bridge_png = this.add.image(888, 472, "pufflepark", "puffle_park_bridge.png");

		// puffle_park_bridge_rope_png
		const puffle_park_bridge_rope_png = this.add.image(816, 503, "pufflepark", "puffle_park_bridge_rope.png");

		// puffle_park_bridge_down_png
		const puffle_park_bridge_down_png = this.add.image(991, 546, "pufflepark", "puffle_park_bridge_down.png");

		// puffle_park_bridge_right_log_png
		const puffle_park_bridge_right_log_png = this.add.image(924, 580, "pufflepark", "puffle_park_bridge_right_log.png");

		// puffle_park_tree_stand_png
		const puffle_park_tree_stand_png = this.add.image(1172, 427, "pufflepark", "puffle_park_tree_stand.png");

		// puffle_park_tree_green_thing_png
		const puffle_park_tree_green_thing_png = this.add.image(1078, 270, "pufflepark", "puffle_park_tree_green_thing.png");

		// puffle_park_zzz_tree_png
		const puffle_park_zzz_tree_png = this.add.image(1164, 444, "pufflepark", "puffle_park_zzz_tree.png");

		// puffle_park_bottom_middle_bush_png_1
		const puffle_park_bottom_middle_bush_png_1 = this.add.image(1267, 610, "pufflepark", "puffle_park_bottom_middle_bush.png");
		puffle_park_bottom_middle_bush_png_1.scaleX = 1.261959840287543;
		puffle_park_bottom_middle_bush_png_1.scaleY = 1.2808270088668159;

		// puffle_park_bridge_ending_png
		const puffle_park_bridge_ending_png = this.add.image(1125, 676, "pufflepark", "puffle_park_bridge_ending.png");

		// puffle_park_pink_puffle_png
		const puffle_park_pink_puffle_png = this.add.image(1101, 677, "pufflepark", "puffle_park_pink_puffle.png");

		// puffle_park_pet_shop_door0002_png
		const puffle_park_pet_shop_door0002_png = this.add.image(147, 290, "pufflepark", "puffle_park_pet_shop_door0002.png");
		puffle_park_pet_shop_door0002_png.visible = false;

		// puffle_park_pet_shop_door_trigger
		const puffle_park_pet_shop_door_trigger = this.add.image(146, 296, "pufflepark", "puffle_park_pet_shop_door0004.png");
		puffle_park_pet_shop_door_trigger.alpha = 0.001;
		puffle_park_pet_shop_door_trigger.alphaTopLeft = 0.001;
		puffle_park_pet_shop_door_trigger.alphaTopRight = 0.001;
		puffle_park_pet_shop_door_trigger.alphaBottomLeft = 0.001;
		puffle_park_pet_shop_door_trigger.alphaBottomRight = 0.001;

		// puffle_park_tree_branch_png
		const puffle_park_tree_branch_png = this.add.image(1301, 235, "pufflepark", "puffle_park_tree_branch.png");

		// puffle_park_ball_sign_png
		const puffle_park_ball_sign_png = this.add.image(1268, 585, "pufflepark", "puffle_park_ball_sign.png");

		// puffle_park_tree_line_wheel_png
		const puffle_park_tree_line_wheel_png = this.add.image(1340, 462, "pufflepark", "puffle_park_tree_line_wheel.png");

		// puffle_park_fire_hydrant_png
		const puffle_park_fire_hydrant_png = this.add.image(620, 381, "pufflepark", "puffle_park_fire_hydrant.png");

		// puffle_park_fire_hydrant_hover_trigger0004_png
		const puffle_park_fire_hydrant_hover_trigger0004_png = this.add.image(701, 379, "pufflepark", "puffle_park_fire_hydrant_hover_trigger0004.png");
		puffle_park_fire_hydrant_hover_trigger0004_png.alpha = 0.001;
		puffle_park_fire_hydrant_hover_trigger0004_png.alphaTopLeft = 0.001;
		puffle_park_fire_hydrant_hover_trigger0004_png.alphaTopRight = 0.001;
		puffle_park_fire_hydrant_hover_trigger0004_png.alphaBottomLeft = 0.001;
		puffle_park_fire_hydrant_hover_trigger0004_png.alphaBottomRight = 0.001;

		// puffle_park_park_sign_trigger0004_png
		const puffle_park_park_sign_trigger0004_png = this.add.image(679, 186, "pufflepark", "puffle_park_park_sign_trigger0004.png");
		puffle_park_park_sign_trigger0004_png.alpha = 0.001;
		puffle_park_park_sign_trigger0004_png.alphaTopLeft = 0.001;
		puffle_park_park_sign_trigger0004_png.alphaTopRight = 0.001;
		puffle_park_park_sign_trigger0004_png.alphaBottomLeft = 0.001;
		puffle_park_park_sign_trigger0004_png.alphaBottomRight = 0.001;

		// puffle_park_green_thing_on_tree_trigger0004_png
		const puffle_park_green_thing_on_tree_trigger0004_png = this.add.image(1156, 271, "pufflepark", "puffle_park_green_thing_on_tree_trigger0004.png");
		puffle_park_green_thing_on_tree_trigger0004_png.scaleY = 0.8204985946173781;
		puffle_park_green_thing_on_tree_trigger0004_png.alpha = 0.001;
		puffle_park_green_thing_on_tree_trigger0004_png.alphaTopLeft = 0.001;
		puffle_park_green_thing_on_tree_trigger0004_png.alphaTopRight = 0.001;
		puffle_park_green_thing_on_tree_trigger0004_png.alphaBottomLeft = 0.001;
		puffle_park_green_thing_on_tree_trigger0004_png.alphaBottomRight = 0.001;

		// puffle_park_puffle_sign_hover_trigger0004_png
		const puffle_park_puffle_sign_hover_trigger0004_png = this.add.image(1432, 772, "pufflepark", "puffle_park_puffle_sign_hover_trigger0004.png");
		puffle_park_puffle_sign_hover_trigger0004_png.alpha = 0.001;
		puffle_park_puffle_sign_hover_trigger0004_png.alphaTopLeft = 0.001;
		puffle_park_puffle_sign_hover_trigger0004_png.alphaTopRight = 0.001;
		puffle_park_puffle_sign_hover_trigger0004_png.alphaBottomLeft = 0.001;
		puffle_park_puffle_sign_hover_trigger0004_png.alphaBottomRight = 0.001;

		// puffle_park_rope_down_hover_trigger0004_png
		const puffle_park_rope_down_hover_trigger0004_png = this.add.image(1324, 592, "pufflepark", "puffle_park_rope_down_hover_trigger0004.png");
		puffle_park_rope_down_hover_trigger0004_png.alpha = 0.001;
		puffle_park_rope_down_hover_trigger0004_png.alphaTopLeft = 0.001;
		puffle_park_rope_down_hover_trigger0004_png.alphaTopRight = 0.001;
		puffle_park_rope_down_hover_trigger0004_png.alphaBottomLeft = 0.001;
		puffle_park_rope_down_hover_trigger0004_png.alphaBottomRight = 0.001;

		// puffle_park_berries_hover_trigger0004_png
		const puffle_park_berries_hover_trigger0004_png = this.add.image(437, 245, "pufflepark", "puffle_park_berries_hover_trigger0004.png");
		puffle_park_berries_hover_trigger0004_png.scaleX = 1.3858339688038226;
		puffle_park_berries_hover_trigger0004_png.alpha = 0.001;
		puffle_park_berries_hover_trigger0004_png.alphaTopLeft = 0.001;
		puffle_park_berries_hover_trigger0004_png.alphaTopRight = 0.001;
		puffle_park_berries_hover_trigger0004_png.alphaBottomLeft = 0.001;
		puffle_park_berries_hover_trigger0004_png.alphaBottomRight = 0.001;

		// puffle_park_slide_hover_trigger0004_png
		const puffle_park_slide_hover_trigger0004_png = this.add.image(155, 602, "pufflepark", "puffle_park_slide_hover_trigger0004.png");
		puffle_park_slide_hover_trigger0004_png.alpha = 0.001;
		puffle_park_slide_hover_trigger0004_png.alphaTopLeft = 0.001;
		puffle_park_slide_hover_trigger0004_png.alphaTopRight = 0.001;
		puffle_park_slide_hover_trigger0004_png.alphaBottomLeft = 0.001;
		puffle_park_slide_hover_trigger0004_png.alphaBottomRight = 0.001;

		// puffle_park_tree_hover_trigger0004_png
		const puffle_park_tree_hover_trigger0004_png = this.add.image(1117, 535, "pufflepark", "puffle_park_tree_hover_trigger0004.png");
		puffle_park_tree_hover_trigger0004_png.alpha = 0.001;
		puffle_park_tree_hover_trigger0004_png.alphaTopLeft = 0.001;
		puffle_park_tree_hover_trigger0004_png.alphaTopRight = 0.001;
		puffle_park_tree_hover_trigger0004_png.alphaBottomLeft = 0.001;
		puffle_park_tree_hover_trigger0004_png.alphaBottomRight = 0.001;

		// puffle_park_rope_down_hover_trigger0004_png_1
		const puffle_park_rope_down_hover_trigger0004_png_1 = this.add.image(503, 441, "pufflepark", "puffle_park_rope_down_hover_trigger0004.png");
		puffle_park_rope_down_hover_trigger0004_png_1.alpha = 0.001;
		puffle_park_rope_down_hover_trigger0004_png_1.alphaTopLeft = 0.001;
		puffle_park_rope_down_hover_trigger0004_png_1.alphaTopRight = 0.001;
		puffle_park_rope_down_hover_trigger0004_png_1.alphaBottomLeft = 0.001;
		puffle_park_rope_down_hover_trigger0004_png_1.alphaBottomRight = 0.001;

        // Setting all interactives sprites starts here
        puffle_park_pet_shop_door_trigger.setInteractive({ useHandCursor: true });
        puffle_park_fire_hydrant_hover_trigger0004_png.setInteractive({ useHandCursor: true });
        puffle_park_park_sign_trigger0004_png.setInteractive({ useHandCursor: true });
        puffle_park_green_thing_on_tree_trigger0004_png.setInteractive({ useHandCursor: true });
        puffle_park_puffle_sign_hover_trigger0004_png.setInteractive({ useHandCursor: true });
        puffle_park_rope_down_hover_trigger0004_png.setInteractive({ useHandCursor: true });
        puffle_park_berries_hover_trigger0004_png.setInteractive({ useHandCursor: true });
        puffle_park_slide_hover_trigger0004_png.setInteractive({ useHandCursor: true });
        puffle_park_tree_hover_trigger0004_png.setInteractive({ useHandCursor: true });
        puffle_park_rope_down_hover_trigger0004_png_1.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        puffle_park_pet_shop_door_trigger.on("pointerover", () => {
            puffle_park_pet_shop_door0001_png.visible = false;
            puffle_park_pet_shop_door0002_png.visible = true;
        }); 

        puffle_park_pet_shop_door_trigger.on("pointerout", () => {
            puffle_park_pet_shop_door0001_png.visible = true;
            puffle_park_pet_shop_door0002_png.visible = false;
        });
        // All interactive events ends here

        this.audioManager.play(PUFFLE_PARK_ROOM_MUSIC); // Plaza is the same as puffle park
    }
}
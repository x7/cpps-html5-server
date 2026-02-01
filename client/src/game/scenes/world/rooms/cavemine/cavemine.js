import { ASSET_TYPES } from '../../../../assets/assetTypes.js';
import { CAVE_ROOM_LIGHT_OFF, CAVE_ROOM_LIGHT_ON, CAVE_ROOM_MUSIC } from '../../../../audio/audioConstants.js';
import { SCENE_ROOM_CAVE_MINE } from '../../../sceneNames.js';
import { RoomScene } from '../RoomScene.js';

// TODO: add trigger for left exit door cause the door hitbox is buggy

export class CaveMineScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_CAVE_MINE)
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "cavemine",
            "paths": ["assets/world/rooms/cavemine/cavemine-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": CAVE_ROOM_MUSIC,
            "paths": ["assets/world/rooms/cavemine/cavemine_room_music.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": CAVE_ROOM_LIGHT_ON,
            "paths": ["assets/world/rooms/cavemine/cavemine_room_light_on.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": CAVE_ROOM_LIGHT_OFF,
            "paths": ["assets/world/rooms/cavemine/cavemine_room_light_off.mp3"]
        });
    }

    createContent() {
		// cave_mine_background_png
		const cave_mine_background_png = this.add.image(882, 490, "cavemine", "cave_mine_background.png");

		// cave_mine_floor_png
		const cave_mine_floor_png = this.add.image(883, 571, "cavemine", "cave_mine_floor.png");

		// cave_mine_right_coffee_table_chair_png
		const cave_mine_right_coffee_table_chair_png = this.add.image(522, 840, "cavemine", "cave_mine_right_coffee_table_chair.png");

		// cave_mine_left_coffee_table_chair_png
		const cave_mine_left_coffee_table_chair_png = this.add.image(398, 789, "cavemine", "cave_mine_left_coffee_table_chair.png");

		// cave_mine_coffee_table_png
		const cave_mine_coffee_table_png = this.add.image(355, 884, "cavemine", "cave_mine_coffee_table.png");

		// cave_mine_left_side_top_rope_png
		const cave_mine_left_side_top_rope_png = this.add.image(398, 353, "cavemine", "cave_mine_left_side_top_rope.png");
		cave_mine_left_side_top_rope_png.scaleX = 1.068881649363238;

		// cave_mine_left_rope_bridge_png
		const cave_mine_left_rope_bridge_png = this.add.image(453, 427, "cavemine", "cave_mine_left_rope_bridge.png");

		// cave_mine_big_rock_png
		const cave_mine_big_rock_png = this.add.image(407, 508, "cavemine", "cave_mine_big_rock.png");

		// cave_mine_left_exit_png
		const cave_mine_left_exit_png = this.add.image(262, 554, "cavemine", "cave_mine_left_exit.png");

		// cave_mine_left_door_exit_hover_png
		const cave_mine_left_door_exit_hover_png = this.add.image(261, 565, "cavemine", "cave_mine_left_door_exit_hover.png");
		cave_mine_left_door_exit_hover_png.scaleX = 1.010593449626388;
		cave_mine_left_door_exit_hover_png.visible = false;

		// cave_mine_golden_puffle_dots_png
		const cave_mine_golden_puffle_dots_png = this.add.image(370, 76, "cavemine", "cave_mine_golden_puffle_dots.png");

		// cave_mine_left_exit_top_part_png
		const cave_mine_left_exit_top_part_png = this.add.image(181, 387, "cavemine", "cave_mine_left_exit_top_part.png");
		cave_mine_left_exit_top_part_png.scaleX = 0.9545831445567867;

		// cave_mine_golden_puffle_drill_png
		const cave_mine_golden_puffle_drill_png = this.add.image(366, 210, "cavemine", "cave_mine_golden_puffle_drill.png");

		// cave_mine_golden_under_puffle_light_png
		const cave_mine_golden_under_puffle_light_png = this.add.image(474, 195, "cavemine", "cave_mine_golden_under_puffle_light.png");

		// cave_mine_outer_layer_png
		const cave_mine_outer_layer_png = this.add.image(893, 518, "cavemine", "cave_mine_outer_layer.png");

		// cave_mine_top_rope_bridge_png
		const cave_mine_top_rope_bridge_png = this.add.image(548, 344, "cavemine", "cave_mine_top_rope_bridge.png");
		cave_mine_top_rope_bridge_png.scaleX = 0.9503765243253095;

		// cave_mine_going_up_rope_png
		const cave_mine_going_up_rope_png = this.add.image(660, 403, "cavemine", "cave_mine_going_up_rope.png");

		// cave_mine_tiny_rock_png
		const cave_mine_tiny_rock_png = this.add.image(522, 583, "cavemine", "cave_mine_tiny_rock.png");

		// cave_mine_dig_for_coins_instructions_png
		const cave_mine_dig_for_coins_instructions_png = this.add.image(858, 351, "cavemine", "cave_mine_dig_for_coins_instructions.png");

		// cave_mine_dig_for_coins_instructions_text_png
		const cave_mine_dig_for_coins_instructions_text_png = this.add.image(855, 328, "cavemine", "cave_mine_dig_for_coins_instructions_text.png");

		// cave_mine_right_exit_png
		const cave_mine_right_exit_png = this.add.image(1046, 449, "cavemine", "cave_mine_right_exit.png");

		// cave_mine_hard_hats0001_png
		const cave_mine_hard_hats0001_png = this.add.image(850, 472, "cavemine", "cave_mine_hard_hats0001.png");

		// cave_mine_golden_puffle_light_png
		const cave_mine_golden_puffle_light_png = this.add.image(477, 196, "cavemine", "cave_mine_golden_puffle_light.png");
		cave_mine_golden_puffle_light_png.visible = false;

		// cave_mine_top_rockk_png
		const cave_mine_top_rockk_png = this.add.image(907, 293, "cavemine", "cave_mine_top_rockk.png");
		cave_mine_top_rockk_png.scaleX = 1.0242718664146362;

		// cave_mine_drill_spots_png
		const cave_mine_drill_spots_png = this.add.image(1110, 566, "cavemine", "cave_mine_drill_spots.png");

		// cave_mine_right_side_big_sheet_png
		const cave_mine_right_side_big_sheet_png = this.add.image(1487, 669, "cavemine", "cave_mine_right_side_big_sheet.png");

		// cave_mine_driller_png
		const cave_mine_driller_png = this.add.image(1222, 127, "cavemine", "cave_mine_driller.png");

		// cave_mine_drill_png
		const cave_mine_drill_png = this.add.image(1505, 176, "cavemine", "cave_mine_drill.png");
		cave_mine_drill_png.scaleY = 1.0743713079282295;

		// cave_mine_background_png_1
		const cave_mine_background_png_1 = this.add.image(882, 490, "cavemine", "cave_mine_background.png");

		// cave_mine_floor_png_1
		const cave_mine_floor_png_1 = this.add.image(883, 571, "cavemine", "cave_mine_floor.png");

		// cave_mine_right_exit_door_hover_png_1
		const cave_mine_right_exit_door_hover_png_1 = this.add.image(1088, 394, "cavemine", "cave_mine_right_exit_door_hover.png");
		cave_mine_right_exit_door_hover_png_1.alpha = 0.001;
		cave_mine_right_exit_door_hover_png_1.alphaTopLeft = 0.001;
		cave_mine_right_exit_door_hover_png_1.alphaTopRight = 0.001;
		cave_mine_right_exit_door_hover_png_1.alphaBottomLeft = 0.001;
		cave_mine_right_exit_door_hover_png_1.alphaBottomRight = 0.001;

		// cave_mine_right_coffee_table_chair_png_1
		const cave_mine_right_coffee_table_chair_png_1 = this.add.image(522, 840, "cavemine", "cave_mine_right_coffee_table_chair.png");

		// cave_mine_left_coffee_table_chair_png_1
		const cave_mine_left_coffee_table_chair_png_1 = this.add.image(398, 789, "cavemine", "cave_mine_left_coffee_table_chair.png");

		// cave_mine_coffee_table_png_1
		const cave_mine_coffee_table_png_1 = this.add.image(355, 884, "cavemine", "cave_mine_coffee_table.png");

		// cave_mine_left_side_top_rope_png_1
		const cave_mine_left_side_top_rope_png_1 = this.add.image(398, 353, "cavemine", "cave_mine_left_side_top_rope.png");
		cave_mine_left_side_top_rope_png_1.scaleX = 1.068881649363238;

		// cave_mine_left_rope_bridge_png_1
		const cave_mine_left_rope_bridge_png_1 = this.add.image(453, 427, "cavemine", "cave_mine_left_rope_bridge.png");

		// cave_mine_big_rock_png_1
		const cave_mine_big_rock_png_1 = this.add.image(407, 508, "cavemine", "cave_mine_big_rock.png");

		// cave_mine_left_exit_png_1
		const cave_mine_left_exit_png_1 = this.add.image(262, 554, "cavemine", "cave_mine_left_exit.png");

		// cave_mine_left_door_exit_hover_png_1
		const cave_mine_left_door_exit_hover_png_1 = this.add.image(261, 565, "cavemine", "cave_mine_left_door_exit_hover.png");
		cave_mine_left_door_exit_hover_png_1.scaleX = 1.010593449626388;
		cave_mine_left_door_exit_hover_png_1.visible = false;

		// cave_mine_golden_puffle_dots_png_1
		const cave_mine_golden_puffle_dots_png_1 = this.add.image(370, 76, "cavemine", "cave_mine_golden_puffle_dots.png");

		// cave_mine_left_exit_top_part_png_1
		const cave_mine_left_exit_top_part_png_1 = this.add.image(181, 387, "cavemine", "cave_mine_left_exit_top_part.png");
		cave_mine_left_exit_top_part_png_1.scaleX = 0.9545831445567867;

		// cave_mine_golden_puffle_drill_png_1
		const cave_mine_golden_puffle_drill_png_1 = this.add.image(366, 210, "cavemine", "cave_mine_golden_puffle_drill.png");

		// cave_mine_golden_under_puffle_light_png_1
		const cave_mine_golden_under_puffle_light_png_1 = this.add.image(474, 195, "cavemine", "cave_mine_golden_under_puffle_light.png");

		// cave_mine_outer_layer_png_1
		const cave_mine_outer_layer_png_1 = this.add.image(893, 518, "cavemine", "cave_mine_outer_layer.png");

		// cave_mine_top_rope_bridge_png_1
		const cave_mine_top_rope_bridge_png_1 = this.add.image(548, 344, "cavemine", "cave_mine_top_rope_bridge.png");
		cave_mine_top_rope_bridge_png_1.scaleX = 0.9503765243253095;

		// cave_mine_going_up_rope_png_1
		const cave_mine_going_up_rope_png_1 = this.add.image(660, 403, "cavemine", "cave_mine_going_up_rope.png");

		// cave_mine_tiny_rock_png_1
		const cave_mine_tiny_rock_png_1 = this.add.image(522, 583, "cavemine", "cave_mine_tiny_rock.png");

		// cave_mine_dig_for_coins_instructions_png_1
		const cave_mine_dig_for_coins_instructions_png_1 = this.add.image(858, 351, "cavemine", "cave_mine_dig_for_coins_instructions.png");

		// cave_mine_dig_for_coins_instructions_text_png_1
		const cave_mine_dig_for_coins_instructions_text_png_1 = this.add.image(855, 328, "cavemine", "cave_mine_dig_for_coins_instructions_text.png");

		// cave_mine_right_exit_png_1
		const cave_mine_right_exit_png_1 = this.add.image(1046, 449, "cavemine", "cave_mine_right_exit.png");

		// cave_mine_hard_hats0001_png_1
		const cave_mine_hard_hats0001_png_1 = this.add.image(850, 472, "cavemine", "cave_mine_hard_hats0001.png");

		// cave_mine_golden_puffle_light_png_1
		const cave_mine_golden_puffle_light_png_1 = this.add.image(477, 196, "cavemine", "cave_mine_golden_puffle_light.png");
		cave_mine_golden_puffle_light_png_1.visible = false;

		// cave_mine_top_rockk_png_1
		const cave_mine_top_rockk_png_1 = this.add.image(907, 293, "cavemine", "cave_mine_top_rockk.png");
		cave_mine_top_rockk_png_1.scaleX = 1.0242718664146362;

		// cave_mine_drill_spots_png_1
		const cave_mine_drill_spots_png_1 = this.add.image(1112, 565, "cavemine", "cave_mine_drill_spots.png");
		cave_mine_drill_spots_png_1.scaleY = 1.168426539448515;

		// cave_mine_right_side_big_sheet_png_1
		const cave_mine_right_side_big_sheet_png_1 = this.add.image(1487, 669, "cavemine", "cave_mine_right_side_big_sheet.png");

		// cave_mine_driller_png_1
		const cave_mine_driller_png_1 = this.add.image(1222, 127, "cavemine", "cave_mine_driller.png");

		// cave_mine_drill_png_1
		const cave_mine_drill_png_1 = this.add.image(1505, 176, "cavemine", "cave_mine_drill.png");
		cave_mine_drill_png_1.scaleY = 1.0743713079282295;

		// cave_mine_hard_hats0001_png_1_hovered
		const cave_mine_hard_hats0001_png_1_hovered = this.add.image(850, 472, "cavemine", "cave_mine_hard_hats0001.png");
		cave_mine_hard_hats0001_png_1_hovered.scaleX = 1.0177853724515475;
		cave_mine_hard_hats0001_png_1_hovered.scaleY = 1.0328829190691855;
		cave_mine_hard_hats0001_png_1_hovered.visible = false;

        // Setting all interactives sprites starts here
        cave_mine_hard_hats0001_png_1.setInteractive({ useHandCursor: true });
        cave_mine_hard_hats0001_png_1_hovered.setInteractive({ useHandCursor: true });    
        cave_mine_dig_for_coins_instructions_png_1.setInteractive({ useHandCursor: true });
        cave_mine_left_exit_png_1.setInteractive({ useHandCursor: true });
        cave_mine_left_door_exit_hover_png_1.setInteractive({ useHandCursor: true });
        cave_mine_right_exit_door_hover_png_1.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        cave_mine_hard_hats0001_png_1.on("pointerover", () => {
            cave_mine_hard_hats0001_png_1.visible = false;
            cave_mine_hard_hats0001_png_1_hovered.visible = true;
        });

        cave_mine_hard_hats0001_png_1_hovered.on("pointerout", () => {
            cave_mine_hard_hats0001_png_1.visible = true;
            cave_mine_hard_hats0001_png_1_hovered.visible = false;
        });

        cave_mine_dig_for_coins_instructions_png_1.on("pointerover", () => {
        });

        cave_mine_dig_for_coins_instructions_png_1.on("pointerout", () => {
        });

        cave_mine_dig_for_coins_instructions_png_1.on("pointerdown", () => {
        });

        cave_mine_left_exit_png_1.on("pointerover", () => {
            cave_mine_left_door_exit_hover_png_1.visible = true;
            this.audioManager.play(CAVE_ROOM_LIGHT_ON);
        });

        cave_mine_left_door_exit_hover_png_1.on("pointerout", () => {
            cave_mine_left_door_exit_hover_png_1.visible = false;
            this.audioManager.play(CAVE_ROOM_LIGHT_OFF);
        });

        cave_mine_right_exit_door_hover_png_1.on("pointerover", () => {
            cave_mine_right_exit_door_hover_png_1.alpha = 1;
            cave_mine_right_exit_door_hover_png_1.alphaTopLeft = 1;
            cave_mine_right_exit_door_hover_png_1.alphaTopRight = 1;
            cave_mine_right_exit_door_hover_png_1.alphaBottomLeft = 1;
            cave_mine_right_exit_door_hover_png_1.alphaBottomRight = 1;
            this.audioManager.play(CAVE_ROOM_LIGHT_ON);
        });

        cave_mine_right_exit_door_hover_png_1.on("pointerout", () => {
            cave_mine_right_exit_door_hover_png_1.alpha = 0.001;
            cave_mine_right_exit_door_hover_png_1.alphaTopLeft = 0.001;
            cave_mine_right_exit_door_hover_png_1.alphaTopRight = 0.001;
            cave_mine_right_exit_door_hover_png_1.alphaBottomLeft = 0.001;
            cave_mine_right_exit_door_hover_png_1.alphaBottomRight = 0.001;
            this.audioManager.play(CAVE_ROOM_LIGHT_OFF);
        });
        // All interactive events ends here

        this.audioManager.play(CAVE_ROOM_MUSIC);
    }
}
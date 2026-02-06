import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SCENE_ROOM_AGENT_LOBBY } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

export class AgentLobbyScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_AGENT_LOBBY);
    }

    init(data) {
        super.init(data);

        // Globals
        this.assetPath = "assets/world/rooms/agentlobby/";
        this.textureKey = "agentlobby";
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": this.textureKey,
            "paths": [`${this.assetPath}/${this.textureKey}-pack.json`]
        });
    }

    createContent() {
// agent_lobby_water_opening_epf0001_png
		const agent_lobby_water_opening_epf0001_png = this.add.sprite(757, 82, "agentlobby", "agent_lobby_water_opening_epf0001.png");

		// agent_lobby_background_png
		const agent_lobby_background_png = this.add.image(-120, 0, "agentlobby", "agent_lobby_background.png");
		agent_lobby_background_png.setOrigin(0, 0);

		// agent_lobby_top_table_png
		const agent_lobby_top_table_png = this.add.image(761, 351, "agentlobby", "agent_lobby_top_table.png");

		// agent_lobby_orange_big_chair_png
		const agent_lobby_orange_big_chair_png = this.add.image(1356, 487, "agentlobby", "agent_lobby_orange_big_chair.png");

		// agent_lobby_orange_big_chair_arm_png
		const agent_lobby_orange_big_chair_arm_png = this.add.image(1414, 501, "agentlobby", "agent_lobby_orange_big_chair_arm.png");

		// agent_lobby_orange_big_chair_table_top_png
		const agent_lobby_orange_big_chair_table_top_png = this.add.image(1169, 499, "agentlobby", "agent_lobby_orange_big_chair_table_top.png");

		// agent_lobby_orange_big_chair_table_bottomm_png
		const agent_lobby_orange_big_chair_table_bottomm_png = this.add.image(1352, 598, "agentlobby", "agent_lobby_orange_big_chair_table_bottomm.png");

		// agent_lobby_door_png
		const agent_lobby_door_png = this.add.image(274, 387, "agentlobby", "agent_lobby_door.png");

		// agent_lobby_water_bottle_png
		const agent_lobby_water_bottle_png = this.add.image(472, 681, "agentlobby", "agent_lobby_water_bottle.png");

		// agent_lobby_small_fish0001_png
		const agent_lobby_small_fish0001_png = this.add.sprite(470, 655, "agentlobby", "agent_lobby_small_fish0001.png");

		// agent_lobby_smaller_bottom_part_png
		const agent_lobby_smaller_bottom_part_png = this.add.image(893, 735, "agentlobby", "agent_lobby_smaller_bottom_part.png");

		// agent_lobby_ski_village_door0001_png
		const agent_lobby_ski_village_door0001_png = this.add.image(23, 354, "agentlobby", "agent_lobby_ski_village_door0001.png");

		// agent_lobby_door_railing_png
		const agent_lobby_door_railing_png = this.add.image(157, 538, "agentlobby", "agent_lobby_door_railing.png");

		// agent_lobby_orange_chair_3_png
		const agent_lobby_orange_chair_3_png = this.add.image(675, 730, "agentlobby", "agent_lobby_orange_chair_3.png");

		// agent_lobby_blue_bush_png
		const agent_lobby_blue_bush_png = this.add.image(159, 581, "agentlobby", "agent_lobby_blue_bush.png");

		// agent_lobby_orange_chair_4_png
		const agent_lobby_orange_chair_4_png = this.add.image(746, 774, "agentlobby", "agent_lobby_orange_chair_4.png");

		// agent_lobby_orange_chair_6_png
		const agent_lobby_orange_chair_6_png = this.add.image(849, 731, "agentlobby", "agent_lobby_orange_chair_5.png");

		// agent_lobby_orange_chair_6_png_1
		const agent_lobby_orange_chair_6_png_1 = this.add.image(1202, 749, "agentlobby", "agent_lobby_orange_chair_6.png");

		// agent_lobby_orange_chair_2_png_1
		const agent_lobby_orange_chair_2_png_1 = this.add.image(1131, 789, "agentlobby", "agent_lobby_orange_chair_2.png");

		// agent_lobby_coffee_machine_png
		const agent_lobby_coffee_machine_png = this.add.image(12, 599, "agentlobby", "agent_lobby_coffee_machine.png");

		// agent_lobby_bottom_part_png
		const agent_lobby_bottom_part_png = this.add.image(748, 490, "agentlobby", "agent_lobby_bottom_part.png");

		// agent_lobby_top_epf_grass0001_png
		const agent_lobby_top_epf_grass0001_png = this.add.sprite(502, 202, "agentlobby", "agent_lobby_top_epf_grass0001.png");

		// agent_lobby_blue_chair_bottom_png
		const agent_lobby_blue_chair_bottom_png = this.add.image(1164, 625, "agentlobby", "agent_lobby_blue_chair_bottom.png");

		// agent_lobby_blue_chair_top_png
		const agent_lobby_blue_chair_top_png = this.add.image(1130, 624, "agentlobby", "agent_lobby_blue_chair_top.png");

		// agent_lobby_bottom_left_table_png
		const agent_lobby_bottom_left_table_png = this.add.image(267, 720, "agentlobby", "agent_lobby_bottom_left_table.png");

		// agent_lobby_orange_chair_1_png
		const agent_lobby_orange_chair_1_png = this.add.image(608, 381, "agentlobby", "agent_lobby_orange_chair_1.png");

		// agent_lobby_orange_chair_2_png
		const agent_lobby_orange_chair_2_png = this.add.image(764, 399, "agentlobby", "agent_lobby_orange_chair_2.png");

		// agent_lobby_top_desk_png
		const agent_lobby_top_desk_png = this.add.image(512, 403, "agentlobby", "agent_lobby_top_desk.png");

		// agent_lobby_top_desk_2_png
		const agent_lobby_top_desk_2_png = this.add.image(740, 464, "agentlobby", "agent_lobby_top_desk_2.png");

		// agent_lobby_tv_map0001_png
		const agent_lobby_tv_map0001_png = this.add.image(474, 152, "agentlobby", "agent_lobby_tv_map0001.png");

		// agent_lobby_tc_png
		const agent_lobby_tc_png = this.add.image(485, 108, "agentlobby", "agent_lobby_tc.png");

		// agent_lobby_phone_booth0001_png
		const agent_lobby_phone_booth0001_png = this.add.image(580, -165, "agentlobby", "agent_lobby_phone_booth0001.png");

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "agent_lobby_desk_grass_top_open_animation",
            "phaserAnimationKey": "agent_lobby_desk_grass_top_open_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "agent_lobby_top_epf_grass",
            "frames": Array.from({ length: 275 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "agent_lobby_water_epf_open_animation",
            "phaserAnimationKey": "agent_lobby_water_epf_open_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "agent_lobby_water_opening_epf",
            "frames": Array.from({ length: 275 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "agent_lobby_small_fish_animation",
            "phaserAnimationKey": "agent_lobby_small_fish_animation_play",
            "textureKey": this.textureKey,
            "framePrefix": "agent_lobby_small_fish",
            "frames": Array.from({ length: 361 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        agent_lobby_water_opening_epf0001_png.play("agent_lobby_water_epf_open_animation_play");
        agent_lobby_top_epf_grass0001_png.play("agent_lobby_desk_grass_top_animation_play");
        agent_lobby_small_fish0001_png.play("agent_lobby_small_fish_animation_play");
        // Creating animations ends here
    }
}
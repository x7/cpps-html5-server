import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { PIZZA_PARLOR_CASH_REGISTER_CLOSE, PIZZA_PARLOR_CASH_REGISTER_OPEN, PIZZA_PARLOR_KITCHEN_DOOR_CLOSE, PIZZA_PARLOR_KITCHEN_DOOR_OPEN, PIZZA_PARLOR_PLAZA_DOOR_CLOSE, PIZZA_PARLOR_PLAZA_DOOR_OPEN, PIZZA_PARLOR_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_PIZZA_PARLOR, SCENE_ROOM_PLAZA } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

// TODO: Fix left middle side open space
// TODO: Add missing pizza animation

export class PizzaParlorScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_PIZZA_PARLOR);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "pizzaparlor",
            "paths": ["assets/world/rooms/pizzaparlor/pizzaparlor-pack.json"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "pizza_parlor_walking_trigger0001",
            "paths": ["assets/world/rooms/pizzaparlor/pizza_parlor_walking_trigger0001.png"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PIZZA_PARLOR_ROOM_MUSIC,
            "paths": [`assets/world/rooms/pizzaparlor/${PIZZA_PARLOR_ROOM_MUSIC}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PIZZA_PARLOR_PLAZA_DOOR_OPEN,
            "paths": [`assets/world/rooms/pizzaparlor/${PIZZA_PARLOR_PLAZA_DOOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PIZZA_PARLOR_PLAZA_DOOR_CLOSE,
            "paths": [`assets/world/rooms/pizzaparlor/${PIZZA_PARLOR_PLAZA_DOOR_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PIZZA_PARLOR_KITCHEN_DOOR_OPEN,
            "paths": [`assets/world/rooms/pizzaparlor/${PIZZA_PARLOR_KITCHEN_DOOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PIZZA_PARLOR_KITCHEN_DOOR_CLOSE,
            "paths": [`assets/world/rooms/pizzaparlor/${PIZZA_PARLOR_KITCHEN_DOOR_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PIZZA_PARLOR_CASH_REGISTER_OPEN,
            "paths": [`assets/world/rooms/pizzaparlor/${PIZZA_PARLOR_CASH_REGISTER_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PIZZA_PARLOR_CASH_REGISTER_CLOSE,
            "paths": [`assets/world/rooms/pizzaparlor/${PIZZA_PARLOR_CASH_REGISTER_CLOSE}.mp3`]
        });
    }

    createContent() {
		// pizza_parlor_roof_png
		const pizza_parlor_roof_png = this.add.image(895, 477, "pizzaparlor", "pizza_parlor_roof.png");
		pizza_parlor_roof_png.scaleX = 1.0508649455013048;

		// pizza_parlor_background_png
		const pizza_parlor_background_png = this.add.image(-80, -8, "pizzaparlor", "pizza_parlor_background.png");
		pizza_parlor_background_png.scaleY = 1.003426945131218;
		pizza_parlor_background_png.setOrigin(0, 0);

		// pizza_parlor_pet_puffle_background_png
		const pizza_parlor_pet_puffle_background_png = this.add.image(1270, 201, "pizzaparlor", "pizza_parlor_pet_puffle_background.png");

		// pizza_parlor_plaza_door0001_png
		const pizza_parlor_plaza_door0001_png = this.add.image(858, 186, "pizzaparlor", "pizza_parlor_plaza_door0001.png");

		// pizza_parlor_plaza_door0002_png
		const pizza_parlor_plaza_door0002_png = this.add.image(858, 186, "pizzaparlor", "pizza_parlor_plaza_door0002.png");
        pizza_parlor_plaza_door0002_png.visible = false;

		// pizza_parlor_window_outside_png
		const pizza_parlor_window_outside_png = this.add.image(862, 190, "pizzaparlor", "pizza_parlor_window_outside.png");
		pizza_parlor_window_outside_png.scaleX = 1.006352701741129;

		// pizza_parlor_floor_shadows_png
		const pizza_parlor_floor_shadows_png = this.add.image(966, 386, "pizzaparlor", "pizza_parlor_floor_shadows.png");

		// pizza_parlor_fire0001_png
		const pizza_parlor_fire0001_png = this.add.image(1236, 310, "pizzaparlor", "pizza_parlor_fire0001.png");

		// pizza_parlor_pet_puffle_oven_dots_png
		const pizza_parlor_pet_puffle_oven_dots_png = this.add.image(1251, 303, "pizzaparlor", "pizza_parlor_pet_puffle_oven_dots.png");

		// pizza_parlor_pizzas0001_png
		const pizza_parlor_pizzas0001_png = this.add.sprite(988, -89, "pizzaparlor", "pizza_parlor_pizzas0001.png");
		pizza_parlor_pizzas0001_png.scaleX = 0.9136532129694348;
		pizza_parlor_pizzas0001_png.scaleY = 0.7390490567634971;

		// pizza_parlor_puffle_pizza_1_png
		const pizza_parlor_puffle_pizza_1_png = this.add.image(1218, 229, "pizzaparlor", "pizza_parlor_puffle_pizza_1.png");
		pizza_parlor_puffle_pizza_1_png.scaleX = 1.0469568926721091;

		// pizza_parlor_pizza_top_left_png
		const pizza_parlor_pizza_top_left_png = this.add.image(286, 307, "pizzaparlor", "pizza_parlor_pizza_top_left.png");

		// pizza_parlor_puffle_pizza_tube_png
		const pizza_parlor_puffle_pizza_tube_png = this.add.image(1354, 365, "pizzaparlor", "pizza_parlor_puffle_pizza_tube.png");

		// pizza_parlor_piano_floor_png
		const pizza_parlor_piano_floor_png = this.add.image(1154, 507, "pizzaparlor", "pizza_parlor_piano_floor.png");
		pizza_parlor_piano_floor_png.scaleY = 1.0309757102702333;

		// pizza_parlor_microphone_png
		const pizza_parlor_microphone_png = this.add.image(1410, 552, "pizzaparlor", "pizza_parlor_microphone.png");

		// pizza_parlor_puffle_pizza_tube_head0001_png
		const pizza_parlor_puffle_pizza_tube_head0001_png = this.add.image(1290, 382, "pizzaparlor", "pizza_parlor_puffle_pizza_tube_head0001.png");
		pizza_parlor_puffle_pizza_tube_head0001_png.scaleX = 0.8797201965442583;
		pizza_parlor_puffle_pizza_tube_head0001_png.scaleY = 0.882190557035069;

		// pizza_parlor_piano_png
		const pizza_parlor_piano_png = this.add.image(1455, 252, "pizzaparlor", "pizza_parlor_piano.png");
		pizza_parlor_piano_png.scaleX = 1.041418799604859;

		// pizza_parlor_stand_png
		const pizza_parlor_stand_png = this.add.image(1378, 480, "pizzaparlor", "pizza_parlor_stand.png");

		// pizza_parlor_kitchen_text0001_png
		const pizza_parlor_kitchen_text0001_png = this.add.image(414, 92, "pizzaparlor", "pizza_parlor_kitchen_text0001.png");

		// pizza_parlor_windows_png
		const pizza_parlor_windows_png = this.add.image(660, 340, "pizzaparlor", "pizza_parlor_windows.png");
		pizza_parlor_windows_png.scaleX = 1.0074089295169348;

		// pizza_parlor_left_stand_trophy_png
		const pizza_parlor_left_stand_trophy_png = this.add.image(384, 169, "pizzaparlor", "pizza_parlor_left_stand_trophy.png");

		// pizza_parlor_door_stand_png
		const pizza_parlor_door_stand_png = this.add.image(861, 177, "pizzaparlor", "pizza_parlor_door_stand.png");

		// pizza_parlor_railing_png
		const pizza_parlor_railing_png = this.add.image(1012, 309, "pizzaparlor", "pizza_parlor_railing.png");

		// pizza_parlor_top_counter_top_png
		const pizza_parlor_top_counter_top_png = this.add.image(458, 473, "pizzaparlor", "pizza_parlor_top_counter_top.png");

		// pizza_parlor_counter_stand_png
		const pizza_parlor_counter_stand_png = this.add.image(410, 550, "pizzaparlor", "pizza_parlor_counter_stand.png");

		// pizza_parlor_orange_seats_png
		const pizza_parlor_orange_seats_png = this.add.image(538, 610, "pizzaparlor", "pizza_parlor_orange_seats.png");

		// pizza_parlor_orange_seats_png_2
		const pizza_parlor_orange_seats_png_2 = this.add.image(593, 450, "pizzaparlor", "pizza_parlor_orange_seats.png");

		// pizza_parlor_orange_seats_png_1
		const pizza_parlor_orange_seats_png_1 = this.add.image(596, 534, "pizzaparlor", "pizza_parlor_orange_seats.png");

		// pizza_parlor_kitchen_door0001_png
		const pizza_parlor_kitchen_door0001_png = this.add.image(425, 218, "pizzaparlor", "pizza_parlor_kitchen_door0001.png");

		// pizza_parlor_door_register_png
		const pizza_parlor_door_register_png = this.add.image(636, 307, "pizzaparlor", "pizza_parlor_door_register.png");

		// pizza_parlor_door_register_light_png
		const pizza_parlor_door_register_light_png = this.add.image(621, 237, "pizzaparlor", "pizza_parlor_door_register_light.png");

		// pizza_parlor_right_table_top_chair_png
		const pizza_parlor_right_table_top_chair_png = this.add.image(1126, 483, "pizzaparlor", "pizza_parlor_right_table_top_chair.png");

		// pizza_parlor_right_green_table_png
		const pizza_parlor_right_green_table_png = this.add.image(1134, 586, "pizzaparlor", "pizza_parlor_right_green_table.png");

		// pizza_parlor_left_table_top_chair_png
		const pizza_parlor_left_table_top_chair_png = this.add.image(761, 464, "pizzaparlor", "pizza_parlor_left_table_top_chair.png");

		// pizza_parlor_left_table_top_chair_png_1
		const pizza_parlor_left_table_top_chair_png_1 = this.add.image(917, 435, "pizzaparlor", "pizza_parlor_left_table_top_chair.png");
		pizza_parlor_left_table_top_chair_png_1.flipX = true;

		// pizza_parlor_right_green_table_png_1
		const pizza_parlor_right_green_table_png_1 = this.add.image(858, 525, "pizzaparlor", "pizza_parlor_right_green_table.png");

		// pizza_parlor_right_table_bottom_chair_png
		const pizza_parlor_right_table_bottom_chair_png = this.add.image(1000, 599, "pizzaparlor", "pizza_parlor_right_table_bottom_chair.png");

		// pizza_parlor_curtain_png
		const pizza_parlor_curtain_png = this.add.image(1405, 357, "pizzaparlor", "pizza_parlor_curtain.png");
		pizza_parlor_curtain_png.scaleX = 0.6954156568485844;

		// pizza_parlor_kitchen_door0002_png
		const pizza_parlor_kitchen_door0002_png = this.add.image(425, 218, "pizzaparlor", "pizza_parlor_kitchen_door0002.png");
		pizza_parlor_kitchen_door0002_png.visible = false;

		// pizza_parlor_bottom_seats_png
		const pizza_parlor_bottom_seats_png = this.add.image(748, 662, "pizzaparlor", "pizza_parlor_bottom_seats.png");
		pizza_parlor_bottom_seats_png.scaleX = 0.9384249455864653;

		// pizza_parlor_lights_png
		const pizza_parlor_lights_png = this.add.image(854, 493, "pizzaparlor", "pizza_parlor_lights.png");
		pizza_parlor_lights_png.scaleX = 0.959845847448969;

		// pizza_parlor_random_thing_left_bottom_png
		const pizza_parlor_random_thing_left_bottom_png = this.add.image(92, 683, "pizzaparlor", "pizza_parlor_random_thing_left_bottom.png");
		pizza_parlor_random_thing_left_bottom_png.scaleX = 0.3316261226480809;
		pizza_parlor_random_thing_left_bottom_png.scaleY = 0.314564948834163;

		// pizza_parlor_random_thing_left_bottom_png_1
		const pizza_parlor_random_thing_left_bottom_png_1 = this.add.image(71, 713, "pizzaparlor", "pizza_parlor_random_thing_left_bottom.png");
		pizza_parlor_random_thing_left_bottom_png_1.scaleX = 0.3532331129618066;
		pizza_parlor_random_thing_left_bottom_png_1.scaleY = 0.3464299734132277;

		// pizza_parlor_bread_png
		const pizza_parlor_bread_png = this.add.image(52, 506, "pizzaparlor", "pizza_parlor_bread.png");
		pizza_parlor_bread_png.scaleX = 0.3382113047371918;
		pizza_parlor_bread_png.scaleY = 0.408019685268197;

		// pizza_parlor_milkshake_png
		const pizza_parlor_milkshake_png = this.add.image(502, 473, "pizzaparlor", "pizza_parlor_milkshake.png");
		pizza_parlor_milkshake_png.scaleX = 0.39982237352739747;
		pizza_parlor_milkshake_png.scaleY = 0.39279210413209253;

		// pizza_parlor_cash_register0001_png
		const pizza_parlor_cash_register0001_png = this.add.sprite(438, 359, "pizzaparlor", "pizza_parlor_cash_register0001.png");
		pizza_parlor_cash_register0001_png.scaleX = 0.40718716749251826;
		pizza_parlor_cash_register0001_png.scaleY = 0.3873096324765397;

		// pizza_parlor_pizza_png
		const pizza_parlor_pizza_png = this.add.image(805, 496, "pizzaparlor", "pizza_parlor_pizza.png");
		pizza_parlor_pizza_png.scaleX = 0.4032090108736823;
		pizza_parlor_pizza_png.scaleY = 0.4650115332044268;

		// pizza_parlor_milkshake_png_1
		const pizza_parlor_milkshake_png_1 = this.add.image(878, 470, "pizzaparlor", "pizza_parlor_milkshake.png");
		pizza_parlor_milkshake_png_1.scaleX = 0.39982237352739747;
		pizza_parlor_milkshake_png_1.scaleY = 0.39279210413209253;

		// pizza_parlor_puffle_pizza_carpet_png
		const pizza_parlor_puffle_pizza_carpet_png = this.add.image(1097, 365, "pizzaparlor", "pizza_parlor_puffle_pizza_carpet.png");

		// pizza_parlor_pizza_puffle_sign_png
		const pizza_parlor_pizza_puffle_sign_png = this.add.image(1101, 125, "pizzaparlor", "pizza_parlor_pizza_puffle_sign.png");

		// pizza_parlor_white_puffle_picture_png
		const pizza_parlor_white_puffle_picture_png = this.add.image(1245, 124, "pizzaparlor", "pizza_parlor_white_puffle_picture.png");

		// pizza_parlor_walking_trigger0001_png
		const pizza_parlor_walking_trigger0001_png = this.physics.add.sprite(750, 481, "pizza_parlor_walking_trigger0001");
		pizza_parlor_walking_trigger0001_png.alpha = 0.001;
		pizza_parlor_walking_trigger0001_png.alphaTopLeft = 0.001;
		pizza_parlor_walking_trigger0001_png.alphaTopRight = 0.001;
		pizza_parlor_walking_trigger0001_png.alphaBottomLeft = 0.001;
		pizza_parlor_walking_trigger0001_png.alphaBottomRight = 0.001;
		pizza_parlor_walking_trigger0001_png.body.setSize(1520, 960, false);
		this.collisionMap = this.createCollisionMap(this, 750, 481, "pizza_parlor_walking_trigger0001");

		// pizza_parlor_plaza_trigger
		const pizza_parlor_plaza_trigger = this.physics.add.sprite(865, 279, "pizzaparlor", "pizza_parlor_pizza_game_trigger.png");
		pizza_parlor_plaza_trigger.scaleX = 1.5846601345502993;
		pizza_parlor_plaza_trigger.scaleY = 1.025547496754475;
		pizza_parlor_plaza_trigger.alpha = 0.001;
		pizza_parlor_plaza_trigger.alphaTopLeft = 0.001;
		pizza_parlor_plaza_trigger.alphaTopRight = 0.001;
		pizza_parlor_plaza_trigger.alphaBottomLeft = 0.001;
		pizza_parlor_plaza_trigger.alphaBottomRight = 0.001;
		pizza_parlor_plaza_trigger.body.setSize(170, 40, false);

		// Setting triggers starts here
		this.triggers.push([pizza_parlor_walking_trigger0001_png, () => {
			onWalkingTrigger(this);
		}]);

		this.triggers.push([pizza_parlor_plaza_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_PLAZA);
		}]);
		// Setting triggers ends here

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pizza_parlor_cash_register_animation",
            "phaserAnimationKey": "pizza_parlor_cash_register_animation_play",
            "textureKey": "pizzaparlor",
            "framePrefix": "pizza_parlor_cash_register",
            "frames": Array.from({ length: 18 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pizza_parlor_cash_register_reverse_animation",
            "phaserAnimationKey": "pizza_parlor_cash_register_reverse_animation_play",
            "textureKey": "pizzaparlor",
            "framePrefix": "pizza_parlor_cash_register",
            "frames": Array.from({ length: 18 }, (_, i) => String(18 - i).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });
        // Creating animations ends here    

        // Setting all interactives sprites starts here
        pizza_parlor_cash_register0001_png.setInteractive({ useHandCursor: true });
        pizza_parlor_kitchen_door0001_png.setInteractive({ useHandCursor: true });
        pizza_parlor_plaza_door0002_png.setInteractive({ useHandCursor: true });
        pizza_parlor_plaza_door0001_png.setInteractive({ useHandCursor: true });
        pizza_parlor_kitchen_door0002_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        pizza_parlor_kitchen_door0001_png.on("pointerover", () => {
            pizza_parlor_kitchen_door0001_png.visible = false;
            pizza_parlor_kitchen_door0002_png.visible = true;
            this.audioManager.play(PIZZA_PARLOR_KITCHEN_DOOR_OPEN);
        });

        pizza_parlor_kitchen_door0002_png.on("pointerout", () => {
            pizza_parlor_kitchen_door0001_png.visible = true;
            pizza_parlor_kitchen_door0002_png.visible = false;
            this.audioManager.play(PIZZA_PARLOR_KITCHEN_DOOR_CLOSE);
        });

        pizza_parlor_plaza_door0001_png.on("pointerover", () => {
            pizza_parlor_plaza_door0001_png.visible = false;
            pizza_parlor_plaza_door0002_png.visible = true;
            this.audioManager.play(PIZZA_PARLOR_PLAZA_DOOR_OPEN);
        }); 

        pizza_parlor_plaza_door0002_png.on("pointerout", () => {
            pizza_parlor_plaza_door0001_png.visible = true;
            pizza_parlor_plaza_door0002_png.visible = false;
            this.audioManager.play(PIZZA_PARLOR_PLAZA_DOOR_CLOSE);
        });

        pizza_parlor_cash_register0001_png.on("pointerover", () => {
            pizza_parlor_cash_register0001_png.play("pizza_parlor_cash_register_animation_play");
            this.audioManager.play(PIZZA_PARLOR_CASH_REGISTER_OPEN);
        });

        pizza_parlor_cash_register0001_png.on("pointerout", () => {
            pizza_parlor_cash_register0001_png.play("pizza_parlor_cash_register_reverse_animation_play");
            this.audioManager.play(PIZZA_PARLOR_CASH_REGISTER_CLOSE);
        });
        // All interactive events end here

        this.audioManager.play(PIZZA_PARLOR_ROOM_MUSIC);
		super.createContent(this);
    }

	update() {
		super.update();
	}
}
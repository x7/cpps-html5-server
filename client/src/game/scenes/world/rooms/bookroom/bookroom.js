import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BOOK_ROOM_BOOK_CLOSE, BOOK_ROOM_BOOK_OPEN, BOOK_ROOM_EXIT_LIGHTS_OFF, BOOK_ROOM_EXIT_LIGHTS_ON, BOOK_ROOM_MUSIC, BOOK_ROOM_PRINTING_NEWSPAPER } from "../../../../audio/audioConstants";
import { SCENE_BOOK_ROOM } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

// TODO: Create newspaper animation
// TODO: Fix mancala event bugging out and staying on "hover over" image

export class BookRoomScene extends RoomScene {
    constructor() {
        super(SCENE_BOOK_ROOM);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "bookroom",
            paths: ["assets/world/rooms/bookroom/bookroom-pack.json"]
        });

        // this.assetManager.load({
        //     scene: this,
        //     type: ASSET_TYPES.AUDIO,
        //     name: BOOK_ROOM_MUSIC,
        //     paths: ["assets/world/rooms/bookroom/bookroom-pack.json"]
        // });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: BOOK_ROOM_EXIT_LIGHTS_ON,
            paths: ["assets/world/rooms/bookroom/book_room_exit_light_on.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: BOOK_ROOM_EXIT_LIGHTS_OFF,
            paths: ["assets/world/rooms/bookroom/book_room_exit_light_off.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: BOOK_ROOM_BOOK_OPEN,
            paths: ["assets/world/rooms/bookroom/book_room_book_open.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: BOOK_ROOM_BOOK_CLOSE,
            paths: ["assets/world/rooms/bookroom/book_room_book_close.mp3"]
        });

        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.AUDIO,
            name: BOOK_ROOM_PRINTING_NEWSPAPER,
            paths: ["assets/world/rooms/bookroom/book_room_printing_newspaper.mp3"]
        });
    }

    createContent() {
        // book_room_main_background_png
		const book_room_main_background_png = this.add.image(-59, -8, "bookroom", "book_room_main_background.png");
		book_room_main_background_png.scaleX = 0.9224648006840986;
		book_room_main_background_png.setOrigin(0, 0);

		// book_room_purple_box_png
		const book_room_purple_box_png = this.add.image(135, 800, "bookroom", "book_room_purple_box.png");

		// book_room_small_newspaper_png
		const book_room_small_newspaper_png = this.add.image(229, 904, "bookroom", "book_room_small_newspaper.png");

		// book_room_mancala_instructions0001_png
		const book_room_mancala_instructions0001_png = this.add.image(1371, 279, "bookroom", "book_room_mancala_instructions0001.png");

		// symbol_730002_png
		const symbol_730002_png = this.add.image(1405, 314, "bookroom", "Symbol 730002.png");
		symbol_730002_png.visible = false;

		// book_room_exit_door_couch_png
		const book_room_exit_door_couch_png = this.add.image(1354, 498, "bookroom", "book_room_exit_door_couch.png");

		// book_room_cpt_png
		const book_room_cpt_png = this.add.image(992, 191, "bookroom", "book_room_cpt.png");
		book_room_cpt_png.scaleX = 0.9036278332491338;
		book_room_cpt_png.scaleY = 0.9359804456732669;

		// book_room_bottom_right_couch_table_png
		const book_room_bottom_right_couch_table_png = this.add.image(1368, 690, "bookroom", "book_room_bottom_right_couch_table.png");

		// book_room_bottom_right_couch_plant_png
		const book_room_bottom_right_couch_plant_png = this.add.image(1403, 606, "bookroom", "book_room_bottom_right_couch_plant.png");

		// book_room_bottom_right_couch_png
		const book_room_bottom_right_couch_png = this.add.image(1339, 826, "bookroom", "book_room_bottom_right_couch.png");

		// book_room_penguin_art0001_png
		const book_room_penguin_art0001_png = this.add.image(634, 159, "bookroom", "book_room_penguin_art0001.png");
		book_room_penguin_art0001_png.scaleX = 0.9292081560798866;
		book_room_penguin_art0001_png.scaleY = 0.9161004115217309;

		// book_room_penguin_art0002_png
		const book_room_penguin_art0002_png = this.add.image(632, 159, "bookroom", "book_room_penguin_art0002.png");
		book_room_penguin_art0002_png.scaleX = 0.89941382427573;
		book_room_penguin_art0002_png.scaleY = 0.9204188643993122;
		book_room_penguin_art0002_png.visible = false;

		// book_room_view_books_cabinet0001_png
		const book_room_view_books_cabinet0001_png = this.add.image(443, 322, "bookroom", "book_room_view_books_cabinet0001.png");
		book_room_view_books_cabinet0001_png.scaleX = 0.9215779496361554;
		book_room_view_books_cabinet0001_png.scaleY = 0.9991799061005874;

		// book_room_view_books_cabinet0002_png
		const book_room_view_books_cabinet0002_png = this.add.image(443, 322, "bookroom", "book_room_view_books_cabinet0002.png");
		book_room_view_books_cabinet0002_png.scaleX = 0.9215779496361554;
		book_room_view_books_cabinet0002_png.scaleY = 0.9991799061005874;
		book_room_view_books_cabinet0002_png.visible = false;

		// book_room_small_cabinet_png
		const book_room_small_cabinet_png = this.add.image(344, 455, "bookroom", "book_room_small_cabinet.png");

		// book_room_wanted_poser_png
		const book_room_wanted_poser_png = this.add.image(317, 608, "bookroom", "book_room_wanted_poser.png");

		// book_room_newspaper_printer_png
		const book_room_newspaper_printer_png = this.add.sprite(371, 741, "bookroom", "book_room_newspaper_printer.png");
		book_room_newspaper_printer_png.scaleX = 0.955932969331434;
		book_room_newspaper_printer_png.scaleY = 0.9302935205344396;

		// book_room_wall_lights_png
		const book_room_wall_lights_png = this.add.image(757, 480, "bookroom", "book_room_wall_lights.png");
		book_room_wall_lights_png.scaleX = 0.9334932760751589;

		// book_room_bottom_left_chair_png
		const book_room_bottom_left_chair_png = this.add.image(781, 743, "bookroom", "book_room_bottom_left_chair.png");

		// book_room_small_window_bottom_png
		const book_room_small_window_bottom_png = this.add.image(872, 620, "bookroom", "book_room_small_window_bottom.png");

		// book_room_hat_hanger_png
		const book_room_hat_hanger_png = this.add.image(786, 305, "bookroom", "book_room_hat_hanger.png");

		// book_room_top_small_plant_png
		const book_room_top_small_plant_png = this.add.image(792, 415, "bookroom", "book_room_top_small_plant.png");

		// book_room_right_side_bigger_desk_png
		const book_room_right_side_bigger_desk_png = this.add.image(972, 331, "bookroom", "book_room_right_side_bigger_desk.png");
		book_room_right_side_bigger_desk_png.scaleX = 0.94602865583623;

		// book_room_right_side_wall_png
		const book_room_right_side_wall_png = this.add.image(837, 244, "bookroom", "book_room_right_side_wall.png");

		// book_room_main_office_chair_png
		const book_room_main_office_chair_png = this.add.image(652, 297, "bookroom", "book_room_main_office_chair.png");

		// book_room_main_office_table_png
		const book_room_main_office_table_png = this.add.image(625, 404, "bookroom", "book_room_main_office_table.png");

		// book_room_penguin_art_painting_png
		const book_room_penguin_art_painting_png = this.add.image(639, 80, "bookroom", "book_room_penguin_art_painting.png");

		// book_room_penguin_art_text0001_png
		const book_room_penguin_art_text0001_png = this.add.image(639, 80, "bookroom", "book_room_penguin_art_text0001.png");
		book_room_penguin_art_text0001_png.scaleX = 0.5333207007234047;
		book_room_penguin_art_text0001_png.scaleY = 0.576082620018079;

		// book_room_rail_png
		const book_room_rail_png = this.add.image(854, 477, "bookroom", "book_room_rail.png");

		// book_room_right_side_desk_chair_png
		const book_room_right_side_desk_chair_png = this.add.image(1025, 407, "bookroom", "book_room_right_side_desk_chair.png");

		// book_room_right_side_desk_png
		const book_room_right_side_desk_png = this.add.image(1053, 464, "bookroom", "book_room_right_side_desk.png");

		// book_room_mancala_table_1_not_hover
		const book_room_mancala_table_1_not_hover = this.add.image(1190, 559, "bookroom", "book_room_mancala_table0001.png");

		// book_room_mancala_table_2_not_hover
		const book_room_mancala_table_2_not_hover = this.add.image(1078, 629, "bookroom", "book_room_mancala_table0001.png");

		// book_room_mancala_table_3_not_hover
		const book_room_mancala_table_3_not_hover = this.add.image(1230, 685, "bookroom", "book_room_mancala_table0001.png");

		// book_room_mancala_table_4_not_hover
		const book_room_mancala_table_4_not_hover = this.add.image(1116, 786, "bookroom", "book_room_mancala_table0001.png");

		// book_room_mancala_table_1_hover
		const book_room_mancala_table_1_hover = this.add.image(1190, 559, "bookroom", "book_room_mancala_table0003.png");
		book_room_mancala_table_1_hover.visible = false;

		// book_room_mancala_table_2_hover
		const book_room_mancala_table_2_hover = this.add.image(1078, 629, "bookroom", "book_room_mancala_table0003.png");
		book_room_mancala_table_2_hover.visible = false;

		// book_room_mancala_table_3_hover
		const book_room_mancala_table_3_hover = this.add.image(1230, 685, "bookroom", "book_room_mancala_table0003.png");
		book_room_mancala_table_3_hover.visible = false;

		// book_room_mancala_table_4_hover
		const book_room_mancala_table_4_hover = this.add.image(1116, 786, "bookroom", "book_room_mancala_table0003.png");
		book_room_mancala_table_4_hover.visible = false;

		// book_room_bottom_left_desk_png
		const book_room_bottom_left_desk_png = this.add.image(879, 742, "bookroom", "book_room_bottom_left_desk.png");

		// book_room_bottom_right_desk_png
		const book_room_bottom_right_desk_png = this.add.image(985, 782, "bookroom", "book_room_bottom_right_desk.png");

		// book_room_wall_png
		const book_room_wall_png = this.add.image(940, 763, "bookroom", "book_room_wall.png");
		book_room_wall_png.scaleX = 0.8464276906035506;

		// book_room_mancala_table_4_trigger_png
		const book_room_mancala_table_4_trigger_png = this.physics.add.sprite(1115, 775, "bookroom", "book_room_mancala_trigger.png");
		book_room_mancala_table_4_trigger_png.scaleX = 0.7519427003247866;
		book_room_mancala_table_4_trigger_png.scaleY = 0.5156306183558828;
		book_room_mancala_table_4_trigger_png.alpha = 0.001;
		book_room_mancala_table_4_trigger_png.alphaTopLeft = 0.001;
		book_room_mancala_table_4_trigger_png.alphaTopRight = 0.001;
		book_room_mancala_table_4_trigger_png.alphaBottomLeft = 0.001;
		book_room_mancala_table_4_trigger_png.alphaBottomRight = 0.001;
		book_room_mancala_table_4_trigger_png.body.setSize(160, 120, false);

		// book_room_mancala_table_3_trigger_png
		const book_room_mancala_table_3_trigger_png = this.physics.add.sprite(1229, 675, "bookroom", "book_room_mancala_trigger.png");
		book_room_mancala_table_3_trigger_png.scaleX = 0.7432724930267998;
		book_room_mancala_table_3_trigger_png.scaleY = 0.5664056147647432;
		book_room_mancala_table_3_trigger_png.alpha = 0.001;
		book_room_mancala_table_3_trigger_png.alphaTopLeft = 0.001;
		book_room_mancala_table_3_trigger_png.alphaTopRight = 0.001;
		book_room_mancala_table_3_trigger_png.alphaBottomLeft = 0.001;
		book_room_mancala_table_3_trigger_png.alphaBottomRight = 0.001;
		book_room_mancala_table_3_trigger_png.body.setSize(160, 120, false);

		// book_room_mancala_table_2_trigger_png
		const book_room_mancala_table_2_trigger_png = this.physics.add.sprite(1078, 621, "bookroom", "book_room_mancala_trigger.png");
		book_room_mancala_table_2_trigger_png.scaleX = 0.7266316778562156;
		book_room_mancala_table_2_trigger_png.scaleY = 0.5640323647091106;
		book_room_mancala_table_2_trigger_png.alpha = 0.001;
		book_room_mancala_table_2_trigger_png.alphaTopLeft = 0.001;
		book_room_mancala_table_2_trigger_png.alphaTopRight = 0.001;
		book_room_mancala_table_2_trigger_png.alphaBottomLeft = 0.001;
		book_room_mancala_table_2_trigger_png.alphaBottomRight = 0.001;
		book_room_mancala_table_2_trigger_png.body.setSize(160, 120, false);

		// book_room_mancala_table_1_trigger_png_1
		const book_room_mancala_table_1_trigger_png_1 = this.physics.add.sprite(1194, 549, "bookroom", "book_room_mancala_trigger.png");
		book_room_mancala_table_1_trigger_png_1.scaleX = 0.7636059943674992;
		book_room_mancala_table_1_trigger_png_1.scaleY = 0.5968503607162771;
		book_room_mancala_table_1_trigger_png_1.alpha = 0.001;
		book_room_mancala_table_1_trigger_png_1.alphaTopLeft = 0.001;
		book_room_mancala_table_1_trigger_png_1.alphaTopRight = 0.001;
		book_room_mancala_table_1_trigger_png_1.alphaBottomLeft = 0.001;
		book_room_mancala_table_1_trigger_png_1.alphaBottomRight = 0.001;
		book_room_mancala_table_1_trigger_png_1.body.setSize(160, 120, false);

		// book_room_exit_door_light_png
		const book_room_exit_door_light_png = this.add.image(1226, 341, "bookroom", "book_room_exit_door_light.png");
		book_room_exit_door_light_png.scaleX = 0.13370852823221513;
		book_room_exit_door_light_png.scaleY = 0.24060622729907638;
		book_room_exit_door_light_png.alpha = 0.001;
		book_room_exit_door_light_png.alphaTopLeft = 0.001;
		book_room_exit_door_light_png.alphaTopRight = 0.001;
		book_room_exit_door_light_png.alphaBottomLeft = 0.001;
		book_room_exit_door_light_png.alphaBottomRight = 0.001;

		// book_room_exit_trigger_png
		const book_room_exit_trigger_png = this.physics.add.sprite(1224, 339, "bookroom", "book_room_exit_trigger.png");
		book_room_exit_trigger_png.scaleX = 0.8730536356382065;
		book_room_exit_trigger_png.scaleY = 0.8670730488886225;
		book_room_exit_trigger_png.angle = 90;
		book_room_exit_trigger_png.alpha = 0.001;
		book_room_exit_trigger_png.alphaTopLeft = 0.001;
		book_room_exit_trigger_png.alphaTopRight = 0.001;
		book_room_exit_trigger_png.alphaBottomLeft = 0.001;
		book_room_exit_trigger_png.alphaBottomRight = 0.001;
		book_room_exit_trigger_png.body.setSize(200, 120, false);
        
        // Creating animations ends here
        // createAnimation({
        //     "scene": this,
        //     "logicalAnimationKey": "book_room_printing_newspaper_animation",
        //     "phaserAnimationKey": "book_room_printing_newspaper_animation_play",
        //     "textureKey": "bookroom",
        //     "framePrefix": ""
        // });
        // Creating animations ends here

        // Setting all interactives sprites starts here
        book_room_mancala_instructions0001_png.setInteractive({ useHandCursor: true });
        symbol_730002_png.setInteractive({ useHandCursor: true });
        book_room_penguin_art0001_png.setInteractive({ useHandCursor: true });
        book_room_penguin_art0002_png.setInteractive({ useHandCursor: true });
        book_room_view_books_cabinet0001_png.setInteractive({ useHandCursor: true });
        book_room_view_books_cabinet0002_png.setInteractive({ useHandCursor: true });
        book_room_mancala_table_1_not_hover.setInteractive({ useHandCursor: true });
        book_room_mancala_table_2_not_hover.setInteractive({ useHandCursor: true });
        book_room_mancala_table_3_not_hover.setInteractive({ useHandCursor: true });
        book_room_mancala_table_4_not_hover.setInteractive({ useHandCursor: true });
        book_room_mancala_table_1_hover.setInteractive({ useHandCursor: true });
        book_room_mancala_table_2_hover.setInteractive({ useHandCursor: true });
        book_room_mancala_table_3_hover.setInteractive({ useHandCursor: true });
        book_room_mancala_table_4_hover.setInteractive({ useHandCursor: true });
        book_room_exit_door_light_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        book_room_mancala_instructions0001_png.on("pointerover", () => {
            book_room_mancala_instructions0001_png.visible = false;
            symbol_730002_png.visible = true;
        });

        symbol_730002_png.on("pointerout", () => {
            book_room_mancala_instructions0001_png.visible = true;
            symbol_730002_png.visible = false;
        });

        symbol_730002_png.on("pointerdown", () => {
            console.log("instructions");
        });

        book_room_penguin_art0001_png.on("pointerover", () => {
            book_room_penguin_art0001_png.visible = false;
            book_room_penguin_art0002_png.visible = true;
        });

        book_room_penguin_art0002_png.on("pointerout", () => {
            book_room_penguin_art0001_png.visible = true;
            book_room_penguin_art0002_png.visible = false;
        });

        book_room_penguin_art0002_png.on("pointerdown", () => {
            console.log("penguin art");
        });

        book_room_view_books_cabinet0001_png.on("pointerover", () => {
            book_room_view_books_cabinet0001_png.visible = false;
            book_room_view_books_cabinet0002_png.visible = true;
            this.audioManager.play(BOOK_ROOM_BOOK_OPEN);
        });

        book_room_view_books_cabinet0002_png.on("pointerout", () => {
            book_room_view_books_cabinet0001_png.visible = true;
            book_room_view_books_cabinet0002_png.visible = false;
            this.audioManager.play(BOOK_ROOM_BOOK_CLOSE);
        });

        book_room_view_books_cabinet0002_png.on("pointerdown", () => {
            console.log("view books");
        });

        book_room_mancala_table_1_not_hover.on("pointerover", () => {
            book_room_mancala_table_1_not_hover.visible = false;
            book_room_mancala_table_1_hover.visible = true;
        });

        book_room_mancala_table_1_hover.on("pointerout", () => {
            book_room_mancala_table_1_not_hover.visible = true;
            book_room_mancala_table_1_hover.visible = false;
        });

        book_room_mancala_table_1_hover.on("pointerdown", () => {
            console.log("mancala table 1");
        });

        book_room_mancala_table_2_not_hover.on("pointerover", () => {
            book_room_mancala_table_2_not_hover.visible = false;
            book_room_mancala_table_2_hover.visible = true;
        });

        book_room_mancala_table_2_hover.on("pointerout", () => {
            book_room_mancala_table_2_not_hover.visible = true;
            book_room_mancala_table_2_hover.visible = false;
        });

        book_room_mancala_table_2_hover.on("pointerdown", () => {
            console.log("mancala table 2");
        });

        book_room_mancala_table_3_not_hover.on("pointerover", () => {
            book_room_mancala_table_3_not_hover.visible = false;
            book_room_mancala_table_3_hover.visible = true;
        });

        book_room_mancala_table_3_hover.on("pointerout", () => {
            book_room_mancala_table_3_not_hover.visible = true;
            book_room_mancala_table_3_hover.visible = false;
        });

        book_room_mancala_table_3_hover.on("pointerdown", () => {
            console.log("mancala table 3");
        });

        book_room_mancala_table_4_not_hover.on("pointerover", () => {
            book_room_mancala_table_4_not_hover.visible = false;
            book_room_mancala_table_4_hover.visible = true;
        });

        book_room_mancala_table_4_hover.on("pointerout", () => {
            book_room_mancala_table_4_not_hover.visible = true;
            book_room_mancala_table_4_hover.visible = false;
        });

        book_room_mancala_table_4_hover.on("pointerdown", () => {
            console.log("mancala table 4");
        });

        book_room_exit_door_light_png.on("pointerover", () => {
            book_room_exit_door_light_png.alpha = 1;
            book_room_exit_door_light_png.alphaTopLeft = 1;
            book_room_exit_door_light_png.alphaTopRight = 1;
            book_room_exit_door_light_png.alphaBottomLeft = 1;
            book_room_exit_door_light_png.alphaBottomRight = 1;
            this.audioManager.play(BOOK_ROOM_EXIT_LIGHTS_ON);
        });

        book_room_exit_door_light_png.on("pointerout", () => {
            book_room_exit_door_light_png.alpha = 0.001;
            book_room_exit_door_light_png.alphaTopLeft = 0.001;
            book_room_exit_door_light_png.alphaTopRight = 0.001;
            book_room_exit_door_light_png.alphaBottomLeft = 0.001;
            book_room_exit_door_light_png.alphaBottomRight = 0.001;
            this.audioManager.play(BOOK_ROOM_EXIT_LIGHTS_OFF);
        });
        // All interactive events ends here

        this.audioManager.play(BOOK_ROOM_PRINTING_NEWSPAPER);
    }
}
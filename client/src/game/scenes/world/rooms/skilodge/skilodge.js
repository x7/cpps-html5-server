import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SKI_LODGE_ATTIC_LIGHT_OFF, SKI_LODGE_ATTIC_LIGHT_ON, SKI_LODGE_FIREPLACE_CLOCK_BIRD, SKI_LODGE_ICE_FISHING_DOOR_CLOSE, SKI_LODGE_ICE_FISHING_DOOR_OPEN, SKI_LODGE_PUFFLE_WILD_DOOR_CLOSE, SKI_LODGE_PUFFLE_WILD_DOOR_OPEN, SKI_LODGE_ROOM_MUSIC, SKI_LODGE_SKI_VILLAGE_DOOR_CLOSE, SKI_LODGE_SKI_VILLAGE_DOOR_OPEN } from "../../../../audio/audioConstants";
import { SCENE_ROOM_SKI_LODGE } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

// TODO: Add attic light
// TODO: Figure out how long the interval is between the bird coming out

export class SkiLodgeScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_SKI_LODGE);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "skilodge",
            "paths": ["assets/world/rooms/skilodge/skilodge-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SKI_LODGE_ROOM_MUSIC,
            "paths": [`assets/world/rooms/skilodge/${SKI_LODGE_ROOM_MUSIC}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SKI_LODGE_SKI_VILLAGE_DOOR_OPEN,
            "paths": [`assets/world/rooms/skilodge/${SKI_LODGE_SKI_VILLAGE_DOOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SKI_LODGE_SKI_VILLAGE_DOOR_CLOSE,
            "paths": [`assets/world/rooms/skilodge/${SKI_LODGE_SKI_VILLAGE_DOOR_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SKI_LODGE_PUFFLE_WILD_DOOR_OPEN,
            "paths": [`assets/world/rooms/skilodge/${SKI_LODGE_PUFFLE_WILD_DOOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SKI_LODGE_PUFFLE_WILD_DOOR_CLOSE,
            "paths": [`assets/world/rooms/skilodge/${SKI_LODGE_PUFFLE_WILD_DOOR_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SKI_LODGE_ICE_FISHING_DOOR_OPEN,
            "paths": [`assets/world/rooms/skilodge/${SKI_LODGE_ICE_FISHING_DOOR_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SKI_LODGE_ICE_FISHING_DOOR_CLOSE,
            "paths": [`assets/world/rooms/skilodge/${SKI_LODGE_ICE_FISHING_DOOR_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SKI_LODGE_ATTIC_LIGHT_ON,
            "paths": [`assets/world/rooms/skilodge/${SKI_LODGE_ATTIC_LIGHT_ON}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SKI_LODGE_ATTIC_LIGHT_OFF,
            "paths": [`assets/world/rooms/skilodge/${SKI_LODGE_ATTIC_LIGHT_OFF}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SKI_LODGE_FIREPLACE_CLOCK_BIRD,
            "paths": [`assets/world/rooms/skilodge/${SKI_LODGE_FIREPLACE_CLOCK_BIRD}.mp3`]
        });
    }

    createContent() {
        // ski_lodge_main_background_png
		const ski_lodge_main_background_png = this.add.image(724, 312, "skilodge", "ski_lodge_main_background.png");
		ski_lodge_main_background_png.scaleX = 0.9544967509482533;
		ski_lodge_main_background_png.scaleY = 1.0074732075370678;

		// ski_lodge_fire_wood_png
		const ski_lodge_fire_wood_png = this.add.image(1279, 541, "skilodge", "ski_lodge_fire_wood.png");

		// ski_lodge_fireplace_inside_png
		const ski_lodge_fireplace_inside_png = this.add.image(1380, 530, "skilodge", "ski_lodge_fireplace_inside.png");

		// ski_lodge_fire0001_png
		const ski_lodge_fire0001_png = this.add.sprite(1438, 592, "skilodge", "ski_lodge_fire0001.png");

		// skI_lodge_fireplace_png
		const skI_lodge_fireplace_png = this.add.image(1405, 351, "skilodge", "skI_lodge_fireplace.png");
		skI_lodge_fireplace_png.scaleX = 0.7529036899647735;
		skI_lodge_fireplace_png.scaleY = 1.0225332274804464;

		// ski_lodge_fireplace_thing_png
		const ski_lodge_fireplace_thing_png = this.add.image(1372, 119, "skilodge", "ski_lodge_fireplace_thing.png");

		// ski_lodge_ski_village_door0001_png
		const ski_lodge_ski_village_door0001_png = this.add.image(109, 435, "skilodge", "ski_lodge_ski_village_door0001.png");

		// ski_lodge_ski_village_door0002_png
		const ski_lodge_ski_village_door0002_png = this.add.image(109, 435, "skilodge", "ski_lodge_ski_village_door0002.png");
		ski_lodge_ski_village_door0002_png.visible = false;

		// ski_lodge_middle_floor_wood_png
		const ski_lodge_middle_floor_wood_png = this.add.image(847, 487, "skilodge", "ski_lodge_middle_floor_wood.png");

		// ski_lodge_left_floor_wood_png
		const ski_lodge_left_floor_wood_png = this.add.image(596, 556, "skilodge", "ski_lodge_left_floor_wood.png");

		// ski_lodge_purple_chair_png
		const ski_lodge_purple_chair_png = this.add.image(676, 501, "skilodge", "ski_lodge_purple_chair.png");

		// ski_lodge_red_small_chair_png
		const ski_lodge_red_small_chair_png = this.add.image(1065, 535, "skilodge", "ski_lodge_red_small_chair.png");

		// ski_lodge_find_four_table_png
		const ski_lodge_find_four_table_png = this.add.image(1004, 555, "skilodge", "ski_lodge_find_four_table.png");

		// ski_lodge_red_small_chair_png_1
		const ski_lodge_red_small_chair_png_1 = this.add.image(878, 607, "skilodge", "ski_lodge_red_small_chair.png");

		// ski_lodge_find_four_table_png_1
		const ski_lodge_find_four_table_png_1 = this.add.image(815, 632, "skilodge", "ski_lodge_find_four_table.png");

		// ski_lodge_find_four_table_png_2
		const ski_lodge_find_four_table_png_2 = this.add.image(1039, 724, "skilodge", "ski_lodge_find_four_table.png");

		// ski_village_find_four_bottom_right
		const ski_village_find_four_bottom_right = this.add.image(1034, 679, "skilodge", "ski_village_find_four0001.png");

		// ski_village_find_four_top_left
		const ski_village_find_four_top_left = this.add.image(820, 589, "skilodge", "ski_village_find_four0001.png");
		ski_village_find_four_top_left.flipX = true;

		// ski_village_find_four_top_right
		const ski_village_find_four_top_right = this.add.image(1013, 513, "skilodge", "ski_village_find_four0001.png");
		ski_village_find_four_top_right.flipX = true;

		// ski_village_find_four_bottom_right_hovered
		const ski_village_find_four_bottom_right_hovered = this.add.image(1034, 679, "skilodge", "ski_village_find_four0002.png");
		ski_village_find_four_bottom_right_hovered.visible = false;

		// ski_village_find_four_top_left_hovered
		const ski_village_find_four_top_left_hovered = this.add.image(820, 589, "skilodge", "ski_village_find_four0002.png");
		ski_village_find_four_top_left_hovered.flipX = true;
		ski_village_find_four_top_left_hovered.visible = false;

		// ski_village_find_four_top_right_hovered
		const ski_village_find_four_top_right_hovered = this.add.image(1013, 513, "skilodge", "ski_village_find_four0002.png");
		ski_village_find_four_top_right_hovered.flipX = true;
		ski_village_find_four_top_right_hovered.visible = false;

		// ski_lodge_purple_chair_side_png
		const ski_lodge_purple_chair_side_png = this.add.image(641, 580, "skilodge", "ski_lodge_purple_chair_side.png");

		// ski_lodge_corner_desk_png
		const ski_lodge_corner_desk_png = this.add.image(165, 757, "skilodge", "ski_lodge_corner_desk.png");
		ski_lodge_corner_desk_png.scaleX = 1.03704827341635;

		// ski_lodge_corner_desk_draw_png
		const ski_lodge_corner_desk_draw_png = this.add.image(66, 671, "skilodge", "ski_lodge_corner_desk_draw.png");

		// ski_lodge_bottom_left_wood_png
		const ski_lodge_bottom_left_wood_png = this.add.image(366, 751, "skilodge", "ski_lodge_bottom_left_wood.png");

		// skI_lodge_bottom_small_trees_png
		const skI_lodge_bottom_small_trees_png = this.add.image(439, 827, "skilodge", "skI_lodge_bottom_small_trees.png");

		// ski_lodge_bottom_right_red_chair_side_png
		const ski_lodge_bottom_right_red_chair_side_png = this.add.image(1268, 841, "skilodge", "ski_lodge_bottom_right_red_chair_side.png");

		// ski_lodge_bottom_right_wood_png
		const ski_lodge_bottom_right_wood_png = this.add.image(1168, 743, "skilodge", "ski_lodge_bottom_right_wood.png");
		ski_lodge_bottom_right_wood_png.scaleX = 1.0239230825145487;
		ski_lodge_bottom_right_wood_png.scaleY = 1.0613961374489609;

		// ski_lodge_top_left_wood_png
		const ski_lodge_top_left_wood_png = this.add.image(94, 22, "skilodge", "ski_lodge_top_left_wood.png");

		// ski_lodge_top_right_wood_png
		const ski_lodge_top_right_wood_png = this.add.image(1387, 41, "skilodge", "ski_lodge_top_right_wood.png");

		// ski_lodge_corner_desk_keyboard_png
		const ski_lodge_corner_desk_keyboard_png = this.add.image(203, 671, "skilodge", "ski_lodge_corner_desk_keyboard.png");

		// ski_lodge_corner_desk_mouse_pad_png
		const ski_lodge_corner_desk_mouse_pad_png = this.add.image(285, 715, "skilodge", "ski_lodge_corner_desk_mouse_pad.png");

		// ski_lodge_corner_desk_chair_png
		const ski_lodge_corner_desk_chair_png = this.add.image(105, 733, "skilodge", "ski_lodge_corner_desk_chair.png");

		// ski_lodge_corner_desk_chair_top_png
		const ski_lodge_corner_desk_chair_top_png = this.add.image(90, 681, "skilodge", "ski_lodge_corner_desk_chair_top.png");

		// ski_lodge_corner_desk_books_png
		const ski_lodge_corner_desk_books_png = this.add.image(41, 546, "skilodge", "ski_lodge_corner_desk_books.png");

		// ski_lodge_corner_desk_paper_png
		const ski_lodge_corner_desk_paper_png = this.add.image(135, 614, "skilodge", "ski_lodge_corner_desk_paper.png");

		// ski_lodge_corner_desk_telephone_png
		const ski_lodge_corner_desk_telephone_png = this.add.image(233, 766, "skilodge", "ski_lodge_corner_desk_telephone.png");

		// skI_lodge_corner_desk_monitor_png
		const skI_lodge_corner_desk_monitor_png = this.add.image(225, 605, "skilodge", "skI_lodge_corner_desk_monitor.png");

		// ski_lodge_ice_fishing_door0001_png
		const ski_lodge_ice_fishing_door0001_png = this.add.image(958, 197, "skilodge", "ski_lodge_ice_fishing_door0001.png");
		ski_lodge_ice_fishing_door0001_png.scaleX = 0.9429719890817784;

		// ski_lodge_ice_fishing_door0002_png
		const ski_lodge_ice_fishing_door0002_png = this.add.image(958, 197, "skilodge", "ski_lodge_ice_fishing_door0002.png");
		ski_lodge_ice_fishing_door0002_png.scaleX = 0.9429719890817784;
		ski_lodge_ice_fishing_door0002_png.visible = false;

		// ski_lodge_fishing_bbox_png
		const ski_lodge_fishing_bbox_png = this.add.image(835, 328, "skilodge", "ski_lodge_fishing_bbox.png");

		// ski_lodge_puffle_wild_door0001_png
		const ski_lodge_puffle_wild_door0001_png = this.add.image(447, 224, "skilodge", "ski_lodge_puffle_wild_door0001.png");

		// ski_lodge_puffle_wild_door0002_png
		const ski_lodge_puffle_wild_door0002_png = this.add.image(447, 224, "skilodge", "ski_lodge_puffle_wild_door0002.png");
		ski_lodge_puffle_wild_door0002_png.visible = false;

		// ski_lodge_middle_acorn_png
		const ski_lodge_middle_acorn_png = this.add.image(1358, 526, "skilodge", "ski_lodge_middle_acorn.png");
		ski_lodge_middle_acorn_png.scaleX = 0.7520466978500754;
		ski_lodge_middle_acorn_png.scaleY = 0.7703720608927987;

		// ski_lodge_top_acorn_png
		const ski_lodge_top_acorn_png = this.add.image(1380, 553, "skilodge", "ski_lodge_top_acorn.png");
		ski_lodge_top_acorn_png.scaleX = 0.75433373378549;
		ski_lodge_top_acorn_png.scaleY = 0.7640753018972681;

		// ski_lodge_bottom_acorn_png
		const ski_lodge_bottom_acorn_png = this.add.image(1331, 483, "skilodge", "ski_lodge_bottom_acorn.png");
		ski_lodge_bottom_acorn_png.scaleX = 0.8092538428311327;
		ski_lodge_bottom_acorn_png.scaleY = 0.8132610436151196;

		// ski_lodge_clock_png
		const ski_lodge_clock_png = this.add.image(1397, 383, "skilodge", "ski_lodge_clock.png");

		// ski_lodge_bird_coming_out_of_clock0001_png
		const ski_lodge_bird_coming_out_of_clock0001_png = this.add.sprite(1263, 363, "skilodge", "ski_lodge_bird_coming_out_of_clock0001.png");
		ski_lodge_bird_coming_out_of_clock0001_png.flipX = true;

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "ski_lodge_fireplace_fire_animation",
            "phaserAnimationKey": "ski_lodge_fireplace_fire_animation_play",
            "textureKey": "skilodge",
            "framePrefix": "ski_lodge_fire",
            "frames": Array.from({ length: 20 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "ski_lodge_fireplace_bird_coming_out_animation",
            "phaserAnimationKey": "ski_lodge_fireplace_bird_coming_out_animation_play",
            "textureKey": "skilodge",
            "framePrefix": "ski_lodge_bird_coming_out_of_clock",
            "frames": Array.from({ length: 24 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        ski_lodge_fire0001_png.play("ski_lodge_fireplace_fire_animation_play");
        // Creating animations ends here

        // Setting all interactives sprites starts here
        ski_lodge_ski_village_door0001_png.setInteractive({ useHandCursor: true });
        ski_lodge_ski_village_door0002_png.setInteractive({ useHandCursor: true });
        ski_village_find_four_bottom_right.setInteractive({ useHandCursor: true });
        ski_village_find_four_bottom_right_hovered.setInteractive({ useHandCursor: true });
        ski_village_find_four_top_left.setInteractive({ useHandCursor: true });
        ski_village_find_four_top_left_hovered.setInteractive({ useHandCursor: true });
        ski_village_find_four_top_right.setInteractive({ useHandCursor: true });
        ski_village_find_four_top_right_hovered.setInteractive({ useHandCursor: true });
        ski_lodge_ice_fishing_door0001_png.setInteractive({ useHandCursor: true });
        ski_lodge_ice_fishing_door0002_png.setInteractive({ useHandCursor: true });
        ski_lodge_puffle_wild_door0001_png.setInteractive({ useHandCursor: true });
        ski_lodge_puffle_wild_door0002_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        ski_lodge_ski_village_door0001_png.on("pointerover", () => {
            ski_lodge_ski_village_door0001_png.visible = false;
            ski_lodge_ski_village_door0002_png.visible = true;
            this.audioManager.play(SKI_LODGE_SKI_VILLAGE_DOOR_OPEN);
        });

        ski_lodge_ski_village_door0002_png.on("pointerout", () => {
            ski_lodge_ski_village_door0001_png.visible = true;
            ski_lodge_ski_village_door0002_png.visible = false;
            this.audioManager.play(SKI_LODGE_SKI_VILLAGE_DOOR_CLOSE);
        });

        ski_village_find_four_bottom_right.on("pointerover", () => {
            ski_village_find_four_bottom_right.visible = false;
            ski_village_find_four_bottom_right_hovered.visible = true;
        });

        ski_village_find_four_bottom_right_hovered.on("pointerout", () => {
            ski_village_find_four_bottom_right.visible = true;
            ski_village_find_four_bottom_right_hovered.visible = false;
        });

        ski_village_find_four_top_left.on("pointerover", () => {
            ski_village_find_four_top_left.visible = false;
            ski_village_find_four_top_left_hovered.visible = true;
        });

        ski_village_find_four_top_left_hovered.on("pointerout", () => {
            ski_village_find_four_top_left.visible = true;
            ski_village_find_four_top_left_hovered.visible = false;
        });

        ski_village_find_four_top_right.on("pointerover", () => {
            ski_village_find_four_top_right.visible = false;
            ski_village_find_four_top_right_hovered.visible = true;
        });

        ski_village_find_four_top_right_hovered.on("pointerout", () => {
            ski_village_find_four_top_right.visible = true;
            ski_village_find_four_top_right_hovered.visible = false;
        });

        ski_lodge_ice_fishing_door0001_png.on("pointerover", () => {
            ski_lodge_ice_fishing_door0001_png.visible = false;
            ski_lodge_ice_fishing_door0002_png.visible = true;
            this.audioManager.play(SKI_LODGE_ICE_FISHING_DOOR_OPEN);
        });

        ski_lodge_ice_fishing_door0002_png.on("pointerout", () => {
            ski_lodge_ice_fishing_door0001_png.visible = true;
            ski_lodge_ice_fishing_door0002_png.visible = false;
            this.audioManager.play(SKI_LODGE_ICE_FISHING_DOOR_CLOSE);
        });

        ski_lodge_puffle_wild_door0001_png.on("pointerover", () => {
            ski_lodge_puffle_wild_door0001_png.visible = false;
            ski_lodge_puffle_wild_door0002_png.visible = true;
            this.audioManager.play(SKI_LODGE_PUFFLE_WILD_DOOR_OPEN);
        });

        ski_lodge_puffle_wild_door0002_png.on("pointerout", () => {
            ski_lodge_puffle_wild_door0001_png.visible = true;
            ski_lodge_puffle_wild_door0002_png.visible = false;
            this.audioManager.play(SKI_LODGE_PUFFLE_WILD_DOOR_CLOSE);
        });

        this.audioManager.play(SKI_LODGE_ROOM_MUSIC);
        // All interactive events ends here
    }
}
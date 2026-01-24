import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BaseScene } from "../../../base/baseScene";

// TODO: Fix fire door bugging out on hover events
// TODO: Fix right side card jistu mats

export class DojoScene extends BaseScene {
    constructor() {
        super("DojoScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "dojo",
            paths: ["assets/world/rooms/dojo/dojo-pack.json"]
        });
    }

    createContent() {
        // dojo_main_png
		const dojo_main_png = this.add.image(622, 398, "dojo", "dojo_main.png");
		dojo_main_png.scaleX = 0.7799178660269598;
		dojo_main_png.scaleY = 0.7932033434425071;

		// dojo_fire_door0002_png
		const dojo_fire_door0002_png = this.add.image(175, 311, "dojo", "dojo_fire_door0002.png");
		dojo_fire_door0002_png.scaleX = 0.9179792808886509;
		dojo_fire_door0002_png.scaleY = 0.7427123394820294;
		dojo_fire_door0002_png.visible = false;

		// dojo_snow_door0002_png
		const dojo_snow_door0002_png = this.add.image(1069, 310, "dojo", "dojo_snow_door0002.png");
		dojo_snow_door0002_png.scaleX = 0.7803556647260055;
		dojo_snow_door0002_png.scaleY = 0.7876915462824287;
		dojo_snow_door0002_png.visible = false;

		// dojo_snow_door0001_png
		const dojo_snow_door0001_png = this.add.image(1072, 317, "dojo", "dojo_snow_door0001.png");
		dojo_snow_door0001_png.scaleX = 0.7803556647260055;
		dojo_snow_door0001_png.scaleY = 0.7876915462824287;

		// dojo_stands_png
		const dojo_stands_png = this.add.image(622, 291, "dojo", "dojo_stands.png");
		dojo_stands_png.scaleX = 0.7807225185038236;
		dojo_stands_png.scaleY = 0.8043459442063412;

		// dojo_red_stand_left_png
		const dojo_red_stand_left_png = this.add.image(-6, 376, "dojo", "dojo_red_stand_left.png");
		dojo_red_stand_left_png.scaleX = 0.8234143687948547;
		dojo_red_stand_left_png.scaleY = 0.7259396463673116;

		// dojo_red_stand_right_png
		const dojo_red_stand_right_png = this.add.image(1253, 354, "dojo", "dojo_red_stand_right.png");
		dojo_red_stand_right_png.scaleX = 0.8234143687948547;
		dojo_red_stand_right_png.scaleY = 0.7259396463673116;

		// dojo_card_jistu_mat_png
		const dojo_card_jistu_mat_png = this.add.image(377, 547, "dojo", "dojo_card_jistu_mat.png");
		dojo_card_jistu_mat_png.scaleX = 0.78131900339708;
		dojo_card_jistu_mat_png.scaleY = 0.9300738802553116;

		// dojo_card_jistu_mat_png_1
		const dojo_card_jistu_mat_png_1 = this.add.image(357, 617, "dojo", "dojo_card_jistu_mat.png");
		dojo_card_jistu_mat_png_1.scaleX = 0.8316190740308907;
		dojo_card_jistu_mat_png_1.scaleY = 0.9300738802553116;

		// dojo_sensi_sitting_stand_png
		const dojo_sensi_sitting_stand_png = this.add.image(629, 455, "dojo", "dojo_sensi_sitting_stand.png");
		dojo_sensi_sitting_stand_png.scaleX = 0.8315608767866252;
		dojo_sensi_sitting_stand_png.scaleY = 0.7833960051337724;

		// dojo_sensi_seaat_png
		const dojo_sensi_seaat_png = this.add.image(630, 445, "dojo", "dojo_sensi_seaat.png");
		dojo_sensi_seaat_png.scaleX = 0.6936460196628413;
		dojo_sensi_seaat_png.scaleY = 0.8387377553978917;

		// dojo_water_door0001_png
		const dojo_water_door0001_png = this.add.image(622, 215, "dojo", "dojo_water_door0001.png");
		dojo_water_door0001_png.scaleX = 0.7192599818946648;
		dojo_water_door0001_png.scaleY = 0.7541954330633848;

		// dojo_fire_door0001_png
		const dojo_fire_door0001_png = this.add.image(191, 316, "dojo", "dojo_fire_door0001.png");
		dojo_fire_door0001_png.scaleX = 0.831183487276747;
		dojo_fire_door0001_png.scaleY = 0.7699963601823827;

		// dojo_plant_png
		const dojo_plant_png = this.add.image(756, 443, "dojo", "dojo_plant.png");
		dojo_plant_png.scaleX = 0.7027470146978441;
		dojo_plant_png.scaleY = 0.6249116268675993;

		// dojo_card_jistu_mat0002_png
		const dojo_card_jistu_mat0002_png = this.add.image(377, 547, "dojo", "dojo_card_jistu_mat0002.png");
		dojo_card_jistu_mat0002_png.scaleX = 0.78131900339708;
		dojo_card_jistu_mat0002_png.scaleY = 0.9300738802553116;
		dojo_card_jistu_mat0002_png.visible = false;

		// dojo_card_jistu_mat0002_png_1
		const dojo_card_jistu_mat0002_png_1 = this.add.image(357, 617, "dojo", "dojo_card_jistu_mat0002.png");
		dojo_card_jistu_mat0002_png_1.scaleX = 0.8316190740308907;
		dojo_card_jistu_mat0002_png_1.scaleY = 0.9300738802553116;
		dojo_card_jistu_mat0002_png_1.visible = false;

		// dojo_water_door0002_png
		const dojo_water_door0002_png = this.add.image(622, 220, "dojo", "dojo_water_door0002.png");
		dojo_water_door0002_png.scaleX = 0.798054469365992;
		dojo_water_door0002_png.scaleY = 0.8139719907455099;
		dojo_water_door0002_png.visible = false;

		// dojo_fire2_png
		const dojo_fire2_png = this.add.image(567, 592, "dojo", "dojo_fire2.png");
		dojo_fire2_png.scaleX = 0.4310490617251499;
		dojo_fire2_png.scaleY = 0.4587064750382374;
		dojo_fire2_png.visible = false;

		// dojo_snow0002_png
		const dojo_snow0002_png = this.add.image(668, 603, "dojo", "dojo_snow0002.png");
		dojo_snow0002_png.scaleX = 0.7794225859397284;
		dojo_snow0002_png.scaleY = 0.7663476355366801;

		// dojo_water2_png
		const dojo_water2_png = this.add.image(639, 552, "dojo", "dojo_water2.png");
		dojo_water2_png.scaleX = 0.7602407683664388;
		dojo_water2_png.scaleY = 0.766829367088094;
		dojo_water2_png.visible = false;

		// dojo_stand_back_png
		const dojo_stand_back_png = this.add.image(852, 227, "dojo", "dojo_stand_back.png");
		dojo_stand_back_png.scaleX = 0.701407247003527;
		dojo_stand_back_png.scaleY = 0.7837763287993713;

		// dojo_other_note0001_png
		const dojo_other_note0001_png = this.add.image(849, 207, "dojo", "dojo_other_note0001.png");
		dojo_other_note0001_png.scaleX = 0.6813819750111911;
		dojo_other_note0001_png.scaleY = 0.6133731105244018;
		dojo_other_note0001_png.flipX = true;

		// dojo_other_note0003_png
		const dojo_other_note0003_png = this.add.image(849, 207, "dojo", "dojo_other_note0003.png");
		dojo_other_note0003_png.scaleX = 0.6813819750111911;
		dojo_other_note0003_png.scaleY = 0.6133731105244018;
		dojo_other_note0003_png.flipX = true;
		dojo_other_note0003_png.visible = false;

		// dojo_stand_png
		const dojo_stand_png = this.add.image(504, 462, "dojo", "dojo_stand.png");
		dojo_stand_png.scaleX = 0.786909336703708;
		dojo_stand_png.scaleY = 0.79432369938865;

		// dojo_boil_standing0001_png
		const dojo_boil_standing0001_png = this.add.sprite(505, 402, "dojo", "dojo_boil_standing0001.png");
		dojo_boil_standing0001_png.scaleX = 0.8401448104072681;

		// dojo_boil_stand_png
		const dojo_boil_stand_png = this.add.image(505, 467, "dojo", "dojo_boil_stand.png");
		dojo_boil_stand_png.scaleX = 0.7771050378614387;
		dojo_boil_stand_png.scaleY = 0.7908854299160639;

		// dojo_sensi_stand_png
		const dojo_sensi_stand_png = this.add.image(629, 394, "dojo", "dojo_sensi_stand.png");
		dojo_sensi_stand_png.scaleX = 0.8210209514734202;
		dojo_sensi_stand_png.scaleY = 0.8849974970756134;

		// dojo_card_jistu_text_png
		const dojo_card_jistu_text_png = this.add.image(628, 346, "dojo", "dojo_card_jistu_text.png");
		dojo_card_jistu_text_png.scaleX = 0.7345862492261214;
		dojo_card_jistu_text_png.scaleY = 0.6085654461941347;

		// dojo_sensi_png
		const dojo_sensi_png = this.add.image(629, 427, "dojo", "dojo_sensi.png");
		dojo_sensi_png.scaleX = 0.7011937094824834;
		dojo_sensi_png.scaleY = 0.676910529686983;

		// dojo_right_mat_png
		const dojo_right_mat_png = this.add.image(408, 242, "dojo", "dojo_right_mat.png");
		dojo_right_mat_png.scaleX = 0.9016540270357821;
		dojo_right_mat_png.scaleY = 0.9281233454537277;

		// dojo_right_mat_png_1
		const dojo_right_mat_png_1 = this.add.image(435, 314, "dojo", "dojo_right_mat.png");
		dojo_right_mat_png_1.scaleX = 0.9016540270357821;
		dojo_right_mat_png_1.scaleY = 0.9281233454537277;

		// dojo_stand_back_png_1
		const dojo_stand_back_png_1 = this.add.image(374, 228, "dojo", "dojo_stand_back.png");
		dojo_stand_back_png_1.scaleX = 0.8156202727048869;
		dojo_stand_back_png_1.scaleY = 0.7738320929357886;

		// dojo_stand_belts_note0001_png
		const dojo_stand_belts_note0001_png = this.add.image(385, 207, "dojo", "dojo_stand_belts_note0001.png");
		dojo_stand_belts_note0001_png.scaleX = 0.6813819750111911;
		dojo_stand_belts_note0001_png.scaleY = 0.6133731105244018;

		// dojo_stand_belts_note0002_png
		const dojo_stand_belts_note0002_png = this.add.image(385, 207, "dojo", "dojo_stand_belts_note0002.png");
		dojo_stand_belts_note0002_png.scaleX = 0.6813819750111911;
		dojo_stand_belts_note0002_png.scaleY = 0.6133731105244018;
		dojo_stand_belts_note0002_png.visible = false;

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "dojo_boiling_animation",
            "phaserAnimationKey": "dojo_boiling_animation_play",
            "textureKey": "dojo",
            "framePrefix": "dojo_boil_standing",
            "frames": Array.from({ length: 1200 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        dojo_boil_standing0001_png.play("dojo_boiling_animation_play");
        // Animations end here

        // Setting all interactives sprites starts here
        dojo_other_note0001_png.setInteractive({ useHandCursor: true });
        dojo_other_note0003_png.setInteractive({ useHandCursor: true });
        dojo_stand_belts_note0001_png.setInteractive({ useHandCursor: true });
        dojo_stand_belts_note0002_png.setInteractive({ useHandCursor: true });
        dojo_snow_door0001_png.setInteractive({ useHandCursor: true });
        dojo_water_door0001_png.setInteractive({ useHandCursor: true });
        dojo_fire_door0001_png.setInteractive({ useHandCursor: true });
        dojo_snow_door0002_png.setInteractive({ useHandCursor: true });
        dojo_fire_door0002_png.setInteractive({ useHandCursor: true });
        dojo_water_door0002_png.setInteractive({ useHandCursor: true });
        dojo_card_jistu_mat_png.setInteractive({ useHandCursor: true });
        dojo_card_jistu_mat0002_png.setInteractive({ useHandCursor: true });
        dojo_card_jistu_mat_png_1.setInteractive({ useHandCursor: true });
        dojo_card_jistu_mat0002_png_1.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        dojo_water_door0001_png.on("pointerover", () => {
            dojo_water_door0001_png.visible = false;
            dojo_water_door0002_png.visible = true;
        });

        dojo_water_door0002_png.on("pointerout", () => {
            dojo_water_door0001_png.visible = true;
            dojo_water_door0002_png.visible = false;
        });

        dojo_fire_door0001_png.on("pointerover", () => {
            dojo_fire_door0001_png.visible = false;
            dojo_fire_door0002_png.visible = true;
        });

        dojo_fire_door0002_png.on("pointerout", () => {
            dojo_fire_door0001_png.visible = true;
            dojo_fire_door0002_png.visible = false;
        });

        dojo_snow_door0001_png.on("pointerover", () => {
            dojo_snow_door0001_png.visible = false;
            dojo_snow_door0002_png.visible = true;
        });

        dojo_snow_door0002_png.on("pointerout", () => {
            dojo_snow_door0001_png.visible = true;
            dojo_snow_door0002_png.visible = false;
        });

        dojo_other_note0001_png.on("pointerover", () => {
            dojo_other_note0001_png.visible = false;
            dojo_other_note0003_png.visible = true;
        });

        dojo_other_note0003_png.on("pointerout", () => {
            dojo_other_note0001_png.visible = true;
            dojo_other_note0003_png.visible = false;
        });

        dojo_stand_belts_note0001_png.on("pointerover", () => {
            dojo_stand_belts_note0001_png.visible = false;
            dojo_stand_belts_note0002_png.visible = true;
        });

        dojo_stand_belts_note0002_png.on("pointerout", () => {
            dojo_stand_belts_note0001_png.visible = true;
            dojo_stand_belts_note0002_png.visible = false;
        });

        dojo_card_jistu_mat_png.on("pointerover", () => {
            dojo_card_jistu_mat_png.visible = false
            dojo_card_jistu_mat0002_png.visible = true;
        });

        dojo_card_jistu_mat0002_png.on("pointerout", () => {
            dojo_card_jistu_mat_png.visible = true
            dojo_card_jistu_mat0002_png.visible = false;
        });

        dojo_card_jistu_mat_png_1.on("pointerover", () => {
            dojo_card_jistu_mat_png_1.visible = false;
            dojo_card_jistu_mat0002_png_1.visible = true;
        });

        dojo_card_jistu_mat0002_png_1.on("pointerout", () => {
            dojo_card_jistu_mat_png_1.visible = true;
            dojo_card_jistu_mat0002_png_1.visible = false;
        });
        // All interactive events end here
    }
}
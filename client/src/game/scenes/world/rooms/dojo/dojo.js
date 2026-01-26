import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { DOJO_ROOM_FIRE_DOOR_CLOSE, DOJO_ROOM_FIRE_DOOR_OPEN, DOJO_ROOM_MUSIC, DOJO_ROOM_SNOW_DOOR_CLOSE, DOJO_ROOM_SNOW_DOOR_OPEN, DOJO_ROOM_WATER_DOOR_CLOSE, DOJO_ROOM_WATER_DOOR_OPEN } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

// TODO: Fix fire door bugging out on hover events
// TODO: Fix right side card jistu mats

export class DojoScene extends BaseScene {
    constructor() {
        super("DojoScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
		this.audioManager = this.getAudioManager();
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "dojo",
            "paths": ["assets/world/rooms/dojo/dojo-pack.json"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_ROOM_MUSIC,
            "paths": ["assets/world/rooms/dojo/dojo_music.mp3"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_ROOM_FIRE_DOOR_OPEN,
            "paths": ["assets/world/rooms/dojo/dojo_room_fire_door_open.mp3"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_ROOM_FIRE_DOOR_CLOSE,
            "paths": ["assets/world/rooms/dojo/dojo_room_fire_door_close.mp3"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_ROOM_WATER_DOOR_OPEN,
            "paths": ["assets/world/rooms/dojo/dojo_room_water_door_open.mp3"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_ROOM_WATER_DOOR_CLOSE,
            "paths": ["assets/world/rooms/dojo/dojo_room_water_door_close.mp3"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_ROOM_SNOW_DOOR_OPEN,
            "paths": ["assets/world/rooms/dojo/dojo_room_snow_door_open.mp3"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_ROOM_SNOW_DOOR_CLOSE,
            "paths": ["assets/world/rooms/dojo/dojo_room_snow_door_close.mp3"]
        });
    }

    createContent() {
		// dojo_main_png
		const dojo_main_png = this.add.image(-72, -9, "dojo", "dojo_main.png");
		dojo_main_png.scaleX = 0.9258785913127788;
		dojo_main_png.scaleY = 0.9425697138418705;
		dojo_main_png.setOrigin(0, 0);

		// dojo_fire_door0002_png
		const dojo_fire_door0002_png = this.add.image(237, 377, "dojo", "dojo_fire_door0002.png");
		dojo_fire_door0002_png.scaleX = 1.0226404605407655;
		dojo_fire_door0002_png.scaleY = 0.9374154208385841;
		dojo_fire_door0002_png.visible = false;

		// dojo_water_door0001_png
		const dojo_water_door0001_png = this.add.image(760, 263, "dojo", "dojo_water_door0001.png");
		dojo_water_door0001_png.scaleX = 0.9198453183569738;
		dojo_water_door0001_png.scaleY = 0.9288782538511625;

		// dojo_water_door0002_png
		const dojo_water_door0002_png = this.add.image(758, 265, "dojo", "dojo_water_door0002.png");
		dojo_water_door0002_png.scaleX = 0.9198453183569738;
		dojo_water_door0002_png.scaleY = 0.9288782538511625;
		dojo_water_door0002_png.visible = false;

		// dojo_snow_door0001_png
		const dojo_snow_door0001_png = this.add.image(1286, 378, "dojo", "dojo_snow_door0001.png");
		dojo_snow_door0001_png.scaleX = 0.8575421955237168;
		dojo_snow_door0001_png.scaleY = 0.910258257442168;

		// dojo_snow_door0002_png
		const dojo_snow_door0002_png = this.add.image(1286, 378, "dojo", "dojo_snow_door0002.png");
		dojo_snow_door0002_png.scaleX = 0.8575421955237168;
		dojo_snow_door0002_png.scaleY = 0.910258257442168;
		dojo_snow_door0002_png.visible = false;

		// dojo_fire_door0001_png
		const dojo_fire_door0001_png = this.add.image(237, 377, "dojo", "dojo_fire_door0001.png");
		dojo_fire_door0001_png.scaleX = 1.0226404605407655;
		dojo_fire_door0001_png.scaleY = 0.9374154208385841;

		// dojo_stands_png
		const dojo_stands_png = this.add.image(758, 355, "dojo", "dojo_stands.png");
		dojo_stands_png.scaleX = 0.9301064771279534;
		dojo_stands_png.scaleY = 0.9653809093048874;

		// dojo_red_stand_left_png
		const dojo_red_stand_left_png = this.add.image(36, 488, "dojo", "dojo_red_stand_left.png");
		dojo_red_stand_left_png.scaleX = 0.941294622374361;
		dojo_red_stand_left_png.scaleY = 0.94823644956801;

		// dojo_red_stand_right_png
		const dojo_red_stand_right_png = this.add.image(1482, 480, "dojo", "dojo_red_stand_right.png");
		dojo_red_stand_right_png.scaleX = 0.941294622374361;
		dojo_red_stand_right_png.scaleY = 0.94823644956801;

		// dojo_card_jistu_mat_png
		const dojo_card_jistu_mat_png = this.add.image(445, 744, "dojo", "dojo_card_jistu_mat.png");
		dojo_card_jistu_mat_png.scaleX = 0.991050819804079;
		dojo_card_jistu_mat_png.scaleY = 1.1044313703151154;

		// dojo_card_jistu_mat_png_1
		const dojo_card_jistu_mat_png_1 = this.add.image(473, 658, "dojo", "dojo_card_jistu_mat.png");
		dojo_card_jistu_mat_png_1.scaleX = 0.9107668487525054;
		dojo_card_jistu_mat_png_1.scaleY = 1.0131833622557633;

		// dojo_sensi_sitting_stand_png
		const dojo_sensi_sitting_stand_png = this.add.image(768, 555, "dojo", "dojo_sensi_sitting_stand.png");
		dojo_sensi_sitting_stand_png.scaleX = 0.8890624716054368;
		dojo_sensi_sitting_stand_png.scaleY = 0.8580638468666424;

		// dojo_sensi_seaat_png
		const dojo_sensi_seaat_png = this.add.image(767, 542, "dojo", "dojo_sensi_seaat.png");
		dojo_sensi_seaat_png.scaleX = 0.8396077268814246;
		dojo_sensi_seaat_png.scaleY = 1.0264297641900277;

		// dojo_plant_png
		const dojo_plant_png = this.add.image(916, 538, "dojo", "dojo_plant.png");
		dojo_plant_png.scaleX = 0.8467790092439169;
		dojo_plant_png.scaleY = 0.7252454103444896;

		// dojo_card_jistu_mat0002_png
		const dojo_card_jistu_mat0002_png = this.add.image(445, 744, "dojo", "dojo_card_jistu_mat0002.png");
		dojo_card_jistu_mat0002_png.scaleX = 0.991050819804079;
		dojo_card_jistu_mat0002_png.scaleY = 1.1044313703151154;
		dojo_card_jistu_mat0002_png.visible = false;

		// dojo_card_jistu_mat0002_png_1
		const dojo_card_jistu_mat0002_png_1 = this.add.image(473, 658, "dojo", "dojo_card_jistu_mat0002.png");
		dojo_card_jistu_mat0002_png_1.scaleX = 0.9107668487525054;
		dojo_card_jistu_mat0002_png_1.scaleY = 1.0131833622557633;
		dojo_card_jistu_mat0002_png_1.visible = false;

		// dojo_fire2_png
		const dojo_fire2_png = this.add.image(693, 714, "dojo", "dojo_fire2.png");
		dojo_fire2_png.scaleX = 0.5047861035520259;
		dojo_fire2_png.scaleY = 0.5611500956455349;
		dojo_fire2_png.visible = false;

		// dojo_snow0002_png
		const dojo_snow0002_png = this.add.image(812, 727, "dojo", "dojo_snow0002.png");
		dojo_snow0002_png.scaleX = 0.9263457162438267;
		dojo_snow0002_png.scaleY = 0.9108414942678578;

		// dojo_water2_png
		const dojo_water2_png = this.add.image(778, 667, "dojo", "dojo_water2.png");
		dojo_water2_png.scaleX = 0.8909637320693016;
		dojo_water2_png.scaleY = 0.9264272848697707;
		dojo_water2_png.visible = false;

		// dojo_stand_back_png
		const dojo_stand_back_png = this.add.image(1036, 280, "dojo", "dojo_stand_back.png");
		dojo_stand_back_png.scaleX = 1.006207847952001;
		dojo_stand_back_png.scaleY = 0.9229459026487495;
		dojo_stand_back_png.angle = 7;

		// dojo_other_note0001_png
		const dojo_other_note0001_png = this.add.image(1032, 260, "dojo", "dojo_other_note0001.png");
		dojo_other_note0001_png.scaleX = 0.9347145999246236;
		dojo_other_note0001_png.scaleY = 0.9137787026619771;
		dojo_other_note0001_png.flipX = true;

		// dojo_other_note0003_png
		const dojo_other_note0003_png = this.add.image(1032, 260, "dojo", "dojo_other_note0003.png");
		dojo_other_note0003_png.scaleX = 0.9347145999246236;
		dojo_other_note0003_png.scaleY = 0.9137787026619771;
		dojo_other_note0003_png.flipX = true;
		dojo_other_note0003_png.visible = false;

		// dojo_stand_png
		const dojo_stand_png = this.add.image(621, 556, "dojo", "dojo_stand.png");
		dojo_stand_png.scaleX = 0.9535791815031943;
		dojo_stand_png.scaleY = 1.0069968541979264;

		// dojo_boil_standing0001_png
		const dojo_boil_standing0001_png = this.add.sprite(622, 494, "dojo", "dojo_boil_standing0001.png");
		dojo_boil_standing0001_png.scaleX = 0.8401448104072681;

		// dojo_boil_stand_png
		const dojo_boil_stand_png = this.add.image(622, 561, "dojo", "dojo_boil_stand.png");
		dojo_boil_stand_png.scaleX = 0.9512193470689334;
		dojo_boil_stand_png.scaleY = 1.0272969606329816;

		// dojo_sensi_stand_png
		const dojo_sensi_stand_png = this.add.image(767, 493, "dojo", "dojo_sensi_stand.png");
		dojo_sensi_stand_png.scaleX = 0.9184984150112756;
		dojo_sensi_stand_png.scaleY = 0.8849974970756134;

		// dojo_card_jistu_text_png
		const dojo_card_jistu_text_png = this.add.image(766, 443, "dojo", "dojo_card_jistu_text.png");
		dojo_card_jistu_text_png.scaleX = 0.8003973811371831;
		dojo_card_jistu_text_png.scaleY = 0.6720901336576323;

		// dojo_sensi_png
		const dojo_sensi_png = this.add.image(767, 520, "dojo", "dojo_sensi.png");
		dojo_sensi_png.scaleX = 0.9506583358150595;
		dojo_sensi_png.scaleY = 0.8779450806897138;

		// dojo_stand_back_png_1
		const dojo_stand_back_png_1 = this.add.image(462, 280, "dojo", "dojo_stand_back.png");
		dojo_stand_back_png_1.scaleX = 1.006207847952001;
		dojo_stand_back_png_1.scaleY = 0.9229459026487495;

		// dojo_stand_belts_note0001_png
		const dojo_stand_belts_note0001_png = this.add.image(483, 260, "dojo", "dojo_stand_belts_note0001.png");
		dojo_stand_belts_note0001_png.scaleX = 0.9347145999246236;
		dojo_stand_belts_note0001_png.scaleY = 0.9137787026619771;

		// dojo_stand_belts_note0002_png
		const dojo_stand_belts_note0002_png = this.add.image(483, 260, "dojo", "dojo_stand_belts_note0002.png");
		dojo_stand_belts_note0002_png.scaleX = 0.9347145999246236;
		dojo_stand_belts_note0002_png.scaleY = 0.9137787026619771;
		dojo_stand_belts_note0002_png.visible = false;

		// dojo_card_jistu_mat_png_2
		const dojo_card_jistu_mat_png_2 = this.add.image(1043, 660, "dojo", "dojo_card_jistu_mat.png");
		dojo_card_jistu_mat_png_2.scaleX = 0.9107668487525054;
		dojo_card_jistu_mat_png_2.scaleY = 1.0131833622557633;
		dojo_card_jistu_mat_png_2.flipX = true;

		// dojo_card_jistu_mat_png_3
		const dojo_card_jistu_mat_png_3 = this.add.image(1072, 742, "dojo", "dojo_card_jistu_mat.png");
		dojo_card_jistu_mat_png_3.scaleX = 0.9538645223881346;
		dojo_card_jistu_mat_png_3.scaleY = 1.0131833622557633;
		dojo_card_jistu_mat_png_3.flipX = true;

		// dojo_card_jistu_mat0002_png_2
		const dojo_card_jistu_mat0002_png_2 = this.add.image(1045, 660, "dojo", "dojo_card_jistu_mat0002.png");
		dojo_card_jistu_mat0002_png_2.scaleX = 0.9107668487525054;
		dojo_card_jistu_mat0002_png_2.scaleY = 1.0131833622557633;
		dojo_card_jistu_mat0002_png_2.flipX = true;
		dojo_card_jistu_mat0002_png_2.visible = false;

		// dojo_card_jistu_mat0002_png_3
		const dojo_card_jistu_mat0002_png_3 = this.add.image(1073, 742, "dojo", "dojo_card_jistu_mat0002.png");
		dojo_card_jistu_mat0002_png_3.scaleX = 0.919090312594477;
		dojo_card_jistu_mat0002_png_3.scaleY = 1.0131833622557633;
		dojo_card_jistu_mat0002_png_3.flipX = true;
		dojo_card_jistu_mat0002_png_3.visible = false;

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
		dojo_card_jistu_mat_png_2.setInteractive({ useHandCursor: true });
		dojo_card_jistu_mat_png_3.setInteractive({ useHandCursor: true });
		dojo_card_jistu_mat0002_png_2.setInteractive({ useHandCursor: true });
		dojo_card_jistu_mat0002_png_3.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        dojo_water_door0001_png.on("pointerover", () => {
            dojo_water_door0001_png.visible = false;
            dojo_water_door0002_png.visible = true;
			this.audioManager.play(DOJO_ROOM_WATER_DOOR_OPEN);
        });

        dojo_water_door0002_png.on("pointerout", () => {
            dojo_water_door0001_png.visible = true;
            dojo_water_door0002_png.visible = false;
			this.audioManager.play(DOJO_ROOM_WATER_DOOR_CLOSE);
        });

        dojo_fire_door0001_png.on("pointerover", () => {
            dojo_fire_door0001_png.visible = false;
            dojo_fire_door0002_png.visible = true;
			this.audioManager.play(DOJO_ROOM_FIRE_DOOR_OPEN);
        });

        dojo_fire_door0002_png.on("pointerout", () => {
            dojo_fire_door0001_png.visible = true;
            dojo_fire_door0002_png.visible = false;
			this.audioManager.play(DOJO_ROOM_FIRE_DOOR_CLOSE);
        });

        dojo_snow_door0001_png.on("pointerover", () => {
            dojo_snow_door0001_png.visible = false;
            dojo_snow_door0002_png.visible = true;
			this.audioManager.play(DOJO_ROOM_SNOW_DOOR_OPEN);
        });

        dojo_snow_door0002_png.on("pointerout", () => {
            dojo_snow_door0001_png.visible = true;
            dojo_snow_door0002_png.visible = false;
			this.audioManager.play(DOJO_ROOM_SNOW_DOOR_CLOSE);
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

		dojo_card_jistu_mat_png_2.on("pointerover", () => {
			dojo_card_jistu_mat_png_2.visible = false;
			dojo_card_jistu_mat0002_png_2.visible = true;
		});	

		dojo_card_jistu_mat0002_png_2.on("pointerout", () => {
			dojo_card_jistu_mat_png_2.visible = true;
			dojo_card_jistu_mat0002_png_2.visible = false;
		});	

		dojo_card_jistu_mat_png_3.on("pointerover", () => {
			dojo_card_jistu_mat_png_3.visible = false;
			dojo_card_jistu_mat0002_png_3.visible = true;
		});

		dojo_card_jistu_mat0002_png_3.on("pointerout", () => {
			dojo_card_jistu_mat_png_3.visible = true;
			dojo_card_jistu_mat0002_png_3.visible = false;
		});	
        // All interactive events end here

		this.audioManager.play(DOJO_ROOM_MUSIC);
    }
}
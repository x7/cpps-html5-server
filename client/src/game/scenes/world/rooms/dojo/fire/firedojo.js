import { ASSET_TYPES } from "../../../../../assets/assetTypes";
import { DOJO_FIRE_ROOM_MUSIC } from "../../../../../audio/audioConstants";
import { BaseScene } from "../../../../base/baseScene";

// TODO: Redesign this entirely
// TODO: Add animations

export class FireDojoScene extends BaseScene {
    constructor() {
        super("FireDojoScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
		this.audioManager = this.getAudioManager();
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "firedojo",
            "paths": ["assets/world/rooms/dojo/firedojo/firedojo-pack.json"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOJO_FIRE_ROOM_MUSIC,
            "paths": ["assets/world/rooms/dojo/firedojo/firedojo_music.mp3"]
        });
    }

    createContent() {
		// fire_dojo_sky_png
		const fire_dojo_sky_png = this.add.image(736, 143, "fire_dojo", "fire_dojo_sky.png");
		fire_dojo_sky_png.scaleY = 1.547251621690757;

		// fire_dojo_statues0001_png
		const fire_dojo_statues0001_png = this.add.image(757, 383, "fire_dojo", "fire_dojo_statues0001.png");
		fire_dojo_statues0001_png.scaleX = 0.983457037854704;
		fire_dojo_statues0001_png.scaleY = 0.9770732935825047;

		// fire_dojo_big_latern0001_png_1
		const fire_dojo_big_latern0001_png_1 = this.add.sprite(1386, 272, "fire_dojo", "fire_dojo_big_latern0001.png");
		fire_dojo_big_latern0001_png_1.scaleX = 1.027396063677858;
		fire_dojo_big_latern0001_png_1.scaleY = 0.855930208052059;

		// fire_dojo_big_latern0001_png_2
		const fire_dojo_big_latern0001_png_2 = this.add.sprite(147, 296, "fire_dojo", "fire_dojo_big_latern0001.png");
		fire_dojo_big_latern0001_png_2.scaleX = 1.0465770596373258;
		fire_dojo_big_latern0001_png_2.scaleY = 0.8586689394091125;
		fire_dojo_big_latern0001_png_2.flipX = true;

		// fire_dojo_base_png
		const fire_dojo_base_png = this.add.image(0, 40, "fire_dojo", "fire_dojo_base.png");
		fire_dojo_base_png.setOrigin(0, 0);

		// fire_dojo_bottom_left_mat_png
		const fire_dojo_bottom_left_mat_png = this.add.image(279, 422, "fire_dojo", "fire_dojo_bottom_left_mat.png");
		fire_dojo_bottom_left_mat_png.scaleX = 1.024957896115627;
		fire_dojo_bottom_left_mat_png.scaleY = 0.9609871122710244;

		// fire_dojo_bottom_right_mat0001_png
		const fire_dojo_bottom_right_mat0001_png = this.add.image(1085, 769, "fire_dojo", "fire_dojo_bottom_right_mat0001.png");
		fire_dojo_bottom_right_mat0001_png.scaleX = 1.0104594221518652;
		fire_dojo_bottom_right_mat0001_png.scaleY = 1.0471900388980526;

		// fire_dojo_bottom_part_png
		const fire_dojo_bottom_part_png = this.add.image(775, 732, "fire_dojo", "fire_dojo_bottom_part.png");
		fire_dojo_bottom_part_png.scaleX = 0.9903356996052057;
		fire_dojo_bottom_part_png.scaleY = 0.9762196819646177;

		// fire_dojo_top_left_mat0001_png
		const fire_dojo_top_left_mat0001_png = this.add.image(493, 530, "fire_dojo", "fire_dojo_top_left_mat0001.png");
		fire_dojo_top_left_mat0001_png.scaleX = 0.9516013305190532;
		fire_dojo_top_left_mat0001_png.scaleY = 0.9968469943850272;

		// fire_dojo_top_left_mat0001_png_1
		const fire_dojo_top_left_mat0001_png_1 = this.add.image(1062, 533, "fire_dojo", "fire_dojo_top_left_mat0001.png");
		fire_dojo_top_left_mat0001_png_1.scaleX = 0.9071368173558102;
		fire_dojo_top_left_mat0001_png_1.scaleY = 1.0263827207591396;
		fire_dojo_top_left_mat0001_png_1.angle = -2;
		fire_dojo_top_left_mat0001_png_1.flipX = true;

		// fire_dojo_stairs_png
		const fire_dojo_stairs_png = this.add.image(767, 389, "fire_dojo", "fire_dojo_stairs.png");
		fire_dojo_stairs_png.scaleX = 1.0222105478168353;
		fire_dojo_stairs_png.scaleY = 1.074647922313813;

		// fire_dojo_flower_pot_png
		const fire_dojo_flower_pot_png = this.add.image(930, 225, "fire_dojo", "fire_dojo_flower_pot.png");
		fire_dojo_flower_pot_png.scaleX = 0.9826895445115916;
		fire_dojo_flower_pot_png.scaleY = 1.0732765547665162;

		// fire_dojo_pipe_png
		const fire_dojo_pipe_png = this.add.image(1178, 357, "fire_dojo", "fire_dojo_pipe.png");
		fire_dojo_pipe_png.scaleX = 0.9408580728586367;
		fire_dojo_pipe_png.scaleY = 0.9972625334658294;

		// fire_dojo_legend_paper0005_png
		const fire_dojo_legend_paper0005_png = this.add.image(387, 375, "fire_dojo", "fire_dojo_legend_paper0001.png");
		fire_dojo_legend_paper0005_png.scaleX = 1.0359936347880039;
		fire_dojo_legend_paper0005_png.scaleY = 0.9282872761960069;

		// fire_dojo_instructions0001_png
		const fire_dojo_instructions0001_png = this.add.image(1174, 375, "fire_dojo", "fire_dojo_instructions0001.png");
		fire_dojo_instructions0001_png.scaleX = 1.0359936347880039;
		fire_dojo_instructions0001_png.scaleY = 0.9282872761960069;

		// fire_dojo_small_latern_png
		const fire_dojo_small_latern_png = this.add.image(298, 530, "fire_dojo", "fire_dojo_small_latern.png");
		fire_dojo_small_latern_png.scaleX = 1.0504820623297824;
		fire_dojo_small_latern_png.scaleY = 1.1219797522942172;

		// fire_dojo_small_latern_png_1
		const fire_dojo_small_latern_png_1 = this.add.image(577, 444, "fire_dojo", "fire_dojo_small_latern.png");
		fire_dojo_small_latern_png_1.scaleX = 1.0504820623297824;
		fire_dojo_small_latern_png_1.scaleY = 1.1219797522942172;

		// fire_dojo_small_latern_png_2
		const fire_dojo_small_latern_png_2 = this.add.image(974, 448, "fire_dojo", "fire_dojo_small_latern.png");
		fire_dojo_small_latern_png_2.scaleX = 1.0504820623297824;
		fire_dojo_small_latern_png_2.scaleY = 1.1219797522942172;
		fire_dojo_small_latern_png_2.flipX = true;

		// fire_dojo_small_latern_png_3
		const fire_dojo_small_latern_png_3 = this.add.image(1263, 536, "fire_dojo", "fire_dojo_small_latern.png");
		fire_dojo_small_latern_png_3.scaleX = 1.0504820623297824;
		fire_dojo_small_latern_png_3.scaleY = 1.1219797522942172;
		fire_dojo_small_latern_png_3.flipX = true;

		// fire_dojo_bottom_part_lava_outline_png
		const fire_dojo_bottom_part_lava_outline_png = this.add.image(765, 864, "fire_dojo", "fire_dojo_bottom_part_lava_outline.png");
		fire_dojo_bottom_part_lava_outline_png.scaleX = 1.0000036265856278;
		fire_dojo_bottom_part_lava_outline_png.scaleY = 1.1475575293015454;

		// fire_dojo_sensi_hoouose0001_png
		const fire_dojo_sensi_hoouose0001_png = this.add.image(778, 191, "fire_dojo", "fire_dojo_sensi_hoouose0001.png");
		fire_dojo_sensi_hoouose0001_png.scaleX = 1.0669410475098144;
		fire_dojo_sensi_hoouose0001_png.scaleY = 0.9781963113314042;

		// fire_dojo_text_png
		const fire_dojo_text_png = this.add.image(774, 116, "fire_dojo", "fire_dojo_text.png");
		fire_dojo_text_png.scaleX = 0.9845179754180426;
		fire_dojo_text_png.scaleY = 0.8602657157555187;

		this.audioManager.play(DOJO_FIRE_ROOM_MUSIC);
    }
}
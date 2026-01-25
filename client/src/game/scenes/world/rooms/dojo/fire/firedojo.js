import { ASSET_TYPES } from "../../../../../assets/assetTypes";
import { BaseScene } from "../../../../base/baseScene";

// TODO: Redesign this entirely
// TODO: Add animations

export class FireDojoScene extends BaseScene {
    constructor() {
        super("FireDojoScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "firedojo",
            paths: ["assets/world/rooms/dojo/firedojo/firedojo-pack.json"]
        });
    }

    createContent() {
        // fire_dojo_sky_png
		const fire_dojo_sky_png = this.add.image(684, 59, "fire_dojo", "fire_dojo_sky.png");
		fire_dojo_sky_png.scaleY = 1.547251621690757;

		// fire_dojo_statues0001_png
		const fire_dojo_statues0001_png = this.add.image(613, 357, "fire_dojo", "fire_dojo_statues0001.png");
		fire_dojo_statues0001_png.scaleX = 0.926716244457001;
		fire_dojo_statues0001_png.scaleY = 0.9770732935825047;

		// fire_dojo_big_latern0001_png_1
		this.add.sprite(1176, 227, "fire_dojo", "fire_dojo_big_latern0001.png");

		// fire_dojo_big_latern0001_png_2
		const fire_dojo_big_latern0001_png_2 = this.add.sprite(68, 229, "fire_dojo", "fire_dojo_big_latern0001.png");
		fire_dojo_big_latern0001_png_2.flipX = true;

		// fire_dojo_base_png
		const fire_dojo_base_png = this.add.image(624, 443, "fire_dojo", "fire_dojo_base.png");
		fire_dojo_base_png.scaleX = 0.8571421209322144;
		fire_dojo_base_png.scaleY = 0.8387001530839628;

		// fire_dojo_bottom_left_mat_png
		const fire_dojo_bottom_left_mat_png = this.add.image(211, 326, "fire_dojo", "fire_dojo_bottom_left_mat.png");
		fire_dojo_bottom_left_mat_png.scaleX = 0.8565494425725355;
		fire_dojo_bottom_left_mat_png.scaleY = 0.9086416032505539;

		// fire_dojo_bottom_right_mat0001_png
		const fire_dojo_bottom_right_mat0001_png = this.add.image(872, 652, "fire_dojo", "fire_dojo_bottom_right_mat0001.png");
		fire_dojo_bottom_right_mat0001_png.scaleX = 0.9460529137836106;
		fire_dojo_bottom_right_mat0001_png.scaleY = 0.8010119139168523;

		// fire_dojo_bottom_part_png
		const fire_dojo_bottom_part_png = this.add.image(633, 629, "fire_dojo", "fire_dojo_bottom_part.png");
		fire_dojo_bottom_part_png.scaleX = 0.863028588369397;
		fire_dojo_bottom_part_png.scaleY = 0.9036778803520052;

		// fire_dojo_top_left_mat0001_png
		const fire_dojo_top_left_mat0001_png = this.add.image(383, 465, "fire_dojo", "fire_dojo_top_left_mat0001.png");
		fire_dojo_top_left_mat0001_png.scaleX = 0.8054337970441822;
		fire_dojo_top_left_mat0001_png.scaleY = 0.8963704119536064;

		// fire_dojo_top_left_mat0001_png_1
		const fire_dojo_top_left_mat0001_png_1 = this.add.image(859, 464, "fire_dojo", "fire_dojo_top_left_mat0001.png");
		fire_dojo_top_left_mat0001_png_1.scaleX = 0.8112526160269837;
		fire_dojo_top_left_mat0001_png_1.scaleY = 0.8998226243063813;
		fire_dojo_top_left_mat0001_png_1.angle = -2;
		fire_dojo_top_left_mat0001_png_1.flipX = true;

		// fire_dojo_stairs_png
		const fire_dojo_stairs_png = this.add.image(606, 329, "fire_dojo", "fire_dojo_stairs.png");
		fire_dojo_stairs_png.scaleX = 0.8205076883961832;
		fire_dojo_stairs_png.scaleY = 0.973400028724319;

		// fire_dojo_flower_pot_png
		const fire_dojo_flower_pot_png = this.add.image(748, 205, "fire_dojo", "fire_dojo_flower_pot.png");
		fire_dojo_flower_pot_png.scaleX = 0.8883771719795324;
		fire_dojo_flower_pot_png.scaleY = 0.9419862500609311;

		// fire_dojo_pipe_png
		const fire_dojo_pipe_png = this.add.image(962, 315, "fire_dojo", "fire_dojo_pipe.png");
		fire_dojo_pipe_png.scaleX = 0.7993579213990998;
		fire_dojo_pipe_png.scaleY = 0.8141041142758696;

		// fire_dojo_legend_paper0005_png
		const fire_dojo_legend_paper0005_png = this.add.image(278, 327, "fire_dojo", "fire_dojo_legend_paper0001.png");
		fire_dojo_legend_paper0005_png.scaleX = 0.8544938305368865;
		fire_dojo_legend_paper0005_png.scaleY = 0.8788063842189631;

		// fire_dojo_instructions0001_png
		const fire_dojo_instructions0001_png = this.add.image(954, 351, "fire_dojo", "fire_dojo_instructions0001.png");
		fire_dojo_instructions0001_png.scaleX = 0.7699879477016652;
		fire_dojo_instructions0001_png.scaleY = 0.7405600884372299;

		// fire_dojo_small_latern_png
		this.add.image(205, 462, "fire_dojo", "fire_dojo_small_latern.png");

		// fire_dojo_small_latern_png_1
		this.add.image(455, 389, "fire_dojo", "fire_dojo_small_latern.png");

		// fire_dojo_small_latern_png_2
		const fire_dojo_small_latern_png_2 = this.add.image(784, 392, "fire_dojo", "fire_dojo_small_latern.png");
		fire_dojo_small_latern_png_2.flipX = true;

		// fire_dojo_small_latern_png_3
		const fire_dojo_small_latern_png_3 = this.add.image(1029, 467, "fire_dojo", "fire_dojo_small_latern.png");
		fire_dojo_small_latern_png_3.flipX = true;

		// fire_dojo_bottom_part_lava_outline_png
		const fire_dojo_bottom_part_lava_outline_png = this.add.image(638, 753, "fire_dojo", "fire_dojo_bottom_part_lava_outline.png");
		fire_dojo_bottom_part_lava_outline_png.scaleX = 0.8907235869270875;

		// fire_dojo_sensi_hoouose0001_png
		const fire_dojo_sensi_hoouose0001_png = this.add.image(621, 174, "fire_dojo", "fire_dojo_sensi_hoouose0001.png");
		fire_dojo_sensi_hoouose0001_png.scaleX = 0.874764142334581;
		fire_dojo_sensi_hoouose0001_png.scaleY = 0.7853730220502952;

		// fire_dojo_text_png
		const fire_dojo_text_png = this.add.image(617, 113, "fire_dojo", "fire_dojo_text.png");
		fire_dojo_text_png.scaleX = 0.8970337205823306;
		fire_dojo_text_png.scaleY = 0.6485757821288265;
    }
}
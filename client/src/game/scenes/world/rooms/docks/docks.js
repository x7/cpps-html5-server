import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BaseScene } from "../../../base/baseScene";

export class DocksScene extends BaseScene {
    constructor() {
        super("DocksScene")
    }

    init() {
        this.assetManager = this.getAssetManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "docks",
            paths: ["assets/world/rooms/docks/docks-pack.json"]
        });
    }

    createContent() {
        // docks_main_background_png
		this.add.image(600, 86, "docks", "docks_main_background.png");

		// docks_main_png
		const docks_main_png = this.add.image(719, 388, "docks", "docks_main.png");
		docks_main_png.scaleX = 0.8053615407895159;
		docks_main_png.scaleY = 0.7999501229039983;

		// docks_bench_png
		const docks_bench_png = this.add.image(791, 253, "docks", "docks_bench.png");
		docks_bench_png.scaleX = 0.7651843502217699;
		docks_bench_png.scaleY = 0.782764713265158;

		// docks_frozen_right_side_png
		this.add.image(1244, 369, "docks", "docks_frozen_right_side.png");

		// docks_pink_surfboard_png
		const docks_pink_surfboard_png = this.add.image(1016, 511, "docks", "docks_pink_surfboard.png");
		docks_pink_surfboard_png.scaleX = 0.8447368074285148;
		docks_pink_surfboard_png.scaleY = 0.9261652676946989;

		// docks_surf_board_sale_png
		this.add.image(643, 476, "docks", "docks_surf_board_sale.png");

		// docks_buy_surf_board_png
		const docks_buy_surf_board_png = this.add.sprite(615, 476, "docks", "docks_buy_surf_board.png");
		docks_buy_surf_board_png.scaleX = 0.6407468822393549;
		docks_buy_surf_board_png.scaleY = 0.6570891140204647;

		// docks_stairs_png
		this.add.image(327, 352, "docks", "docks_stairs.png");

		// docks_lampost_png
		this.add.image(488, 339, "docks", "docks_lampost.png");

		// docks_hydro_hopper0001_png
		const docks_hydro_hopper0001_png = this.add.sprite(138, 501, "docks", "docks_hydro_hopper0001.png");
		docks_hydro_hopper0001_png.scaleX = 0.9587573495778954;
		docks_hydro_hopper0001_png.scaleY = 0.885516905407915;

		// docks_deck_board_png
		const docks_deck_board_png = this.add.image(196, 482, "docks", "docks_deck_board.png");
		docks_deck_board_png.scaleX = 0.974911452831468;
		docks_deck_board_png.scaleY = 0.8369897540194782;

		// docks_random_stick_png
		const docks_random_stick_png = this.add.image(288, 664, "docks", "docks_random_stick.png");
		docks_random_stick_png.scaleX = 0.9829755280944651;
		docks_random_stick_png.scaleY = 0.8217022175163736;

		// docks_right_side_chair_png
		const docks_right_side_chair_png = this.add.image(199, 241, "docks", "docks_right_side_chair.png");
		docks_right_side_chair_png.scaleX = 0.9059397327441412;
		docks_right_side_chair_png.scaleY = 0.7585583243832948;

		// docks_left_side_chair_png
		const docks_left_side_chair_png = this.add.image(144, 270, "docks", "docks_left_side_chair.png");
		docks_left_side_chair_png.scaleX = 0.8823557579528026;
		docks_left_side_chair_png.scaleY = 0.652412431045195;

		// docks_bouncy_circles0001_png
		const docks_bouncy_circles0001_png = this.add.sprite(466, 534, "docks", "docks_bouncy_circles0001.png");
		docks_bouncy_circles0001_png.scaleX = 0.8417347118896823;
		docks_bouncy_circles0001_png.scaleY = 0.8342740166473169;

        // Animations start here
        createAnimation({
            scene: this,
            logicalAnimationKey: "docks_bouncy_things",
			phaserAnimationKey: "docks_bouncy_things_play",
			textureKey: "docks",
            framePrefix: "docks_bouncy_circles",
			frames: ["0001","0002","0003","0004","0005","0006","0007","0008","0009","0010","0011","0012","0013","0014","0015","0016","0017","0018","0019","0020","0021","0022","0023","0024","0025","0026","0027","0028","0029","0030","0031","0032","0033","0034"], 
			framesExtension: ".png",
			frameRate: 24,
			repeat: 0
        });

        createAnimation({
            scene: this,
            logicalAnimationKey: "docks_hydro_hopper_move",
			phaserAnimationKey: "docks_hydro_hopper_move_play",
			textureKey: "docks",
            framePrefix: "docks_hydro_hopper",
			frames: [
				"0001","0002","0003","0004","0005","0006","0007","0008","0009","0010",
  				"0011","0012","0013","0014","0015","0016","0017","0018","0019","0020",
  				"0021","0022","0023","0024","0025","0026","0027","0028","0029","0030",
  				"0031","0032","0033","0034","0035","0036","0037","0038","0039","0040",
  				"0041","0042","0043","0044","0045","0046","0047","0048","0049","0050",
  				"0051","0052","0053","0054","0055","0056","0057","0058","0059","0060",
  				"0061","0062","0063","0064","0065","0066","0067","0068","0069","0070",
  				"0071","0072","0073","0074","0075","0076","0077","0078","0079","0080"
			], 
			framesExtension: ".png",
			frameRate: 24,
			repeat: -1
        });

        createAnimation({
            scene: this,
            logicalAnimationKey: "docks_buy_hoppers_note",
			phaserAnimationKey: "docks_buy_hoppers_note_play",
			textureKey: "docks",
            framePrefix: "docks_buy_surf_board",
			frames: ["0001","0002","0003","0004"], 
			framesExtension: ".png",
			frameRate: 16,
			repeat: 0
        });

        docks_hydro_hopper0001_png.play("docks_hydro_hopper_move_play");
        // Animations end here

        // Setting all interactives sprites starts here
        docks_bouncy_circles0001_png.setInteractive({ useHandCursor: true });
        docks_buy_surf_board_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        docks_bouncy_circles0001_png.on("pointerover", () => {
            docks_bouncy_circles0001_png.play("docks_bouncy_things_play");
        });

        docks_buy_surf_board_png.on("pointerover", () => {
            docks_buy_surf_board_png.play("docks_buy_hoppers_note_play");
        });

        docks_buy_surf_board_png.on("pointerout", () => {
            docks_buy_surf_board_png.setFrame("docks_buy_surf_board0001.png");
        });

        docks_buy_surf_board_png.on("pointerdown", () => {
            console.log("Buy!!!!!!!!!!")
        });
        // All interactive events ends here
    }
}
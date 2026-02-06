import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SKATE_PARK_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_SKATE_PARK } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

export class SkateParkScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_SKATE_PARK);
    }

    init(data) {
        super.init(data);

        // Globals
        this.assetPath = "assets/world/rooms/skatepark/";
        this.textureKey = "skatepark";
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": this.textureKey,
            "paths": [`${this.assetPath}/${this.textureKey}-pack.json`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": SKATE_PARK_ROOM_MUSIC,
            "paths": [`${this.assetPath}/${SKATE_PARK_ROOM_MUSIC}.mp3`]
        });
    }

    createContent() {
		// skate_park_blue_sky_png
		const skate_park_blue_sky_png = this.add.image(750, 154, "skatepark", "skate_park_blue_sky.png");

		// skate_park_clouds_png
		const skate_park_clouds_png = this.add.image(784, 131, "skatepark", "skate_park_clouds.png");

		// skate_park_dojo_png
		const skate_park_dojo_png = this.add.image(346, 136, "skatepark", "skate_park_dojo.png");

		// skate_park_background_png
		const skate_park_background_png = this.add.image(784, 534, "skatepark", "skate_park_background.png");

		// skate_park_bench_png
		const skate_park_bench_png = this.add.image(1215, 227, "skatepark", "skate_park_bench.png");

		// skate_park_bench_armm_png
		const skate_park_bench_armm_png = this.add.image(1271, 250, "skatepark", "skate_park_bench_armm.png");

		// skate_park_bottom_railing_png
		const skate_park_bottom_railing_png = this.add.image(1197, 719, "skatepark", "skate_park_bottom_railing.png");

		// skate_park_top_railing_png
		const skate_park_top_railing_png = this.add.image(1249, 430, "skatepark", "skate_park_top_railing.png");

		// skate_park_above_bottom_railing_png
		const skate_park_above_bottom_railing_png = this.add.image(1286, 546, "skatepark", "skate_park_above_bottom_railing.png");

		// skate_park_puffle_statue_png
		const skate_park_puffle_statue_png = this.add.image(44, 415, "skatepark", "skate_park_puffle_statue.png");

		// skate_park_purchase_skateboards_png
		const skate_park_purchase_skateboards_png = this.add.image(339, 185, "skatepark", "skate_park_purchase_skateboards.png");

		// skate_park_purchase_skateboards_png_hover_png
		const skate_park_purchase_skateboards_png_hover_png = this.add.image(339, 185, "skatepark", "skate_park_purchase_skateboards.png_hover.png");
		skate_park_purchase_skateboards_png_hover_png.visible = false;

		// skate_park_skateboard_purchase_hover_trigger0004_png
		const skate_park_skateboard_purchase_hover_trigger0004_png = this.add.image(344, 185, "skatepark", "skate_park_skateboard_purchase_hover_trigger0004.png");
		skate_park_skateboard_purchase_hover_trigger0004_png.scaleX = 0.8718288193447924;
		skate_park_skateboard_purchase_hover_trigger0004_png.scaleY = 0.7295356093123448;
		skate_park_skateboard_purchase_hover_trigger0004_png.alpha = 0.001;
		skate_park_skateboard_purchase_hover_trigger0004_png.alphaTopLeft = 0.001;
		skate_park_skateboard_purchase_hover_trigger0004_png.alphaTopRight = 0.001;
		skate_park_skateboard_purchase_hover_trigger0004_png.alphaBottomLeft = 0.001;
		skate_park_skateboard_purchase_hover_trigger0004_png.alphaBottomRight = 0.001;

		// skate_park_bottom_left_png
		const skate_park_bottom_left_png = this.add.image(400, 826, "skatepark", "skate_park_bottom_left.png");

		// skate_park_bottom_right_png
		const skate_park_bottom_right_png = this.add.image(1299, 841, "skatepark", "skate_park_bottom_right.png");

        // Setting all interactives sprites starts here
        skate_park_skateboard_purchase_hover_trigger0004_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events starts here
        skate_park_skateboard_purchase_hover_trigger0004_png.on("pointerover", () => {
            skate_park_purchase_skateboards_png.visible = false;
            skate_park_purchase_skateboards_png_hover_png.visible = true;
        });

        skate_park_skateboard_purchase_hover_trigger0004_png.on("pointerout", () => {
            skate_park_purchase_skateboards_png.visible = true;
            skate_park_purchase_skateboards_png_hover_png.visible = false;
        });
        // All interactive events ends here

        this.audioManager.play(SKATE_PARK_ROOM_MUSIC);
    }
}
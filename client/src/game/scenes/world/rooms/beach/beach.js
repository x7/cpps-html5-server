import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BaseScene } from "../../../base/baseScene";

export class BeachScene extends BaseScene {
    constructor() {
        super("BeachScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "beach",
            paths: ["assets/world/rooms/beach/beach-pack.json"]
        });
    }

    createContent() {
		// beach_background_png
		const beach_background_png = this.add.image(702, 111, "beach", "beach_background.png");
		beach_background_png.scaleY = 1.781668969161465;

		// beach_background_clouds_png
		const beach_background_clouds_png = this.add.image(659, 112, "beach", "beach_background_clouds.png");
		beach_background_clouds_png.scaleX = 0.8638674121138664;
		beach_background_clouds_png.scaleY = 0.811011410949104;

		// beach_water_png
		const beach_water_png = this.add.image(603, 456, "beach", "beach_water.png");
		beach_water_png.scaleX = 0.8404494369469437;
		beach_water_png.scaleY = 0.771159063004316;

		// beach_rockhopper_migrator_ship0001_png
		const beach_rockhopper_migrator_ship0001_png = this.add.sprite(342, 129, "beach", "beach_rockhopper_migrator_ship0001.png");
		beach_rockhopper_migrator_ship0001_png.scaleX = 0.7026785091610885;
		beach_rockhopper_migrator_ship0001_png.scaleY = 0.7768826840286751;

		// beach_mountains_png
		this.add.image(1143, 101, "beach", "beach_mountains.png");

		// beach_main_floor_png
		const beach_main_floor_png = this.add.image(668, 334, "beach", "beach_main_floor.png");
		beach_main_floor_png.scaleX = 0.8048298460298482;
		beach_main_floor_png.scaleY = 0.78210724271909;

		// beach_debris_png
		const beach_debris_png = this.add.image(223, 486, "beach", "beach_debris.png");
		beach_debris_png.scaleX = 0.7372507302071106;
		beach_debris_png.scaleY = 0.7320812624935679;

		// beach_light_house_door0001_png
		const beach_light_house_door0001_png = this.add.image(336, 223, "beach", "beach_light_house_door0001.png");
		beach_light_house_door0001_png.scaleX = 0.854417369422246;
		beach_light_house_door0001_png.scaleY = 0.7900510512556265;

		// beach_light_house_door0002_png
		const beach_light_house_door0002_png = this.add.image(336, 223, "beach", "beach_light_house_door0002.png");
		beach_light_house_door0002_png.scaleX = 0.854417369422246;
		beach_light_house_door0002_png.scaleY = 0.7900510512556265;
		beach_light_house_door0002_png.visible = false;

		// beach_handle_png
		const beach_handle_png = this.add.image(326, 298, "beach", "beach_handle.png");
		beach_handle_png.scaleX = 0.8213840904737156;
		beach_handle_png.scaleY = 0.7381571876709452;

		// beach_right_side_tree_png
		const beach_right_side_tree_png = this.add.image(1126, 326, "beach", "beach_right_side_tree.png");
		beach_right_side_tree_png.scaleX = 0.8909121784735838;
		beach_right_side_tree_png.scaleY = 0.8955961559202424;

		// beach_left_chair_png
		const beach_left_chair_png = this.add.image(692, 404, "beach", "beach_left_chair.png");
		beach_left_chair_png.scaleX = 0.8311521050574451;
		beach_left_chair_png.scaleY = 0.848608241263256;

		// beach_sunbrella_chair_png
		const beach_sunbrella_chair_png = this.add.image(842, 344, "beach", "beach_sunbrella_chair.png");
		beach_sunbrella_chair_png.scaleX = 0.8311521050574451;
		beach_sunbrella_chair_png.scaleY = 0.848608241263256;

		// beach_sunbrella_chair_arm_png
		const beach_sunbrella_chair_arm_png = this.add.image(786, 391, "beach", "beach_sunbrella_chair_arm.png");
		beach_sunbrella_chair_arm_png.scaleX = 0.8311521050574451;
		beach_sunbrella_chair_arm_png.scaleY = 0.848608241263256;

		// beach_green_bucket0001_png
		const beach_green_bucket = this.add.sprite(888, 436, "beach", "beach_green_bucket0001.png");

		// beach_sand_castle_png
		const beach_sand_castle_png = this.add.image(644, 518, "beach", "beach_sand_castle.png");
		beach_sand_castle_png.scaleX = 0.8285354218150622;
		beach_sand_castle_png.scaleY = 0.7869728913360116;

		// beach_right_lower_ledge_png
		this.add.image(1135, 446, "beach", "beach_right_lower_ledge.png");

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "beach_rockhoppers_ship_movement",
            "phaserAnimationKey": "beach_rockhopper_ship_move_play",
            "textureKey": "beach",
            "framePrefix": "beach_rockhopper_migrator_ship",
            "frames": Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "beach_green_bucket",
            "phaserAnimationKey": "beach_green_bucket_play",
            "textureKey": "beach",
            "framePrefix": "beach_green_bucket",
            "frames": Array.from({ length: 304 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        beach_rockhopper_migrator_ship0001_png.play("beach_rockhopper_ship_move_play");
        // Animations end here

        // Setting all interactives sprites starts here
        beach_light_house_door0001_png.setInteractive({ useHandCursor: true });
        beach_light_house_door0002_png.setInteractive({ useHandCursor: true });
        beach_green_bucket.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        beach_light_house_door0001_png.on("pointerover", () => {
            beach_light_house_door0001_png.visible = false;
            beach_light_house_door0002_png.visible = true;
        });

        beach_light_house_door0002_png.on("pointerout", () => {
            beach_light_house_door0001_png.visible = true;
            beach_light_house_door0002_png.visible = false;
        });

        beach_green_bucket.on("pointerover", () => {
            beach_green_bucket.play("beach_green_bucket_play");
        });
        // All interactive events end here

    }
}
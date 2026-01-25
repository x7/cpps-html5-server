import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { PUFFLE_WILD_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

// TODO: Light affects at the topo
// TODO: Fix the top left corner grass image
// TOOD: Make the puffle in bush animation do once every 5 seconds or something

export class PuffleWildScene extends BaseScene {
    constructor() {
        super("PuffleWildScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
		this.audioManager = this.getAudioManager();
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "pufflewild",
            "paths": ["assets/world/rooms/puffleWild/pufflewild-pack.json"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PUFFLE_WILD_ROOM_MUSIC,
            "paths": ["assets/world/rooms/puffleWild/pufflewild_music.mp3"]
        });
    }

    createContent() {
		// pufflewild_main_background_png
		const pufflewild_main_background_png = this.add.image(532, 265, "pufflewild", "pufflewild_main_background.png");
		pufflewild_main_background_png.scaleX = 0.7796750535155331;
		pufflewild_main_background_png.scaleY = 0.7722406037712393;

		// pufflewild_top_left_bush_png
		const pufflewild_top_left_bush_png = this.add.image(152, 87, "pufflewild", "pufflewild_top_left_bush.png");
		pufflewild_top_left_bush_png.scaleX = 0.7849467385294957;
		pufflewild_top_left_bush_png.scaleY = 0.6181186737582228;

		// pufflewild_right_side_walk_pattern_png
		const pufflewild_right_side_walk_pattern_png = this.add.image(982, 65, "pufflewild", "pufflewild_right_side_walk_pattern.png");
		pufflewild_right_side_walk_pattern_png.scaleX = 0.8362489729991184;
		pufflewild_right_side_walk_pattern_png.scaleY = 0.7663726385022152;

		// pufflewild_tree_light_png
		const pufflewild_tree_light_png = this.add.image(801, 106, "pufflewild", "pufflewild_tree_light.png");
		pufflewild_tree_light_png.scaleX = 0.7431244074788013;
		pufflewild_tree_light_png.scaleY = 0.904993379856171;

		// pufflewild_bush_50008_png
		this.add.image(454, 155, "pufflewild", "pufflewild_bush_50008.png");

		// pufflewild_bush_40001_png
		this.add.image(612, 99, "pufflewild", "pufflewild_bush_40001.png");

		// puffle_wild_big_bush0001_png
		const puffle_wild_big_bush0001_png = this.add.image(635, 176, "pufflewild", "puffle_wild_big_bush0001.png");
		puffle_wild_big_bush0001_png.scaleX = 0.7920209371414901;
		puffle_wild_big_bush0001_png.scaleY = 0.8320656444111344;

		// pufflewild_bush_puffle_hides_in0003_png
		this.add.image(710, 131, "pufflewild", "pufflewild_bush_puffle_hides_in0003.png");

		// pufflewild_rock_png
		const pufflewild_rock_png = this.add.image(450, 189, "pufflewild", "pufflewild_rock.png");
		pufflewild_rock_png.scaleX = 0.7020647003832314;
		pufflewild_rock_png.scaleY = 0.6623034735669074;

		// pufflewild_tree_png
		const pufflewild_tree_png = this.add.image(375, 91, "pufflewild", "pufflewild_tree.png");
		pufflewild_tree_png.scaleX = 0.7500942750530941;
		pufflewild_tree_png.scaleY = 0.7492855687892866;

		// pufflewild_bush_png
		const pufflewild_bush_png = this.add.image(367, 217, "pufflewild", "pufflewild_bush.png");
		pufflewild_bush_png.scaleX = 0.9393735510951535;
		pufflewild_bush_png.scaleY = 0.940998651474968;

		// pufflewild_rock_2_png
		const pufflewild_rock_2_png = this.add.image(839, 232, "pufflewild", "pufflewild_rock_2.png");
		pufflewild_rock_2_png.scaleX = 0.7983359957584073;
		pufflewild_rock_2_png.scaleY = 0.9529985398371071;

		// pufflewild_puffle_in_bush0001_png
		const pufflewild_puffle_in_bush0001_png = this.add.sprite(711, 156, "pufflewild", "pufflewild_puffle_in_bush0001.png");

		// pufflewild_stomp_png
		const pufflewild_stomp_png = this.add.image(620, 265, "pufflewild", "pufflewild_stomp.png");
		pufflewild_stomp_png.scaleX = 0.7578330652925298;
		pufflewild_stomp_png.scaleY = 0.794074881244929;

		// pufflewild_bottom_arrow_sign_png
		this.add.image(454, 504, "pufflewild", "pufflewild_bottom_arrow_sign.png");

		// pufflewild_rock_3_png
		const pufflewild_rock_3_png = this.add.image(254, 624, "pufflewild", "pufflewild_rock_3.png");
		pufflewild_rock_3_png.scaleX = 0.8173647174369678;
		pufflewild_rock_3_png.scaleY = 0.8146075481849493;

		// pufflewild_tree_7_png
		const pufflewild_tree_7_png = this.add.image(389, 634, "pufflewild", "pufflewild_tree_7.png");
		pufflewild_tree_7_png.scaleX = 0.9294781056733531;
		pufflewild_tree_7_png.scaleY = 0.8366188056934267;

		// pufflewild_light_tree_png
		this.add.image(1155, 388, "pufflewild", "pufflewild_light_tree.png");

		// puffle_light_png
		const puffle_light_png = this.add.image(986, 481, "pufflewild", "puffle_light.png");
		puffle_light_png.scaleX = 0.8001381271487673;
		puffle_light_png.scaleY = 0.9403130803729519;

		// pufflewild_light_back_png
		this.add.image(1051, 436, "pufflewild", "pufflewild_light_back.png");

		// pufflewild_tree_5_png
		const pufflewild_tree_5_png = this.add.image(1137, 588, "pufflewild", "pufflewild_tree_5.png");
		pufflewild_tree_5_png.scaleX = 0.7390861552219038;
		pufflewild_tree_5_png.scaleY = 0.7929468842441496;

		// pufflewild_tree_4_png
		const pufflewild_tree_4_png = this.add.image(946, 640, "pufflewild", "pufflewild_tree_4.png");
		pufflewild_tree_4_png.scaleX = 0.7193305591749415;
		pufflewild_tree_4_png.scaleY = 0.8237191545196353;

		// pufflewild_tree_6_png
		const pufflewild_tree_6_png = this.add.image(1249, 659, "pufflewild", "pufflewild_tree_6.png");
		pufflewild_tree_6_png.scaleX = 0.7062281508697879;
		pufflewild_tree_6_png.scaleY = 0.693511447271531;

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "pufflewild_puffle_in_bush_animation",
            "phaserAnimationKey": "pufflewild_puffle_in_bush_animation_play",
            "textureKey": "pufflewild",
            "framePrefix": "pufflewild_puffle_in_bush",
            "frames": Array.from({ length: 14 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 12,
            "repeat": -1
        });

        pufflewild_puffle_in_bush0001_png.play("pufflewild_puffle_in_bush_animation_play");
        // Animations end here

		this.audioManager.play(PUFFLE_WILD_ROOM_MUSIC);
    }
}
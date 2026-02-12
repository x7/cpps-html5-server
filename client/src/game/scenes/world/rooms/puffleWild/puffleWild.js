import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { PUFFLE_WILD_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_PUFFLE_WILD } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

// TODO: Light affects at the topo
// TODO: Fix the top left corner grass image
// TOOD: Make the puffle in bush animation do once every 5 seconds or something

export class PuffleWildScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_PUFFLE_WILD);
    }

    init(data) {
        super.init(data);
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
		const pufflewild_main_background_png = this.add.image(-296, -271, "pufflewild", "pufflewild_main_background.png");
		pufflewild_main_background_png.scaleX = 0.8945419785409258;
		pufflewild_main_background_png.scaleY = 1.017872258921152;
		pufflewild_main_background_png.setOrigin(0, 0);

		// pufflewild_top_left_bush_png
		const pufflewild_top_left_bush_png = this.add.image(152, 87, "pufflewild", "pufflewild_top_left_bush.png");
		pufflewild_top_left_bush_png.scaleX = 0.7849467385294957;
		pufflewild_top_left_bush_png.scaleY = 0.6181186737582228;
		pufflewild_top_left_bush_png.visible = false;

		// pufflewild_right_side_walk_pattern_png
		const pufflewild_right_side_walk_pattern_png = this.add.image(1163, 113, "pufflewild", "pufflewild_right_side_walk_pattern.png");
		pufflewild_right_side_walk_pattern_png.scaleX = 0.9244233564328059;
		pufflewild_right_side_walk_pattern_png.scaleY = 0.9378236072377969;

		// pufflewild_tree_light_png
		const pufflewild_tree_light_png = this.add.image(962, 159, "pufflewild", "pufflewild_tree_light.png");
		pufflewild_tree_light_png.scaleX = 0.7431244074788013;
		pufflewild_tree_light_png.scaleY = 0.904993379856171;

		// pufflewild_bush_50008_png
		const pufflewild_bush_50008_png = this.add.image(551, 211, "pufflewild", "pufflewild_bush_50008.png");
		pufflewild_bush_50008_png.scaleX = 1.3002259308351833;
		pufflewild_bush_50008_png.scaleY = 1.095996892547313;

		// pufflewild_bush_40001_png
		this.add.image(572, 149, "pufflewild", "pufflewild_bush_40001.png");

		// puffle_wild_big_bush0001_png
		const puffle_wild_big_bush0001_png = this.add.image(770, 197, "pufflewild", "puffle_wild_big_bush0001.png");
		puffle_wild_big_bush0001_png.scaleX = 0.7920209371414901;
		puffle_wild_big_bush0001_png.scaleY = 0.9597015724300486;

		// pufflewild_bush_puffle_hides_in0003_png
		const pufflewild_bush_puffle_hides_in0003_png = this.add.image(903, 240, "pufflewild", "pufflewild_bush_puffle_hides_in0003.png");
		pufflewild_bush_puffle_hides_in0003_png.scaleX = 1.0970479393800954;

		// pufflewild_rock_png
		const pufflewild_rock_png = this.add.image(552, 271, "pufflewild", "pufflewild_rock.png");
		pufflewild_rock_png.scaleX = 0.9834672469077875;
		pufflewild_rock_png.scaleY = 0.9995396739521343;

		// pufflewild_tree_png
		const pufflewild_tree_png = this.add.image(470, 145, "pufflewild", "pufflewild_tree.png");
		pufflewild_tree_png.scaleX = 0.7500942750530941;
		pufflewild_tree_png.scaleY = 0.7492855687892866;

		// pufflewild_bush_png
		const pufflewild_bush_png = this.add.image(443, 299, "pufflewild", "pufflewild_bush.png");
		pufflewild_bush_png.scaleX = 0.9968361515423799;
		pufflewild_bush_png.scaleY = 1.0991894377086062;

		// pufflewild_bush_40001_png_1
		const pufflewild_bush_40001_png_1 = this.add.image(935, 304, "pufflewild", "pufflewild_bush_40001.png");
		pufflewild_bush_40001_png_1.scaleY = 1.1465443680369678;

		// pufflewild_rock_2_png
		const pufflewild_rock_2_png = this.add.image(1026, 310, "pufflewild", "pufflewild_rock_2.png");
		pufflewild_rock_2_png.scaleX = 0.7983359957584073;
		pufflewild_rock_2_png.scaleY = 0.9529985398371071;

		// pufflewild_puffle_in_bush0001_png
		this.add.sprite(849, 189, "pufflewild", "pufflewild_puffle_in_bush0001.png");

		// pufflewild_bush_puffle_hides_in0003_png_1
		this.add.image(758, 197, "pufflewild", "pufflewild_bush_puffle_hides_in0003.png");

		// pufflewild_stomp_png
		const pufflewild_stomp_png = this.add.image(762, 353, "pufflewild", "pufflewild_stomp.png");
		pufflewild_stomp_png.scaleX = 0.9371333834271476;
		pufflewild_stomp_png.scaleY = 1.040420045537688;

		// pufflewild_bottom_arrow_sign_png
		const pufflewild_bottom_arrow_sign_png = this.add.image(550, 677, "pufflewild", "pufflewild_bottom_arrow_sign.png");
		pufflewild_bottom_arrow_sign_png.scaleX = 1.2343361076916413;
		pufflewild_bottom_arrow_sign_png.scaleY = 1.042576680020403;

		// pufflewild_rock_3_png
		const pufflewild_rock_3_png = this.add.image(358, 820, "pufflewild", "pufflewild_rock_3.png");
		pufflewild_rock_3_png.scaleX = 0.7624762505603337;
		pufflewild_rock_3_png.scaleY = 0.7381353839263054;

		// pufflewild_tree_7_png
		const pufflewild_tree_7_png = this.add.image(490, 843, "pufflewild", "pufflewild_tree_7.png");
		pufflewild_tree_7_png.scaleX = 0.9897695054361307;
		pufflewild_tree_7_png.scaleY = 0.8913827042268955;

		// pufflewild_light_tree_png
		this.add.image(1314, 563, "pufflewild", "pufflewild_light_tree.png");

		// puffle_light_png
		const puffle_light_png = this.add.image(1143, 685, "pufflewild", "puffle_light.png");
		puffle_light_png.scaleX = 0.9741855789067742;
		puffle_light_png.scaleY = 1.1172539956694667;

		// pufflewild_light_back_png
		const pufflewild_light_back_png = this.add.image(1216, 640, "pufflewild", "pufflewild_light_back.png");
		pufflewild_light_back_png.scaleX = 1.0435450569754217;
		pufflewild_light_back_png.scaleY = 1.0337771471334376;

		// pufflewild_tree_5_png
		const pufflewild_tree_5_png = this.add.image(1288, 783, "pufflewild", "pufflewild_tree_5.png");
		pufflewild_tree_5_png.scaleX = 0.9307232423065929;
		pufflewild_tree_5_png.scaleY = 0.8963559282738021;

		// pufflewild_tree_4_png
		const pufflewild_tree_4_png = this.add.image(1093, 860, "pufflewild", "pufflewild_tree_4.png");
		pufflewild_tree_4_png.scaleX = 0.9547862640054052;
		pufflewild_tree_4_png.scaleY = 0.9924511191522758;

		// pufflewild_tree_6_png
		const pufflewild_tree_6_png = this.add.image(1441, 835, "pufflewild", "pufflewild_tree_6.png");
		pufflewild_tree_6_png.scaleX = 1.0816894273340174;
		pufflewild_tree_6_png.scaleY = 1.1093906454365439;

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
		super.createContent(this);
    }

	update() {
		super.update();
	}
}
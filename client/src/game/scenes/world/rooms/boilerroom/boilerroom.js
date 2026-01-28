import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BOILER_ROOM_DOOR_CLOSE, BOILER_ROOM_DOOR_OPEN, BOILER_ROOM_DRAWER_CLOSE, BOILER_ROOM_DRAWER_OPEN, BOILER_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

export class BoilerRoomScene extends BaseScene {
    constructor() {
        super("BoilerRoomScene");
    }

    init(data) {
        super.init(data)
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "boilerroom",
            "paths": ["assets/world/rooms/boilerroom/boilerroom-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BOILER_ROOM_MUSIC,
            "paths": ["assets/world/rooms/boilerroom/boilerroom_music.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BOILER_ROOM_DOOR_OPEN,
            "paths": ["assets/world/rooms/boilerroom/boiler2013-dooropen.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BOILER_ROOM_DOOR_CLOSE,
            "paths": ["assets/world/rooms/boilerroom/boiler2013-doorclose.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BOILER_ROOM_DRAWER_OPEN,
            "paths": ["assets/world/rooms/boilerroom/boiler2013-draweropen.mp3"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": BOILER_ROOM_DRAWER_CLOSE,
            "paths": ["assets/world/rooms/boilerroom/boiler2013-drawerclose.mp3"]
        });
    }

    createContent() {
		// boiler_room_main_png
		const boiler_room_main_png = this.add.image(0, -5, "boilerroom", "boiler_room_main.png");
		boiler_room_main_png.scaleY = 1.0055444592871736;
		boiler_room_main_png.setOrigin(0, 0);

		// boiler_room_draw0001_png_1
		const boiler_room_draw0001_png_1 = this.add.image(811, 294, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_1.scaleX = 0.5007951314672706;
		boiler_room_draw0001_png_1.scaleY = 0.5145017964185077;
		boiler_room_draw0001_png_1.visible = false;

		// boiler_room_draw0001_png_2
		const boiler_room_draw0001_png_2 = this.add.image(704, 359, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_2.scaleX = 0.5007951314672706;
		boiler_room_draw0001_png_2.scaleY = 0.5145017964185077;
		boiler_room_draw0001_png_2.visible = false;

		// boiler_room_draw0001_png_3
		const boiler_room_draw0001_png_3 = this.add.image(702, 418, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_3.scaleX = 0.5007951314672706;
		boiler_room_draw0001_png_3.scaleY = 0.5145017964185077;
		boiler_room_draw0001_png_3.visible = false;

		// boiler_room_draw0001_png_4
		const boiler_room_draw0001_png_4 = this.add.image(804, 415, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_4.scaleX = 0.5007951314672706;
		boiler_room_draw0001_png_4.scaleY = 0.5145017964185077;
		boiler_room_draw0001_png_4.visible = false;

		// boiler_room_draw0001_png_5
		const boiler_room_draw0001_png_5 = this.add.image(807, 355, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_5.scaleX = 0.5007951314672706;
		boiler_room_draw0001_png_5.scaleY = 0.5145017964185077;
		boiler_room_draw0001_png_5.visible = false;

		// boiler_room_dooor0001_png
		const boiler_room_dooor0001_png = this.add.image(588, 372, "boilerroom", "boiler_room_dooor0001.png");
		boiler_room_dooor0001_png.scaleX = 0.39372945876305515;
		boiler_room_dooor0001_png.scaleY = 0.3915786705175174;

		// boiler_room_smoke0001_png
		const boiler_room_smoke0001_png = this.add.sprite(266, 194, "boilerroom", "boiler_room_smoke0001.png");
		boiler_room_smoke0001_png.scaleX = 1.3135029797846425;
		boiler_room_smoke0001_png.scaleY = 0.9535917336211418;

		// boiler_room_dooor0002_png
		const boiler_room_dooor0002_png = this.add.image(588, 372, "boilerroom", "boiler_room_dooor0002.png");
		boiler_room_dooor0002_png.scaleX = 0.39372945876305515;
		boiler_room_dooor0002_png.scaleY = 0.3915786705175174;
		boiler_room_dooor0002_png.visible = false;

		// boiler_room_draw0001_png_6
		const boiler_room_draw0001_png_6 = this.add.sprite(828, 475, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_6.scaleX = 0.5921143306003507;
		boiler_room_draw0001_png_6.scaleY = 0.6359666733992642;

		// boiler_room_draw0001_png
		const boiler_room_draw0001_png = this.add.sprite(832, 400, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png.scaleX = 0.5921143306003507;
		boiler_room_draw0001_png.scaleY = 0.6359666733992642;

		// boiler_room_draw0001_png_7
		const boiler_room_draw0001_png_7 = this.add.sprite(827, 549, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_7.scaleX = 0.5921143306003507;
		boiler_room_draw0001_png_7.scaleY = 0.6359666733992642;

		// boiler_room_draw0001_png_8
		const boiler_room_draw0001_png_8 = this.add.sprite(951, 401, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_8.scaleX = 0.5921143306003507;
		boiler_room_draw0001_png_8.scaleY = 0.6359666733992642;

		// boiler_room_draw0001_png_9
		const boiler_room_draw0001_png_9 = this.add.sprite(947, 475, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_9.scaleX = 0.5921143306003507;
		boiler_room_draw0001_png_9.scaleY = 0.6359666733992642;

		// boiler_room_draw0001_png_10
		const boiler_room_draw0001_png_10 = this.add.sprite(944, 547, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_10.scaleX = 0.5921143306003507;
		boiler_room_draw0001_png_10.scaleY = 0.6359666733992642;

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "boiler_room_smoke_animation",
            "phaserAnimationKey": "boiler_room_smoke_animation_play",
            "textureKey": "boilerroom",
            "framePrefix": "boiler_room_smoke",
            "frames": Array.from({ length: 5 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 20,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "boiler_room_open_newspaper_animation",
            "phaserAnimationKey": "boiler_room_open_newspaper_animation_play",
            "textureKey": "boilerroom",
            "framePrefix": "boiler_room_draw",
            "frames": Array.from({ length: 5 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "boiler_room_close_newspaper_animation",
            "phaserAnimationKey": "boiler_room_close_newspaper_animation_play",
            "textureKey": "boilerroom",
            "framePrefix": "boiler_room_draw",
            "frames": Array.from({ length: 4 }, (_, i) => String(i + 5).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        boiler_room_smoke0001_png.play("boiler_room_smoke_animation_play");
        // Animations end here

        // Setting all interactives sprites starts here
        boiler_room_dooor0001_png.setInteractive({ useHandCursor: true });
        boiler_room_dooor0002_png.setInteractive({ useHandCursor: true });
        boiler_room_draw0001_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        boiler_room_dooor0001_png.on("pointerover", () => {
            boiler_room_dooor0001_png.visible = false;
            boiler_room_dooor0002_png.visible = true;
            this.audioManager.play(BOILER_ROOM_DOOR_OPEN);
        });

        boiler_room_dooor0002_png.on("pointerout", () => {
            boiler_room_dooor0001_png.visible = true;
            boiler_room_dooor0002_png.visible = false;
            this.audioManager.play(BOILER_ROOM_DOOR_CLOSE);
        });

        boiler_room_draw0001_png.on("pointerover", () => {
            boiler_room_draw0001_png.play("boiler_room_open_newspaper_animation_play");
            this.audioManager.play(BOILER_ROOM_DRAWER_OPEN);
        });

        boiler_room_draw0001_png.on("pointerout", () => {
            boiler_room_draw0001_png.play("boiler_room_close_newspaper_animation_play");
            this.audioManager.play(BOILER_ROOM_DRAWER_CLOSE);
        });
        // All interactive events end here

        // this.audioManager.play(BOILER_ROOM_MUSIC);
    }
}
import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { BOILER_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { BaseScene } from "../../../base/baseScene";

export class BoilerRoomScene extends BaseScene {
    constructor() {
        super("BoilerRoomScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
        this.audioManager = this.getAudioManager();
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
    }

    createContent() {

		// boiler_room_main_png
		const boiler_room_main_png = this.add.image(648, 363, "boilerroom", "boiler_room_main.png");
		boiler_room_main_png.scaleX = 0.8672204903395985;
		boiler_room_main_png.scaleY = 0.8241243754820207;

		// boiler_room_draw0001_png_2
		const boiler_room_draw0001_png_2 = this.add.image(704, 359, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_2.scaleX = 0.5007951314672706;
		boiler_room_draw0001_png_2.scaleY = 0.5145017964185077;

        // boiler_room_draw0001_png
		const boiler_room_draw0001_png = this.add.sprite(706, 295, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png.scaleX = 0.5007951314672706;
		boiler_room_draw0001_png.scaleY = 0.5145017964185077;

        // boiler_room_draw0001_png_1
		const boiler_room_draw0001_png_1 = this.add.image(811, 294, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_1.scaleX = 0.5007951314672706;
		boiler_room_draw0001_png_1.scaleY = 0.5145017964185077;

		// boiler_room_draw0001_png_3
		const boiler_room_draw0001_png_3 = this.add.image(702, 418, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_3.scaleX = 0.5007951314672706;
		boiler_room_draw0001_png_3.scaleY = 0.5145017964185077;

		// boiler_room_draw0001_png_4
		const boiler_room_draw0001_png_4 = this.add.image(804, 415, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_4.scaleX = 0.5007951314672706;
		boiler_room_draw0001_png_4.scaleY = 0.5145017964185077;

		// boiler_room_draw0001_png_5
		const boiler_room_draw0001_png_5 = this.add.image(807, 355, "boilerroom", "boiler_room_draw0001.png");
		boiler_room_draw0001_png_5.scaleX = 0.5007951314672706;
		boiler_room_draw0001_png_5.scaleY = 0.5145017964185077;

		// boiler_room_dooor0001_png
		const boiler_room_dooor0001_png = this.add.image(500, 272, "boilerroom", "boiler_room_dooor0001.png");
		boiler_room_dooor0001_png.scaleX = 0.36173874873133693;
		boiler_room_dooor0001_png.scaleY = 0.31989328020265034;

		// boiler_room_smoke0001_png
		const boiler_room_smoke0001_png = this.add.sprite(215, 113, "boilerroom", "boiler_room_smoke0001.png");

        // boiler_room_dooor0002_png
		const boiler_room_dooor0002_png = this.add.image(500, 271, "boilerroom", "boiler_room_dooor0002.png");
		boiler_room_dooor0002_png.scaleX = 0.3510119999669934;
		boiler_room_dooor0002_png.scaleY = 0.3173308352944098;
		boiler_room_dooor0002_png.visible = false;

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
        });

        boiler_room_dooor0002_png.on("pointerout", () => {
            boiler_room_dooor0001_png.visible = true;
            boiler_room_dooor0002_png.visible = false;
        });

        boiler_room_draw0001_png.on("pointerover", () => {
            boiler_room_draw0001_png.play("boiler_room_open_newspaper_animation_play");
        });

        boiler_room_draw0001_png.on("pointerout", () => {
            boiler_room_draw0001_png.play("boiler_room_close_newspaper_animation_play");
        });
        // All interactive events end here

        this.audioManager.play(BOILER_ROOM_MUSIC);
    }
}
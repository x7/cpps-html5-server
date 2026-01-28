import { RoomMouseMovemenet } from "../../../../inputs/roomMouseMovement";
import { RoomKeyPressed } from "../../../../inputs/roomKeyPressed";
import MovementManager from "../../../../penguin/movementManager";
import snowBallManager from "../../../../penguin/snowBallManager";
import { BaseScene } from "../../../base/baseScene";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { SCENE_ROOM_CLOTHES_SHOP, SCENE_ROOM_COFFEE_SHOP, SCENE_ROOM_DANCE_CLUB, SCENE_ROOM_DOCKS, SCENE_ROOM_SNOW_FORTS, SCENE_ROOM_TOWN } from "../../../sceneNames";
import { ClientPenguin } from "../../../../penguin/clientPenguin";
import { TOWN_ROOM_COFFEE_SHOP_DOOR_CLOSE, TOWN_ROOM_COFFEE_SHOP_DOOR_OPEN, TOWN_ROOM_DANCE_CLUB_DOOR_CLOSE, TOWN_ROOM_DANCE_CLUB_DOOR_OPEN, TOWN_ROOM_GIFT_SHOP_DOOR_CLOSE, TOWN_ROOM_GIFT_SHOP_DOOR_OPEN, TOWN_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { getManager } from "../../../../../network/network";
import { SERVER_VERIFY_PACKET } from "../../../../../network/topics";
import eventEmitter from "../../../../../util/eventEmitter";
import { RoomScene } from "../RoomScene";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";

// Todo: Make the dance club opening more smooth
// Todo: Fix night club star animation
// Todo: Add night club lights + speaker animations

export class TownScene extends RoomScene {
	constructor() {
		super(SCENE_ROOM_TOWN);
	}

	init(data) {
		super.init(data);
	}

	preloadContent() {
		super.preloadContent();

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "town",
			paths: ["assets/world/rooms/town/town2013-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "town-triggers",
			paths: ["assets/world/rooms/town/town-triggers-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_coffee_door_open",
			paths: ["assets/world/rooms/town/town2013-coffeeopen.mp3"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_coffee_door_close",
			paths: ["assets/world/rooms/town/town2013-coffeeclose.mp3"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_dance_club_open",
			paths: ["assets/world/rooms/town/town2013-discoopen.mp3"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_dance_club_close",
			paths: ["assets/world/rooms/town/town2013-discoclose.mp3"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_gift_shop_open",
			paths: ["assets/world/rooms/town/town2013-shopopen.mp3"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_gift_shop_close",
			paths: ["assets/world/rooms/town/town2013-shopclose.mp3"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: TOWN_ROOM_MUSIC,
			paths: ["assets/world/rooms/town/town_music.mp3"]
		});
	}

	createContent() {
		// town_blue_sky
		const town_blue_sky = this.add.image(-208, -105, "town", "town/sky");
		town_blue_sky.scaleX = 1.1663614304932752;
		town_blue_sky.scaleY = 1.6523457020661834;
		town_blue_sky.setOrigin(0, 0);

		// town_background_clouds
		const town_background_clouds = this.add.image(-30, 35, "town", "town/clouds");
		town_background_clouds.scaleX = 0.8865837041094774;
		town_background_clouds.scaleY = 1.0981802887048449;
		town_background_clouds.setOrigin(0, 0);

		// town_dance_club_inside
		const town_dance_club_inside = this.add.image(800, 317, "town", "town/danceinside");
		town_dance_club_inside.setOrigin(0, 0);

		// town_background_mountains
		const town_background_mountains = this.add.image(94, 86, "town", "town/mountains");
		town_background_mountains.scaleX = 0.8712988552743866;
		town_background_mountains.scaleY = 1.0554544012439304;
		town_background_mountains.setOrigin(0, 0);

		// town_dance_club_door_closed_trigger
		const town_dance_club_door_closed_trigger = this.add.image(843, 362, "town", "town/dancedoor");
		town_dance_club_door_closed_trigger.scaleX = 0.8466407023336427;
		town_dance_club_door_closed_trigger.scaleY = 0.7913953000876901;
		town_dance_club_door_closed_trigger.visible = false;
		town_dance_club_door_closed_trigger.alpha = 0;
		town_dance_club_door_closed_trigger.alphaTopLeft = 0;
		town_dance_club_door_closed_trigger.alphaTopRight = 0;
		town_dance_club_door_closed_trigger.alphaBottomLeft = 0;
		town_dance_club_door_closed_trigger.alphaBottomRight = 0;

		// town_dance_club_door_closed
		const town_dance_club_door_closed = this.add.image(843, 369, "town", "town/dancedoor");
		town_dance_club_door_closed.scaleX = 0.8466407023336427;
		town_dance_club_door_closed.scaleY = 0.7913953000876901;

		// town_entire_base
		const town_entire_base = this.add.image(-108, 76, "town", "town/base");
		town_entire_base.scaleX = 0.8920321715163609;
		town_entire_base.scaleY = 0.8282801272178445;
		town_entire_base.setOrigin(0, 0);

		// town_left_side_news_board
		const town_left_side_news_board = this.add.image(204, 672, "town", "town/newsboard");
		town_left_side_news_board.scaleX = 0.918709254932349;
		town_left_side_news_board.scaleY = 0.8857947128672018;
		town_left_side_news_board.setOrigin(0.49369784172661874, 0.3285276073619632);

		// town_right_side_trees
		const town_right_side_trees = this.add.image(1526, 648, "town", "town/sidetrees");
		town_right_side_trees.scaleX = 1.0937943785205566;
		town_right_side_trees.scaleY = 1.0080955815056598;
		town_right_side_trees.setOrigin(0.49164983164983167, 0.4962162162162162);

		// town_coffee_table_left_chair
		const town_coffee_table_left_chair = this.add.image(535, 458, "town", "town/leftchair");
		town_coffee_table_left_chair.scaleX = 0.8961085919363679;
		town_coffee_table_left_chair.scaleY = 0.8318301259769875;
		town_coffee_table_left_chair.setOrigin(0.47593406593406595, 0.3510185185185185);

		// town_coffee_table_right_chair
		const town_coffee_table_right_chair = this.add.image(687, 441, "town", "town/rightchair");
		town_coffee_table_right_chair.scaleX = 0.8961085919363679;
		town_coffee_table_right_chair.scaleY = 0.8318301259769875;
		town_coffee_table_right_chair.setOrigin(0.46987341772151897, 0.3714150943396226);

		// town_coffee_table
		const town_coffee_table = this.add.image(608, 496, "town", "town/table");
		town_coffee_table.scaleX = 0.8115266451207024;
		town_coffee_table.scaleY = 0.8452175619587307;
		town_coffee_table.setOrigin(0.48025210084033615, 0.6818181818181818);

		// town_gift_shop_door_closed
		const town_gift_shop_door_closed = this.add.image(1071, 317, "town", "town/shopdoor0001");
		town_gift_shop_door_closed.scaleX = 0.846821038051513;
		town_gift_shop_door_closed.scaleY = 0.7817539437887558;
		town_gift_shop_door_closed.setOrigin(0, 0);

		// town_bottom_trees
		const town_bottom_trees = this.add.image(-75, 726, "town", "town/bottom");
		town_bottom_trees.scaleX = 0.8633857000221166;
		town_bottom_trees.scaleY = 0.9162039093478951;
		town_bottom_trees.setOrigin(0, 0);

		// town_dance_club_spotlight_left
		const town_dance_club_spotlight_left = this.add.image(633, 101, "town", "town/spotlightleft");
		town_dance_club_spotlight_left.scaleX = 0.6654835096779513;
		town_dance_club_spotlight_left.scaleY = 0.7154203518108428;
		town_dance_club_spotlight_left.angle = -30;
		town_dance_club_spotlight_left.setOrigin(0.5, 1);
		town_dance_club_spotlight_left.visible = false;

		// town_gift_shop_clothes
		const town_gift_shop_clothes = this.add.image(1202, 473, "town", "town/clothes");
		town_gift_shop_clothes.scaleX = 0.883060669309306;
		town_gift_shop_clothes.scaleY = 0.7755418707348252;
		town_gift_shop_clothes.setOrigin(0.4978527648740103, 0.4808168705077219);

		// town_dance_club_speaks
		const town_dance_club_speaks = this.add.image(669, 308, "town", "town/speakers1");
		town_dance_club_speaks.scaleX = 0.8904218590309124;
		town_dance_club_speaks.scaleY = 0.7508133885265247;
		town_dance_club_speaks.setOrigin(0, 0);

		// town_coffee_shop_door_closed
		const town_coffee_shop_door_closed = this.add.image(374, 371, "town", "town/coffeedoor0001");
		town_coffee_shop_door_closed.scaleX = 0.8923341483247982;
		town_coffee_shop_door_closed.scaleY = 0.7456925076596306;
		town_coffee_shop_door_closed.setOrigin(0, 0);

		// town_gift_shop_door_open
		const town_gift_shop_door_open = this.add.image(1071, 317, "town", "town/shopdoor0002");
		town_gift_shop_door_open.scaleX = 0.846821038051513;
		town_gift_shop_door_open.scaleY = 0.7817539437887558;
		town_gift_shop_door_open.setOrigin(0, 0);
		town_gift_shop_door_open.visible = false;

		// town_coffee_shop_door_open
		const town_coffee_shop_door_open = this.add.image(374, 371, "town", "town/coffeedoor0002");
		town_coffee_shop_door_open.scaleX = 0.8923341483247982;
		town_coffee_shop_door_open.scaleY = 0.7456925076596306;
		town_coffee_shop_door_open.setOrigin(0, 0);
		town_coffee_shop_door_open.visible = false;

		// town_shop_top_parts
		const town_shop_top_parts = this.add.image(332, 227, "town", "town/shopfronts");
		town_shop_top_parts.scaleX = 0.8823778537371181;
		town_shop_top_parts.scaleY = 0.7949015500381112;
		town_shop_top_parts.setOrigin(0, 0);

		// town_dance_club_spotlight_right
		const town_dance_club_spotlight_right = this.add.image(776, 101, "town", "town/spotlightleft");
		town_dance_club_spotlight_right.scaleX = 0.6654835096779512;
		town_dance_club_spotlight_right.scaleY = 0.7154203518108428;
		town_dance_club_spotlight_right.angle = 30;
		town_dance_club_spotlight_right.setOrigin(0.5, 1);
		town_dance_club_spotlight_right.visible = false;

		// town_shop_big_names
		const town_shop_big_names = this.add.image(194, 179, "town", "town/storenames0001");
		town_shop_big_names.scaleX = 0.8891409242005964;
		town_shop_big_names.scaleY = 0.8189998537831891;
		town_shop_big_names.setOrigin(0, 0);

		// town_dance_club_cover_entrance
		const town_dance_club_cover_entrance = this.add.image(844, 453, "town", "town/dancecover");
		town_dance_club_cover_entrance.scaleX = 0.8767880718635968;
		town_dance_club_cover_entrance.scaleY = 0.8590605033643586;
		town_dance_club_cover_entrance.setOrigin(0.48725714, 0.9);

		// town_night_club_stars
		const town_night_club_stars = this.add.image(790, 311, "town", "town/dancestars");
		town_night_club_stars.scaleX = 0.7957712144929346;
		town_night_club_stars.scaleY = 0.8893665303648797;
		town_night_club_stars.setOrigin(0, 0);

		// town_dance_club_handle_rope
		const town_dance_club_handle_rope = this.add.image(946, 451, "town", "town/cord");
		town_dance_club_handle_rope.scaleX = 1.0068002854596354;
		town_dance_club_handle_rope.scaleY = 0.9481854244711483;
		town_dance_club_handle_rope.setOrigin(0.4715384615384616, 0.5485714285714286);

		// town_walking_trigger_png
		const town_walking_trigger_png = this.add.image(763, 441, "town-triggers", "town_walking_trigger.png");
		town_walking_trigger_png.scaleX = 1.0122680516038394;
		town_walking_trigger_png.scaleY = 1.0954232070420247;

		// town_snow_forts_room_trigger_png
		const town_snow_forts_room_trigger_png = this.physics.add.image(1441, 592, "town-triggers", "town_snow_forts_room_trigger.png");
		town_snow_forts_room_trigger_png.scaleX = 0.7040527403599454;
		town_snow_forts_room_trigger_png.scaleY = 0.8531550442324147;

		// town_dance_club_room_trigger_png
		const town_dance_club_room_trigger_png = this.physics.add.image(843, 398, "town-triggers", "town_dance_club_room_trigger.png");

		// town_coffee_shop_room_trigger_png
		const town_coffee_shop_room_trigger_png = this.physics.add.image(424, 445, "town-triggers", "town_coffee_shop_room_trigger.png");

		// town_clothes_shop_room_trigger_png
		const town_clothes_shop_room_trigger_png = this.physics.add.image(1120, 414, "town-triggers", "town_clothes_shop_room_trigger.png");

		// town_docks_room_trigger_png
		const town_docks_room_trigger_png = this.physics.add.image(96, 517, "town-triggers", "town_docks_room_trigger.png");
		town_docks_room_trigger_png.scaleX = 0.5877954964206972;
		town_docks_room_trigger_png.scaleY = 0.44792742416998366;
		town_docks_room_trigger_png.angle = 60;

		// Setting triggers starts here
		this.triggers.push([town_dance_club_room_trigger_png, () => {
			onJoinRoomTrigger(SCENE_ROOM_DANCE_CLUB);
		}]);

		this.triggers.push([town_coffee_shop_room_trigger_png, () => {
			onJoinRoomTrigger(SCENE_ROOM_COFFEE_SHOP);
		}]);

		this.triggers.push([town_clothes_shop_room_trigger_png, () => {
			onJoinRoomTrigger(SCENE_ROOM_CLOTHES_SHOP);
		}]);

		this.triggers.push([town_docks_room_trigger_png, () => {
			onJoinRoomTrigger(SCENE_ROOM_DOCKS);
		}]);

		this.triggers.push([town_snow_forts_room_trigger_png, () => {
			onJoinRoomTrigger(SCENE_ROOM_SNOW_FORTS);
		}]);

		this.triggers.push([town_walking_trigger_png, () => {
			onJoinRoomTrigger(SCENE_ROOM_DOCKS);
		}]);
		// Setting triggers ends here

		// Setting all interactives sprites starts here
		town_gift_shop_door_closed.setInteractive({ useHandCursor: true });
		town_gift_shop_door_open.setInteractive({ useHandCursor: true });
		town_coffee_shop_door_open.setInteractive({ useHandCursor: true });
		town_coffee_shop_door_closed.setInteractive({ useHandCursor: true });
		// town_dance_club_door_closed.setInteractive({ useHandCursor: true });
		town_dance_club_door_closed_trigger.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// Animations will make better when system is rewrote
		// FIX THIS ITS BROKEN ASF
		// this.anims.create({
		// 	key: "night_club_stars_animation",
		// 	frames: [
		// 		{ key: 'town', frame: 'town/discolights0001', duration: 0 },
		// 		{ key: 'town', frame: 'town/discolights0002', duration: 0 },
		// 		{ key: 'town', frame: 'town/discolights0003', duration: 0 },
		// 		{ key: 'town', frame: 'town/discolights0004', duration: 0 },
		// 		// { key: 'town', frame: 'town/discolights0005', duration: 150 },
		// 		// { key: 'town', frame: 'town/discolights0006', duration: 150 },
		// 		// { key: 'town', frame: 'town/discolights0007', duration: 100 },
		// 		// { key: 'town', frame: 'town/discolights0008', duration: 100 },
		// 		// { key: "town", frame: "town/discolights0007", duration: 100 },
		// 		// { key: "town", frame: "town/discolights0006", duration: 100 },
		// 		// { key: "town", frame: "town/discolights0007", duration: 100 },
		// 		// { key: "town", frame: "town/discolights0008", duration: 100 },
		// 		// { key: "town", frame: "town/discolights0009", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0010", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0011", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0012", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0006", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0007", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0008", duration: 0 },
    	// 	],
		// 	frameRate: 24,
		// 	repeat: 1,
		// 	skipMissedFrames: true
		// });
		// Animations ends here

		// All interactive events start here
		town_gift_shop_door_closed.on("pointerover", () => {
			town_gift_shop_door_closed.visible = false;
			town_gift_shop_door_open.visible = true;
			this.audioManager.play(TOWN_ROOM_GIFT_SHOP_DOOR_OPEN);
		});

		town_gift_shop_door_open.on("pointerout", () => {
			town_gift_shop_door_closed.visible = true;
			town_gift_shop_door_open.visible = false;
			this.audioManager.play(TOWN_ROOM_GIFT_SHOP_DOOR_CLOSE);
		});

		town_coffee_shop_door_closed.on("pointerover", () => {
			town_coffee_shop_door_closed.visible = false;
			town_coffee_shop_door_open.visible = true;
			this.audioManager.play(TOWN_ROOM_COFFEE_SHOP_DOOR_OPEN);
		});

		town_coffee_shop_door_open.on("pointerout", () => {
			town_coffee_shop_door_closed.visible = true;
			town_coffee_shop_door_open.visible = false;
			this.audioManager.play(TOWN_ROOM_COFFEE_SHOP_DOOR_CLOSE);
		});

		town_dance_club_door_closed_trigger.on("pointerover", () => {
			// retard didnt give me the animation for opening this door we will make it ourself
			const doorOpeningSpeed = 2;
			const stopY = 180;
			this.audioManager.play(TOWN_ROOM_DANCE_CLUB_DOOR_OPEN);

			this.open_dance_club_door_timer = this.time.addEvent({
				delay: 10,
				callback: () => {
					if(this.open_dance_club_door_timer == null) {
						return;
					}

					if(town_dance_club_door_closed.y <= stopY) {
						this.open_dance_club_door_timer.remove();
						this.open_dance_club_door_timer = null;
						return;
					}

					town_dance_club_door_closed.setY(town_dance_club_door_closed.y - doorOpeningSpeed);
				},
				callbackScope: this,
				loop: true
			});
		});

		town_dance_club_door_closed_trigger.on("pointerout", () => {
			town_dance_club_door_closed.setY(227);
			this.audioManager.play(TOWN_ROOM_DANCE_CLUB_DOOR_CLOSE);
		});
		// All interactive events ends here

		this.audioManager.play(TOWN_ROOM_MUSIC);
		this.events.emit("scene-awake");
		super.createContent(this);
	}

	update() {
		super.update();
	}
}
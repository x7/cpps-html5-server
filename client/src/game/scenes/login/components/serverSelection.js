import { BaseScene } from '../../baseScene';
import { ASSET_TYPES } from '../../../assets/assetTypes';
import { SCENE_ROOM_TOWN, SCENE_SERVER_SELECTION } from '../../sceneNames';
import { displayLoading, removeLoading } from '../../loading/loadingHelper';
import { connect, getManager } from '../../../../network/network';
import { CLIENT_ADD_PLAYER, CLIENT_CHAT, CLIENT_DISCONNECT, CLIENT_LEAVE_ROOM, CLIENT_PLAY_ANIMATION, CLIENT_STOP_ANIMATION, CLIENT_TEST } from '../../../../network/topics';
import packetRegistry from '../../../../network/packets/packetRegistry';
import { ClientPenguin } from '../../../penguin/clientPenguin';
import { receiveJoinRoomPacket, sendJoinRoomPacket } from '../../../../network/packets/world/joinRoomPacket';

// TODO: Add more servers scene
// TODO: Add redemption

export class ServerSelectionScene extends BaseScene {
	constructor() {
		super(SCENE_SERVER_SELECTION);
	}

	init(data) {
		super.init(data);
		this.sceneManager.setCurrentScene(this);
	}

	preload() {
		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "login",
			paths: ["assets/login/login-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "CCComicCrazyBoldItalicShadow",
			paths: ["assets/fonts/CCComicCrazyBoldItalicShadow.png", "assets/fonts/CCComicCrazyBoldItalicShadow.xml"]
		});
	}

	createContent() {
		// server_selection_background
		const server_selection_background = this.add.image(-11, -18, "login", "login-screen/background");
		server_selection_background.scaleX = 0.9016930242415526;
		server_selection_background.scaleY = 0.9198955692528454;
		server_selection_background.setOrigin(0, 0);

		// server_selection_unlock_items_button
		const server_selection_unlock_items_button = this.add.image(1270, 9, "login", "login-screen/items0001");
		server_selection_unlock_items_button.scaleX = 0.9437007346888144;
		server_selection_unlock_items_button.scaleY = 0.9143439105530422;
		server_selection_unlock_items_button.setOrigin(0, 0);

		// server_selection_more_servers_button
		const server_selection_more_servers_button = this.add.image(1086, 412, "login", "login-screen/more0001");
		server_selection_more_servers_button.scaleX = 1.0582928408946213;
		server_selection_more_servers_button.scaleY = 1.2745249542622727;
		server_selection_more_servers_button.setOrigin(0.0379109, 0.243031);

		// server_selection_chat_bubble
		const server_selection_chat_bubble = this.add.image(898, 901, "login", "login-screen/chat");
		server_selection_chat_bubble.scaleX = 1.2515210617608705;
		server_selection_chat_bubble.scaleY = 0.9720902867924899;
		server_selection_chat_bubble.setOrigin(0, 0);

		// ultimate_safe_chat
		const ultimate_safe_chat = this.add.text(950, 901, "", {});
		ultimate_safe_chat.scaleX = 1.9722269511091821;
		ultimate_safe_chat.scaleY = 2.407453135863419;
		ultimate_safe_chat.text = "Ultimate safe chat";
		ultimate_safe_chat.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// login_screen_population
		const login_screen_population = this.add.image(525, 905, "login", "login-screen/population");
		login_screen_population.scaleX = 1.2689333881983234;
		login_screen_population.scaleY = 0.9285372824309751;
		login_screen_population.setOrigin(0, 0);

		// among_of_penguins_online
		const among_of_penguins_online = this.add.text(566, 897, "", {});
		among_of_penguins_online.scaleX = 1.7272161397844321;
		among_of_penguins_online.scaleY = 3.0135215329911054;
		among_of_penguins_online.text = "Amount of penguins online";
		among_of_penguins_online.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// login_screen_buddies
		const login_screen_buddies = this.add.image(227, 901, "login", "login-screen/buddies");
		login_screen_buddies.scaleX = 1.3870789516555924;
		login_screen_buddies.scaleY = 1.2721690340485814;
		login_screen_buddies.setOrigin(0, 0);

		// buddies_online
		const buddies_online = this.add.text(285, 903, "", {});
		buddies_online.scaleX = 1.931953195802802;
		buddies_online.scaleY = 2.4013993148768398;
		buddies_online.text = "Buddies online";
		buddies_online.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// server_selection_server_one_button
		const server_selection_server_one_button = this.add.image(360, 164, "login", "login-screen/worldTile");
		server_selection_server_one_button.scaleX = 0.8957690887597523;
		server_selection_server_one_button.scaleY = 0.8138125892747733;
		server_selection_server_one_button.setOrigin(0, 0);

		// server_selection_server_one_hover
		const server_selection_server_one_hover = this.add.image(306, 125, "login_1", "login-screen/worldTileSelect");
		server_selection_server_one_hover.scaleX = 0.7123591024225758;
		server_selection_server_one_hover.scaleY = 0.7611037088297073;
		server_selection_server_one_hover.setOrigin(0, 0);
		server_selection_server_one_hover.visible = false;

		// server_selection_server_one_name
		const server_selection_server_one_name = this.add.text(464, 177, "", {});
		server_selection_server_one_name.scaleX = 4.226556988580764;
		server_selection_server_one_name.scaleY = 4.062616056359653;
		server_selection_server_one_name.text = "Blizzard";
		server_selection_server_one_name.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// server_selection_server_one_bar_2
		const server_selection_server_one_bar_2 = this.add.image(861, 171, "login", "login-screen/populationOff");
		server_selection_server_one_bar_2.scaleX = 1.2384799472050227;
		server_selection_server_one_bar_2.scaleY = 1.0676790253643798;
		server_selection_server_one_bar_2.setOrigin(-0.176571, -0.122281);

		// server_selection_server_one_bar_1
		const server_selection_server_one_bar_1 = this.add.image(800, 168, "login", "login-screen/population");
		server_selection_server_one_bar_1.scaleX = 1.8910256502902731;
		server_selection_server_one_bar_1.scaleY = 1.7315681257752562;
		server_selection_server_one_bar_1.setOrigin(-0.176571, -0.122281);

		// server_selection_suggested_servers_text
		const server_selection_suggested_servers_text = this.add.bitmapText(401, 70, "CCComicCrazyBoldItalicShadow", "YOUR SUGGESTED SERVERS");
		server_selection_suggested_servers_text.scaleX = 0.4992622953281901;
		server_selection_suggested_servers_text.scaleY = 0.6099295369071126;
		server_selection_suggested_servers_text.text = "YOUR SUGGESTED SERVERS";
		server_selection_suggested_servers_text.fontSize = 72;

		// server_selection_server_one_bar_3
		const server_selection_server_one_bar_3 = this.add.image(925, 170, "login", "login-screen/populationOff");
		server_selection_server_one_bar_3.scaleX = 1.2384799472050227;
		server_selection_server_one_bar_3.scaleY = 1.0676790253643798;
		server_selection_server_one_bar_3.setOrigin(-0.176571, -0.122281);

		// server_selection_server_one_bar_4
		const server_selection_server_one_bar_4 = this.add.image(1050, 173, "login", "login-screen/populationOff");
		server_selection_server_one_bar_4.scaleX = 1.2384799472050227;
		server_selection_server_one_bar_4.scaleY = 1.0676790253643798;
		server_selection_server_one_bar_4.setOrigin(-0.176571, -0.122281);

		// server_selection_server_one_bar_5
		const server_selection_server_one_bar_5 = this.add.image(990, 170, "login", "login-screen/populationOff");
		server_selection_server_one_bar_5.scaleX = 1.2384799472050227;
		server_selection_server_one_bar_5.scaleY = 1.0676790253643798;
		server_selection_server_one_bar_5.setOrigin(-0.176571, -0.122281);

		// Setting all interactives sprites starts here
		server_selection_server_one_button.setInteractive({ useHandCursor: true });
		server_selection_server_one_hover.setInteractive({ useHandCursor: true });
		server_selection_more_servers_button.setInteractive({ useHandCursor: true });
		server_selection_unlock_items_button.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// // All interactive events start here
		// server_selection_server_one_button.on("pointerover", () => {
		// 	server_selection_server_one_button.visible = false;
		// 	server_selection_server_one_hover.visible = true;
		// });

		// server_selection_server_one_hover.on("pointerout", () => {
		// 	server_selection_server_one_button.visible = true;
		// 	server_selection_server_one_hover.visible = false;
		// });

		server_selection_server_one_button.on("pointerdown", async () => {
			// first we connect to the websocket once connected we send packets
			displayLoading(SCENE_SERVER_SELECTION, "Connecting to websocket");
			// send packet
			const networkManager = getManager();
			if(networkManager == null) {
				console.log("null");
				return;
			}

			const client = ClientPenguin.getClient();
			sendJoinRoomPacket("TownScene");
			networkManager.subscribe(CLIENT_CHAT);
			packetRegistry.addPacket(`/user/${client.username}/queue/join_room`, receiveJoinRoomPacket);
			networkManager.subscribe(`/user/${client.username}/queue/join_room`);
			networkManager.subscribe(CLIENT_ADD_PLAYER);
			networkManager.subscribe(CLIENT_PLAY_ANIMATION)
			networkManager.subscribe(CLIENT_STOP_ANIMATION);
			networkManager.subscribe(CLIENT_DISCONNECT);
			networkManager.subscribe(CLIENT_LEAVE_ROOM);
		});
		// All interactive events end here

		this.events.emit("scene-awake");
	}
}
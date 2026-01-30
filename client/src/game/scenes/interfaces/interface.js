import { ASSET_TYPES } from "../../assets/assetTypes";
import { BaseScene } from "../baseScene";
import { SCENE_INTERFACE, SCENE_INTERFACE_DANCE } from "../sceneNames";

// TODO: Fix chat input

export class InterfaceScene extends BaseScene {
    constructor() {
        super(SCENE_INTERFACE);
    }

    init(data = {}) {
		super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            scene: this,
            type: ASSET_TYPES.PACK,
            name: "interface",
            paths: ["assets/interfaces/ui/interface-pack.json"]
        });
    }

    createContent() {
		// interface_main_interface_bar_png
		const interface_main_interface_bar_png = this.add.image(760, 917, "interface", "interface_main_interface_bar.png");

		// interface_bottom_bar_emoji_button
		const interface_bottom_bar_emoji_button = this.add.image(318, 925, "interface", "interface_main_interface_button0001.png");

		// interface_bottom_bar_dance_button
		const interface_bottom_bar_dance_button = this.add.image(385, 925, "interface", "interface_main_interface_button0001.png");

		// interface_bottom_bar_snowball_button
		const interface_bottom_bar_snowball_button = this.add.image(452, 925, "interface", "interface_main_interface_button0001.png");

		// interface_bottom_bar_chat_input
		const interface_bottom_bar_chat_input = this.add.image(760, 925, "interface", "interface_chat00010001.png");
		interface_bottom_bar_chat_input.scaleX = 0.8824765692530303;
		interface_bottom_bar_chat_input.scaleY = 1.0043159291610997;

		// interface_bottom_bar_chat_button
		const interface_bottom_bar_chat_button = this.add.image(519, 925, "interface", "interface_main_interface_button0001.png");

		// interface_bottom_bar_settings_button
		const interface_bottom_bar_settings_button = this.add.image(1275, 925, "interface", "interface_main_interface_button0001.png");

		// interface_bottom_bar_igloo_button
		const interface_bottom_bar_igloo_button = this.add.image(1208, 925, "interface", "interface_main_interface_button0001.png");

		// interface_bottom_bar_friends_button
		const interface_bottom_bar_friends_button = this.add.image(1141, 925, "interface", "interface_main_interface_button0001.png");

		// interface_bottom_bar_player_button
		const interface_bottom_bar_player_button = this.add.image(1074, 925, "interface", "interface_main_interface_button0001.png");

		// interface_bottom_bar_chat_send_button
		const interface_bottom_bar_chat_send_button = this.add.image(1006, 925, "interface", "interface_main_interface_button0001.png");

		// interface_bottom_bar_puffle_button
		const interface_bottom_bar_puffle_button = this.add.image(251, 925, "interface", "interface_main_interface_button0001.png");

		// interface_bottom_bar_puffle_button_hovered
		const interface_bottom_bar_puffle_button_hovered = this.add.image(251, 925, "interface", "interface_main_interface_button0002.png");
		interface_bottom_bar_puffle_button_hovered.visible = false;

		// interface_bottom_bar_emoji_icon_hovered
		const interface_bottom_bar_emoji_icon_hovered = this.add.image(318, 925, "interface", "interface_main_interface_button0002.png");
		interface_bottom_bar_emoji_icon_hovered.visible = false;

		// interface_bottom_bar_dance_button_hovered
		const interface_bottom_bar_dance_button_hovered = this.add.image(385, 925, "interface", "interface_main_interface_button0002.png");
		interface_bottom_bar_dance_button_hovered.visible = false;

		// interface_bottom_bar_snowball_button_hovered
		const interface_bottom_bar_snowball_button_hovered = this.add.image(452, 925, "interface", "interface_main_interface_button0002.png");
		interface_bottom_bar_snowball_button_hovered.visible = false;

		// interface_bottom_bar_chat_send_button_hovered
		const interface_bottom_bar_chat_send_button_hovered = this.add.image(1006, 925, "interface", "interface_main_interface_button0002.png");
		interface_bottom_bar_chat_send_button_hovered.visible = false;

		// interface_bottom_bar_chat_button_hovered
		const interface_bottom_bar_chat_button_hovered = this.add.image(519, 925, "interface", "interface_main_interface_button0002.png");
		interface_bottom_bar_chat_button_hovered.visible = false;

		// interface_bottom_bar_player_button_hovered
		const interface_bottom_bar_player_button_hovered = this.add.image(1074, 925, "interface", "interface_main_interface_button0002.png");
		interface_bottom_bar_player_button_hovered.visible = false;

		// interface_bottom_bar_friends_button_hovered
		const interface_bottom_bar_friends_button_hovered = this.add.image(1141, 925, "interface", "interface_main_interface_button0002.png");
		interface_bottom_bar_friends_button_hovered.visible = false;

		// interface_bottom_bar_igloo_button_hovered
		const interface_bottom_bar_igloo_button_hovered = this.add.image(1208, 925, "interface", "interface_main_interface_button0002.png");
		interface_bottom_bar_igloo_button_hovered.visible = false;

		// interface_bottom_bar_settings_button_hovered
		const interface_bottom_bar_settings_button_hovered = this.add.image(1275, 925, "interface", "interface_main_interface_button0002.png");
		interface_bottom_bar_settings_button_hovered.visible = false;

		// interface_bottom_bar_chat_send_icon
		const interface_bottom_bar_chat_send_icon = this.add.image(1006, 923, "interface", "interface_send_chat_icon0001.png");

		// interface_bottom_bar_chat_icon
		const interface_bottom_bar_chat_icon = this.add.image(519, 923, "interface", "interface_chat_bubble_icon0001.png");

		// interface_bottom_bar_snowball_icon
		const interface_bottom_bar_snowball_icon = this.add.image(452, 924, "interface", "inteface_snowball_icon.png");

		// interface_bottom_bar_dance_icon
		const interface_bottom_bar_dance_icon = this.add.image(383, 921, "interface", "interface_dance_icon.png");

		// interface_bottom_bar_puffle_icon
		const interface_bottom_bar_puffle_icon = this.add.image(250, 923, "interface", "interface_blue_puffle_icon.png");

		// interface_bottom_bar_emoji_icon
		const interface_bottom_bar_emoji_icon = this.add.image(318, 923, "interface", "interface_emojis_icon.png");

		// interface_bottom_bar_igloo_icon
		const interface_bottom_bar_igloo_icon = this.add.image(1208, 925, "interface", "interface_igloo_icon.png");

		// interface_bottom_bar_settings_icon
		const interface_bottom_bar_settings_icon = this.add.image(1275, 924, "interface", "interface_settings_icono.png");

		// interface_bottom_bar_friends_icon
		const interface_bottom_bar_friends_icon = this.add.image(1141, 923, "interface", "interface_friends_icon.png");

		// interface_bottom_bar_player_icon
		const interface_bottom_bar_player_icon = this.add.image(1074, 923, "interface", "interface_player_icon.png");

		// interface_map_closed
		const interface_map_closed = this.add.image(100, 886, "interface", "interface_map0001.png");
		interface_map_closed.scaleX = 0.976832062717823;

		// interface_newspaper_not_hover
		const interface_newspaper_not_hover = this.add.image(91, 74, "interface", "interface_newspaper_icon0001.png");
		interface_newspaper_not_hover.scaleX = 1.1076317855287052;
		interface_newspaper_not_hover.scaleY = 1.1009334692128427;

		// interface_mail_not_hovered
		const interface_mail_not_hovered = this.add.image(203, 60, "interface", "interface_mail_icon0001.png");
		interface_mail_not_hovered.scaleX = 1.1076317855287052;
		interface_mail_not_hovered.scaleY = 1.1009334692128427;

		// interface_moderator_not_hovered
		const interface_moderator_not_hovered = this.add.image(1429, 74, "interface", "interface_moderator_icon.png");

		// interface_map_opened
		const interface_map_opened = this.add.image(100, 886, "interface", "interface_map0002.png");
		interface_map_opened.scaleX = 0.976832062717823;
		interface_map_opened.visible = false;

		// interface_newspaper_hovered
		const interface_newspaper_hovered = this.add.image(91, 74, "interface", "interface_newspaper_icon0002.png");
		interface_newspaper_hovered.scaleX = 1.1076317855287052;
		interface_newspaper_hovered.scaleY = 1.1009334692128427;
		interface_newspaper_hovered.visible = false;

		// interface_mail_hovered
		const interface_mail_hovered = this.add.image(203, 60, "interface", "interface_mail_icon0002.png");
		interface_mail_hovered.scaleX = 1.1076317855287052;
		interface_mail_hovered.scaleY = 1.1009334692128427;
		interface_mail_hovered.visible = false;

		// interface_moderator_hovered
		const interface_moderator_hovered = this.add.image(1429, 74, "interface", "interface_moderator_icon_hover.png");
		interface_moderator_hovered.visible = false;

        // Dom elements start here
		// const topLeft = interface_bottom_bar_chat_input.getTopLeft();
		// const paddingLeft = 10;
		// const paddingRight = 10;
		// const inputX = topLeft.x + paddingLeft;
		// const inputY = interface_bottom_bar_chat_input.y;  
		// const inputWidth = interface_bottom_bar_chat_input.displayWidth - paddingLeft - paddingRight;
		// this.chatInput = this.add.dom(0, 0, 'input', {
		// 	position: 'absolute',
		// 	width: `${inputWidth}px`,
		// 	height: '30px',
		// 	background: 'transparent',
		// 	border: 'none',
		// 	outline: 'none',
		// 	color: '#FFFFFF',
		// 	fontFamily: '"Arial Rounded MT Bold", Nunito, "Varela Round", sans-serif',
		// 	fontSize: '18px',
		// 	fontWeight: '700',
		// 	textAlign: 'left',
		// 	caretColor: '#FFFFFF',
		// 	padding: '0',
		// 	margin: '0',
		// 	lineHeight: '30px',
		// 	pointerEvents: 'auto'
		// });

		// this.chatInput.setOrigin(0, 0.5);
		// this.chatInput.setPosition(inputX, inputY);
		// this.chatInput.setDepth(9999);

		// this.chatInput.node.addEventListener('mouseenter', () => {
		// 	console.log("active");
		// });

		// this.chatInput.node.autocomplete = "off";
		// this.chatInput.node.spellcheck = false;
		// this.chatInput.node.value = "";

		// this.chatInput.node.addEventListener('mousedown', () => {
		// 	this.chatInput.node.focus();
		// });
        // Dom elements end here

        // Setting all interactives sprites starts here
        interface_map_closed.setInteractive({ useHandCursor: true });
		interface_map_opened.setInteractive({ useHandCursor: true });
		interface_bottom_bar_puffle_button.setInteractive({ useHandCursor: true });
		interface_bottom_bar_emoji_button.setInteractive({ useHandCursor: true });
		interface_bottom_bar_dance_button.setInteractive({ useHandCursor: true });
		interface_bottom_bar_snowball_button.setInteractive({ useHandCursor: true });
		interface_bottom_bar_chat_button.setInteractive({ useHandCursor: true });
		interface_bottom_bar_settings_button.setInteractive({ useHandCursor: true });
		interface_bottom_bar_igloo_button.setInteractive({ useHandCursor: true });
		interface_bottom_bar_friends_button.setInteractive({ useHandCursor: true });
		interface_bottom_bar_player_button.setInteractive({ useHandCursor: true });
		interface_bottom_bar_chat_send_button.setInteractive({ useHandCursor: true });
		interface_bottom_bar_puffle_button_hovered.setInteractive({ useHandCursor: true });
		interface_bottom_bar_emoji_icon_hovered.setInteractive({ useHandCursor: true });
		interface_bottom_bar_dance_button_hovered.setInteractive({ useHandCursor: true });
		interface_bottom_bar_snowball_button_hovered.setInteractive({ useHandCursor: true });
		interface_bottom_bar_chat_button_hovered.setInteractive({ useHandCursor: true });
		interface_bottom_bar_player_button_hovered.setInteractive({ useHandCursor: true });
		interface_bottom_bar_friends_button_hovered.setInteractive({ useHandCursor: true });
		interface_bottom_bar_igloo_button_hovered.setInteractive({ useHandCursor: true });
		interface_bottom_bar_settings_button_hovered.setInteractive({ useHandCursor: true });
		interface_newspaper_not_hover.setInteractive({ useHandCursor: true });
		interface_mail_not_hovered.setInteractive({ useHandCursor: true });
		interface_moderator_not_hovered.setInteractive({ useHandCursor: true });
		interface_newspaper_hovered.setInteractive({ useHandCursor: true });
		interface_mail_hovered.setInteractive({ useHandCursor: true });
		interface_moderator_hovered.setInteractive({ useHandCursor: true });
		interface_bottom_bar_chat_send_button_hovered.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        interface_map_closed.on("pointerover", () => {
			interface_map_closed.visible = false;
			interface_map_opened.visible = true;
		});

		interface_map_opened.on("pointerout", () => {
			interface_map_closed.visible = true;
			interface_map_opened.visible = false;
		});

		interface_map_opened.on("pointerdown", () => {
		});

		interface_bottom_bar_puffle_button.on("pointerover", () => {
			interface_bottom_bar_puffle_button.visible = false;
			interface_bottom_bar_puffle_button_hovered.visible = true;
		});

		interface_bottom_bar_puffle_button_hovered.on("pointerout", () => {
			interface_bottom_bar_puffle_button.visible = true;
			interface_bottom_bar_puffle_button_hovered.visible = false;
		});

		interface_bottom_bar_puffle_button_hovered.on("pointerdown", () => {
		});

		interface_bottom_bar_emoji_button.on("pointerover", () => {
			interface_bottom_bar_emoji_button.visible = false;
			interface_bottom_bar_emoji_icon_hovered.visible = true;
		});

		interface_bottom_bar_emoji_icon_hovered.on("pointerout", () => {
			interface_bottom_bar_emoji_button.visible = true;
			interface_bottom_bar_emoji_icon_hovered.visible = false;
		});

		interface_bottom_bar_emoji_icon_hovered.on("pointerdown", () => {
		});

		interface_bottom_bar_dance_button.on("pointerover", () => {
			interface_bottom_bar_dance_button.visible = false;
			interface_bottom_bar_dance_button_hovered.visible = true;
		});

		interface_bottom_bar_dance_button_hovered.on("pointerout", () => {
			interface_bottom_bar_dance_button.visible = true;
			interface_bottom_bar_dance_button_hovered.visible = false;
		});

		interface_bottom_bar_dance_button_hovered.on("pointerdown", () => {
			this.sceneManager.launch(SCENE_INTERFACE_DANCE);
		});

		interface_bottom_bar_snowball_button.on("pointerover", () => {
			interface_bottom_bar_snowball_button.visible = false;
			interface_bottom_bar_snowball_button_hovered.visible = true;
		});

		interface_bottom_bar_snowball_button_hovered.on("pointerout", () => {
			interface_bottom_bar_snowball_button.visible = true;
			interface_bottom_bar_snowball_button_hovered.visible = false;
		});

		interface_bottom_bar_snowball_button_hovered.on("pointerdown", () => {
		});

		interface_bottom_bar_chat_button.on("pointerover", () => {
			interface_bottom_bar_chat_button.visible = false;
			interface_bottom_bar_chat_button_hovered.visible = true;
		});

		interface_bottom_bar_chat_button_hovered.on("pointerout", () => {
			interface_bottom_bar_chat_button.visible = true;
			interface_bottom_bar_chat_button_hovered.visible = false;
		});

		interface_bottom_bar_chat_button_hovered.on("pointerdown", () => {
		});

		interface_bottom_bar_chat_send_button.on("pointerover", () => {
			interface_bottom_bar_chat_send_button.visible = false;
			interface_bottom_bar_chat_send_button_hovered.visible = true;
		});

		interface_bottom_bar_chat_send_button_hovered.on("pointerout", () => {
			interface_bottom_bar_chat_send_button.visible = true;
			interface_bottom_bar_chat_send_button_hovered.visible = false;
		});

		interface_bottom_bar_chat_send_button_hovered.on("pointerdown", () => {
		});

		interface_bottom_bar_player_button.on("pointerover", () => {
			interface_bottom_bar_player_button.visible = false;
			interface_bottom_bar_player_button_hovered.visible = true;
		});

		interface_bottom_bar_player_button_hovered.on("pointerout", () => {
			interface_bottom_bar_player_button.visible = true;
			interface_bottom_bar_player_button_hovered.visible = false;
		});

		interface_bottom_bar_player_button_hovered.on("pointerdown", () => {
		});

		interface_bottom_bar_friends_button.on("pointerover", () => {
			interface_bottom_bar_friends_button.visible = false;
			interface_bottom_bar_friends_button_hovered.visible = true;
		});

		interface_bottom_bar_friends_button_hovered.on("pointerout", () => {
			interface_bottom_bar_friends_button.visible = true;
			interface_bottom_bar_friends_button_hovered.visible = false;
		});

		interface_bottom_bar_friends_button_hovered.on("pointerdown", () => {
		});

		interface_bottom_bar_igloo_button.on("pointerover", () => {
			interface_bottom_bar_igloo_button.visible = false;
			interface_bottom_bar_igloo_button_hovered.visible = true;
		});

		interface_bottom_bar_igloo_button_hovered.on("pointerout", () => {
			interface_bottom_bar_igloo_button.visible = true;
			interface_bottom_bar_igloo_button_hovered.visible = false;
		});

		interface_bottom_bar_igloo_button_hovered.on("pointerdown", () => {
		});

		interface_bottom_bar_settings_button.on("pointerover", () => {
			interface_bottom_bar_settings_button.visible = false;
			interface_bottom_bar_settings_button_hovered.visible = true;
		});

		interface_bottom_bar_settings_button_hovered.on("pointerout", () => {
			interface_bottom_bar_settings_button.visible = true;
			interface_bottom_bar_settings_button_hovered.visible = false;
		});

		interface_bottom_bar_settings_button_hovered.on("pointerdown", () => {
		});

		interface_newspaper_not_hover.on("pointerover", () => {
			interface_newspaper_not_hover.visible = false;
			interface_newspaper_hovered.visible = true;
		});

		interface_newspaper_hovered.on("pointerout", () => {
			interface_newspaper_not_hover.visible = true;
			interface_newspaper_hovered.visible = false;
		});

		interface_newspaper_hovered.on("pointerdown", () => {
		});

		interface_mail_not_hovered.on("pointerover", () => {
			interface_mail_not_hovered.visible = false;
			interface_mail_hovered.visible = true;
		});

		interface_mail_hovered.on("pointerout", () => {
			interface_mail_not_hovered.visible = true;
			interface_mail_hovered.visible = false;
		});

		interface_mail_hovered.on("pointerdown", () => {
		});

		interface_moderator_not_hovered.on("pointerover", () => {
			interface_moderator_not_hovered.visible = false;
			interface_moderator_hovered.visible = true;
		});

		interface_moderator_hovered.on("pointerout", () => {
			interface_moderator_not_hovered.visible = true;
			interface_moderator_hovered.visible = false;
		});

		interface_moderator_hovered.on("pointerdown", () => {
		});
        // All interactive events ends here

		this.sceneManager.sendToTop("InterfaceScene");
        this.events.once("shutdown", this.shutdown, this);
    }

    shutdown() {
        this.chatInput.destroy();
    }
}
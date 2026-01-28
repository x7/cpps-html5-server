import { getManager } from "../../../network/network";
import { SERVER_VERIFY_PACKET } from "../../../network/topics";
import { ASSET_TYPES } from "../../assets/assetTypes";
import { ClientPenguin } from "../../penguin/clientPenguin";
import { BaseScene } from "../base/baseScene";

export class InterfaceScene extends BaseScene {
    constructor() {
        super("InterfaceScene");
    }

    init(data) {
        this.assetManager = this.getAssetManager();
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
		const interface_main_interface_bar_png = this.add.image(737, 920, "interface", "interface_main_interface_bar.png");
		interface_main_interface_bar_png.scaleX = 0.9520614242422353;
		interface_main_interface_bar_png.scaleY = 1.0382732835569173;

		// interface_main_interface_button0001_png
		const interface_main_interface_button0001_png = this.add.image(273, 728, "interface", "interface_main_interface_button0001.png");
		interface_main_interface_button0001_png.scaleX = 0.8308294966416641;
		interface_main_interface_button0001_png.scaleY = 0.7625461458091359;
		interface_main_interface_button0001_png.visible = false;

		// interface_blue_puffle_icon_png
		const interface_blue_puffle_icon_png = this.add.image(267, 689, "interface", "interface_blue_puffle_icon.png");
		interface_blue_puffle_icon_png.scaleX = 0.6825770724084521;
		interface_blue_puffle_icon_png.scaleY = 0.6688926608235132;
		interface_blue_puffle_icon_png.visible = false;

		// interface_main_interface_button0001_png_1
		const interface_main_interface_button0001_png_1 = this.add.image(320, 690, "interface", "interface_main_interface_button0001.png");
		interface_main_interface_button0001_png_1.scaleX = 0.8308294966416641;
		interface_main_interface_button0001_png_1.scaleY = 0.7625461458091359;
		interface_main_interface_button0001_png_1.visible = false;

		// interface_main_interface_button0001_png_2
		const interface_main_interface_button0001_png_2 = this.add.image(374, 690, "interface", "interface_main_interface_button0001.png");
		interface_main_interface_button0001_png_2.scaleX = 0.8308294966416641;
		interface_main_interface_button0001_png_2.scaleY = 0.7625461458091359;
		interface_main_interface_button0001_png_2.visible = false;

		// interface_dance_icon_png
		const interface_dance_icon_png = this.add.image(373, 688, "interface", "interface_dance_icon.png");
		interface_dance_icon_png.scaleX = 0.6229342904866657;
		interface_dance_icon_png.scaleY = 0.5939654209971843;
		interface_dance_icon_png.visible = false;

		// interface_main_interface_button0001_png_3
		const interface_main_interface_button0001_png_3 = this.add.image(427, 690, "interface", "interface_main_interface_button0001.png");
		interface_main_interface_button0001_png_3.scaleX = 0.8308294966416641;
		interface_main_interface_button0001_png_3.scaleY = 0.7625461458091359;
		interface_main_interface_button0001_png_3.visible = false;

		// interface_chat00010001_png
		const interface_chat00010001_png = this.add.image(706, 502, "interface", "interface_chat00010001.png");
		interface_chat00010001_png.scaleX = 0.663148982435064;
		interface_chat00010001_png.scaleY = 0.7670306573639145;
		interface_chat00010001_png.visible = false;

		// interface_main_interface_button0001_png_4
		const interface_main_interface_button0001_png_4 = this.add.image(480, 690, "interface", "interface_main_interface_button0001.png");
		interface_main_interface_button0001_png_4.scaleX = 0.8308294966416641;
		interface_main_interface_button0001_png_4.scaleY = 0.7625461458091359;
		interface_main_interface_button0001_png_4.visible = false;

		// inteface_snowball_icon_png
		const inteface_snowball_icon_png = this.add.image(428, 689, "interface", "inteface_snowball_icon.png");
		inteface_snowball_icon_png.scaleX = 0.5590217654668652;
		inteface_snowball_icon_png.scaleY = 0.5977508158311177;
		inteface_snowball_icon_png.visible = false;

		// interface_chat_bubble_icon0001_png
		const interface_chat_bubble_icon0001_png = this.add.image(480, 688, "interface", "interface_chat_bubble_icon0001.png");
		interface_chat_bubble_icon0001_png.scaleX = 0.6895231587973927;
		interface_chat_bubble_icon0001_png.scaleY = 0.8098679221242047;
		interface_chat_bubble_icon0001_png.visible = false;

		// interface_main_interface_button0001_png_5
		const interface_main_interface_button0001_png_5 = this.add.image(841, 689, "interface", "interface_main_interface_button0001.png");
		interface_main_interface_button0001_png_5.scaleX = 0.8308294966416641;
		interface_main_interface_button0001_png_5.scaleY = 0.7625461458091359;
		interface_main_interface_button0001_png_5.visible = false;

		// interface_send_chat_icon0001_png
		const interface_send_chat_icon0001_png = this.add.image(842, 688, "interface", "interface_send_chat_icon0001.png");
		interface_send_chat_icon0001_png.scaleX = 0.8554562315444862;
		interface_send_chat_icon0001_png.scaleY = 0.7439698118081939;
		interface_send_chat_icon0001_png.visible = false;

		// interface_main_interface_button0001_png_6
		const interface_main_interface_button0001_png_6 = this.add.image(894, 688, "interface", "interface_main_interface_button0001.png");
		interface_main_interface_button0001_png_6.scaleX = 0.8308294966416641;
		interface_main_interface_button0001_png_6.scaleY = 0.7625461458091359;
		interface_main_interface_button0001_png_6.visible = false;

		// interface_main_interface_button0001_png_7
		const interface_main_interface_button0001_png_7 = this.add.image(947, 688, "interface", "interface_main_interface_button0001.png");
		interface_main_interface_button0001_png_7.scaleX = 0.8308294966416641;
		interface_main_interface_button0001_png_7.scaleY = 0.7625461458091359;
		interface_main_interface_button0001_png_7.visible = false;

		// interface_main_interface_button0001_png_8
		const interface_main_interface_button0001_png_8 = this.add.image(1000, 688, "interface", "interface_main_interface_button0001.png");
		interface_main_interface_button0001_png_8.scaleX = 0.8308294966416641;
		interface_main_interface_button0001_png_8.scaleY = 0.7625461458091359;
		interface_main_interface_button0001_png_8.visible = false;

		// interface_main_interface_button0001_png_9
		const interface_main_interface_button0001_png_9 = this.add.image(1053, 689, "interface", "interface_main_interface_button0001.png");
		interface_main_interface_button0001_png_9.scaleX = 0.8308294966416641;
		interface_main_interface_button0001_png_9.scaleY = 0.7625461458091359;
		interface_main_interface_button0001_png_9.visible = false;

		// interface_emojis_icon_png
		const interface_emojis_icon_png = this.add.image(320, 689, "interface", "interface_emojis_icon.png");
		interface_emojis_icon_png.scaleX = 0.7557567049466791;
		interface_emojis_icon_png.scaleY = 0.696655436016669;
		interface_emojis_icon_png.visible = false;

		// interface_igloo_icon_png
		const interface_igloo_icon_png = this.add.image(1000, 687, "interface", "interface_igloo_icon.png");
		interface_igloo_icon_png.scaleX = 0.6753389752643617;
		interface_igloo_icon_png.scaleY = 0.640451165662363;
		interface_igloo_icon_png.visible = false;

		// interface_settings_icono_png
		const interface_settings_icono_png = this.add.image(1053, 688, "interface", "interface_settings_icono.png");
		interface_settings_icono_png.scaleX = 0.6944472210308932;
		interface_settings_icono_png.scaleY = 0.6892868788433246;
		interface_settings_icono_png.visible = false;

		// interface_friends_icon_png
		const interface_friends_icon_png = this.add.image(947, 687, "interface", "interface_friends_icon.png");
		interface_friends_icon_png.scaleX = 0.7134395722668262;
		interface_friends_icon_png.scaleY = 0.6974504015934253;
		interface_friends_icon_png.visible = false;

		// interface_player_icon_png
		const interface_player_icon_png = this.add.image(894, 686, "interface", "interface_player_icon.png");
		interface_player_icon_png.scaleX = 0.6609814266173355;
		interface_player_icon_png.scaleY = 0.7134615239340185;
		interface_player_icon_png.visible = false;

		// interface_map0001_png
		const interface_map0001_png = this.add.image(76, 668, "interface", "interface_map0001.png");
		interface_map0001_png.scaleX = 0.7592337183701436;
		interface_map0001_png.scaleY = 0.7063425442684317;
		interface_map0001_png.visible = false;

		// interface_newspaper_icon0001_png
		const interface_newspaper_icon0001_png = this.add.image(63, 60, "interface", "interface_newspaper_icon0001.png");
		interface_newspaper_icon0001_png.scaleX = 0.7896758537754842;
		interface_newspaper_icon0001_png.scaleY = 0.7597302915189995;
		interface_newspaper_icon0001_png.visible = false;

		// interface_mail_icon0001_png
		const interface_mail_icon0001_png = this.add.image(174, 50, "interface", "interface_mail_icon0001.png");
		interface_mail_icon0001_png.scaleX = 0.7896758537754842;
		interface_mail_icon0001_png.scaleY = 0.7597302915189995;
		interface_mail_icon0001_png.visible = false;

		// interface_moderator_icon_png
		const interface_moderator_icon_png = this.add.image(1195, 58, "interface", "interface_moderator_icon.png");
		interface_moderator_icon_png.scaleX = 0.6266090074349453;
		interface_moderator_icon_png.scaleY = 0.6302074033914904;
		interface_moderator_icon_png.visible = false;

        // Dom elements start here
        const leftBtnX = 480;
        const rightBtnX = 841;
        const y = 690;
        const leftPaddingFromBtn = 35;
        const rightPaddingFromBtn = 35;
        const inputWidth = (rightBtnX - rightPaddingFromBtn) - (leftBtnX + leftPaddingFromBtn);

        this.chatInput = this.add.dom(0, 0, 'input', {
            position: 'absolute',
            width: `${inputWidth}px`,
            height: '30px',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#FFFFFF',
            fontFamily: 'Arial Rounded MT Bold", Nunito, "Varela Round", sans-serif',
            fontSize: '18px',
            fontWeight: '700',
            textAlign: 'left',
            caretColor: '#FFFFFF',
            padding: '0',
            margin: '0',
            lineHeight: '30px'
        });

        this.chatInput.setOrigin(0, 0.5);
        this.chatInput.setPosition(leftBtnX + leftPaddingFromBtn, y);
        this.chatInput.node.autocomplete = "off";
        this.chatInput.node.spellcheck = false;
        this.chatInput.node.value = "";
        // Dom elements end here

        // Setting all interactives sprites starts here
        interface_main_interface_button0001_png_5.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        interface_main_interface_button0001_png_5.on("pointerdown", () => {
            const input = this.chatInput.node.value;
            if(input === "" || input === null) {
				return;
			} 

            const client = ClientPenguin.getClient();
            const manager = getManager();
			client.sendChat(input);
			this.chatInput.node.value = "";
			manager.send(SERVER_VERIFY_PACKET, { "packet_type": "player_chat", "message": input });
        });
        // All interactive events ends here

        this.events.once("shutdown", this.shutdown, this);
    }

    shutdown() {
        this.chatInput.destroy();
    }
}
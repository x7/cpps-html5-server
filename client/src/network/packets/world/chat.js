import { ClientPenguin } from "../../../game/penguin/clientPenguin";
import { roomManager } from "../../../game/rooms/roomManager";
import { getSceneManager } from "../../../main";
import { getManager } from "../../network";
import { SERVER_VERIFY_PACKET } from "../../topics";
import { PACKET_PLAYER_CHAT } from "../../types/packetTypes";
import { createPacket } from "../packetUtil";

export function chat(response) {
    const packet = JSON.parse(response.body);
    const penguin = packet.penguin;
    const username = penguin.username;
    const id = penguin.id;
    const message = packet.message;
    const emoji = packet.emoji;

    console.log(penguin)
    console.log(packet)
    
    const clientPenguin = ClientPenguin.getClient();
    if(username === clientPenguin.getUsername()) {
        return;
    }

    let room = roomManager.getRoom();
    if(room == null) {
        roomManager.setRoom(getSceneManager().getCurrentScene());
        room = roomManager.getRoom();
    }

    const player = room.getPlayerByUsername(username);
    console.log(username)
    if(player == null) {
        console.log("Player did not exist cannot send movement packet");
        return;
    }

    if(emoji != "") {
        player.sendChatEmoji(emoji);
        return;
    }

    player.sendChat(message);
}

export function sendChatPacket(message, emoji = "") {
    const networkManager = getManager();
    const data = { "packet_type": PACKET_PLAYER_CHAT, "message": message, "emoji": emoji };
    networkManager.send(SERVER_VERIFY_PACKET, data);
}
import { ClientPenguin } from "../../../game/penguin/clientPenguin";
import { roomManager } from "../../../game/rooms/roomManager";
import { CLIENT_PLAY_ANIMATION } from "../../topics";

export function receivePlayAnimationPacket(response) {
    const packet = JSON.parse(response.body);
    const animationKey = packet.animationKey;
    const body = packet.body;
    const overlay = packet.overlay;
    const penguin = packet.penguin;
    const username = penguin.username;

    const clientPenguin = ClientPenguin.getClient();
    if(username === clientPenguin.getUsername()) {
        return;
    }

    let room = roomManager.getRoom();
    if(room == null) {
        roomManager.setRoom("town");
        room = roomManager.getRoom();
    }
    
    const player = room.getPlayerByUsername(username);
    if(player == null) {
        console.log("Player did not exist cannot send movement packet");
        return;
    }

    player.playAnimation(animationKey, body, overlay, null)
}

export function sendPlayAnimationPacket() {
    const networkManager = getManager();
    const data = { "packet_type": CLIENT_PLAY_ANIMATION, "x": x, "y": y };
    networkManager.send(SERVER_VERIFY_PACKET, data);
}
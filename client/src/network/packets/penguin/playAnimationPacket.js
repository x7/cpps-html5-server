import { ClientPenguin } from "../../../game/penguin/clientPenguin";
import { roomManager } from "../../../game/rooms/roomManager";
import { CLIENT_PLAY_ANIMATION } from "../../topics";

// ok bro
// client receives this packet
// packet should contain the new players animation (the penguin var is the penguin whos animation was played)
// then play it for this penguin on this client
// ok all above useless :thumbsup:
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

    console.log(`setting animation for ${penguin.username}`)
    player.playAnimation(animationKey, body, overlay, null)
}

export function sendPlayAnimationPacket() {
    const networkManager = getManager();
    const data = { "packet_type": CLIENT_PLAY_ANIMATION, "x": x, "y": y };
    networkManager.send(SERVER_VERIFY_PACKET, data);
}
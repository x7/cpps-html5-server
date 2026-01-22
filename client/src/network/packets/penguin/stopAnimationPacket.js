import { ClientPenguin } from "../../../game/penguin/clientPenguin";
import { roomManager } from "../../../game/rooms/roomManager";
import { CLIENT_STOP_ANIMATION } from "../../topics";

export function receiveStopAnimationPacket(response) {
    const packet = JSON.parse(response.body);
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

    player.stopAnimation()
}

export function sendStopAnimationPacket() {
    const networkManager = getManager();
    const data = { "packet_type": CLIENT_STOP_ANIMATION, "x": x, "y": y };
    networkManager.send(SERVER_VERIFY_PACKET, data);
}
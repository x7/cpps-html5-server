import { ClientPenguin } from "../../../game/penguin/clientPenguin";
import { roomManager } from "../../../game/rooms/roomManager";
import { getManager } from "../../network";
import { SERVER_VERIFY_PACKET } from "../../topics";
import { PACKET_PLAYER_MOVEMENT } from "../../types/packetTypes";

export function receiveMovementPacket(response) {
    const packet = JSON.parse(response.body);
    const x = packet.x;
    const y = packet.y;
    const penguin = packet.penguin;
    const username = penguin.username;
    const id = penguin.id;
    
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

    player.setX(x);
    player.setY(y);
}

export function sendMovementPacket(x, y) {
    const networkManager = getManager();
    const data = { "packet_type": PACKET_PLAYER_MOVEMENT, "x": x, "y": y };
    networkManager.send(SERVER_VERIFY_PACKET, data);
}
import { ClientPenguin } from "../../../game/penguin/clientPenguin";
import { roomManager } from "../../../game/rooms/roomManager";

export function disconnect(response) {
    const packet = JSON.parse(response.body);
    console.log(packet.username + " has disconnected");

    let room = roomManager.getRoom();
    if(room == null) {
        roomManager.setRoom("town");
        room = roomManager.getRoom();
    }

    const player = room.getPlayerByUsername(packet.username);
    room.removePlayer(player);
}
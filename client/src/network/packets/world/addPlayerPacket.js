import { ClientPenguin } from "../../../game/penguin/clientPenguin";
import ServerPenguin from "../../../game/penguin/serverPenguin";
import { roomManager } from "../../../game/rooms/roomManager";

export function receiveAddPlayerPacket(response) {
    const packet = JSON.parse(response.body);
    
    const clientPenguin = ClientPenguin.getClient();
    if(clientPenguin.getUsername() === packet.penguin.username) {
        return;
    }

    let room = roomManager.getRoom();
    if(room == null) {
        roomManager.setRoom("town");
        room = roomManager.getRoom();
    }

    console.log(`Received a add player packet for ${packet.penguin.username}`)
    console.log(packet)

    const penguin = new ServerPenguin(packet.penguin.username);
    room.addPlayer(penguin, packet.x, packet.y, false);
}

export function sendAddPlayerPacket() {

}
import { ClientPenguin } from "../../../game/penguin/clientPenguin";
import { roomManager } from "../../../game/rooms/roomManager";

export function chat(response) {
    const packet = JSON.parse(response.body);
    const penguin = packet.penguin;
    const username = penguin.username;
    const id = penguin.id;
    const message = packet.message;
    console.log("message recieved")
    
    const clientPenguin = ClientPenguin.getClient();
    if(username === clientPenguin.getUsername()) {
        return;
    }

    let room = roomManager.getRoom();
    if(room == null) {
        roomManager.setRoom("town");
        room = roomManager.getRoom();
    }

    alert(username)

    const player = room.getPlayerByUsername(username);
    console.log(username)
    if(player == null) {
        console.log("Player did not exist cannot send movement packet");
        return;
    }

    console.log("sent msg")
    player.sendChat(message);
}
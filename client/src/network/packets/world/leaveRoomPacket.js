import { roomManager } from "../../../game/rooms/roomManager";
import { parsePacket } from "../packetUtil";

export function receiveLeaveRoomPacket(response) {
    const packet = parsePacket(response.body);
    console.log(packet)
    if(!packet) {
        return;
    }
    
    // if(!packet.success) {
    //     return;
    // }

    const roomData = packet.penguin;
    const username = roomData.username;
    const room = roomManager.getRoom();
    room.removePlayer(room.getPlayerByUsername(username));
    console.log(`received remove penguin for ${username} in room ${room.getRoomName()}`)
}
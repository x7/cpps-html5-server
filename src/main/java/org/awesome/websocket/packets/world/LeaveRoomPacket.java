package org.awesome.websocket.packets.world;

import org.awesome.dto.Player;
import org.awesome.game.world.Room;
import org.awesome.game.world.RoomManager;
import org.awesome.websocket.packets.PacketHandler;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.user.SimpUserRegistry;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

public class LeaveRoomPacket implements PacketHandler {
    @Override
    public void handle(Map<String, Object> packet, SimpMessagingTemplate messagingTemplate) {
        Map<String, Object> data = (Map<String, Object>) packet.get("data");
        String roomId = data.get("room_id").toString();
        Map<String, Object> penguinData = (Map<String, Object>) data.get("penguin");

        Room room = RoomManager.getRoom(roomId);
        if(room == null) {
            return;
        }

        Set<Player> players = room.getPlayersInRoom();
        if(!players.isEmpty()) {
            for(Player player1 : players) {
                if(player1.getUsername().equals(penguinData.get("username"))) {
                    continue;
                }

                Map<String, Object> newUser = new HashMap<>();
                newUser.put("penguin", penguinData);
                messagingTemplate.convertAndSend("/client/leave_room", Optional.of(newUser));
                System.out.println("sent remove packet to " + player1.getUsername());
            }
        }

        room.removePlayer(room.getPlayerByUsername(penguinData.get("username").toString()));
    }
}

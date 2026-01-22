package org.awesome.websocket.packets.world;

import org.awesome.dto.Player;
import org.awesome.game.world.Room;
import org.awesome.game.world.RoomManager;
import org.awesome.websocket.packets.PacketHandler;
import org.awesome.websocket.packets.VerifyPacket;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.*;

public class JoinRoomPacket implements PacketHandler {
    @Override
    public void handle(Map<String, Object> packet, SimpMessagingTemplate messagingTemplate) {
        // Validate its a valid session + valid penguin online or whatever bs
        Map<String, Object> data = (Map<String, Object>) packet.get("data");
        String roomId = data.get("room_id").toString();
        Map<String, Object> penguinData = (Map<String, Object>) data.get("penguin");

        VerifyPacket.validateCredentials(data.get("token").toString());

        System.out.println("Received a join room packet to join room " + roomId);
        Player player = new Player(penguinData.get("username").toString(), 500, 500);

        // Room
        Room room = RoomManager.getRoom(roomId);
        if(room == null) {
            RoomManager.addRoom(roomId, 100);
            room = RoomManager.getRoom(roomId);
        }

        room.addPlayer(player);

        // send to every other client in the room but the person sending the join room packet
        Set<Player> players = room.getPlayersInRoom();
        if(players.size() > 1) {
            for(Player player1 : players) {
                if(player1.getUsername().equals(penguinData.get("username"))) {
                    continue;
                }

                Map<String, Object> newUser = new HashMap<>();
                newUser.put("penguin", penguinData);
                newUser.put("x", 500);
                newUser.put("y", 500);
                messagingTemplate.convertAndSend("/client/add_player", Optional.of(newUser));
                System.out.println("Sent add player for " + player1.getUsername() + " to add player " + penguinData.get("username"));
            }
        }

        Map<String, Object> response = new HashMap<>();
        response.put("packet", "join_room");
        response.put("success", true);

        Map<String, Object> returnData = new HashMap<>();
        returnData.put("x", 500);
        returnData.put("y", 500);
        returnData.put("penguin", data.get("penguin"));
        returnData.put("users", players.stream().filter(player1 -> !player1.getUsername().equals(penguinData.get("username"))));
        response.put("data", returnData);

        messagingTemplate.convertAndSend("/client/join_room", Optional.of(response));
    }
}

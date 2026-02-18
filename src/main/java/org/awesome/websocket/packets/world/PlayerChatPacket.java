package org.awesome.websocket.packets.world;

import org.awesome.dto.Player;
import org.awesome.game.world.RoomManager;
import org.awesome.websocket.packets.PacketHandler;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.user.SimpUserRegistry;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class PlayerChatPacket implements PacketHandler {
    @Override
    public void handle(Map<String, Object> packet, SimpMessagingTemplate messagingTemplate) {
        Map<String, Object> data = (Map<String, Object>) packet.get("data");
        Map<String, Object> penguinData = (Map<String, Object>) data.get("penguin");
        String message = data.get("message").toString();
        String currentRoom = data.get("currentRoom").toString();

        List<Player> players = RoomManager.getRoom(currentRoom).getPlayersInRoom().stream().toList();
        for(Player player : players) {
            System.out.println(player.getUsername());
            if(player.getUsername().equals(penguinData.get("username"))) {
                continue;
            }

            Map<String, Object> newUser = new HashMap<>();
            newUser.put("penguin", penguinData);
            newUser.put("message", message);
            messagingTemplate.convertAndSend("/client/player_chat", Optional.of(newUser));
        }
    }
}

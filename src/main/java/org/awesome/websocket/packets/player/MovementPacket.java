package org.awesome.websocket.packets.player;

import org.awesome.dto.Player;
import org.awesome.game.world.RoomManager;
import org.awesome.websocket.packets.PacketHandler;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class MovementPacket implements PacketHandler {
    @Override
    public void handle(Map<String, Object> packet, SimpMessagingTemplate messagingTemplate) {
        Map<String, Object> data = (Map<String, Object>) packet.get("data");
        double x = Double.valueOf(data.get("x").toString());
        double y = Double.valueOf(data.get("y").toString());
        Map<String, Object> penguinData = (Map<String, Object>) data.get("penguin");

        Player player = RoomManager.getRoom("town").getPlayerByUsername(penguinData.get("username").toString());
        player.setX(x);
        player.setY(y);

        Map<String, Object> returnData = new HashMap<>();
        returnData.put("x", x);
        returnData.put("y", y);
        returnData.put("penguin", penguinData);

        messagingTemplate.convertAndSend("/client/player_movement", Optional.of(returnData));
    }
}

package org.awesome.websocket.packets.world;

import org.awesome.websocket.packets.PacketHandler;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class AddPlayerPacket implements PacketHandler {
    @Override
    public void handle(Map<String, Object> packet, SimpMessagingTemplate messagingTemplate) {
        System.out.println("Received a player add event");
        Map<String, Object> data = (Map<String, Object>) packet.get("data");
        System.out.println(data);

        Map<String, Object> response = new HashMap<>();
        response.put("x", 500);
        response.put("y", 500);
        response.put("penguin", data.get("penguin"));

        messagingTemplate.convertAndSend("/client/add_player", Optional.of(response));
    }
}
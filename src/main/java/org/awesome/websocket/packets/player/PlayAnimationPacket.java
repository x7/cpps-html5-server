package org.awesome.websocket.packets.player;

import org.awesome.websocket.packets.PacketHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.stereotype.Controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class PlayAnimationPacket implements PacketHandler {
    @Override
    public void handle(Map<String, Object> packet, SimpMessagingTemplate messagingTemplate) {
        Map<String, Object> data = (Map<String, Object>) packet.get("data");
        String animationKey = data.get("animationKey").toString();
        String body = data.get("body").toString();
        String overlay = data.get("overlay").toString();
        Map<String, Object> penguinData = (Map<String, Object>) data.get("penguin");

        Map<String, Object> returnData = new HashMap<>();
        returnData.put("animationKey", animationKey);
        returnData.put("body", body);
        returnData.put("overlay",overlay);
        returnData.put("penguin", penguinData);

        messagingTemplate.convertAndSend("/client/play_animation", Optional.of(returnData));
    }
}

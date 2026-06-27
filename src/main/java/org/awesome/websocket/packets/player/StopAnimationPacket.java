package org.awesome.websocket.packets.player;

import org.awesome.annotations.PacketInfo;
import org.awesome.annotations.RegisterPacket;
import org.awesome.websocket.packets.PacketHandler;
import org.awesome.websocket.packets.PacketTypes;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.stereotype.Controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RegisterPacket
@PacketInfo(packetType = PacketTypes.STOP_ANIMATION)
public class StopAnimationPacket implements PacketHandler {
    @Override
    public void handle(Map<String, Object> packet, SimpMessagingTemplate messagingTemplate) {
        Map<String, Object> data = (Map<String, Object>) packet.get("data");
        Map<String, Object> penguinData = (Map<String, Object>) data.get("penguin");

        Map<String, Object> returnData = new HashMap<>();
        returnData.put("penguin", penguinData);

        messagingTemplate.convertAndSend("/client/stop_animation", Optional.of(returnData));
    }
}

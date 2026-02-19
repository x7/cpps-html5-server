package org.awesome.websocket.packets;

import io.jsonwebtoken.Claims;
import org.awesome.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.stereotype.Controller;

import java.util.Date;
import java.util.Map;

// store map<string, list<string> and put in list
// username, id, jwt token (maybe refresh + expire date)

@Controller
public class VerifyPacket {
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @Autowired
    private SimpUserRegistry userRegistry;

    @MessageMapping("/gateway")
    public void onGatewayReceive(@Payload Map<String, Object> packet) {
        Map<String, Object> packetData = (Map<String, Object>) packet.get("data");
        String jwt = packetData.get("token").toString();

        boolean validJwt = validateCredentials(jwt);
        if(!validJwt) {
            System.out.println("PACKET FAILED");
            return;
        }

        String packetType = packetData.get("packet_type").toString();
        if(packetType == null || packetType.isBlank()) {
            System.out.println("PAKCET FAILED " + packetType);
            return;
        }

        PacketRegistry.getPacketResponse(packetType, packet, messagingTemplate, userRegistry);
    }

    public static boolean validateCredentials(String jwtToken) {
        boolean isValidToken = JwtUtil.isTokenValid(jwtToken);
        if(!isValidToken) {
            return false;
        }

        Claims jwt = JwtUtil.parseJwt(jwtToken);
        Date currentDate = new Date();
        Date notBeforeDate = jwt.getNotBefore();
        Date expirationDate = jwt.getExpiration();

        if(notBeforeDate == null || currentDate.before(notBeforeDate)) {
            return false;
        }

        if(expirationDate == null || currentDate.after(expirationDate)) {
            return false;
        }

        String issuer = jwt.getIssuer();
        if(issuer == null || !issuer.equals("me")) {
            return false;
        }

        String jwtType = jwt.get("type").toString();
        if(jwtType == null || !jwtType.equals("access")) {
            return false;
        }

        String jwtAudience = jwt.getAudience().toString();
        if(jwtAudience == null || !jwtAudience.equals("[websocket-server]")) {
            return false;
        }

        String username = jwt.get("username").toString();
        if(username == null || username.isBlank()) {
            return false;
        }

        int userId = Integer.parseInt(jwt.get("user_id").toString());
        if(userId < 1) {
            return false;
        }

        return true;
    }
}
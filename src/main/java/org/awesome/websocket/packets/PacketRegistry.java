package org.awesome.websocket.packets;

import io.github.classgraph.ClassGraph;
import io.github.classgraph.ScanResult;
import org.awesome.annotations.PacketInfo;
import org.awesome.annotations.RegisterPacket;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.user.SimpUserRegistry;

import java.util.HashMap;
import java.util.Map;

public class PacketRegistry {
    private static final Map<String, PacketHandler> registeredPackets = new HashMap<>();

    public static void getPacketResponse(String packetName, Map<String, Object> packet, SimpMessagingTemplate simpMessagingTemplate, SimpUserRegistry userRegistry) {
        if(!registeredPackets.containsKey(packetName)) {
            System.out.println("PACKET FAILED " + packetName);
            return;
        }

        registeredPackets.get(packetName).handle(packet, simpMessagingTemplate);
    }

    public static void registerPackets() {
        try(ScanResult scanResult = new ClassGraph().enableAnnotationInfo().acceptPackages("org.awesome.websocket.packets").scan()) {
            var packetClasses = scanResult.getClassesWithAnnotation(RegisterPacket.class.getName());
            System.out.println(packetClasses);

            for(var classInfo : packetClasses) {
                Class<?> clazz = classInfo.loadClass();
                try {
                    PacketHandler packetHandler = (PacketHandler) clazz.getDeclaredConstructor().newInstance();
                    PacketInfo packetInfo = packetHandler.getClass().getAnnotation(PacketInfo.class);

                    if(packetInfo == null) {
                        System.out.println("No packet info provided cannot add packet");
                        return;
                    }

                    PacketTypes packetTypes = packetInfo.packetType();
                    String packetTypeName = packetTypes.getPacketName();

                    registeredPackets.put(packetTypeName, packetHandler);
                } catch (Exception error) {
                    System.out.println("Failed to register " + packetClasses.getClass().getSimpleName() + " as a module");
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        if(registeredPackets.isEmpty()) {
            System.out.println("Registered 0 packets");
        }
    }
}
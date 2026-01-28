package org.awesome.websocket.packets;

public enum PacketTypes {
    JOIN_ROOM("join_room"),
    LEAVE_ROOM("leave_room"),
    MOVEMENT("player_movement"),
    PLAY_ANIMATION("play_animation"),
    STOP_ANIMATION("stop_animation"),
    PLAYER_CHAT("player_chat"),
    PLAYER_CHAT_DESTROY("player_chat_destroy");

    private final String packetName;

    PacketTypes(String packetName) {
        this.packetName = packetName;
    }

    public String getPacketName() {
        return packetName;
    }
}

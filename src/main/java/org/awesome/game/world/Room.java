package org.awesome.game.world;

import org.awesome.dto.Player;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

public class Room {
    private final Set<Player> playersInRoom = new HashSet<>();
    private final String roomName;
    private final int maxPlayers;

    public Room(String roomName, int maxPlayers) {
        this.roomName = roomName;
        this.maxPlayers = maxPlayers;
    }

    public String getRoomName() {
        return roomName;
    }

    public int getMaxPlayers() {
        return maxPlayers;
    }

    public void addPlayer(Player player) {
        if(playersInRoom.contains(player)) {
            return;
        }

        playersInRoom.add(player);
    }

    public void removePlayer(Player player) {
        if(!playersInRoom.contains(player)) {
            return;
        }

        playersInRoom.remove(player);
    }

    public Player getPlayerByUsername(String username) {
        return playersInRoom.stream().filter(player -> player.getUsername().equals(username)).findFirst().get();
    }

    public Set<Player> getPlayersInRoom() {
        return playersInRoom;
    }
}
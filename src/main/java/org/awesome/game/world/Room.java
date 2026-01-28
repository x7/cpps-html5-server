package org.awesome.game.world;

import org.awesome.dto.Player;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

public class Room {
    private final Set<Player> playersInRoom = new HashSet<>();
    private final String roomName;
    private final String displayName;
    private final boolean available;
    private final int maxPlayers;
    private final int spawnX;
    private final int spawnY;

    public Room(String roomName, String displayName, boolean available, int maxPlayers, int spawnX, int spawnY) {
        this.roomName = roomName;
        this.displayName = displayName;
        this.available = available;
        this.maxPlayers = maxPlayers;
        this.spawnX = spawnX;
        this.spawnY = spawnY;
    }

    public String getRoomName() {
        return roomName;
    }

    public String getDisplayName() {
        return displayName;
    }

    public boolean isAvailable() {
        return available;
    }

    public int getMaxPlayers() {
        return maxPlayers;
    }

    public int getSpawnX() {
        return spawnX;
    }

    public int getSpawnY() {
        return spawnY;
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
        Optional<?> playerFound = playersInRoom.stream().filter(player -> player.getUsername().equals(username)).findFirst();
        if(playerFound.isEmpty()) {
            return null;
        }

        return (Player) playerFound.get();
    }

    public Set<Player> getPlayersInRoom() {
        return playersInRoom;
    }
}
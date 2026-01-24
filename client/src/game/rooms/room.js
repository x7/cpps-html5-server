import { getSceneManager } from "../../main";
import { getManager } from "../../network/network";
import { CLIENT_ADD_PLAYER, CLIENT_MOVE_TOPIC, CLIENT_TEST } from "../../network/topics";

export class Room {
    constructor(room) {
        this.room = room;
        this.scene = null;
        this.sceneManager = getSceneManager();
        this.players = [];
    }

    addPlayer(player, x, y, client) {
        if(this.players.includes(player)) {
            console.log("This player already exist in this room");
            return;
        }

        this.players.push(player);

        // this.sceneManager.add({ sceneKey: "TownScene", scene: null, autoStart: false });
        const scene = this.sceneManager.get("TownScene");
        const manager = getManager();
        setTimeout(() => {
            if(client) {
                manager.subscribe(CLIENT_MOVE_TOPIC);
                manager.subscribe(CLIENT_ADD_PLAYER);
                manager.subscribe(CLIENT_MOVE_TOPIC);
                manager.unsubscribe(CLIENT_TEST);
            }

            console.log(scene)
            player.createPenguin(scene, x, y);
            player.setX(x);
            player.setY(y);
            scene.scene.launch("InterfaceScene");
        }, 3000);
    }

    removePlayer(player) {
        if(!this.players.includes(player)) {
            console.log(`doesnt include`)
            console.log(player)
            console.log(this.players)
            return;
        }

        const playerIndex = this.players.indexOf(player);
        this.players.splice(playerIndex, 1);
        player.deletePenguin();
    }

    getPlayerByUsername(username) {
        const filter = this.players.filter(player => player.username === username);
        if(filter.length === 0) {
            return;
        }

        return filter[0];
    }

    getRoomName() {
        return this.room;
    }
}
import Phaser from 'phaser';

export class EventEmitter extends Phaser.Events.EventEmitter {
    constructor() {
        super();
    }

    addEvent(eventName, callback) {
        if(this.getEvent(eventName)) {
            console.log("EVENT " + eventName + " already exist");
            return;
        }

        console.log("ADDED EVENT " + eventName);
        super.addListener(eventName, callback);
    }

    addEventOnce(eventName, callback) {
        if(this.getEvent(eventName)) {
            console.log("EVENT " + eventName + " already exist");
            return;
        }

        console.log("ADDED ONE TIME EVENT " + eventName);
        super.once(eventName, callback);
    }

    emitEvent(eventName, ...args) {
        console.log("EMITING EVENT NAME " + eventName);
        super.emit(eventName, ...args);
    }

    getEvent(eventName) {
        const listenerNames = super.eventNames();
        if(listenerNames.length == 0) {
            return false;
        }

        return listenerNames.includes(eventName);
    }

    deleteEvent(eventName) {
        if(!this.getEvent(eventName)) {
            console.log("EVENT " + eventName + " doesnt exist");
            return;
        }

        super.off(eventName);
    }
    
    destroy() {
        super.destroy();
    }
}

export default new EventEmitter;
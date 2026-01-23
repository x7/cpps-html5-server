import { getCurrentDay, getCurrentHour, getCurrentMinute, getCurrentTime } from "../../../../../util/timeHelper";

const timezone = "America/Los_Angeles";

export function getClockTowerTime() {
    let currentMin = getCurrentMinute(timezone);
    const currentHour = getCurrentHour(timezone);

    if(currentMin < 10) {
        currentMin = `0${currentMin}`
    }

    return `${currentHour % 12}:${currentMin}`;
}

export function getClockTowerDay() {
    const currentDay = getCurrentDay(timezone);
    return currentDay;
}
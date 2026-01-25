export function getCurrentDay(timezone) {
    const day = new Date(new Date().toLocaleString("en-US", { timeZone: timezone })).getDay().toString();

    switch(day) {
        case "0": {
            return "Sunday";
        }

        case "1": {
            return "Monday";
        }

        case "2": {
            return "Tuesday";
        }

        case "3": {
            return "Wednesday";
        }

        case "4": {
            return "Thursday";
        }

        case "5": {
            return "Friday";
        }

        case "6": {
            return "Saturday";
        }
    }
}

export function getCurrentMonth(timezone) {
    const month = new Date(new Date().toLocaleString("en-US", { timeZone: timezone })).getMonth();
    return month;
}

export function getCurrentYear(timezone) {
    const year = new Date(new Date().toLocaleString("en-US", { timeZone: timezone })).getFullYear();
    return year;
}

export function getCurrentMinute(timezone) {
    const minute = new Date(new Date().toLocaleString("en-US", { timeZone: timezone })).getMinutes();
    return minute;
}

export function getCurrentHour(timezone) {
    const hour = new Date(new Date().toLocaleString("en-US", { timeZone: timezone })).getHours();
    return hour;
}

export function getCurrentTime(timezone) {
    const time = new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));
    return time.getTime();
}
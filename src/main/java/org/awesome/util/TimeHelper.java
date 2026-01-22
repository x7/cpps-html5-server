package org.awesome.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class TimeHelper {
    public static Date getDate(long time) {
        long dayInMs = 86_400_400;


        return null;
    }

    // Returns 2026-01-07 [Optional: 16:19:20]
    public static String getShortDate(boolean includeTime) {
        String pattern = "yyyy-MM-dd";
        if(includeTime) {
            pattern = pattern + " HH:MM:ss";
        }

        DateTimeFormatter format = DateTimeFormatter.ofPattern(pattern);
        return LocalDateTime.now().format(format);
    }
}

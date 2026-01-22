package org.awesome.util;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class Util {
    public static String convertToBase64(String message) {
        return Base64.getEncoder().encodeToString(message.getBytes());
    }

    public static String decodeFromBase64(String message) {
        byte[] decodedBase64 = Base64.getDecoder().decode(message);
        return new String(decodedBase64, StandardCharsets.UTF_8);
    }
}

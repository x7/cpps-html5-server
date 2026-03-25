package org.awesome.game.world;

import com.fasterxml.jackson.databind.JsonNode;
import org.awesome.util.JsonUtil;

import java.nio.file.Path;

public class EmojiManager {
    private static final Path emojiConfig = Path.of("").toAbsolutePath().resolve("src", "main", "java", "org", "awesome", "game", "data", "emojis.json");
    private static JsonNode emojiCache = null;

    public static JsonNode getEmoji(String emojiName) {
        if(emojiCache == null) {
            emojiCache = JsonUtil.readJsonFile(emojiConfig);
        }

        return emojiCache.get(emojiName);
    }
}

package org.awesome.util;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.awesome.util.file.FileHelper;
import tools.jackson.databind.jsonFormatVisitors.JsonObjectFormatVisitor;

import java.io.File;
import java.nio.file.Path;
import java.util.List;

public class JsonUtil {
    public static final ObjectMapper objectMapper = new ObjectMapper();

    public static JsonNode createJsonNode() {
        return objectMapper.createObjectNode();
    }

    public static JsonNode valueAsNode(Object object) {
        return objectMapper.valueToTree(object);
    }

    public static JsonNode readJsonFile(Path path) {
        if(!FileHelper.doesFileExist(path)) {
            return null;
        }

        List<String> lines = FileHelper.readFile(path);
        if(lines == null || lines.isEmpty()) {
            return null;
        }

        StringBuilder combinedJson = new StringBuilder();
        for(String line : lines) {
            combinedJson.append(line);
        }

        return readJsonString(combinedJson.toString());
    }

    public static JsonNode readJsonString(String json) {
        try {
            return objectMapper.readTree(json);
        } catch (Exception error) {
            System.out.println("Failed to read json string tree");
            return null;
        }
    }

    public static String writeJsonAsString(JsonNode jsonNode, boolean prettyPrinter) {
        try {
            if(!prettyPrinter) {
                return objectMapper.writeValueAsString(jsonNode);
            }

            return objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(jsonNode);
        } catch (Exception error) {
            System.out.println("Failed to write json too a string");
            return null;
        }
    }
}
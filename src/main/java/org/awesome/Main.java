package org.awesome;

import org.awesome.preflight.ConfigCheck;
import org.awesome.preflight.DatabaseCheck;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.nio.file.Path;

/*
    room manager is setup
    disconnect websockets (server sided) is setup
    verification packet before routing to smthing else is setup
*/

// aaaaaaaaaaaaaaaa this is rushed clean it up tomorrow
@SpringBootApplication
public class Main {
    public static Path root = Path.of("").toAbsolutePath().resolve("src").resolve("main").resolve("java").resolve("org").resolve("awesome");
    public static String environment = "development";

    public static void main(String[] args) {
        // first check config
        ConfigCheck.checkConfig();

        // second check database
        DatabaseCheck.checkDatabase();

        // third load all game data

        // start application
        startSpringApplication(args);
    }

    public static void startSpringApplication(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
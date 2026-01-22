package org.awesome.database.operations;

import org.awesome.database.Database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.Map;

public class SessionOperations {
    public static boolean addSession(String username, int userId, String refreshToken) {
        String sql = """
            INSERT INTO sessions (user_id, username, refresh_token)
            VALUES (?, ?, ?);
        """;

        Connection connection = Database.getDatabase();
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, userId);
            statement.setString(2, username);
            statement.setString(3, refreshToken);
            statement.executeUpdate();
            System.out.println("Successfully added a new session");

            return true;
        } catch (Exception error) {
            System.out.println(error);
            System.out.println("Error adding a value to penguins table");

            return false;
        }
    }

    public static Map<String, Object> getSession(String refreshToken) {
        String sql = """
            SELECT user_id, username, refresh_token
            FROM sessions
            WHERE refresh_token = ?;
        """;

        Connection connection = Database.getDatabase();
        try(PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, refreshToken);

            try(ResultSet resultSet = preparedStatement.executeQuery()) {
                if(resultSet == null || !resultSet.next()) {
                    System.out.println("No session found with refresh token " + refreshToken);
                    return null;
                }

                int userId = resultSet.getInt(1);
                String username = resultSet.getString(2);

                Map<String, Object> result = new HashMap<>();
                result.put("user_id", userId);
                result.put("username", username);
                result.put("refresh_token", refreshToken);

                return result;
            }
        } catch (Exception error) {
            System.out.println(error);
            System.out.println("Error pulling session data for refresh token " + refreshToken);
            return null;
        }
    }

    public static boolean deleteSession(String refreshToken) {
        String sql = "DELETE FROM sessions WHERE refresh_token = ?";

        Connection connection = Database.getDatabase();
        try(PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, refreshToken);
            int rowsAffected = preparedStatement.executeUpdate();

            if(rowsAffected < 1) {
                System.out.println("No session was deleted as it wasnt found");
                return false;
            }

            System.out.println("Session was deleted");
            return true;
        } catch (Exception error) {
            System.out.println(error);
            System.out.println("Error deleting session with refresh token " + refreshToken);
            return false;
        }
    }
}
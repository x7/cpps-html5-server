package org.awesome.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.awesome.database.operations.SessionOperations;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class JwtUtil {
    private static final String JWT_SECRET = "oTRUEP7c+oT/lgieLVWaj2xIdbpYw8h/AIE9xiASp/I=";

    public static Map<String, String> createJwt(String username, int id) {
        SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(JWT_SECRET));
        Date issuedAt = new Date();

        Date accessExpiration = new Date(System.currentTimeMillis() + 15L * 60L * 1000L);
        String accessToken = Jwts.builder()
                .issuer("me")
                .subject(String.valueOf(id))
                .audience().add("websocket-server").and()
                .notBefore(issuedAt)
                .expiration(accessExpiration)
                .issuedAt(issuedAt)
                .claim("username", username)
                .claim("user_id", id)
                .claim("type", "access")
                .id(UUID.randomUUID().toString())
                .signWith(key)
                .compact();

        Date refreshExpiration = new Date(System.currentTimeMillis() + 7L * 24L * 60L * 60L * 1000L);
        String refreshToken = Jwts.builder()
                .issuer("me")
                .subject(String.valueOf(id))
                .audience().add("websocket-server").and()
                .notBefore(issuedAt)
                .issuedAt(issuedAt)
                .expiration(refreshExpiration)
                .claim("type", "refresh")
                .id(UUID.randomUUID().toString())
                .signWith(key)
                .compact();

        boolean addSession = SessionOperations.addSession(username, id, refreshToken);
        if(!addSession) {
            // We will still pass the user the token so they can enjoy 15 minutes of waddling around club penguin before being forced offline
            System.out.println("Failed to add session to database this is bad.");
        }

        Map<String, String> tokens = new HashMap<>();
        tokens.put("accessToken", accessToken);
        tokens.put("refreshToken", refreshToken);
        tokens.put("expire_date", accessExpiration.toString());

        return tokens;
    }

    public static String refreshAccessToken(String refreshToken) {
        SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(JWT_SECRET));

        Claims claims = Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(refreshToken)
                .getPayload();

        if (!"refresh".equals(claims.get("type", String.class))) {
            throw new SecurityException("Invalid token type");
        }

        int userId = Integer.parseInt(claims.getSubject().toString());
        String username = claims.get("username", String.class);
        Date now = new Date();
        Date accessExpiration = new Date(System.currentTimeMillis() + 15L * 60L * 1000L);

        Map<String, Object> sessionData = SessionOperations.getSession(refreshToken);
        String sessionUsername = sessionData.get("username").toString();
        int sessionUserId = Integer.parseInt(sessionData.get("user_id").toString());

        if(!sessionUsername.equals(username)) {
            System.out.println("Usernames do not match cannot refresh token");
            return null;
        }

        if(sessionUserId != userId) {
            System.out.println("User ids do not match cannot refresh token");
            return null;
        }

        return Jwts.builder()
                .issuer("me")
                .subject(Integer.toString(userId))
                .audience().add("websocket-server").and()
                .expiration(accessExpiration)
                .issuedAt(now)
                .claim("username", username)
                .claim("user_id", Integer.toString(userId))
                .claim("type", "access")
                .id(UUID.randomUUID().toString())
                .signWith(key)
                .compact();
    }

    public static Claims parseJwt(String token) {
        SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(JWT_SECRET));

        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public static boolean isTokenValid(String token) {
        try {
            parseJwt(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
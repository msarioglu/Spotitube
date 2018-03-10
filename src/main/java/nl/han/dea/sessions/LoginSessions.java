package nl.han.dea.sessions;

import nl.han.dea.domain.User;

import java.util.HashMap;

/**
 * LoginSessions class
 *
 * @author Muhammet Sarioglu
 */
public class LoginSessions {

    private LoginSessions() {
    }

    public static HashMap<String, User> map = new HashMap<>();

    public static void addSession(String token, User user)
    {
        map.putIfAbsent(token, user);
    }

    public static User getUser(String token)
    {
        return map.get(token);
    }
}

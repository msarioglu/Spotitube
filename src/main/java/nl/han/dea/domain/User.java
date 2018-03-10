package nl.han.dea.domain;

/**
 * User class
 *
 * @author Muhammet Sarioglu
 */
public class User {
    private String user;
    private String password;

    private User()
    {

    }

    public User(String user)
    {
        this.user = user;
    }

    public String getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }

}

package nl.han.dea.datasource;

import nl.han.dea.datasource.util.DBConnection;
import nl.han.dea.domain.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import java.sql.*;

/**
 * UserDAO interface
 *
 * @author Muhammet Sarioglu
 */
public class UserDAO implements IUserDAO {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserDAO.class);

    @Inject
    private DBConnection dbConnection;

    @Override
    public boolean validate(User user) {
        boolean status = false;
        Connection connection = dbConnection.getConnection();
        PreparedStatement pst = null;
        ResultSet rs = null;

        try {
            pst = connection.prepareStatement("SELECT username, password FROM User WHERE username=? AND password=?");
            pst.setString(1, user.getUser());
            pst.setString(2, user.getPassword());

            rs = pst.executeQuery();
            status = rs.next();
        } catch (Exception e) {
            LOGGER.error("Exception", e.getMessage());
        } finally {
            if (pst != null) {
                try {
                    pst.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getStackTrace());
                }
            }
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getStackTrace());
                }
            }
        }
        return status;
    }
}

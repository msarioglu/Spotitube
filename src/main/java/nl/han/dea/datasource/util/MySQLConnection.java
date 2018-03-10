package nl.han.dea.datasource.util;

import nl.han.dea.datasource.PlaylistDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.enterprise.inject.Default;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * MySQLConnection
 *
 * @author Muhammet Sarioglu
 */
@Default
public class MySQLConnection implements DBConnection {

    private static Connection connection;
    private static final Logger LOGGER = LoggerFactory.getLogger(MySQLConnection.class);

    /**
     * Starts a MySQLConnection
     *
     * @return Connection
     */
    @Override
    public Connection getConnection() {
        DatabaseProperties dbProperties = new DatabaseProperties();
        try {
            Class.forName("com.mysql.jdbc.Driver");
            try {
                String connectionString = "jdbc:mysql://" + dbProperties.host() + ":" + dbProperties.port() + "/" + dbProperties.database();
                connection = DriverManager.getConnection(connectionString, dbProperties.user(), dbProperties.password());
            } catch (SQLException ex) {
                LOGGER.error("SQLException",ex.getMessage());
            }
        } catch (ClassNotFoundException e) {
            LOGGER.error("ClassNotFoundException", e.getMessage());
        }
        return connection;
    }
}

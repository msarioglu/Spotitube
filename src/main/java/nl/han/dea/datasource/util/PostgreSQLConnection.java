package nl.han.dea.datasource.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.enterprise.inject.Alternative;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * PostgreSQLConnection
 *
 * @author Muhammet Sarioglu
 */
@Alternative
public class PostgreSQLConnection implements DBConnection {

    private static Connection connection;
    private static final Logger LOGGER = LoggerFactory.getLogger(PostgreSQLConnection.class);

    /**
     * Starts a PostgreSQL connection
     *
     * @return Connection
     */
    @Override
    public Connection getConnection() {
        DatabaseProperties dbProperties = new DatabaseProperties();
        try {
            Class.forName("org.postgresql.Driver");
            try {
                String connectionString = "jdbc:postgresql://" + dbProperties.host() + ":" + dbProperties.port() + "/" + dbProperties.database();
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

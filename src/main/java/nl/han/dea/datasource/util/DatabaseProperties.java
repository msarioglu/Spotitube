package nl.han.dea.datasource.util;

import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Properties;

/**
 * DatabaseProperties
 *
 * @author Muhammet Sarioglu
 */
public class DatabaseProperties {
    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(DatabaseProperties.class);
    private Properties properties;

    public DatabaseProperties() {
        properties = new Properties();
        try {
            properties.load(getClass().getClassLoader().getResourceAsStream("database.properties"));
        } catch (IOException e) {
            LOGGER.error("Can't access property file database.properties", e.getMessage());
        }
    }

    public String host()
    {
        return properties.getProperty("dbHost");
    }

    public String port()
    {
        return properties.getProperty("dbPort");
    }

    public String database()
    {
        return properties.getProperty("dbName");
    }

    public String user()
    {
        return properties.getProperty("dbUser");
    }

    public String password()
    {
        return properties.getProperty("dbPassword");
    }

}
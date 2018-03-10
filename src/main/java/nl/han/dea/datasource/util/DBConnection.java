package nl.han.dea.datasource.util;

import java.sql.Connection;

/**
 * DBConnection interface
 *
 * @author Muhammet Sarioglu
 */
public interface DBConnection {
    Connection getConnection();
}

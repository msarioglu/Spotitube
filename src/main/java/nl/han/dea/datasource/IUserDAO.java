package nl.han.dea.datasource;

import nl.han.dea.domain.User;

/**
 * IUserDAO interface
 *
 * @author Muhammet Sarioglu
 */

public interface IUserDAO {
    boolean validate(User user);
}

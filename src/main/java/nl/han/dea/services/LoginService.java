package nl.han.dea.services;

import nl.han.dea.datasource.UserDAO;
import nl.han.dea.domain.User;
import nl.han.dea.sessions.LoginSessions;

import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * LoginService class
 *
 * @author Muhammet Sarioglu
 */
@Path("/login")
public class LoginService {

    @Inject
    private UserDAO userDAO;


    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(User user, @Context HttpServletRequest request) {
        if (userDAO.validate(user))
        {
            String sessionToken = request.getSession().getId();
            LoginSessions.addSession(sessionToken, user);
            JsonObject userToken = Json.createObjectBuilder()
                    .add("user", user.getUser())
                    .add("token", sessionToken).build();
            return Response.status(200).entity(userToken).build();
        }
        else
        {
            return Response.status(401).build();
        }
    }
}

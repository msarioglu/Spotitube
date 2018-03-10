package nl.han.dea.services;

import nl.han.dea.datasource.ITrackDAO;
import nl.han.dea.sessions.LoginSessions;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * TrackService class
 *
 * @author Muhammet Sarioglu
 */
@Path("/tracks")
public class TrackService implements ITrackService{

    @Inject
    private ITrackDAO trackDAO;

    /**
     * GET
     * URL("./tracks?forPlaylist=[playlistId]&token=[token]")
     * Produces "APPLICATION_JSON"
     * @param playlistId
     * @param token
     * @return Playlists as Json
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Response getAllTracks(@QueryParam("forPlaylist") int playlistId, @QueryParam("token") String token) {
        if (token.isEmpty())
            return Response.status(400).build();
        if (!LoginSessions.map.containsKey(token))
            return Response.status(403).build();
        String user = LoginSessions.getUser(token).getUser();
        return Response.status(200).entity(trackDAO.getAllTracks(playlistId, user)).build();
    }
}

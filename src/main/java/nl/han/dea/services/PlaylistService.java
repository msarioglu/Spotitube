package nl.han.dea.services;

import nl.han.dea.datasource.IPlaylistDAO;
import nl.han.dea.domain.Playlist;
import nl.han.dea.domain.Track;
import nl.han.dea.sessions.LoginSessions;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * PlaylistService class
 *
 * @author Muhammet Sarioglu
 */
@Path("/playlists")
public class PlaylistService implements IPlaylistService {

    @Inject
    private IPlaylistDAO playlistDAO;

    /**
     * GET
     * URL("./playlists?token=[token]")
     * Produces "APPLICATION_JSON"
     * @param token
     * @return Playlists as Json
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Response getAllPlaylists(@QueryParam("token") String token)
    {
        if (token.isEmpty())
            return Response.status(400).build();
        if (!LoginSessions.map.containsKey(token))
            return Response.status(403).build();
        String user = LoginSessions.getUser(token).getUser();
        return Response.status(200).entity(playlistDAO.getAllPlaylists(user)).build();
    }

    /**
     * DELETE
     * URL("./playlists/[playlistId]?token=[token]")
     * Consumes "APPLICATION_JSON"
     * Produces "APPLICATION_JSON"
     * @param playlistId
     * @param token
     * @return Playlists as Json
     */
    @DELETE
    @Path("/{playlistId}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Response deletePlaylist(@PathParam("playlistId") int playlistId, @QueryParam("token") String token) {
        String user = LoginSessions.getUser(token).getUser();
        playlistDAO.deletePlaylist(playlistId, user);
        return getAllPlaylists(token);
    }

    /**
     * POST
     * URL("./playlists?token=[token]")
     * Consumes "APPLICATION_JSON"
     * Produces "APPLICATION_JSON"
     * @param playlist
     * @param token
     * @return Playlists as Json
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Response addPlaylist(Playlist playlist, @QueryParam("token") String token){
        if (token.isEmpty())
            return Response.status(400).build();
        if (!LoginSessions.map.containsKey(token))
            return Response.status(403).build();
        String user = LoginSessions.getUser(token).getUser();
        playlistDAO.addPlaylist(playlist, user);
        return getAllPlaylists(token);
    }

    /**
     * PUT
     * URL("./playlists/[playlistId]?token=[token]")
     * Consumes "APPLICATION_JSON"
     * Produces "APPLICATION_JSON"
     * @param playlistId
     * @param playlist
     * @param token
     * @return Playlists as Json
     */
    @PUT
    @Path("/{playlistId}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Response editPlaylist(@PathParam("playlistId") int playlistId, Playlist playlist, @QueryParam("token") String token){
        if (token.isEmpty())
            return Response.status(400).build();
        if (!LoginSessions.map.containsKey(token))
            return Response.status(403).build();
        String user = LoginSessions.getUser(token).getUser();
        playlistDAO.editPlaylist(playlistId, playlist, user);
        return getAllPlaylists(token);
    }

    /**
     * GET
     * URL("./playlists/[playlistId]/tracks?token=[token]")
     * Produces "APPLICATION_JSON"
     * @param playlistId
     * @param token
     * @return
     */
    @GET
    @Path("/{playlistId}/tracks")
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Response getPlaylistTracks(@PathParam("playlistId") int playlistId, @QueryParam("token") String token) {
        if (token.isEmpty())
            return Response.status(400).build();
        if (!LoginSessions.map.containsKey(token))
            return Response.status(403).build();
        String user = LoginSessions.getUser(token).getUser();
        return Response.status(200).entity(playlistDAO.getPlaylistTrack(playlistId, user)).build();
    }

    /**
     * DELETE
     * URL("./playlists/[playlistId]/tracks/[trackId]?token=[token]")
     * Consumes "APPLICATION_JSON"
     * Produces "APPLICATION_JSON"
     * @param playlistId
     * @param trackId
     * @param token
     * @return
     */

    @DELETE
    @Path("/{playlistId}/tracks/{trackId}")
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Response deletePlaylistTrack(@PathParam("playlistId") int playlistId, @PathParam("trackId") int trackId, @QueryParam("token") String token) {
        if (token.isEmpty())
            return Response.status(400).build();
        if (!LoginSessions.map.containsKey(token))
            return Response.status(403).build();
        String user = LoginSessions.getUser(token).getUser();
        playlistDAO.deletePlaylistTrack(playlistId, trackId, user);
        return getPlaylistTracks(playlistId, token);
    }

    /**
     * POST
     * URL("./playlists/[playlistId]/tracks?token=[token]")
     * Consumes "APPLICATION_JSON"
     * Produces "APPLICATION_JSON"
     * @param playlistId
     * @param track
     * @param token
     * @return
     */

    @POST
    @Path("/{playlistId}/tracks")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Override
    public Response addPlaylistTrack(@PathParam("playlistId") int playlistId, Track track, @QueryParam("token") String token) {
        if (token.isEmpty())
            return Response.status(400).build();
        if (!LoginSessions.map.containsKey(token))
            return Response.status(403).build();
        String user = LoginSessions.getUser(token).getUser();
        playlistDAO.addPlaylistTrack(playlistId, track, user);
        return getPlaylistTracks(playlistId, token);
    }
}

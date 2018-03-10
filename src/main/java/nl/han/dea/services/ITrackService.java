package nl.han.dea.services;

import javax.ws.rs.core.Response;

/**
 * ITrackService interface
 *
 * @author Muhammet Sarioglu
 */
public interface ITrackService {
    Response getAllTracks(int playlistId, String token);
}

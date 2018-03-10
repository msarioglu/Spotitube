package nl.han.dea.services;

import nl.han.dea.domain.Playlist;
import nl.han.dea.domain.Track;

import javax.ws.rs.core.Response;

/**
 * IPlaylistService interface
 *
 * @author Muhammet Sarioglu
 */
public interface IPlaylistService {
    Response getAllPlaylists(String token);
    Response addPlaylist(Playlist playlist, String token);
    Response editPlaylist(int playlistId, Playlist playlist, String token);
    Response deletePlaylist(int playlistId, String token);
    Response getPlaylistTracks(int playlistId, String token);
    Response deletePlaylistTrack(int playlistId, int trackId, String token);
    Response addPlaylistTrack(int playlistId, Track track, String token);
}

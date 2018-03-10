package nl.han.dea.datasource;

import nl.han.dea.domain.Playlist;
import nl.han.dea.domain.Playlists;
import nl.han.dea.domain.Track;
import nl.han.dea.domain.Tracks;

import java.util.List;

/**
 * IPlaylistDAO interface
 *
 * @author Muhammet Sarioglu
 */
public interface IPlaylistDAO {
    Playlists getAllPlaylists(String user);
    void addPlaylist(Playlist playlist, String user);
    void editPlaylist(int playlistId, Playlist playlist, String user);
    void deletePlaylist(int id, String user);
    Tracks getPlaylistTrack(int playlistId, String user);
    void deletePlaylistTrack(int playlistId, int trackId, String user);
    void addPlaylistTrack(int playlistId, Track track, String user);
}

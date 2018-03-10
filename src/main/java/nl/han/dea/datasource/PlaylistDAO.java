package nl.han.dea.datasource;

import nl.han.dea.datasource.util.DBConnection;
import nl.han.dea.domain.Playlist;
import nl.han.dea.domain.Playlists;
import nl.han.dea.domain.Track;
import nl.han.dea.domain.Tracks;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.enterprise.inject.Default;
import javax.inject.Inject;
import java.sql.*;

/**
 * PlaylistDAO class
 *
 * @author Muhammet Sarioglu
 */
@Default
public class PlaylistDAO implements IPlaylistDAO{

    private static final Logger LOGGER = LoggerFactory.getLogger(PlaylistDAO.class);

    @Inject
    private DBConnection dbConnection;

    @Override
    public Playlists getAllPlaylists(String user) {
        Connection connection = dbConnection.getConnection();
        PreparedStatement pst = null;
        ResultSet rs = null;
        Playlists playlists = new Playlists();

        try {
            pst  = connection.prepareStatement("SELECT p.id, p.name, p.owner, SUM(t.duration) AS length FROM Playlist p " +
                    "LEFT JOIN PlaylistTrack pt ON p.id = pt.playlist_id " +
                    "LEFT JOIN Track t ON t.id = pt.track_id " +
                    "GROUP BY p.id, p.name, p.owner");
            rs = pst.executeQuery();

            while (rs.next()) {
                playlists.getPlaylists().add(
                        new Playlist(
                                rs.getInt("p.id"),
                                rs.getString("p.name"),
                                rs.getString("p.owner").equalsIgnoreCase(user) ? true : false)
                );
                playlists.incrementLength(rs.getLong("length"));
            }
        } catch (Exception e) {
            LOGGER.error("Exception", e.getMessage());
        } finally {
            if (pst != null) {
                try {
                    pst.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getStackTrace());
                }
            }
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getStackTrace());
                }
            }
        }
        return playlists;
    }

    @Override
    public void addPlaylist(Playlist playlist, String user) {
        Connection connection = dbConnection.getConnection();
        PreparedStatement pst = null;
        try{
            pst = connection.prepareStatement("INSERT INTO Playlist(name, owner) VALUES(?,?)");
            pst.setString(1, playlist.getName());
            pst.setString(2, user);
            pst.executeUpdate();
        } catch (Exception e){
            LOGGER.error("Exception", e.getMessage());
        } finally {
            if (pst != null) {
                try {
                    pst.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getStackTrace());
                }
            }
        }
    }
    @Override
    public void editPlaylist(int playlistId, Playlist playlist, String user){
        Connection connection = dbConnection.getConnection();
        PreparedStatement pst = null;
        try{
            pst = connection.prepareStatement("UPDATE Playlist SET name = ? WHERE id = ? AND owner = ?");
            pst.setString(1, playlist.getName());
            pst.setInt(2, playlistId);
            pst.setString(3, user);
            pst.executeUpdate();
        } catch (Exception e){
            LOGGER.error("Exception", e.getMessage());
        } finally {
            if (pst != null) {
                try {
                    pst.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getStackTrace());
                }
            }
        }
    }

    @Override
    public void deletePlaylist(int id, String user) {
        Connection connection = dbConnection.getConnection();
        PreparedStatement pst = null;
        try{
            pst = connection.prepareStatement("DELETE FROM Playlist WHERE id = ? AND owner = ?");
            pst.setInt(1, id);
            pst.setString(2, user);
            pst.executeUpdate();
        } catch (Exception e){
            LOGGER.error("Exception", e.getMessage());
        } finally {
            if (pst != null) {
                try {
                    pst.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getStackTrace());
                }
            }
        }
    }

    @Override
    public Tracks getPlaylistTrack(int playlistId, String user) {
        Connection connection = dbConnection.getConnection();
        PreparedStatement pst = null;
        ResultSet rs = null;
        Tracks playlistTracks = new Tracks();
        try {
            pst = connection.prepareStatement("SELECT * FROM Track t " +
                    "INNER JOIN PlaylistTrack pt ON t.id = pt.track_id " +
                    "AND pt.playlist_id = ?");
            pst.setInt(1, playlistId);
            rs = pst.executeQuery();

            while (rs.next())
            {
                Track track = new Track();
                track.setId(rs.getInt("id"));
                track.setTitle(rs.getString("title"));
                track.setPerformer(rs.getString("performer"));
                track.setDuration(rs.getLong("duration"));
                track.setAlbum(rs.getString("album"));
                track.setPlaycount(rs.getInt("play_count"));
                track.setPublicationDate(rs.getDate("publication_date"));
                track.setDescription(rs.getString("description"));
                track.setOfflineAvailable(rs.getBoolean("offline_available"));
                playlistTracks.getTracks().add(track);
            }
        } catch (Exception e) {
            LOGGER.error("Exception", e.getMessage());
        } finally {
            if (pst != null) {
                try {
                    pst.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getStackTrace());
                }
            }
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getStackTrace());
                }
            }
        }
        return playlistTracks;
    }

    @Override
    public void deletePlaylistTrack(int playlistId, int trackId, String user) {
        Connection connection = dbConnection.getConnection();
        PreparedStatement pst = null;
        try{
            pst = connection.prepareStatement("DELETE pt FROM PlaylistTrack pt " +
                    "INNER JOIN Playlist p ON p.id = pt.playlist_id " +
                    "WHERE pt.playlist_id = ? AND pt.track_id = ? AND p.owner = ?");
            pst.setInt(1, playlistId);
            pst.setInt(2, trackId);
            pst.setString(3, user);
            pst.executeUpdate();
        } catch (Exception e){
            LOGGER.error("Exception", e.getMessage());
        } finally {
            if (pst != null) {
                try {
                    pst.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getStackTrace());
                }
            }
        }
    }

    @Override
    public void addPlaylistTrack(int playlistId, Track track, String user) {
        Connection connection = dbConnection.getConnection();
        PreparedStatement pst = null;
        try{
            pst = connection.prepareStatement("INSERT INTO PlaylistTrack(playlist_id, track_id, offline_available) VALUES(?,?,?)");
            pst.setInt(1, playlistId);
            pst.setInt(2, track.getId());
            pst.setBoolean(3, track.isOfflineAvailable());
            pst.executeUpdate();
        } catch (Exception e){
            LOGGER.error("Exception", e.getMessage());
        } finally {
            if (pst != null) {
                try {
                    pst.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getStackTrace());
                }
            }
        }
    }

}

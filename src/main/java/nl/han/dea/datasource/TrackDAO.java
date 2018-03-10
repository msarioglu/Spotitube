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
 * TrackDAO interface
 *
 * @author Muhammet Sarioglu
 */
@Default
public class TrackDAO implements ITrackDAO {

    private static final Logger LOGGER = LoggerFactory.getLogger(TrackDAO.class);

    @Inject
    private DBConnection dbConnection;

    @Override
    public Tracks getAllTracks(int playlistId, String user) {
        Connection connection = dbConnection.getConnection();
        PreparedStatement pst = null;
        ResultSet rs = null;
        Tracks tracks = new Tracks();
        try {
            pst = connection.prepareStatement("SELECT id, title, performer, duration, album, play_count, publication_date, description " +
                            "FROM Track WHERE id NOT IN (SELECT track_id FROM PlaylistTrack WHERE playlist_id = ?)");
            pst.setInt(1, playlistId);
            rs = pst.executeQuery();

            while (rs.next()) {
                Track track = new Track();
                track.setId(rs.getInt("id"));
                track.setTitle(rs.getString("title"));
                track.setPerformer(rs.getString("performer"));
                track.setDuration(rs.getLong("duration"));
                track.setAlbum(rs.getString("album"));
                track.setPlaycount(rs.getInt("play_count"));
                track.setPublicationDate(rs.getDate("publication_date"));
                track.setDescription(rs.getString("description"));
                tracks.getTracks().add(track);
            }
        } catch (Exception e) {
            LOGGER.error("Exception", e.getMessage());
        } finally {
            if (pst != null) {
                try {
                    pst.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getMessage());
                }
            }
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                    LOGGER.trace("SQLException", e.getMessage());
                }
            }
        }
        return tracks;
    }

}

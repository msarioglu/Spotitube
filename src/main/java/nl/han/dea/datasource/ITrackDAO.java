package nl.han.dea.datasource;

import nl.han.dea.domain.Tracks;

import java.util.List;

/**
 * ITrackDAO interface
 *
 * @author Muhammet Sarioglu
 */
public interface ITrackDAO {
    Tracks getAllTracks(int playlistId, String user);
}

package nl.han.dea.domain;

import java.util.ArrayList;
import java.util.List;

/**
 * Tracks class
 *
 * @author Muhammet Sarioglu
 */
public class Tracks {
    private List<Track> tracks;

    public Tracks() {
        this.tracks = new ArrayList();
    }

    public List<Track> getTracks() {
        return tracks;
    }

    public void setTracks(List<Track> tracks) {
        this.tracks = tracks;
    }
}

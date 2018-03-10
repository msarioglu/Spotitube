package nl.han.dea.domain;

import java.util.ArrayList;
import java.util.List;

/**
 * Playlist class
 *
 * @author Muhammet Sarioglu
 */

public class Playlists {
    private List<Playlist>playlists;
    private long length;

    public Playlists() {
        playlists = new ArrayList<Playlist>();
        length = 0;
    }

    public List<Playlist> getPlaylists() {
        return playlists;
    }

    public long getLength() {
        return length;
    }

    public void setPlaylists(List<Playlist> playlists) {
        this.playlists = playlists;
    }

    public void setLength(long length) {
        this.length = length;
    }

    public void incrementLength(long length) { this.length += length; }
}

package nl.han.dea.domain;

/**
 * Playlists class
 *
 * @author Muhammet Sarioglu
 */
public class Playlist {
    private int id;
    private String name;
    private boolean owner;
    private Tracks tracks = new Tracks();

    public Playlist(){}

    public Playlist(String name, boolean owner){
        this.name = name;
        this.owner = owner;
    }

    public Playlist(int id, String name, boolean owner){
        this.id = id;
        this.name = name;
        this.owner = owner;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setOwner(boolean owner) {
        this.owner = owner;
    }

    public void setTracks(Tracks tracks) {
        this.tracks = tracks;
    }

    public int getId() {return this.id;}

    public String getName() {
        return name;
    }

    public boolean getOwner() {
        return owner;
    }

    public Tracks getTracks() {
        return tracks;
    }



}

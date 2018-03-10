package nl.han.dea.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.sql.Date;

/**
 * Track class
 *
 * @author Muhammet Sarioglu
 */
@JsonInclude(JsonInclude.Include.ALWAYS)
public class Track implements Song, Video {

    private int id;
    private String title;
    private String performer;
    private long duration;
    private String album;
    private int playcount;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy")
    private Date publicationDate;
    private String description;
    private boolean offlineAvailable;

    public Track(){}

    public void setId(int id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPerformer(String performer) {
        this.performer = performer;
    }

    public void setDuration(long duration) {
        this.duration = duration;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public void setPlaycount(int playcount) {
        this.playcount = playcount;
    }

    public void setPublicationDate(Date publicationDate) {
        this.publicationDate = publicationDate;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setOfflineAvailable(boolean offlineAvailable) {
        this.offlineAvailable = offlineAvailable;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getPerformer() {
        return performer;
    }

    public long getDuration() {
        return duration;
    }

    public String getAlbum() {
        return album;
    }

    public int getPlaycount() {
        return playcount;
    }

    public Date getPublicationDate() {
        return publicationDate;
    }

    public String getDescription() {
        return description;
    }

    public boolean isOfflineAvailable() {
        return offlineAvailable;
    }

    public String toString(){
        return "id:" + this.id +
                "\ntitle:" + this.title +
                "\nperformer:" + this.performer +
                "\nduration:" + this.duration +
                "\nalbum:" + this.album +
                "\nplayCount:" + this.playcount +
                "\npublicationDate:" + this.publicationDate +
                "\ndescription:" + this.description +
                "\nofflineAvailable:" + this.offlineAvailable;
    }

}

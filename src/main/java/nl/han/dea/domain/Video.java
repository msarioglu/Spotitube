package nl.han.dea.domain;

import java.sql.Date;
/**
 * Video interface
 *
 * @author Muhammet Sarioglu
 */
public interface Video {
    int getPlaycount();
    Date getPublicationDate();
    String getDescription();

    void setPlaycount(int playCount);
    void setPublicationDate(Date publicationDate);
    void setDescription(String description);
}

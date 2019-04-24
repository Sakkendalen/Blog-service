package fi.tuni.cezaro;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

/**
 * Entity class that is used to define and save post comment data in database.
 *
 * @author      Saku Tynjala saku.tynjala@tuni.fi
 * @author 		Mikko Mustasaari mikko.mustasaari@tuni.fi
 * @version     0.3
 * @since       0.3
 */
@Entity
@Table(name = "Comment")
public class Comment {

    @Id
    @GeneratedValue
    private long id;
    private String pseudonym;
    private String content;
    private long postId;
    private LocalDateTime datetime;
    private long likes;

    /**
     * Basic empty constructor
     */
    public Comment() {

    }

    /**
     * Constructor with all class attributes.
     *
     * @param pseudonym name of who created comment.
     * @param content content of comment.
     * @param postId post ID in what post was commented.
     * @param datetime date and time when comment was posted.
     */
    public Comment(String pseudonym, String content, long postId, LocalDateTime datetime) {
        this.pseudonym = pseudonym;
        this.content = content;
        this.postId = postId;
        this.datetime = datetime;
        this.likes = 0;
    }

    /**
     * Method for getting entity ID.
     *
     * @return id of entity as long.
     */
    public long getId() {
        return id;
    }

    /**
     * Method for setting entity ID.
     *
     * @param id for setting entity ID.
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * Method for getting Entity creator.
     *
     * @return Entity creator as String.
     */
    public String getPseudonym() {
        return pseudonym;
    }

    /**
     * Method for setting Entity creator
     *
     * @param pseudonym of Entity creator
     */
    public void setPseudonym(String pseudonym) {
        this.pseudonym = pseudonym;
    }

    /**
     * Method for getting Entity content.
     *
     * @return content as String.
     */
    public String getContent() {
        return content;
    }

    /**
     * Method for setting Entity content.
     *
     * @param content as String.
     */
    public void setContent(String content) {
        this.content = content;
    }

    /**
     * Method for getting on what post Entity is linked.
     *
     * @return long of on what post entity is linked.
     */
    public long getPostId() {
        return postId;
    }

    /**
     * Method for setting id of post on what Entity is linked.
     *
     * @param postId long of on what post entity is linked.
     */
    public void setPostId(long postId) {
        this.postId = postId;
    }

    /**
     * Method for getting Entity time and date when it was created.
     *
     * @return datetime LocalDateTime of Entity creation.
     */
    public LocalDateTime getDatetime() {
        return datetime;
    }

    /**
     * Method for setting Entity time and date when it was created.
     *
     * @param  datetime LocalDateTime of Entity creation.
     */
    public void setDatetime(LocalDateTime datetime) {
        this.datetime = datetime;
    }

    /**
     * Method for getting Entity count of likes.
     *
     * @return long of Entity Likes.
     */
    public long getLikes() { return likes; }

    /**
     * Method for setting Entity count of likes.
     *
     * @param likes long of Entity Likes.
     */
    public void setLikes(long likes) {
        this.likes = likes;
    }

    /**
     * Override method for getting Entity attributes as String.
     *
     * @return String of Entity Attributes
     */
    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", pseudonym='" + pseudonym + '\'' +
                ", content='" + content + '\'' +
                ", postId=" + postId +
                ", datetime=" + datetime +
                '}';
    }
}

package fi.tuni.cezaro;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * Entity class that is used to define and save Blog post data in database.
 *
 * @author      Saku Tynjala saku.tynjala@tuni.fi
 * @author 		Mikko Mustasaari mikko.mustasaari@tuni.fi
 * @version     0.3
 * @since       0.1
 */
@Entity
@Table(name = "Post")
public class Post {

    @Id
    @GeneratedValue
    private long id;
    private LocalDateTime date;
    private String author;
    private String title;
    @Column(columnDefinition="TEXT")
    private String content;

    /**
     * Basic empty constructor
     */
    public Post() {

    }

    /**
     * Constructor with all class attributes.
     *
     * @param author name of who created Post.
     * @param title title of blog post.
     * @param content Content of blog post.
     * @param time date and time when comment was posted.
     */
    public Post(LocalDateTime time, String author, String title, String content) {
        this.date = time;
        this.author = author;
        this.title = title;
        this.content = content;
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
     * Method for getting Entity time and date when it was created.
     *
     * @return datetime LocalDateTime of Entity creation.
     */
    public LocalDateTime getDate() {
        return date;
    }

    /**
     * Method for setting Entity time and date when it was created.
     *
     * @param date LocalDateTime of Entity creation.
     */
    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    /**
     * Method for getting Entity Author.
     *
     * @return content as String.
     */
    public String getAuthor() {
        return author;
    }

    /**
     * Method for setting Entity author.
     *
     * @param author as String.
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * Method for getting Entity Title.
     *
     * @return content as String.
     */
    public String getTitle() {
        return title;
    }

    /**
     * Method for setting Entity title.
     *
     * @param title as String.
     */
    public void setTitle(String title) {
        this.title = title;
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
     * Override method for getting Entity attributes as String.
     *
     * @return String of Entity Attributes
     */
    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", date=" + date +
                ", author='" + author + '\'' +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}

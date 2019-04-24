package fi.tuni.cezaro;

import org.springframework.context.annotation.Primary;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

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

    public Comment() {

    }

    public Comment(String pseudonym, String content, long postId, LocalDateTime datetime) {
        this.pseudonym = pseudonym;
        this.content = content;
        this.postId = postId;
        this.datetime = datetime;
        this.likes = 0;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPseudonym() {
        return pseudonym;
    }

    public void setPseudonym(String pseudonym) {
        this.pseudonym = pseudonym;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public long getPostId() {
        return postId;
    }

    public void setPostId(long postId) {
        this.postId = postId;
    }

    public LocalDateTime getDatetime() {
        return datetime;
    }

    public void setDatetime(LocalDateTime datetime) {
        this.datetime = datetime;
    }

    public long getLikes() { return likes; }

    public void setLikes(long likes) {
        this.likes = likes;
    }

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

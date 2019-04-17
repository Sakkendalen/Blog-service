package fi.tuni.cezaro;

import org.springframework.data.repository.CrudRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface PostRepository extends CrudRepository<Post, LocalDateTime> {

    //void findAllById(Optional<Post> byId);

    List<Post> findByAuthor(String author);
    List<Post> findByTitle(String title);
    List<Post> findByContent(String content);
    List<Post> findByAuthorContainingIgnoreCase(String author);
    List<Post> findByTitleContainingIgnoreCase(String title);
    List<Post> findByContentContainingIgnoreCase(String variable);

}

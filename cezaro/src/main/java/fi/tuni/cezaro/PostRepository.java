package fi.tuni.cezaro;

import javafx.geometry.Pos;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface PostRepository extends CrudRepository<Post, Long> {

    Optional<Post> findByAuthorAndDateBefore(String author, LocalDateTime date);
    Optional<Post> findByAuthorAndDateAfter(String author, LocalDateTime date);
    List<Post> findAllByDateBeforeOrderByDateDesc(LocalDateTime date);
    List<Post> findAllByDateAfterOrderByDateAsc(LocalDateTime date);
    List<Post> findByAuthorOrderByDateDesc(String author);
    List<Post> findByAuthorContainingIgnoreCase(String author);
    List<Post> findByTitleContainingIgnoreCase(String title);
    List<Post> findByContentContainingIgnoreCase(String variable);
    List<Post> findAllByOrderByDateDesc();
    List<Post> findAllByOrderByDateAsc();
    List<Post> findAllByAuthorAndTitleAndContentContainingIgnoreCase(String variable);

}

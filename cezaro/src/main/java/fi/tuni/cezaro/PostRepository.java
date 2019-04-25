package fi.tuni.cezaro;

import org.springframework.data.repository.CrudRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Post repository implementation for handling Post table that extends from CrudRepository.
 *
 * @author      Saku Tynjala saku.tynjala@tuni.fi
 * @author 		Mikko Mustasaari mikko.mustasaari@tuni.fi
 * @version     0.3
 * @since       0.1
 */
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
}

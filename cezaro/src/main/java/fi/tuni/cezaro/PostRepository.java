package fi.tuni.cezaro;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface PostRepository extends CrudRepository<Post, Long> {

    //void findAllById(Optional<Post> byId);

    List<Post> findByAuthor(String author);
    List<Post> findByTitle(String title);
    List<Post> findByContent(String content);
    List<Post> findByAuthorContainingIgnoreCase(String author);
    List<Post> findByTitleContainingIgnoreCase(String title);
    List<Post> findByContentContainingIgnoreCase(String variable);

}

package fi.tuni.cezaro;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommentRepository extends CrudRepository<Comment, Long> {
    List<Comment> findByPostIdOrderByDatetimeAsc(long postID);
}

package fi.tuni.cezaro;

import org.springframework.data.repository.CrudRepository;

import java.time.LocalDateTime;

public interface PostRepository extends CrudRepository<Post, LocalDateTime> {
}

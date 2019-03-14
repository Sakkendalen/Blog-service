package fi.tuni.cezaro;

import org.springframework.data.repository.CrudRepository;

import java.time.LocalDateTime;

public interface BlogRepository extends CrudRepository<Blog, LocalDateTime> {
}

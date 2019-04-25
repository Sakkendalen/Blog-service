package fi.tuni.cezaro;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Comment repository implementation for handling Comment table that extends from CrudRepository.
 *
 * @author      Saku Tynjala saku.tynjala@tuni.fi
 * @author 		Mikko Mustasaari mikko.mustasaari@tuni.fi
 * @version     0.3
 * @since       0.3
 */
public interface CommentRepository extends CrudRepository<Comment, Long> {
    List<Comment> findByPostIdOrderByDatetimeDesc(long postID);
}

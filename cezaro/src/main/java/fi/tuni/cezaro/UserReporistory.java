package fi.tuni.cezaro;

import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

/**
 * User repository implementation for handling Userx table that extends from CrudRepository.
 *
 * @author      Saku Tynjala saku.tynjala@tuni.fi
 * @author 		Mikko Mustasaari mikko.mustasaari@tuni.fi
 * @version     0.3
 * @since       0.1
 */
public interface UserReporistory extends CrudRepository<User, Long> {

    Optional<User> findByUserName(String username);
}

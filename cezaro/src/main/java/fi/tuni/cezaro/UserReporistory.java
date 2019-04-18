package fi.tuni.cezaro;

import org.springframework.data.repository.CrudRepository;

import javax.jws.soap.SOAPBinding;
import java.util.Optional;

public interface UserReporistory extends CrudRepository<User, Long> {

    Optional<User> findByUserName(String username);
}

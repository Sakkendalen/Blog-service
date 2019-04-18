package fi.tuni.cezaro;

import org.springframework.data.repository.CrudRepository;

import javax.jws.soap.SOAPBinding;

public interface UserReporistory extends CrudRepository<User, Long> {

    User findByUserName(String userName);
}

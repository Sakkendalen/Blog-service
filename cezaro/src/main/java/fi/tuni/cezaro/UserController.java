package fi.tuni.cezaro;

import fi.tuni.cezaro.exception.CredentialAcceptedExcepion;
import fi.tuni.cezaro.exception.InvalidCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@RestController
public class UserController {

    @Autowired
    UserReporistory userRepo;

    @PostConstruct
    public void loadData() {
        userRepo.save(new User("Mikko", "admin1"));
        userRepo.save(new User("Saku", "admin2"));
    }

    @RequestMapping(value = "/login/", method = RequestMethod.POST)
    public User addInstructorUser(@RequestHeader HttpHeaders headers, @RequestBody User user)
            throws CredentialAcceptedExcepion, InvalidCredentialsException {

        User login = userRepo.findByUserName(user.getUserName());

        if (login.getPassword().equals(user.getPassword())) {

            throw new CredentialAcceptedExcepion();

        } else {
            throw new InvalidCredentialsException();
        }
    }
}

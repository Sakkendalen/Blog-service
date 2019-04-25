package fi.tuni.cezaro;

import fi.tuni.cezaro.exception.CredentialAcceptedExcepion;
import fi.tuni.cezaro.exception.InvalidCredentialsException;
import fi.tuni.cezaro.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.annotation.PostConstruct;
import javax.validation.ConstraintViolationException;

/**
 * RestController to handle creating and deleting User entity from database.
 * Handles frontend fetch request of login and returns Exception if user Credentials was accepted.
 *
 * Uses UserRepository class for handling Entity User table.
 *
 * @author      Saku Tynjala saku.tynjala@tuni.fi
 * @author 		Mikko Mustasaari mikko.mustasaari@tuni.fi
 * @version     0.3
 * @since       0.3
 */
@RestController
public class UserController {

    @Autowired
    UserReporistory userRepo;

    /**
     * PostConstruct method for populating 2 user to database.
     */
    @PostConstruct
    public void loadData() {
        userRepo.save(new User("Mikko", "admin1"));
        userRepo.save(new User("Saku", "admin2"));
    }

    /**
     * Login method for comparing given Json format of user to User table entities and
     * returns exception if user was found, credentials was accepted or not.
     *
     * @param user to be logged in to application.
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public void userLogin(@RequestBody User user)
            throws CredentialAcceptedExcepion, InvalidCredentialsException {
        if(userRepo.findByUserName(user.getUserName()).isPresent()) {
            User login = userRepo.findByUserName(user.getUserName()).get();
            if (login.getPassword().equals(user.getPassword())) {
                throw new CredentialAcceptedExcepion();

            } else {
                throw new InvalidCredentialsException();
            }
        }
        else{
            throw new UserNotFoundException();
        }

    }

    /**
     * User creation method for adding user to database by given Json format of user.
     * Returns Exception based if user was added to database and Credentials was ok or
     * if attributes caused ConstraintViolationException and returns IncalidCredentialsException.
     *
     * @param user to be added in database.
     */
    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public void AddUser(@RequestBody User user) {
        try {
            userRepo.save(new User(user.getUserName(), user.getPassword()));
            throw new CredentialAcceptedExcepion();
        }catch (ConstraintViolationException e){
            throw new InvalidCredentialsException();
        }
    }
}

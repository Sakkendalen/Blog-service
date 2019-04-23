package fi.tuni.cezaro;

import fi.tuni.cezaro.exception.CredentialAcceptedExcepion;
import fi.tuni.cezaro.exception.InvalidCredentialsException;
import fi.tuni.cezaro.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
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

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public void addInstructorUser(@RequestBody User user)
            throws CredentialAcceptedExcepion, InvalidCredentialsException {

        System.out.println("" +user.getUserName()  +user.getPassword());

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
}

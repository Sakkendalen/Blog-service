package fi.tuni.cezaro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.Optional;

@RestController
public class PostController {

    @Autowired
    PostRepository postRepo;

    //Testing database
    @PostConstruct
    public void loadData() {
        postRepo.save(new Post(LocalDateTime.of(2001, 1 , 1, 12, 55), "1","1", "1"));
        postRepo.save(new Post(LocalDateTime.of(2002, 1 , 1, 12, 55), "2","2", "2"));
        postRepo.save(new Post(LocalDateTime.of(2003, 1 , 1, 12, 55), "3","3", "3"));
    }

    public void createPost(LocalDateTime time, String author, String title, String content){
        postRepo.save(new Post(time, author, title, content));
    }

    @RequestMapping(value = "/post", method= RequestMethod.GET)
    public Iterable<Post> findAll() {

        return postRepo.findAll();

    }

    //used to get post
    // example fetch with url http://localhost:8080/post/2001-01-01T12:55:00
    @RequestMapping(value = "/post/{date}", method= RequestMethod.GET)
    public Optional<Post> getPost(
            @PathVariable(value="date")
            @DateTimeFormat(pattern="yyyy-MM-dd'T'HH:mm:ss") LocalDateTime date){

        if(postRepo.findById(date).isPresent()) {
            return postRepo.findById(date);
        }
        else{
            return null;
        }
    }

    @RequestMapping(value = "/delete/{date}")
    public void delPost(
            @PathVariable(value="date")
            @DateTimeFormat(pattern="yyyy-MM-dd'T'HH:mm:ss") LocalDateTime date) {

        if(postRepo.findById(date).isPresent()) {

            System.out.println("deleting: " + postRepo.findById(date));

            postRepo.deleteById(date);
        }
        else{

            System.out.println("Not found!");

        }
    }
}

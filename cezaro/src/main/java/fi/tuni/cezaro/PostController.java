package fi.tuni.cezaro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostRepository postRepo;

    //Testing database
    @PostConstruct
    public void loadData() {
        postRepo.save(new Post(LocalDateTime.of(2001, 1 , 1, 12, 55), "Saku","JAVASCRIPT ON BEBAST", "mita pyllyt tekee pusikossa"));
        postRepo.save(new Post(LocalDateTime.of(2002, 1 , 1, 12, 55), "Mikko","JAVASCRIPT ON THE BEST", "Vakoilee"));
        postRepo.save(new Post(LocalDateTime.of(2003, 1 , 1, 12, 55), "Matti","TAH?!", "MIS MOON?!"));
    }

    public void createPost(LocalDateTime time, String author, String title, String content){
        postRepo.save(new Post(time, author, title, content));
    }

    @GetMapping(value = "/posts")
    public Iterable<Post> findAll() {

        return postRepo.findAll();

    }

    //used to get post
    // example fetch with url http://localhost:8080/api/post/2001-01-01T12:55:00
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

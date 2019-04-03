package fi.tuni.cezaro;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import javafx.geometry.Pos;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.*;

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostRepository postRepo;

    //Testing database
    @PostConstruct
    public void loadData() {
        postRepo.save(new Post(LocalDateTime.of(2001, 1 , 1, 12, 55,10 ,10 ), "Saku","JAVASCRIPT ON BEBAST", "mita pyllyt tekee pusikossa"));
        postRepo.save(new Post(LocalDateTime.of(2002, 1 , 1, 12, 55, 10,10), "Mikko","JAVASCRIPT ON THE BEST", "Vakoilee"));
        postRepo.save(new Post(LocalDateTime.of(2003, 1 , 1, 12, 55, 10, 10), "Matti","TAH?!", "MIS MOON?!"));
    }

    public void createPost(LocalDateTime time, String author, String title, String content){
        postRepo.save(new Post(time, author, title, content));
    }

    @GetMapping(value = "/posts")
    public Iterable<Post> findAll() {

        return postRepo.findAll();

    }

    //used to get post curl -X GET http://localhost:8080/api/post/2001-01-01T12:55:00
    // example fetch with url example: curl -X GET http://localhost:8080/api/post/2001-01-01T12:55:00
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

    @RequestMapping(value = "/add")
    public void addPost(@RequestBody String post){

        ObjectMapper mapper = new ObjectMapper();
        String author = "";
        String title = "";
        String content = "";

        try {
            JsonNode actualObj = mapper.readTree(post);
            author = actualObj.get("author").textValue();
            title = actualObj.get("title").textValue();
            content = actualObj.get("content").textValue();
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("post : " +author +title + content);
        postRepo.save(new Post(LocalDateTime.now().withNano(0), author, title, content));
        //postRepo.save(new Post(LocalDateTime.now(), "mikkooooo", "totsoisioa", "aklsdlakj"));
        //postRepo.save(new Post(LocalDateTime.of(2003, 1 , 1, 30, 20), author, title, content));
    }

    /*
    @RequestMapping(value = "/search/{variable}", method= RequestMethod.GET)
    public Iterable<Post> search(@PathVariable String variable) {
        System.out.println("variable : " +variable);
        return postRepo.findAll();
    }
    */

    //used to get post
    // example fetch with url http://localhost:8080/api/post/2001-01-01T12:55:00
    @RequestMapping(value = "/search/{variable}", method= RequestMethod.GET)
    public Iterable<Post> getPost(@PathVariable String variable){

    /*
        Iterable<Post> posts = postRepo.findAll();

        System.out.println(variable);

        List<Post> returnValue = null;

        for(Post post : posts){
            if(post.getTitle().toLowerCase().equals(variable)){
                returnValue.add(postRepo.findById(post.getDate()));
            }
            else if (post.getAuthor().toLowerCase().equals(variable)){
                return postRepo.findById(post.getDate());
            }
            else if (post.getContent().toLowerCase().contains(variable)){
                return postRepo.findById(post.getDate());
            }
        }
        return null; */
        return postRepo.findByAuthor(variable);
        //return null;
    }

    @RequestMapping(value = "/update/{date}")
    public void updatePost(@PathVariable(value="date")
                               @DateTimeFormat(pattern="yyyy-MM-dd'T'HH:mm:ss") LocalDateTime date,
                                @RequestBody String post) {

        if(postRepo.findById(date).isPresent()) {
            Post alteredPost = postRepo.findById(date).get();

            ObjectMapper mapper = new ObjectMapper();
            String author = "";
            String title = "";
            String content = "";

            try {
                JsonNode actualObj = mapper.readTree(post);
                author = actualObj.get("author").textValue();
                title = actualObj.get("title").textValue();
                content = actualObj.get("content").textValue();
                alteredPost.setAuthor(author);
                alteredPost.setTitle(title);
                alteredPost.setContent(content);
                postRepo.save(alteredPost);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }
}

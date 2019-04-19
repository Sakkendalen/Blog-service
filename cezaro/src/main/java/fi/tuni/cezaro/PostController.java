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

    @GetMapping(value = "/posts")
    public Iterable<Post> findAll() {

        return postRepo.findAllByOrderByDateDesc();

    }

    // used to get post by id
    // example fetch with url example: curl -X GET http://localhost:8080/api/post/1
    @RequestMapping(value = "/post/{id}", method= RequestMethod.GET)
    public Optional<Post> getPost(@PathVariable long id){

        if(postRepo.findById(id).isPresent()) {
            return postRepo.findById(id);
        }
        else{
            return null;
        }
    }

    // used to get post by string value
    // example fetch with url http://localhost:8080/api/search/sa
    @RequestMapping(value = "/search/{variable}", method= RequestMethod.GET)
    public Iterable<Post> getPost(@PathVariable String variable){

        List<Post> returnValue = new ArrayList<>();

        returnValue.addAll(postRepo.findByAuthorContainingIgnoreCase(variable));
        returnValue.addAll(postRepo.findByTitleContainingIgnoreCase(variable));
        returnValue.addAll(postRepo.findByContentContainingIgnoreCase(variable));

        System.out.println(returnValue);

        return returnValue;

    }

    @RequestMapping(value = "/delete/{id}")
    public void delPost(@PathVariable long id) {

        if(postRepo.findById(id).isPresent()) {

            System.out.println("deleting: " + postRepo.findById(id));

            postRepo.deleteById(id);
        }
        else{

            System.out.println("Not found!");

        }
    }

    @RequestMapping(value = "/add")
    //public void addPost(@RequestBody String post){
    public void addPost(@RequestBody Post post) {

        /*
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
        } */

        System.out.println("Author : " +post.getAuthor() +" Title : " +post.getTitle() +" Content : " + post.getContent());

        postRepo.save(new Post(LocalDateTime.now().withNano(0), post.getAuthor(), post.getTitle(), post.getContent()));
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

    @RequestMapping(value = "/update/{id}")
    public void updatePost(@PathVariable long id,
                                @RequestBody Post post) {

        if(postRepo.findById(id).isPresent()) {
            Post alteredPost = postRepo.findById(id).get();

            System.out.println("Jutut : " +post.getAuthor() +post.getTitle() +post.getContent());

            /*ObjectMapper mapper = new ObjectMapper();
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
            } */
            alteredPost.setAuthor(post.getAuthor());
            alteredPost.setTitle(post.getTitle());
            alteredPost.setContent(post.getContent());
            postRepo.save(alteredPost);
        }

    }
    @RequestMapping(value = "/prevpost/{id}")
    public Post prevPost(@PathVariable long id) {

        if(postRepo.findById(id).isPresent()) {
            Post fetch = postRepo.findById(id).get();
            if(postRepo.findByAuthorAndDateBefore(fetch.getAuthor(), fetch.getDate()).isPresent()) {
                Post prev = postRepo.findByAuthorAndDateBefore(fetch.getAuthor(), fetch.getDate()).get();
                System.out.println(fetch);
                System.out.println(prev);
                return prev;
            }
            return fetch;
        }
        return null;
    }

    @RequestMapping(value = "/nextpost/{id}")
    public Post nextPost(@PathVariable long id){

        if(postRepo.findById(id).isPresent()) {
            Post fetch = postRepo.findById(id).get();
            if(postRepo.findByAuthorAndDateAfter(fetch.getAuthor(), fetch.getDate()).isPresent()) {
                Post next = postRepo.findByAuthorAndDateAfter(fetch.getAuthor(), fetch.getDate()).get();
                System.out.println(fetch);
                System.out.println(next);
                return next;
            }
            return fetch;
        }
        return null;

    }
}

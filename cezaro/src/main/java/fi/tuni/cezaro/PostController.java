package fi.tuni.cezaro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
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
        postRepo.save(new Post(LocalDateTime.of(2003, 1 , 1, 12, 54,11,33), "Mikko", "Julkaisu", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
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
    public void addPost(@RequestBody Post post) {


        System.out.println("Author : " +post.getAuthor() +" Title : " +post.getTitle() +" Content : " + post.getContent());

        postRepo.save(new Post(LocalDateTime.now().withNano(0), post.getAuthor(), post.getTitle(), post.getContent()));
    }

    @RequestMapping(value = "/update/{id}")
    public void updatePost(@PathVariable long id,
                                @RequestBody Post post) {

        if(postRepo.findById(id).isPresent()) {
            Post alteredPost = postRepo.findById(id).get();

            System.out.println("Jutut : " +post.getAuthor() +post.getTitle() +post.getContent());

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
            List<Post> prev = postRepo.findAllByAuthorAndDateBeforeOrderByDateDesc(fetch.getAuthor(), fetch.getDate());
            if(!prev.isEmpty()) {
                System.out.println(fetch);
                System.out.println(prev);
                return prev.get(0);
            }
            return fetch;
        }
        return null;
    }

    @RequestMapping(value = "/nextpost/{id}")
    public Post nextPost(@PathVariable long id){
        if(postRepo.findById(id).isPresent()) {
            Post fetch = postRepo.findById(id).get();
            List<Post> next = postRepo.findAllByAuthorAndDateAfterOrderByDateAsc(fetch.getAuthor(), fetch.getDate());
            if(!next.isEmpty()) {
                System.out.println(fetch);
                System.out.println(next);
                return next.get(0);
            }
            return fetch;
        }
        return null;
    }
}
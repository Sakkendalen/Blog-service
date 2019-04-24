package fi.tuni.cezaro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.*;

/**
 * RestController to handle Post entity saving, delete and updating to database.
 * Handles frontend fetch request and returns list of Posts by given search condition.
 *
 * Uses PosttRepository class for handling Entity Post table.
 *
 * @author      Saku Tynjala saku.tynjala@tuni.fi
 * @author 		Mikko Mustasaari mikko.mustasaari@tuni.fi
 * @version     0.3
 * @since       0.1
 */
@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostRepository postRepo;

    /**
     * PostConstruct method for populating Posts to database.
     */
    @PostConstruct
    public void loadData() { }

    /**
     * Returns all Posts from database sorted by Date Descending.
     *
     * @return Iterable Post of all Posts in database.
     */
    @GetMapping(value = "/posts")
    public Iterable<Post> findAll() {

        return postRepo.findAllByOrderByDateDesc();

    }

    /**
     * Returns particular Post by given ID long in RequestMapping.
     *
     * @param id long of Post ID at RequestMapping.
     * @return Optional Post  of found post by given argument.
     */
    @RequestMapping(value = "/post/{id}", method= RequestMethod.GET)
    public Optional<Post> getPost(@PathVariable long id){

        if(postRepo.findById(id).isPresent()) {
            return postRepo.findById(id);
        }
        else{
            return null;
        }
    }

    /**
     * Returns all posts as Iterable Post  that contains given String in RequestMapping.
     *
     * Fetches all posts by author that contains given string variable, after that
     * fetches all posts by title that contains given string and compares these list objects and adds
     * non duplicants objects to the first list and does same thing by searching all posts by Content that
     * contains given string variable and returns List of all Post objects that contained given String variable.
     *
     * @param variable String of search condition at RequestMapping.
     *
     * @return Iterable Post  of found posts by given argument.
     */
    @RequestMapping(value = "/search/{variable}", method= RequestMethod.GET)
    public Iterable<Post> getPost(@PathVariable String variable){

        List<Post> returnValue = new ArrayList<>();
        List <Post> CheckList =new ArrayList<>();

        returnValue.addAll(postRepo.findByAuthorContainingIgnoreCase(variable));
        CheckList.addAll(postRepo.findByTitleContainingIgnoreCase(variable));

        for(Post check : CheckList){
            if(!returnValue.contains(check)){
                returnValue.add(check);
            }
        }

        CheckList =new ArrayList<>();
        CheckList.addAll(postRepo.findByContentContainingIgnoreCase(variable));

        for(Post check : CheckList){
            if(!returnValue.contains(check)){
                returnValue.add(check);
            }
        }

        return returnValue;
    }

    /**
     * Deletes post from database by given Post ID long.
     * Checks if repository have Post by given
     * long ID and deletes it from database.
     *
     * @param id long of Post ID at RequestMapping.
     */
    @RequestMapping(value = "/delete/{id}")
    public void delPost(@PathVariable long id) {

        if(postRepo.findById(id).isPresent()) {
            postRepo.deleteById(id);
        }
    }

    /**
     * Method for saving comment to database.
     * Takes Json format of Post as RequestBody and creates new Post by it attributes and saves it to database.
     *
     * @param post Json format of Post as RequestBody.
     */
    @RequestMapping(value = "/add")
    public void addPost(@RequestBody Post post) {
        postRepo.save(new Post(LocalDateTime.now().withNano(0), post.getAuthor(), post.getTitle(), post.getContent()));
    }

    /**
     * Update method for updating existing Post at database.
     * Takes long ID of wanted post as to be updated at RequestMapping and
     * Json format of Post as RequestBody and updates found Post by given arguments in RequestBody.
     *
     * @param post Json format of Post as RequestBody.
     * @param id long of Post ID at RequestMapping.
     */
    @RequestMapping(value = "/update/{id}")
    public void updatePost(@PathVariable long id,
                                @RequestBody Post post) {

        if(postRepo.findById(id).isPresent()) {
            Post alteredPost = postRepo.findById(id).get();

            alteredPost.setAuthor(post.getAuthor());
            alteredPost.setTitle(post.getTitle());
            alteredPost.setContent(post.getContent());
            postRepo.save(alteredPost);
        }
    }

    /**
     * Returns previous post of given long ID at RequestMapping. If blog only contains 1 Post, this returns
     * Post that ID was given in RequestMapping. Sorts found Posts by Date Descending.
     *
     * @param id long of Post ID at RequestMapping.
     *
     * @return previous or current Post.
     */
    @RequestMapping(value = "/prevpost/{id}")
    public Post prevPost(@PathVariable long id) {

        if(postRepo.findById(id).isPresent()) {
            Post fetch = postRepo.findById(id).get();
            List<Post> prev = postRepo.findAllByDateBeforeOrderByDateDesc(fetch.getDate());
            if(!prev.isEmpty()) {
                return prev.get(0);
            } else {
                List<Post> first = postRepo.findAllByOrderByDateDesc();
                return first.get(0);
            }
        }
        return null;
    }

    /**
     * Returns next post of given long ID at RequestMapping. If blog only contains 1 Post, this returns
     * Post that ID was given in RequestMapping. Sorts found Posts by Date Ascending.
     *
     * @param id long of Post ID at RequestMapping.
     *
     * @return next or current Post.
     */
    @RequestMapping(value = "/nextpost/{id}")
    public Post nextPost(@PathVariable long id){
        if(postRepo.findById(id).isPresent()) {
            Post fetch = postRepo.findById(id).get();
            List<Post> next = postRepo.findAllByDateAfterOrderByDateAsc(fetch.getDate());
            if(!next.isEmpty()) {
                return next.get(0);
            } else {
                List<Post> first = postRepo.findAllByOrderByDateAsc();
                return first.get(0);
            }
        }
        return null;
    }
}
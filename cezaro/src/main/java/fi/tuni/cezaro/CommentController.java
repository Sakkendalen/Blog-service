package fi.tuni.cezaro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;

/**
 * RestController to handle Comment entity saving, delete and updating to database.
 * Handles frontend fetch request and returns list of comments in particular Post.
 *
 * Uses CommentRepository class for handling Entity Comment table.
 *
 * @author      Saku Tynjala saku.tynjala@tuni.fi
 * @author 		Mikko Mustasaari mikko.mustasaari@tuni.fi
 * @version     0.3
 * @since       0.3
 */
@RestController
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    CommentRepository comRepo;

    /**
     * Method that returns all comments from database.
     *
     * @return Iterable Comment of all Comments in database.
     */
    @GetMapping(value = "/get")
    public Iterable<Comment> findAll(){
        return comRepo.findAll();
    }

    /**
     * Returns particular post comments as Iterable Comment  by given post ID long in RequestMapping.
     *
     * @param postID long of Post ID at RequestMapping.
     *
     * @return Iterable Comment of found post by given argument.
     */
    @RequestMapping(value = "/getComments/{postID}", method= RequestMethod.GET)
    public Iterable<Comment> findCommentInPost(@PathVariable long postID){
        return comRepo.findByPostIdOrderByDatetimeDesc(postID);
    }

    /**
     * Method for saving comment to database.
     * Takes Json format of Comment as RequestBody and creates new Comment by it attributes and saves it to database.
     *
     * @param comment Json format of Comment as RequestBody.
     */
    @RequestMapping(value = "/add")
    public void addComment(@RequestBody Comment comment){
        comRepo.save(new Comment(comment.getPseudonym(), comment.getContent(), comment.getPostId(), LocalDateTime.now().withNano(0)));
    }

    /**
     * Method for deleting comments from database.
     * ID of comment that is wanted to be deleted database is taken in by RequestMapping.
     *
     * @param id long of Comment ID at RequestMapping.
     */
    @RequestMapping(value = "/delete/{id}")
    public void delComment(@PathVariable long id){
        comRepo.deleteById(id);
    }

    /**
     * Method for adding comment a like.
     * ID of comment that is liked by user is taken in by RequestMapping.
     *
     * @param commentID long of Comment ID at RequestMapping.
     */
    @RequestMapping(value = "/like/{commentID}")
    public void addLike(@PathVariable long commentID){
        
        if(comRepo.findById(commentID).isPresent()){
            Comment likedCom = comRepo.findById(commentID).get();
            likedCom.setLikes(likedCom.getLikes() + 1);
            comRepo.save(likedCom);
        }
    }
}

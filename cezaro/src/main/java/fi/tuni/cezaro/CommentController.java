package fi.tuni.cezaro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    CommentRepository comRepo;

    @GetMapping(value = "/get")
    public Iterable<Comment> findAll(){
        return comRepo.findAll();
    }

    @RequestMapping(value = "/getComments/{postID}", method= RequestMethod.GET)
    public Iterable<Comment> findCommentInPost(@PathVariable long postID){
        System.out.println("Return for comments start ");
        return comRepo.findByPostIdOrderByDatetimeAsc(postID);
    }

    @RequestMapping(value = "/add")
    public void addComment(@RequestBody Comment comment){
        System.out.println("Comment added from " +comment.getPseudonym());
        comRepo.save(new Comment(comment.getPseudonym(), comment.getContent(), comment.getPostId(), LocalDateTime.now().withNano(0)));
    }

    @RequestMapping(value = "/delete/{id}")
    public void delComment(@PathVariable long id){
        comRepo.deleteById(id);
    }

    @RequestMapping(value = "/like/{commentID}")
    public void addLike(@PathVariable long commentID){
        
        if(comRepo.findById(commentID).isPresent()){
            Comment likedCom = comRepo.findById(commentID).get();
            likedCom.setLikes(likedCom.getLikes() + 1);
            comRepo.save(likedCom);
        }
    }
}

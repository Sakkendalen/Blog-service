package fi.tuni.cezaro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @Autowired
    CommentRepository comRepo;

    @GetMapping(value = "/get")
    public Iterable<Comment> findAll(){
        return comRepo.findAll();
    }

    @RequestMapping(value = "/asdasd/{postID}", method= RequestMethod.GET)
    public Iterable<Comment> findCommentInPost(@PathVariable long postID){
        return comRepo.findByPostIdOrderByDatetimeAsc(postID);
    }

    @RequestMapping(value = "/add")
    public void addComment(@RequestBody Comment comment){
        comRepo.save(new Comment(comment.getPseudonym(), comment.getContent(), comment.getPostId(), LocalDateTime.now().withNano(0)));
    }

    @RequestMapping(value = "/delete/{id}")
    public void delComment(@PathVariable long id){
        comRepo.deleteById(id);
    }
}

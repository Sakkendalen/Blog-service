package fi.tuni.cezaro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.Optional;

@RestController
public class BlogController {

    @Autowired
    BlogRepository blogrepo;


    //Testing database
    @PostConstruct
    public void loadData() {
        blogrepo.save(new Blog(LocalDateTime.of(2001, 1 , 1, 12, 55), "1","1", "1"));
        blogrepo.save(new Blog(LocalDateTime.of(2002, 1 , 1, 12, 55), "2","2", "2"));
        blogrepo.save(new Blog(LocalDateTime.of(2003, 1 , 1, 12, 55), "3","3", "3"));
    }

    @RequestMapping(value = "/blog", method= RequestMethod.GET)
    public Iterable<Blog> findAll() {

        return blogrepo.findAll();

    }

    @RequestMapping(value = "/blog/{id}", method= RequestMethod.GET)
    public Optional<Blog> getBlog(
            @RequestParam("id")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime dateAndTime){

        if(blogrepo.findById(dateAndTime).isPresent()) {
            return blogrepo.findById(dateAndTime);
        }
        else{
            return null;
        }
    }

    @RequestMapping("/")
    public String home() {
        return "home";
    }
}

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
        postRepo.save(new Post(LocalDateTime.of(2001, 1 , 1, 12, 55,10 ,10 ), "James","Four Hong Kong 'Occupy' leaders jailed for 2014 democracy protests", "HONG KONG (Reuters) - A Hong Kong court jailed four leaders of 2014 pro-democracy protests on Wednesday amid heightened concerns over the decline of freedoms in the China-ruled city nearly five years after activists took to the streets in mass protests \n The sentencing of the nine activists followed a near month-long trial that was closely watched as China’s Communist Party leaders have put Hong Kong’s autonomy under increasing strain, stoking concern among foreign governments, rights groups and business people.\n" +"\n" +"Law professor Benny Tai, 54, and retired sociologist Chan Kin-man, 60, were both jailed for 16 months for conspiracy to commit public nuisance tied to the protests that paralyzed parts of the Asian financial center for 79 days in late 2014 and became known as the Umbrella Movement.\n" +"\n" +"Their sentence had been reduced by two months given their clean criminal record and positive character, Justice Johnny Chan said. "));
        postRepo.save(new Post(LocalDateTime.of(2002, 1 , 1, 12, 55, 10,10), "Caroline","Wirecard lands $1 billion investment from Japan's Softbank", "BERLIN (Reuters) - Japan’s Softbank Group Corp will buy a 5.6 percent stake in Wirecard for around 900 million euros ($1 billion), the German company said on Wednesday, joining forces in the digital payments sector.\n Shares in Wirecard jumped 10 percent to the top of Germany’s blue-chip index as analysts welcomed the investment as a vote of confidence in the business that will allow the Munich-based firm to enlarge its operations in Asia.\n" +"\n" +"Under the agreement, Wirecard will issue bonds exclusively to an affiliate of Softbank that will convert into 6.92 million Wirecard shares after five years, currently equivalent to around 5.6 percent of the company.\n" +"\n" +"The conversion price of 130 euros per share represents a 5 percent premium to Wirecard’s closing share price on Tuesday. Shareholders will vote on the bond issuance at its annual meeting on June 18.\n" +"\n" +"Wirecard, founded in 1999, ousted lender Commerzbank from Germany’s blue-chip DAX index last year as it benefited from an accelerating global trend towards digital payments driven by e-commerce. "));
        postRepo.save(new Post(LocalDateTime.of(2003, 1 , 1, 12, 55, 10, 10), "Steve","Trump orders administration officials not to attend White House correspondents dinner", "WASHINGTON (Reuters) - President Donald Trump, who bemoaned his treatment by the news media in a flurry of tweets on Tuesday, has barred members of his staff and administration from attending the White House Correspondents’ Association dinner on Saturday, officials said." +"Trump had already said he would not attend the annual dinner, instead scheduling a political rally in Wisconsin, but he had not decided whether anyone from his staff could attend.\n" +"\n" +"The decision that no one from his team could participate was announced to White House staff and other representatives from the administration by White House Cabinet Secretary Bill McGinley at their morning meeting, officials said.\n" +"\n" +"It set off a scramble as many staffers had accepted invitations thinking Trump would allow them to go.\n" +"\n" +"“The president and members of his administration will not attend the White House Correspondents’ Dinner this year. Instead, Saturday evening, President Trump will travel to Green Bay, Wisconsin, where he will hold a campaign rally,” said a White House official. "));
        postRepo.save(new Post(LocalDateTime.of(2003, 1 , 1, 12, 54,11,33), "Pihla", "Kaakon Viestinnän maakuntalehdet palaavat STT:n uutispalvelun asiakkaiksi", "Kaakon Viestinnän maakuntalehdet palaavat heinäkuun alussa STT:n uutispalvelun asiakkaiksi neljän vuoden tauon jälkeen. Tuolloin Etelä-Saimaa, Itä-Savo, Kouvolan Sanomat, Kymen Sanomat ja Länsi-Savo alkavat julkaista STT:n uutispalvelun juttuja kotimaasta ja ulkomailta.\n" +"\n" +      "Tällä hetkellä Kaakon Viestintä julkaisee Helsingin Sanomien toimittamia kotimaan ja ulkomaiden uutisia. Maakuntalehdet aloittivat sisältöyhteistyön Helsingin Sanomien kanssa vuoden 2015 alussa ja luopuivat samalla STT:n palveluiden asiakkuudesta.\n" +"\n" +"Kaakon Viestinnän sisältöjohtaja Pekka Lakka perustelee paluuta uutistoimiston asiakkaaksi STT:ssä tapahtuneilla uudistuksilla."));
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
            List<Post> prev = postRepo.findAllByDateBeforeOrderByDateDesc(fetch.getDate());
            if(!prev.isEmpty()) {
                System.out.println(fetch);
                System.out.println(prev);
                return prev.get(0);
            } else {
                List<Post> first = postRepo.findAllByOrderByDateDesc();
                return first.get(0);
            }
        }
        return null;
    }

    @RequestMapping(value = "/nextpost/{id}")
    public Post nextPost(@PathVariable long id){
        if(postRepo.findById(id).isPresent()) {
            Post fetch = postRepo.findById(id).get();
            List<Post> next = postRepo.findAllByDateAfterOrderByDateAsc(fetch.getDate());
            if(!next.isEmpty()) {
                System.out.println(fetch);
                System.out.println(next);
                return next.get(0);
            } else {
                List<Post> first = postRepo.findAllByOrderByDateAsc();
                return first.get(0);
            }
        }
        return null;
    }
}
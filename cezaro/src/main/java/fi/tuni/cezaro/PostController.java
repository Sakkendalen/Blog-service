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
    public void loadData() {
        postRepo.save(new Post(LocalDateTime.of(2019, 1 , 1, 11, 11,26 ,10 ), "Paul","Britain to allow Huawei restricted access to 5G network", "LONDON (Reuters) - Britain will allow Huawei Technologies a restricted role in building parts of its 5G network, seeking a middle way in a bitter dispute between the United States and China over the next generation of communications technology. Huawei, the world’s biggest producer of telecoms equipment, is under intense scrutiny after the United States told allies not to use its technology because of fears it could be a vehicle for Chinese spying. Huawei has categorically denied this.\n \nThe Daily Telegraph newspaper reported Britain’s National Security Council, chaired by Prime Minister Theresa May, had agreed to allow Huawei access to non-core parts of 5G mobile infrastructure like antennas, despite concerns from ministers.\n" + "\n" +"A security source told Reuters that Britain would block Huawei from all core parts of the 5G network and access to non-core parts would be restricted. A second source confirmed that. Both spoke on condition of anonymity.\n" +"\n" +"European nations are treading a fine line in the dispute between the world’s two most powerful countries, under pressure from the United States to take a hard line on Huawei but also anxious not to sour trading and diplomatic relations with China.\n" +"\n" +"Britain’s compromise could provide a template for others to follow that the world’s leading intelligence-sharing network - the anglophone Five Eyes alliance - could live with. Huawei also welcomed London’s move. "));
        postRepo.save(new Post(LocalDateTime.of(2018, 4 , 12, 7, 18, 43,10), "Ryan","China to announce rules soon to regulate commercial rocket industry", "BEIJING (Reuters) - China’s national space agency said on Tuesday it will soon announce rules to regulate commercial rocket manufacturing, test flights and launches, state media reported, as the number of private startups in the nascent sector surged in the past year.\n" +"\n" +"A space law has been included in the legislative plan of parliament, and could be introduced in the next three to five years, China Space News reported, citing a presentation at an industry conference in Hunan province.\n" +"\n" +"The number of private firms engaged in the commercialization of China’s space industry have increased to almost 100 from 30 last year, including manufacturers of rockets and satellites, according to China Space News. "));
        postRepo.save(new Post(LocalDateTime.of(2017, 7 , 16, 14, 53, 18, 10), "Will","Out of a drawer and into your nightmares comes a vicious ancient beast", "WASHINGTON (Reuters) - When Ohio University integrative biologist Nancy Stevens peered into a drawer in the wooden cabinets on the top floor of a Nairobi museum in 2010, she saw a chunk of rock containing massive teeth and knew she had come across something important. \n The overlooked fossils stored at the National Museums of Kenya belonged to one of the largest meat-eating mammals ever to walk the Earth, a beast called Simbakubwa kutokaafrika that stalked Africa 22 million years ago, according to research by Stevens and co-author Matthew Borths published on Thursday.\n" +"\n" +"Bigger than any carnivorous land mammal alive today - even a polar bear - Simbakubwa’s skull was the size of a rhino’s, its eight-inch (20-cm) canine teeth as large as bananas. It weighed about a ton and was 8 feet long (2-1/2 meters) snout to rump.\n" +"\n" +"According to the research published in the Journal of Vertebrate Paleontology, the fossils were excavated around 1980 in western Kenya and never closely examined. "));
        postRepo.save(new Post(LocalDateTime.of(2016, 9 , 19, 1, 33,11,33), "Steve", "Yale study revives cellular activity in pig brains hours after death", "(Reuters) - Yale University scientists have succeeded in restoring basic cellular activity in pigs’ brains hours after their deaths in a finding that may one day lead to advances in treating human stroke and brain injuries, researchers reported on Wednesday. \n The scientists emphasized that their work did not even come close to reawakening consciousness in the disembodied pig brains. In fact the experiment was specifically designed to avoid such an outcome, however improbable.\n" +"\n" +"Still, the study raises a host of bioethical issues, including questions about the very definition of brain death and potential consequences for protocols related to organ donation.\n" +"\n" +"The research grew out of efforts to enhance the study of brain development, disorders and evolution. The main practical application is the prospect of allowing scientists to analyze whole brain specimens of large mammals in three dimensions, rather than through studies confined to small tissue samples, Yale said. "));
    }

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
     * @return Iterable Post of found posts by given argument.
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
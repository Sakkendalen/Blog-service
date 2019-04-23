package fi.tuni.cezaro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
		//curl -X GET http://localhost:8080/api/posts
		//curl -X GET http://localhost:8080/api/post/1
		//curl -X GET http://localhost:8080/api/search/sa

	}

}

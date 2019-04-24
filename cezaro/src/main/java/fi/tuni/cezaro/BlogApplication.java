package fi.tuni.cezaro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
		//PostController
		//curl -X GET http://localhost:8080/api/posts	->	OK
		//curl -X GET http://localhost:8080/api/post/{id}	-> OK
		//curl -X GET http://localhost:8080/api/search/{variable}	-> OK
		//curl -X GET http://localhost:8080/api/prevpost/{id}	-> OK
		//curl -X GET http://localhost:8080/api/nextpost/{id}	-> OK
		//curl -X POST http://localhost:8080/api/delete/{id} 	-> OK
		//curl -X POST -H "Content-Type: application/json" -d "{\"author\": \"String\", \"title\": \"String\", \"content\":\"TEXT\"}" http://localhost:8080/api/add		->OK
		//curl -X POST -H "Content-Type: application/json" -d "{\"author\": \"String\", \"title\": \"String\", \"content\":\"TEXT\"}" http://localhost:8080/api/update/{id}		->OK

		//CommentController
		//curl -X GET http://localhost:8080/comment/get		-> OK
		//curl -X GET http://localhost:8080/comment/getComments/{postID}	->OK
		//curl -X POST -H "Content-Type: application/json" -d "{\"pseudonym\": \"String\", \"content\": \"String\", \"postId\":\"long\"}" http://localhost:8080/comment/add		-> OK
		//curl -X POST http://localhost:8080/comment/delete/{commentID}	-> OK
		//curl -X POST http://localhost:8080/comment/like/[commentID}	-> OK

		//UserController
		//curl -X POST -H "Content-Type: application/json" -d "{\"userName\": \"Saku\", \"password\": \"admin2\"}" http://localhost:8080/login	-> OK
		//curl -X POST -H "Content-Type: application/json" -d "{\"userName\": \"Saku\", \"password\": \"admin2\"}" http://localhost:8080/addUser	-> OK Throws ConstraintViolationException

	}

}

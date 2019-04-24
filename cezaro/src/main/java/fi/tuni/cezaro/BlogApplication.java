package fi.tuni.cezaro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main class for starting SpringBootApplication.
 *
 * @author      Saku Tynjala saku.tynjala@tuni.fi
 * @author 		Mikko Mustasaari mikko.mustasaari@tuni.fi
 * @version     0.3
 * @since       0.1
 */
@SpringBootApplication
public class BlogApplication {

	/**
	 * Main Method for run Application.
	 *
	 * Also Prints console curl command which can be used in command line.
	 *
	 * @param args String args needed at static main method.
	 */
	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
		System.out.println("PostController CURL:");
		System.out.println("curl -X GET http://localhost:8080/api/posts");
		System.out.println("curl -X GET http://localhost:8080/api/post/{id}");
		System.out.println("curl -X GET http://localhost:8080/api/search/{variable}");
		System.out.println("curl -X GET http://localhost:8080/api/prevpost/{id}");
		System.out.println("curl -X GET http://localhost:8080/api/nextpost/{id}");
		System.out.println("curl -X POST http://localhost:8080/api/delete/{id} ");
		System.out.println("curl -X POST -H \"Content-Type: application/json\" -d \"{\\\"author\\\": \\\"String\\\", \\\"title\\\": \\\"String\\\", \\\"content\\\":\\\"TEXT\\\"}\" http://localhost:8080/api/add");
		System.out.println("curl -X POST -H \"Content-Type: application/json\" -d \"{\\\"author\\\": \\\"String\\\", \\\"title\\\": \\\"String\\\", \\\"content\\\":\\\"TEXT\\\"}\" http://localhost:8080/api/update/{id}");

		System.out.println("CommentController CURL:");
		System.out.println("curl -X GET http://localhost:8080/comment/get");
		System.out.println("curl -X GET http://localhost:8080/comment/getComments/{postID}");
		System.out.println("curl -X POST -H \"Content-Type: application/json\" -d \"{\\\"pseudonym\\\": \\\"String\\\", \\\"content\\\": \\\"String\\\", \\\"postId\\\":\\\"long\\\"}\" http://localhost:8080/comment/add\t");
		System.out.println("curl -X POST http://localhost:8080/comment/delete/{commentID}");
		System.out.println("curl -X POST http://localhost:8080/comment/like/[commentID}");


		System.out.println("UserController CURL:");
		System.out.println("curl -X POST -H \"Content-Type: application/json\" -d \"{\\\"userName\\\": \\\"Saku\\\", \\\"password\\\": \\\"admin2\\\"}\" http://localhost:8080/login");
		System.out.println("curl -X POST -H \"Content-Type: application/json\" -d \"{\\\"userName\\\": \\\"Saku\\\", \\\"password\\\": \\\"admin2\\\"}\" http://localhost:8080/addUser");

	}

}

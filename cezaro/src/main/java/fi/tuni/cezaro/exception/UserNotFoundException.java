package fi.tuni.cezaro.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception that is thrown when user was not found in database.
 *
 * @author      Saku Tynjala saku.tynjala@tuni.fi
 * @author 		Mikko Mustasaari mikko.mustasaari@tuni.fi
 * @version     0.3
 * @since       0.3
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException extends RuntimeException {
}

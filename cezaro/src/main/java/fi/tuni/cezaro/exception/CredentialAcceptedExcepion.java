package fi.tuni.cezaro.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.OK)
public class CredentialAcceptedExcepion extends RuntimeException {
}

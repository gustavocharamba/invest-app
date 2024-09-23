package invest.backend.services.exceptions;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(Object id){
        super("User not found");
    }
}

package invest.backend.services;

import invest.backend.entities.User;
import invest.backend.repositories.UserRepository;
import invest.backend.services.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User getUserById(Long id){
        Optional<User> user = userRepository.findById(id);

        return user.orElseThrow(() -> new UserNotFoundException(id));
    }

    public User setUser(User user){
        return userRepository.save(user);
    }
}

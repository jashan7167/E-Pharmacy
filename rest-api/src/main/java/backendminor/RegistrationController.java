package backendminor;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register")
public class RegistrationController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    public String registerUser(@RequestBody RegistrationRequest registrationRequest) {
        // Create a new User
        User user = new User();
        user.setUsername(registrationRequest.getUsername());
        user.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
        userRepository.save(user);

        // Create UserDetails
        UserDetails userDetails = new UserDetails();
        userDetails.setFirstName(registrationRequest.getFirstName());
        userDetails.setLastName(registrationRequest.getLastName());
        userDetails.setEmail(registrationRequest.getEmail());
        userDetails.setPhone(registrationRequest.getPhone());
        userDetails.setUser(user);
        userDetailsRepository.save(userDetails);

        return "User registered successfully";
    }


}
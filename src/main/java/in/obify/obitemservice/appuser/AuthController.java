package in.obify.obitemservice.appuser;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password, HttpServletRequest request) {
        if (authService.authenticate(username, password, request)) {
            return "Logged in successfully!";
        } else {
            return "Invalid credentials!";
        }
    }

    @PostMapping("/logout")
    public String logout(HttpServletRequest request) {
        authService.logout(request);
        return "Logged out successfully!";
    }
}


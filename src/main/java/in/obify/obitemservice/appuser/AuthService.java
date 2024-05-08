package in.obify.obitemservice.appuser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public boolean authenticate(String username, String password, HttpServletRequest request) {
        User user = userRepository.findByUsername(username);

        if (user == null || !user.getPassword().equals(password)) {
            return false;
        }

        HttpSession session = request.getSession(true);
        session.setAttribute("userId", user.getId());

        return true;
    }

    public Long getUserId(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            return (Long) session.getAttribute("userId");
        }
        return null;
    }

    public void logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
    }
}

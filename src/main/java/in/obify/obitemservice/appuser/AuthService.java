package in.obify.obitemservice.appuser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import in.obify.obitemservice.model.UserModel;
import in.obify.obitemservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public boolean authenticate(String username, String password, HttpServletRequest request) {
        UserModel user = userRepository.findByUsername(username);
        HttpSession session = request.getSession();
        session.setAttribute("userId", user.getId());
        System.out.println("User " + user.getUsername() + " added to session: " + session.getId());
        if(user.getPassword().compareTo(password)==0)
            return true;
        else
            return false;
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

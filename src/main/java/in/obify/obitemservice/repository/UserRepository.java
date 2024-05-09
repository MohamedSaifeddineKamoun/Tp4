package in.obify.obitemservice.repository;

import in.obify.obitemservice.appuser.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Long> {
    User findByUsername(String username);
}

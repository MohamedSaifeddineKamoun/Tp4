package in.obify.obitemservice.repository;

import in.obify.obitemservice.model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserModel, String> {
    UserModel findByUsername(String username);
}

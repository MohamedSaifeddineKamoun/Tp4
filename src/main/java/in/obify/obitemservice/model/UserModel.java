package in.obify.obitemservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.stereotype.Indexed;
import org.springframework.stereotype.Repository;

@Document(collection = "User")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserModel {

    @Id
    private String id;
    private String username;
    private String password;

}

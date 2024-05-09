package in.obify.obitemservice.appuser;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Data
@Document(collection = "User")
public class User {

    @Id
    private Long id;
    private String username;
    private String password;

}

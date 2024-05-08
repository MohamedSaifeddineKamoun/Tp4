package in.obify.obitemservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Repository;

@Document(collection = "Item")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Repository
public class ItemModel {
    @Id
    private String id;
    private String name;
    private String description;
    private Double price;
    private String categoryId;
}

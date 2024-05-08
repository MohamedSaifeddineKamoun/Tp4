package in.obify.obitemservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Repository;

@Document(collection = "ItemCategoryModel")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Repository
public class ItemCategoryModel {
    @Id
    private String id;
    private String name;
}

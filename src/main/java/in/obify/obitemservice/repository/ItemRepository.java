package in.obify.obitemservice.repository;

import in.obify.obitemservice.model.ItemModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@Repository
public interface ItemRepository extends ReactiveCrudRepository<ItemModel, String> {
    public void deleteAllByCategoryId(String categoryId);
    //public List<ItemModel> findAllByCategoryId(String categoryId);
    public Flux<ItemModel> findAll();
    public Mono<ItemModel> findById(String id);
    public Mono<ItemModel> insert(ItemModel model);

    public Mono<ItemModel> save(ItemModel model);
    public Mono<Void> deleteById(String id);
}

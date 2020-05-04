package repository;

import java.util.Collection;

import javax.persistence.TypedQuery;

import model.Book;
import model.Image;

public class ImageRepository extends EntityRepository<Image> {

	@Override
	protected String getAllEntityQueryName() {
		return Image.GET_ALL_IMAGES_ID;
	}

	@Override
	public Class<Image> getEntityClass() {
		return Image.class;
	}
	
	public Collection<Image> getAllImage(int idBook){
		TypedQuery<Image> query = entityManager.createNamedQuery(Image.GET_ALL_IMAGES_ID, Image.class);
		query.setParameter("idBook", idBook);
		return query.getResultList();
	}

}

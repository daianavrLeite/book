package repository;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import model.Book;
import model.Entity_;

public abstract class EntityRepository<T extends Entity_ >{
	
	@PersistenceContext
	protected EntityManager entityManager;
	
	public Collection<T> getAllEntity() {
		return entityManager.createNamedQuery(getAllEntityQueryName(), getEntityClass()).getResultList();
	}

	protected abstract String getAllEntityQueryName();

	public abstract Class<T> getEntityClass();


}

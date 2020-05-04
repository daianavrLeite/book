package services;

import java.util.Collection;

import javax.inject.Inject;
import javax.transaction.Transactional;

import model.Entity_;
import repository.EntityRepository;

@Transactional
public abstract class EntityService<R extends EntityRepository<E>, E extends Entity_>  {
	
	@Inject 
	protected R repository;
	
	public Collection<E> getAllEntity() {
		return repository.getAllEntity();
	}

}

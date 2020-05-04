package repository;

import java.util.Collection;

import javax.persistence.Query;
import javax.persistence.TypedQuery;

import model.Book;

public class BookRepository extends EntityRepository<Book> {

	@Override
	public Class<model.Book> getEntityClass() {
		return Book.class;
	}

	@Override
	protected String getAllEntityQueryName() {
		return Book.GET_ALL_BOOKS;
	}
	
	public Collection<Book> getBooksCategory(String category){
		TypedQuery<Book> query = entityManager.createNamedQuery(Book.GET_ALL_CATEGORY, Book.class);
		query.setParameter("category", category);
		return query.getResultList();
	}
	
	public Book getBookId(int idBook) {
		TypedQuery<Book> query = entityManager.createNamedQuery(Book.GET_ALL_ID, Book.class);
		query.setParameter("idBook", idBook);
		return query.getSingleResult();
	}
	

}

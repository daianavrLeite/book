package services;

import java.util.Collection;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.core.Response;

import model.Book;
import model.Image;
import repository.BookRepository;

@RequestScoped
public class BookService extends EntityService<BookRepository, Book> {
	
	@Inject
	protected imageService IMAGE_SERVICE ;
	
	@Override
	public Collection<Book> getAllEntity() {
		Collection<Book> books= super.getAllEntity();
		for (Book book : books) {
			Collection<Image> images= IMAGE_SERVICE.getAllImage(book.getId());
			book.getImage().addAll(images);
		}
	
		return books;
	}
	
	public Collection<Book> getBooksCategory(String category){
		Collection<Book> books= repository.getBooksCategory(category);
		for (Book book : books) {
			Collection<Image> images= IMAGE_SERVICE.getAllImage(book.getId());
			book.getImage().addAll(images);
		}
		return books;
	}
	
	public Book getBookId(int idBook) {
		Book book = repository.getBookId(idBook);
		Collection<Image> images= IMAGE_SERVICE.getAllImage(book.getId());
		book.getImage().addAll(images);
		return book ;
	}
	

//	public Response getProducts(int id) {
//		try {
//		
//			return Response.status(Response.Status.OK).entity(product).build();
//		} catch (Exception e) {
//			return Response.status(Response.Status.BAD_REQUEST).entity("non existing id").build();
//		}
//	}
}

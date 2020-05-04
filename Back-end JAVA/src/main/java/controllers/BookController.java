package controllers;

import java.util.Collection;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.CrossOrigin;

import model.Book;
import repository.BookRepository;
import services.BookService;


@CrossOrigin(origins = "http://localhost:3000")
@Path("book")
public class BookController  extends EntityController<BookService, BookRepository, Book> {

	@GET
	@Path("/category/{category}")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Book> getCategory(@PathParam("category") String category) {
		return service.getBooksCategory(category);
	}
	
	@GET
	@Path("/id/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Book getBookId(@PathParam("id") int id) {
		return service.getBookId(id);
	}
	
}

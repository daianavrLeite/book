package model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries({
	@NamedQuery(name= Image.GET_ALL_IMAGES_ID, query = "SELECT s FROM Image s where s.book.id = :idBook")
})
public class Image extends Entity_ {

	private static final long serialVersionUID = 1L;
	public static final String GET_ALL_IMAGES_ID = "Image.GET_ALL_IMAGES";
	private String url;
	
	@ManyToOne
	private Book book;
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}

	
}

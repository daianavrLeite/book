package model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Transient;

@Entity
@NamedQueries({
	
	@NamedQuery(name= Book.GET_ALL_BOOKS, query = "SELECT s FROM Book s"),

	@NamedQuery(name= Book.GET_ALL_CATEGORY, query = "SELECT s FROM Book s where s.category = :category"),
	@NamedQuery(name= Book.GET_ALL_ID, query = "SELECT s FROM Book s where s.id = :idBook")
})

public class Book extends Entity_ {

	private static final long serialVersionUID = 1L;
	
	public static final String GET_ALL_BOOKS = " Book.GET_ALL_BOOKS";
	public static final String GET_ALL_CATEGORY = " Book.GET_ALL_CATEGORY";
	public static final String GET_ALL_ID= " Book.GET_ALL_ID";

	public Book() {
		}

	private String name;
	private String category;
	private String title;
	private float price;
	private String description;
	private boolean destaque;
	
	@Transient
	private List<Image> image = new ArrayList<Image>();

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isDestaque() {
		return destaque;
	}

	public void setDestaque(boolean destaque) {
		this.destaque = destaque;
	}

	public List<Image> getImage() {
		return image;
	}

	public void setImage(List<Image> image) {
		this.image = image;
	}
	

}

package services;

import java.util.Collection;

import model.Image;
import repository.ImageRepository;

public class imageService extends EntityService<ImageRepository, Image>{
	

	public Collection<Image> getAllImage(int idBook){
		return repository.getAllImage(idBook);
	}
	
	
}

package controllers;

import java.util.Collection;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import model.Entity_;
import repository.EntityRepository;
import services.EntityService;

public abstract class EntityController<S extends EntityService<R, E>, R extends EntityRepository<E>, E extends Entity_>{
	@Inject // variavel ser injetada em runtime
	protected S service;

	@Context
	protected UriInfo context;
	
	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<E> getId() {
		return service.getAllEntity();
	}
	
	
	
	
//	@GET
//	@Path("/")
//	@Produces({MediaType.APPLICATION_JSON})
//	public Response index() {
//	    return Response
//	      .status(200)
//	      .header("Access-Control-Allow-Origin", "*")
//	      .header("Access-Control-Allow-Credentials", "true")
//	      .header("Access-Control-Allow-Headers",
//	        "origin, content-type, accept, authorization")
//	      .header("Access-Control-Allow-Methods", 
//	        "GET, POST, PUT, DELETE, OPTIONS, HEAD")
//	      .entity("")
//	      .build();
//	}

}

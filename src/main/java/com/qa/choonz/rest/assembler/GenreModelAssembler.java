package com.qa.choonz.rest.assembler;

import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;
import org.springframework.hateoas.CollectionModel;

import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.rest.controller.GenreController;
import com.qa.choonz.rest.model.GenreModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@Component
public class GenreModelAssembler extends RepresentationModelAssemblerSupport<Genre, GenreModel>{
	
	public GenreModelAssembler() {
		super(GenreController.class, GenreModel.class);
	}
	
	@Override
	public GenreModel toModel(Genre entity) {
		GenreModel genreModel = instantiateModel(entity);
		
		genreModel.add(linkTo(
				methodOn(GenreController.class)
				.findById(entity.getId()))
				.withSelfRel());
		genreModel.add(linkTo(
				methodOn(GenreController.class)
				.findAll())
				.withRel("genres"));
		
		genreModel.setId(entity.getId());
		genreModel.setName(entity.getName());
		genreModel.setDescription(entity.getDescription());
		genreModel.setTracks(entity.getTracks());
		return genreModel;
	}
	
	@Override
    public CollectionModel<GenreModel> toCollectionModel(Iterable<? extends Genre> entities) 
    {
        CollectionModel<GenreModel> genreModels = super.toCollectionModel(entities);
        genreModels.add(linkTo(methodOn(GenreController.class).findAll()).withSelfRel());
         
        return genreModels;
    }
}

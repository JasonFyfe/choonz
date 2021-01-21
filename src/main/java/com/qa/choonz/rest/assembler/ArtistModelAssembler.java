package com.qa.choonz.rest.assembler;

import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.rest.controller.ArtistController;
import com.qa.choonz.rest.model.ArtistModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import org.springframework.hateoas.CollectionModel;

@Component
public class ArtistModelAssembler extends RepresentationModelAssemblerSupport<Artist, ArtistModel>{
	
	public ArtistModelAssembler() {
		super(ArtistController.class, ArtistModel.class);
	}
	
	@Override
	public ArtistModel toModel(Artist entity) {
		ArtistModel artistModel = instantiateModel(entity);
		
		artistModel.add(linkTo(
				methodOn(ArtistController.class)
				.findById(entity.getId()))
				.withSelfRel());
		artistModel.add(linkTo(
				methodOn(ArtistController.class)
				.findAll())
				.withRel("artists"));
		
		artistModel.setId(entity.getId());
		artistModel.setName(entity.getName());
		return artistModel;
	}
	
	@Override
    public CollectionModel<ArtistModel> toCollectionModel(Iterable<? extends Artist> entities) 
    {
        CollectionModel<ArtistModel> artistModels = super.toCollectionModel(entities);
        artistModels.add(linkTo(methodOn(ArtistController.class).findAll()).withSelfRel());
         
        return artistModels;
    }
}

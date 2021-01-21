package com.qa.choonz.rest.assembler;

import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.rest.controller.AlbumController;
import com.qa.choonz.rest.model.AlbumModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import org.springframework.hateoas.CollectionModel;

@Component
public class AlbumModelAssembler extends RepresentationModelAssemblerSupport<Album, AlbumModel>{
	
	public AlbumModelAssembler() {
		super(AlbumController.class, AlbumModel.class);
	}
	
	@Override
	public AlbumModel toModel(Album entity) {
		AlbumModel albumModel = instantiateModel(entity);
		
		albumModel.add(linkTo(
				methodOn(AlbumController.class)
				.findById(entity.getId()))
				.withSelfRel());
		albumModel.add(linkTo(
				methodOn(AlbumController.class)
				.findAll())
				.withRel("albums"));
		
		albumModel.setId(entity.getId());
		albumModel.setName(entity.getName());
		albumModel.setCover(entity.getCover());
		albumModel.setArtist(entity.getArtist());
		albumModel.setTracks(entity.getTracks());
		return albumModel;
	}
	
	@Override
    public CollectionModel<AlbumModel> toCollectionModel(Iterable<? extends Album> entities) 
    {
        CollectionModel<AlbumModel> albumModels = super.toCollectionModel(entities);
        albumModels.add(linkTo(methodOn(AlbumController.class).findAll()).withSelfRel());
         
        return albumModels;
    }
}

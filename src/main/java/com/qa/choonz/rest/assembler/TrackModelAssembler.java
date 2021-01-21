package com.qa.choonz.rest.assembler;

import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.controller.TrackController;
import com.qa.choonz.rest.model.TrackModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import org.springframework.hateoas.CollectionModel;

@Component
public class TrackModelAssembler extends RepresentationModelAssemblerSupport<Track, TrackModel>{
	
	public TrackModelAssembler() {
		super(TrackController.class, TrackModel.class);
	}
	
	@Override
	public TrackModel toModel(Track entity) {
		TrackModel trackModel = instantiateModel(entity);
		
		trackModel.add(linkTo(
				methodOn(TrackController.class)
				.findById(entity.getId()))
				.withSelfRel());
		trackModel.add(linkTo(
				methodOn(TrackController.class)
				.findAll())
				.withRel("tracks"));
		trackModel.setId(entity.getId());
		trackModel.setName(entity.getName());
		trackModel.setPlaylist(entity.getPlaylist());
		trackModel.setGenre(entity.getGenre());
		trackModel.setDuration(entity.getDuration());
		trackModel.setLyrics(entity.getLyrics());
		return trackModel;
	}
	
	@Override
    public CollectionModel<TrackModel> toCollectionModel(Iterable<? extends Track> entities) 
    {
        CollectionModel<TrackModel> trackModels = super.toCollectionModel(entities);
        trackModels.add(linkTo(methodOn(TrackController.class).findAll()).withSelfRel());
         
        return trackModels;
    }
}

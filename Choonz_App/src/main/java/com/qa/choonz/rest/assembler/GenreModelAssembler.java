package com.qa.choonz.rest.assembler;

import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;
import org.springframework.hateoas.CollectionModel;

import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.controller.GenreController;
import com.qa.choonz.rest.controller.TrackController;
import com.qa.choonz.rest.model.GenreModel;
import com.qa.choonz.rest.model.TrackModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class GenreModelAssembler extends RepresentationModelAssemblerSupport<Genre, GenreModel>{
	
	public GenreModelAssembler() {
		super(GenreController.class, GenreModel.class);
	}
	
	@Override
	public GenreModel toModel(Genre entity) {
		GenreModel genreModel = instantiateModel(entity);
		
		genreModel.setId(entity.getId());
		genreModel.setName(entity.getName());
		genreModel.setDescription(entity.getDescription());
		genreModel.setTracks(toTrackModel(entity.getTracks()));
		
		genreModel.add(linkTo(
				methodOn(GenreController.class)
				.findById(entity.getId()))
				.withSelfRel());
		genreModel.add(linkTo(
				methodOn(GenreController.class)
				.findAll())
				.withRel("genres"));

		return genreModel;
	}
	
	@Override
    public CollectionModel<GenreModel> toCollectionModel(Iterable<? extends Genre> entities) 
    {
        CollectionModel<GenreModel> genreModels = super.toCollectionModel(entities);
        genreModels.add(linkTo(methodOn(GenreController.class).findAll()).withSelfRel());
         
        return genreModels;
    }
	
	private List<TrackModel> toTrackModel(List<Track> tracks) {
		if (tracks == null || tracks.isEmpty()) {
			return Collections.emptyList();
		}
		
		return tracks.stream().map(track -> TrackModel.builder()
				.id(track.getId())
				.name(track.getName())
				.build()
				.add(linkTo(
						methodOn(TrackController.class)
						.findById(track.getId()))
						.withSelfRel()))
				.collect(Collectors.toList());
	}
}

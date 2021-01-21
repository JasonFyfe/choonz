package com.qa.choonz.rest.assembler;

import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.rest.controller.PlaylistController;
import com.qa.choonz.rest.model.PlaylistModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import org.springframework.hateoas.CollectionModel;

@Component
public class PlaylistModelAssembler extends RepresentationModelAssemblerSupport<Playlist, PlaylistModel>{
	
	public PlaylistModelAssembler() {
		super(PlaylistController.class, PlaylistModel.class);
	}
	
	@Override
	public PlaylistModel toModel(Playlist entity) {
		PlaylistModel playlistModel = instantiateModel(entity);
		
		playlistModel.add(linkTo(
				methodOn(PlaylistController.class)
				.findById(entity.getId()))
				.withSelfRel());
		playlistModel.add(linkTo(
				methodOn(PlaylistController.class)
				.findAll())
				.withRel("playlists"));
		
		playlistModel.setId(entity.getId());
		playlistModel.setName(entity.getName());
		playlistModel.setDescription(entity.getDescription());
		playlistModel.setArtwork(entity.getArtwork());
		playlistModel.setTracks(entity.getTracks());

		return playlistModel;
	}

	@Override
	public CollectionModel<PlaylistModel> toCollectionModel(Iterable<? extends Playlist> entities) {
		CollectionModel<PlaylistModel> playlistModels = super.toCollectionModel(entities);
		playlistModels.add(linkTo(methodOn(PlaylistController.class).findAll()).withSelfRel());

		return playlistModels;
	}
}


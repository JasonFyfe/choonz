package com.qa.choonz.rest.assembler;

import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.controller.PlaylistController;
import com.qa.choonz.rest.controller.TrackController;
import com.qa.choonz.rest.model.PlaylistModel;
import com.qa.choonz.rest.model.TrackModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.hateoas.CollectionModel;

@Component
public class PlaylistModelAssembler extends RepresentationModelAssemblerSupport<Playlist, PlaylistModel>{
	
	public PlaylistModelAssembler() {
		super(PlaylistController.class, PlaylistModel.class);
	}
	
	@Override
	public PlaylistModel toModel(Playlist entity) {
		PlaylistModel playlistModel = instantiateModel(entity);
		
		playlistModel.setId(entity.getId());
		playlistModel.setName(entity.getName());
		playlistModel.setDescription(entity.getDescription());
		playlistModel.setArtwork(entity.getArtwork());
		playlistModel.setTracks(toTrackModel(entity.getTracks()));
		
		playlistModel.add(linkTo(
				methodOn(PlaylistController.class)
				.findById(entity.getId()))
				.withSelfRel());
		playlistModel.add(linkTo(
				methodOn(PlaylistController.class)
				.findAll())
				.withRel("playlists"));

		return playlistModel;
	}

	@Override
	public CollectionModel<PlaylistModel> toCollectionModel(Iterable<? extends Playlist> entities) {
		CollectionModel<PlaylistModel> playlistModels = super.toCollectionModel(entities);
		playlistModels.add(linkTo(methodOn(PlaylistController.class).findAll()).withSelfRel());

		return playlistModels;
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


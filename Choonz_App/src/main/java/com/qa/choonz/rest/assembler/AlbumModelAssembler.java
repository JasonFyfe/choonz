package com.qa.choonz.rest.assembler;

import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.controller.AlbumController;
import com.qa.choonz.rest.controller.ArtistController;
import com.qa.choonz.rest.controller.TrackController;
import com.qa.choonz.rest.model.AlbumModel;
import com.qa.choonz.rest.model.ArtistModel;
import com.qa.choonz.rest.model.TrackModel;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.hateoas.CollectionModel;

@Component
public class AlbumModelAssembler extends RepresentationModelAssemblerSupport<Album, AlbumModel>{
	
	public AlbumModelAssembler() {
		super(AlbumController.class, AlbumModel.class);
	}
	
	@Override
	public AlbumModel toModel(Album entity) {
		AlbumModel albumModel = instantiateModel(entity);

		albumModel.setId(entity.getId());
		albumModel.setName(entity.getName());
		albumModel.setCover(entity.getCover());
		albumModel.setArtist(toArtistModel(entity.getArtist()));
		albumModel.setTracks(toTrackModel(entity.getTracks()));
		
		albumModel.add(linkTo(
				methodOn(AlbumController.class)
				.findById(entity.getId()))
				.withSelfRel());
		albumModel.add(linkTo(
				methodOn(AlbumController.class)
				.findAll())
				.withRel("albums"));
		
		return albumModel;
	}
	
	@Override
    public CollectionModel<AlbumModel> toCollectionModel(Iterable<? extends Album> entities) 
    {
        CollectionModel<AlbumModel> albumModels = super.toCollectionModel(entities);
        albumModels.add(linkTo(methodOn(AlbumController.class).findAll()).withSelfRel());
         
        return albumModels;
    }
	
	private List<TrackModel> toTrackModel(List<Track> tracks) {
		if (tracks == null || tracks.isEmpty()) {
			return Collections.emptyList();
		}
		
		return tracks.stream().map(track -> TrackModel.builder()
				.id(track.getId())
				.name(track.getName())
				.duration(track.getDuration())
				.build()
				.add(linkTo(
						methodOn(TrackController.class)
						.findById(track.getId()))
						.withSelfRel()))
				.collect(Collectors.toList());
	}
	
	private ArtistModel toArtistModel(Artist artist) {
		if (artist == null) {
			return new ArtistModel();
		}
		
		return ArtistModel.builder()
				.id(artist.getId())
				.name(artist.getName())
				.build()
				.add(linkTo(
						methodOn(ArtistController.class)
						.findById(artist.getId()))
						.withSelfRel());
	}
}

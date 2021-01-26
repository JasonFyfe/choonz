package com.qa.choonz.rest.assembler;

import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.controller.AlbumController;
import com.qa.choonz.rest.controller.GenreController;
import com.qa.choonz.rest.controller.PlaylistController;
import com.qa.choonz.rest.controller.TrackController;
import com.qa.choonz.rest.model.AlbumModel;
import com.qa.choonz.rest.model.GenreModel;
import com.qa.choonz.rest.model.PlaylistModel;
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
		
		trackModel.setId(entity.getId());
		trackModel.setName(entity.getName());
		trackModel.setDuration(entity.getDuration());
		trackModel.setLyrics(entity.getLyrics());
		trackModel.setAlbum(toAlbumModel(entity.getAlbum()));
		trackModel.setPlaylist(toPlaylistModel(entity.getPlaylist()));
		trackModel.setGenre(toGenreModel(entity.getGenre()));
		
		trackModel.add(linkTo(
				methodOn(TrackController.class)
				.findById(entity.getId()))
				.withSelfRel());
		trackModel.add(linkTo(
				methodOn(TrackController.class)
				.findAll())
				.withRel("tracks"));

		return trackModel;
	}
	
	@Override
    public CollectionModel<TrackModel> toCollectionModel(Iterable<? extends Track> entities) 
    {
        CollectionModel<TrackModel> trackModels = super.toCollectionModel(entities);
        trackModels.add(linkTo(methodOn(TrackController.class).findAll()).withSelfRel());
         
        return trackModels;
    }

	private AlbumModel toAlbumModel(Album album) {
		if (album == null) {
			return new AlbumModel();
		}
		
		return AlbumModel.builder()
				.id(album.getId())
				.name(album.getName())
				.build()
				.add(linkTo(
						methodOn(AlbumController.class)
						.findById(album.getId()))
						.withSelfRel());
	}
	
	private PlaylistModel toPlaylistModel(Playlist playlist) {
		if (playlist == null) {
			return new PlaylistModel();
		}
		
		return PlaylistModel.builder()
				.id(playlist.getId())
				.name(playlist.getName())
				.build()
				.add(linkTo(
						methodOn(PlaylistController.class)
						.findById(playlist.getId()))
						.withSelfRel());
	}
	
	private GenreModel toGenreModel(Genre genre) {
		if (genre == null) {
			return new GenreModel();
		}
		
		
		
		return GenreModel.builder()
				.id(genre.getId())
				.name(genre.getName())
				.build()
				.add(linkTo(
						methodOn(GenreController.class)
						.findById(genre.getId()))
						.withSelfRel());
	}
}

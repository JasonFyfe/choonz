package com.qa.choonz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.stereotype.Service;

import com.qa.choonz.exception.PlaylistNotFoundException;
import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.persistence.repository.PlaylistRepository;
import com.qa.choonz.rest.assembler.PlaylistModelAssembler;
import com.qa.choonz.rest.model.PlaylistModel;

@Service
public class PlaylistService {

	@Autowired
    private PlaylistRepository repo;
	
	@Autowired
	private PlaylistModelAssembler assembler;

    public PlaylistService() {
        super();
    }

    public PlaylistModel create(Playlist playlist) {
        return this.assembler.toModel(this.repo.save(playlist));
    }

    public CollectionModel<PlaylistModel> findAll() {
        return this.assembler.toCollectionModel(this.repo.findAll());
    }

    public PlaylistModel findById(long id) {
        return this.assembler.toModel(this.repo.findById(id).orElseThrow(PlaylistNotFoundException::new));
    }

    public PlaylistModel update(Playlist playlist, long id) {
        Playlist entity = this.repo.findById(id).orElseThrow(PlaylistNotFoundException::new);
        entity.setName(playlist.getName());
        entity.setDescription(playlist.getDescription());
        entity.setArtwork(playlist.getArtwork());
        entity.setTracks(playlist.getTracks());
        return this.assembler.toModel(this.repo.save(entity));
    }

    public boolean delete(long id) {
        this.repo.deleteById(id);
        return !this.repo.existsById(id);
    }

}

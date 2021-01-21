package com.qa.choonz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.stereotype.Service;

import com.qa.choonz.exception.AlbumNotFoundException;
import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.repository.AlbumRepository;
import com.qa.choonz.rest.assembler.AlbumModelAssembler;
import com.qa.choonz.rest.model.AlbumModel;

@Service
public class AlbumService {

	@Autowired
    private AlbumRepository repo;
	
	@Autowired
	private AlbumModelAssembler assembler;

    public AlbumService() {
        super();
    }

    public AlbumModel create(Album album) {
        return this.assembler.toModel(this.repo.save(album));
    }

    public CollectionModel<AlbumModel> findAll() {
        return this.assembler.toCollectionModel(this.repo.findAll());
    }

    public AlbumModel findById(long id) {
        return this.assembler.toModel(this.repo.findById(id).orElseThrow(AlbumNotFoundException::new));
    }

    public AlbumModel update(Album album, long id) {
        Album entity = this.repo.findById(id).orElseThrow(AlbumNotFoundException::new);
        entity.setName(album.getName());
        entity.setTracks(album.getTracks());
        entity.setArtist(album.getArtist());
        entity.setCover(album.getCover());
        return this.assembler.toModel(this.repo.save(entity));
    }

    public boolean delete(long id) {
        this.repo.deleteById(id);
        return !this.repo.existsById(id);
    }

}

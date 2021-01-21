package com.qa.choonz.service;

import java.util.List;

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
	private AlbumModelAssembler albumModelAssembler;

    public AlbumService() {
        super();
    }

    public AlbumModel create(Album album) {
        Album entity = this.repo.save(album);
        return this.albumModelAssembler.toModel(entity);
    }

    public CollectionModel<AlbumModel> findAll() {
    	List<Album> entities = this.repo.findAll();
        return this.albumModelAssembler.toCollectionModel(entities);
    }

    public AlbumModel findById(long id) {
        Album entity = this.repo.findById(id).orElseThrow(AlbumNotFoundException::new);
        return this.albumModelAssembler.toModel(entity);
    }

    public AlbumModel update(Album album, long id) {
        Album entity = this.repo.findById(id).orElseThrow(AlbumNotFoundException::new);
        entity.setName(album.getName());
        entity.setTracks(album.getTracks());
        entity.setArtist(album.getArtist());
        entity.setCover(album.getCover());
        return this.albumModelAssembler.toModel(this.repo.save(entity));
    }

    public boolean delete(long id) {
        this.repo.deleteById(id);
        return !this.repo.existsById(id);
    }

}

package com.qa.choonz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.stereotype.Service;

import com.qa.choonz.exception.ArtistNotFoundException;
import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.persistence.repository.ArtistRepository;
import com.qa.choonz.rest.assembler.ArtistModelAssembler;
import com.qa.choonz.rest.model.ArtistModel;

@Service
public class ArtistService {

	@Autowired
    private ArtistRepository repo;
	
	@Autowired
	private ArtistModelAssembler artistModelAssembler;

    public ArtistService() {
        super();
    }

    // TODO Implement exception
    public ArtistModel create(Artist artist) {
    	Artist entity = this.repo.save(artist);
    	ArtistModel model = artistModelAssembler.toModel(entity);
        return model;
    }
    
    // TODO Implement exception
    public CollectionModel<ArtistModel> findAll() {
    	List<Artist> entities = this.repo.findAll();
    	CollectionModel<ArtistModel> models = artistModelAssembler.toCollectionModel(entities);
    	return models;
    }
    
    // TODO Implement exception
    public ArtistModel findById(long id) {
    	Artist entity = this.repo.getOne(id);
    	ArtistModel model = artistModelAssembler.toModel(entity);
        return model;
    }
    
    public ArtistModel update(Artist artist, long id) {
        Artist entity = this.repo.findById(id).orElseThrow(ArtistNotFoundException::new);
        entity.setName(artist.getName());
        ArtistModel model = artistModelAssembler.toModel(this.repo.save(entity));
        return model;
    }

    public boolean delete(long id) {
        this.repo.deleteById(id);
        return !this.repo.existsById(id);
    }
}
package com.qa.choonz.service;

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
	private ArtistModelAssembler assembler;

    public ArtistService() {
        super();
    }

    public ArtistModel create(Artist artist) {
    	return this.assembler.toModel(this.repo.save(artist));
    }
    
    public CollectionModel<ArtistModel> findAll() {
    	return this.assembler.toCollectionModel(this.repo.findAll());
    }

    public ArtistModel findById(long id) {
    	return this.assembler.toModel(this.repo.findById(id).orElseThrow(ArtistNotFoundException::new));
    }
    
    public ArtistModel update(Artist artist, long id) {
        Artist entity = this.repo.findById(id).orElseThrow(ArtistNotFoundException::new);
        entity.setName(artist.getName());
        return this.assembler.toModel(this.repo.save(entity));
    }

    public boolean delete(long id) {
        this.repo.deleteById(id);
        return !this.repo.existsById(id);
    }
}
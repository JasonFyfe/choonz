package com.qa.choonz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.stereotype.Service;

import com.qa.choonz.exception.GenreNotFoundException;
import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.persistence.repository.GenreRepository;
import com.qa.choonz.rest.assembler.GenreModelAssembler;
import com.qa.choonz.rest.model.GenreModel;

@Service
public class GenreService {

	@Autowired
    private GenreRepository repo;
	
	@Autowired
	private GenreModelAssembler assembler;

    public GenreService() {
        super();
    }

    public GenreModel create(Genre genre) {
        return this.assembler.toModel(this.repo.save(genre));
    }

    public CollectionModel<GenreModel> findAll() {
        return this.assembler.toCollectionModel(this.repo.findAll());
    }

    public GenreModel findById(long id) {
        return this.assembler.toModel(this.repo.findById(id).orElseThrow(GenreNotFoundException::new));
    }

    public GenreModel update(Genre genre, long id) {
        Genre entity = this.repo.findById(id).orElseThrow(GenreNotFoundException::new);
        entity.setName(genre.getName());
        entity.setDescription(genre.getDescription());
        entity.setTracks(genre.getTracks());
        return this.assembler.toModel(this.repo.save(entity));
    }

    public boolean delete(long id) {
        this.repo.deleteById(id);
        return !this.repo.existsById(id);
    }

}

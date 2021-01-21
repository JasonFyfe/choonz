package com.qa.choonz.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.rest.model.ArtistModel;
import com.qa.choonz.service.ArtistService;

@RestController
@RequestMapping("/artists")
@CrossOrigin
public class ArtistController {

	@Autowired
    private ArtistService service;

    public ArtistController() {
        super();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Artist artist) {
    	ArtistModel artistModel = this.service.create(artist);
        return new ResponseEntity<>(artistModel, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<CollectionModel<ArtistModel>> findAll() {
    	CollectionModel<ArtistModel> artistModels = this.service.findAll();
    	return new ResponseEntity<>(artistModels, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArtistModel> findById(@PathVariable long id) {
    	ArtistModel artistModel = this.service.findById(id);
    	return new ResponseEntity<>(artistModel, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ArtistModel> update(@RequestBody Artist artist, @PathVariable long id) {
    	ArtistModel artistModel = this.service.update(artist, id);
        return new ResponseEntity<>(artistModel, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Artist> delete(@PathVariable long id) {
        return this.service.delete(id)
        		? new ResponseEntity<Artist>(HttpStatus.NO_CONTENT)
                : new ResponseEntity<Artist>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
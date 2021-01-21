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
@RequestMapping(value = "/artists", produces = "application/hal+json")
@CrossOrigin
public class ArtistController {

	@Autowired
    private ArtistService service;

    public ArtistController() {
        super();
    }

    @PostMapping
    public ResponseEntity<ArtistModel> create(@RequestBody Artist artist) {
        return new ResponseEntity<ArtistModel>(this.service.create(artist), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<CollectionModel<ArtistModel>> findAll() {
    	return new ResponseEntity<CollectionModel<ArtistModel>>(this.service.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArtistModel> findById(@PathVariable long id) {
    	return new ResponseEntity<ArtistModel>(this.service.findById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ArtistModel> update(@RequestBody Artist artist, @PathVariable long id) {
        return new ResponseEntity<ArtistModel>(this.service.update(artist, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ArtistModel> delete(@PathVariable long id) {
        return this.service.delete(id)
        		? new ResponseEntity<ArtistModel>(HttpStatus.NO_CONTENT)
                : new ResponseEntity<ArtistModel>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
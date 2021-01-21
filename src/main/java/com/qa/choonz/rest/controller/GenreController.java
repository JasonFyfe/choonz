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

import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.rest.model.GenreModel;
import com.qa.choonz.service.GenreService;

@RestController
@RequestMapping("/genres")
@CrossOrigin
public class GenreController {

	@Autowired
    private GenreService service;

    public GenreController() {
        super();
    }

    @PostMapping
    public ResponseEntity<GenreModel> create(@RequestBody Genre genre) {
        return new ResponseEntity<GenreModel>(this.service.create(genre), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<CollectionModel<GenreModel>> findAll() {
        return new ResponseEntity<CollectionModel<GenreModel>>(this.service.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<GenreModel> findById(@PathVariable long id) {
        return new ResponseEntity<GenreModel>(this.service.findById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<GenreModel> update(@RequestBody Genre genre, @PathVariable long id) {
        return new ResponseEntity<GenreModel>(this.service.update(genre, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenreModel> delete(@PathVariable long id) {
        return this.service.delete(id)
        		? new ResponseEntity<GenreModel>(HttpStatus.NO_CONTENT)
                : new ResponseEntity<GenreModel>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
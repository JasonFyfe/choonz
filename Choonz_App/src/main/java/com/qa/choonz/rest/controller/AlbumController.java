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

import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.rest.model.AlbumModel;
import com.qa.choonz.service.AlbumService;

@RestController
@RequestMapping
@CrossOrigin
public class AlbumController {

	@Autowired
    private AlbumService service;

    public AlbumController() {
        super();
    }

    @PostMapping("/api/albums")
    public ResponseEntity<AlbumModel> create(@RequestBody Album album) {
        return new ResponseEntity<AlbumModel>(this.service.create(album), HttpStatus.CREATED);
    }

    @GetMapping("/api/albums")
    public ResponseEntity<CollectionModel<AlbumModel>> findAll() {
        return new ResponseEntity<CollectionModel<AlbumModel>>(this.service.findAll(), HttpStatus.OK);
    }

    @GetMapping("/api/albums/{id}")
    public ResponseEntity<AlbumModel> findById(@PathVariable long id) {
        return new ResponseEntity<AlbumModel>(this.service.findById(id), HttpStatus.OK);
    }

    @PutMapping("/api/albums/{id}")
    public ResponseEntity<AlbumModel> update(@RequestBody Album album, @PathVariable long id) {
        return new ResponseEntity<AlbumModel>(this.service.update(album, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/api/albums/{id}")
    public ResponseEntity<AlbumModel> delete(@PathVariable long id) {
        return this.service.delete(id)
        		? new ResponseEntity<AlbumModel>(HttpStatus.NO_CONTENT)
                : new ResponseEntity<AlbumModel>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
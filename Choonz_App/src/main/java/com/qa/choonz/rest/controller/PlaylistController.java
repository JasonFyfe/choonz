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

import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.rest.model.PlaylistModel;
import com.qa.choonz.service.PlaylistService;

@RestController
@RequestMapping
@CrossOrigin
public class PlaylistController {

	@Autowired
    private PlaylistService service;
	
    public PlaylistController() {
        super();
    }

    @PostMapping("/api/playlists")
    public ResponseEntity<PlaylistModel> create(@RequestBody Playlist playlist) {
        return new ResponseEntity<PlaylistModel>(this.service.create(playlist), HttpStatus.CREATED);
    }

    @GetMapping("/api/playlists")
    public ResponseEntity<CollectionModel<PlaylistModel>> findAll() {
        return new ResponseEntity<CollectionModel<PlaylistModel>>(this.service.findAll(), HttpStatus.OK);
    }

    @GetMapping("/api/playlists/{id}")
    public ResponseEntity<PlaylistModel> findById(@PathVariable long id) {
        return new ResponseEntity<PlaylistModel>(this.service.findById(id), HttpStatus.OK);
    }

    @PutMapping("/api/playlists/{id}")
    public ResponseEntity<PlaylistModel> update(@RequestBody Playlist playlist, @PathVariable long id) {
        return new ResponseEntity<PlaylistModel>(this.service.update(playlist, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/api/playlists/{id}")
    public ResponseEntity<PlaylistModel> delete(@PathVariable long id) {
        return this.service.delete(id)
        		? new ResponseEntity<PlaylistModel>(HttpStatus.NO_CONTENT)
                : new ResponseEntity<PlaylistModel>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
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

import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.model.TrackModel;
import com.qa.choonz.service.TrackService;

@RestController
@RequestMapping("/tracks")
@CrossOrigin
public class TrackController {

	@Autowired
    private TrackService service;

    public TrackController() {
        super();
    }

    @PostMapping
    public ResponseEntity<TrackModel> create(@RequestBody Track track) {
        return new ResponseEntity<TrackModel>(this.service.create(track), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<CollectionModel<TrackModel>> findAll() {
        return new ResponseEntity<CollectionModel<TrackModel>>(this.service.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrackModel> findById(@PathVariable long id) {
        return new ResponseEntity<TrackModel>(this.service.findById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TrackModel> update(@RequestBody Track track, @PathVariable long id) {
        return new ResponseEntity<TrackModel>(this.service.update(track, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<TrackModel> delete(@PathVariable long id) {
        return this.service.delete(id)
        		? new ResponseEntity<TrackModel>(HttpStatus.NO_CONTENT)
                : new ResponseEntity<TrackModel>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  
}
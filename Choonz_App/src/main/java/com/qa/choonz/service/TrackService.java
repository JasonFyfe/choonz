package com.qa.choonz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.stereotype.Service;

import com.qa.choonz.exception.TrackNotFoundException;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.persistence.repository.TrackRepository;
import com.qa.choonz.rest.assembler.TrackModelAssembler;
import com.qa.choonz.rest.model.TrackModel;

@Service
public class TrackService {

	@Autowired
    private TrackRepository repo;
	
	@Autowired
	private TrackModelAssembler assembler;

    public TrackService() {
        super();
    }
    
    public TrackModel create(Track track) {
    	return this.assembler.toModel(this.repo.save(track));
    }

    public CollectionModel<TrackModel> findAll() {
        return this.assembler.toCollectionModel(this.repo.findAll());
    }

    public TrackModel findById(long id) {
    	return this.assembler.toModel(this.repo.findById(id).orElseThrow(TrackNotFoundException::new));
    }

    public TrackModel update(Track track, long id) {
        Track entity = this.repo.findById(id).orElseThrow(TrackNotFoundException::new);
        entity.setName(track.getName());
        entity.setAlbum(track.getAlbum());
        entity.setDuration(track.getDuration());
        entity.setLyrics(track.getLyrics());
        entity.setPlaylist(track.getPlaylist());
        entity.setGenre(track.getGenre());
        return this.assembler.toModel(this.repo.save(entity));
    }

    public boolean delete(long id) {
        this.repo.deleteById(id);
        return !this.repo.existsById(id);
    }

}

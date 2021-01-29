package com.qa.choonz.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.choonz.config.SingleTenantTest;
import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.assembler.TrackModelAssembler;
import com.qa.choonz.rest.model.TrackModel;

@SingleTenantTest
@AutoConfigureMockMvc
class TrackControllerIntegrationTest {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private ObjectMapper jsonifier;

	@Autowired
	private TrackModelAssembler assembler;

	private final String URI = "/api/tracks";
	
	private List<Track> tracks = Collections.emptyList();
	private Artist artist = new Artist();
	
	private Album album = new Album(1L, "Album Name", "Album Cover", tracks, artist);
	private Genre genre = new Genre(1L, "Genre Name", "Genre Description", tracks);
	private Playlist playlist = new Playlist(1L, "Playlist Name", "Description", "Artwork", tracks);

	private final Track TEST_TRACK_1 = new Track(1L, "Cotton", album, playlist, genre, 360, "This song is for the rats...");

	@Test
	void createTest() throws Exception {
		TrackModel testModel = this.assembler.toModel(TEST_TRACK_1);
		String testModelJson = this.jsonifier.writeValueAsString(testModel);
		RequestBuilder request = post(URI + "/").contentType(MediaType.APPLICATION_JSON).content(testModelJson);
		this.mvc.perform(request).andExpect(status().isCreated());
	}

	@Test
	void readAllTest() throws Exception {
		RequestBuilder request = get(URI + "/").contentType(MediaType.APPLICATION_JSON);
		this.mvc.perform(request).andExpect(status().isOk());
	}

	@Test
	void readOneTest() throws Exception {
		RequestBuilder request = get(URI + "/1").contentType(MediaType.APPLICATION_JSON);
		this.mvc.perform(request).andExpect(status().isOk()).andReturn();
	}

	@Test
	void updateTest() throws Exception {
		String toUpdate = "{\"name\": \"Positions\",\"duration\": 247,\"lyrics\": \"Switching the positions for you...\"}";
		RequestBuilder request = put(URI + "/1").contentType(MediaType.APPLICATION_JSON).content(toUpdate);
		this.mvc.perform(request).andExpect(status().isAccepted());
	}

	@Test
	void deleteTest() throws Exception {
		RequestBuilder request = delete(URI + "/1");
		ResultMatcher checkStatus = status().isNoContent();

		this.mvc.perform(request).andExpect(checkStatus);
	}

}
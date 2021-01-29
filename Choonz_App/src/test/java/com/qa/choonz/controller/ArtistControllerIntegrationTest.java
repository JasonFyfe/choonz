package com.qa.choonz.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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
import com.qa.choonz.rest.assembler.ArtistModelAssembler;

@SingleTenantTest
@AutoConfigureMockMvc
public class ArtistControllerIntegrationTest {

	@Autowired
	private MockMvc mvc;
	
	@Autowired
	private ObjectMapper jsonifier;
	
	@Autowired
	private ArtistModelAssembler assembler;
	
	private Album album = new Album(1L, "name", "cover", null, null);
	private List<Album> albums = List.of(album);
	
	private final String URI = "/api/artists";
	
	private final Artist TEST_ARTIST = new Artist(1L, "The Mountain Goats", albums);
	
	@Test
	void createTest() throws Exception {
		String testModelJson = this.jsonifier.writeValueAsString(this.assembler.toModel(TEST_ARTIST));
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
		String toUpdate = "{\"name\":\"Wardruna\"}";
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

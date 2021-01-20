package com.qa.choonz.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.choonz.config.SingleTenantTest;
import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.dto.AlbumDTO;

@SingleTenantTest
@AutoConfigureMockMvc
public class AlbumControllerIntegrationTest {
	
	@Autowired
	private MockMvc mvc;
	
	@Autowired
	private ObjectMapper jsonifier;
	
	@Autowired
	private ModelMapper mapper;
	
	private List<Track> tracks = Collections.emptyList();
	
	private AlbumDTO mapToDTO(Album album) {
		return this.mapper.map(album, AlbumDTO.class);
	}
	
	private final String URI = "/albums";
	
	private final Album TEST_Album_1 = new Album(1L, "We Shall All Be Healed", "some url", tracks);
	private final Album TEST_Album_2 = new Album(2L, "Tallahassee", "some other url", tracks);
	private final Album TEST_Album_3 = new Album(3L, "In League With Dragons", "some other other url", tracks);
	private final Album TEST_Album_4 = new Album(4L, "The Sunset Tree", "and another", tracks);
	private final Album TEST_Album_5 = new Album(5L, "These Four Walls", "and again!", tracks);
	
	@Test
	void createTest() throws Exception {
		AlbumDTO testDTO = mapToDTO(new Album("Biffy Clyro", "www.biffyclyro.com"));
		String testDTOAsJSON = this.jsonifier.writeValueAsString(testDTO);
		
		RequestBuilder request = post(URI + "/create").contentType(MediaType.APPLICATION_JSON).content(testDTOAsJSON);
		
		ResultMatcher checkStatus = status().isCreated();
		
		AlbumDTO testSavedDTO = mapToDTO(new Album(6L, "Biffy Clyro", "www.biffyclyro.com"));
		String testSavedDTOAsJSON = this.jsonifier.writeValueAsString(testSavedDTO);
		
		ResultMatcher checkBody = content().json(testSavedDTOAsJSON);
		
		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void readAllTest() throws Exception {
		String expected = this.jsonifier.writeValueAsString(List.of(this.mapToDTO(TEST_Album_1),
																	this.mapToDTO(TEST_Album_2),
																	this.mapToDTO(TEST_Album_3),
																	this.mapToDTO(TEST_Album_4),
																	this.mapToDTO(TEST_Album_5)));
		RequestBuilder request = get(URI + "/read").contentType(MediaType.APPLICATION_JSON);
		ResultMatcher checkStatus = status().isOk();
		MvcResult result = mvc.perform(request).andExpect(checkStatus).andReturn();
		
		String content = result.getResponse().getContentAsString();
	
		assertThat(expected).isEqualTo(content);
	}
	
	@Test
	void readOneTest() throws Exception {
		String expected = this.jsonifier.writeValueAsString(this.mapToDTO(TEST_Album_1));
		
		RequestBuilder request = get(URI + "/read/1").contentType(MediaType.APPLICATION_JSON);
		ResultMatcher checkStatus = status().isOk();
		MvcResult result = mvc.perform(request).andExpect(checkStatus).andReturn();
		
		String content = result.getResponse().getContentAsString();
		
		assertThat(expected).isEqualTo(content);
	}
	
	@Test
	void updateTest() throws Exception {
		String toUpdate = "{\"name\":\"Hello\",\"cover\":\"www.world.com\"}";
		String expected = this.jsonifier.writeValueAsString(this.mapToDTO(new Album(1L, "Hello", "www.world.com")));
		RequestBuilder request = put(URI + "/update/1").contentType(MediaType.APPLICATION_JSON).content(toUpdate);
		ResultMatcher checkStatus = status().isAccepted();
		MvcResult result = mvc.perform(request).andExpect(checkStatus).andReturn();
		
		String content = result.getResponse().getContentAsString();
		
		assertThat(expected).isEqualTo(content);
	}
	
	@Test
	void deleteTest() throws Exception {
		RequestBuilder request = delete(URI + "/delete/1");
		ResultMatcher checkStatus = status().isNoContent();
		
		this.mvc.perform(request).andExpect(checkStatus);
	}
}

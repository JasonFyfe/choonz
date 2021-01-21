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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.choonz.config.SingleTenantTest;
import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.rest.assembler.ArtistModelAssembler;
import com.qa.choonz.rest.model.ArtistModel;

@SingleTenantTest
@AutoConfigureMockMvc
public class ArtistControllerIntegrationTest {
	@Autowired
	private MockMvc mvc;
	
	@Autowired
	private ObjectMapper jsonifier;
	
	@Autowired
	private ArtistModelAssembler assembler;
	
	private List<Album> albums = Collections.emptyList();
	
	private final String URI = "/artists";
	
	private final Artist TEST_Artist_1 = new Artist(1L, "The Mountain Goats", albums);
	private final Artist TEST_Artist_2 = new Artist(2L, "We Were Promised Jetpacks", albums);
	
	private final List<Artist> LIST_OF_ARTISTS = List.of(TEST_Artist_1, TEST_Artist_2);
	
	@Test
	void createTest() throws Exception {
		ArtistModel testModel = this.assembler.toModel(TEST_Artist_1);
		String expected = this.jsonifier.writeValueAsString(testModel);
		
		RequestBuilder request = post(URI + "/").contentType(MediaType.APPLICATION_JSON).content(expected);
		
		ResultMatcher checkStatus = status().isCreated();
		
		ArtistModel testSavedModel = this.assembler.toModel(TEST_Artist_1);
		testSavedModel.setId(3L);
		String testSavedModelAsJSON = this.jsonifier.writeValueAsString(testSavedModel);
		
		ResultMatcher checkBody = content().json(testSavedModelAsJSON);
		
		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void readAllTest() throws Exception {
		CollectionModel<ArtistModel> models = this.assembler.toCollectionModel(LIST_OF_ARTISTS);
		String expected = this.jsonifier.writeValueAsString(models);
		RequestBuilder request = get(URI + "/").contentType(MediaType.APPLICATION_JSON);
		ResultMatcher checkStatus = status().isOk();
		MvcResult result = mvc.perform(request).andExpect(checkStatus).andReturn();
		
		String content = result.getResponse().getContentAsString();
	
		assertThat(expected).isEqualTo(content);
	}
	
	@Test
	void readOneTest() throws Exception {
		String expected = this.jsonifier.writeValueAsString(this.assembler.toModel(TEST_Artist_1));
		
		RequestBuilder request = get(URI + "/1").contentType(MediaType.APPLICATION_JSON);
		ResultMatcher checkStatus = status().isOk();
		MvcResult result = mvc.perform(request).andExpect(checkStatus).andReturn();
		
		String content = result.getResponse().getContentAsString();
		
		assertThat(expected).isEqualTo(content);
	}
	
	@Test
	void updateTest() throws Exception {
		String toUpdate = "{\"name\":\"Wardruna\"}";
		String expected = this.jsonifier.writeValueAsString(this.assembler.toModel(TEST_Artist_1));
		RequestBuilder request = put(URI + "/1").contentType(MediaType.APPLICATION_JSON).content(toUpdate);
		ResultMatcher checkStatus = status().isAccepted();
		MvcResult result = mvc.perform(request).andExpect(checkStatus).andReturn();
		
		String content = result.getResponse().getContentAsString();
		
		assertThat(expected).isEqualTo(content);
	}
	
	@Test
	void deleteTest() throws Exception {
		RequestBuilder request = delete(URI + "/1");
		ResultMatcher checkStatus = status().isNoContent();
		
		this.mvc.perform(request).andExpect(checkStatus);
	}
}

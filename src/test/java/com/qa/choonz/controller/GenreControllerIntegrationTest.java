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
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.choonz.config.SingleTenantTest;
import com.qa.choonz.config.SingleTenantTest;
import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.dto.GenreDTO;

@SingleTenantTest
@AutoConfigureMockMvc
public class GenreControllerIntegrationTest {
	@Autowired
	private MockMvc mvc;
	
	@Autowired
	private ObjectMapper jsonifier;
	
	@Autowired
	private ModelMapper mapper;
	
	private List<Track> tracks = Collections.emptyList();
	
	private GenreDTO mapToDTO(Genre genre) {
		return this.mapper.map(genre, GenreDTO.class);
	}
	
	private final String URI = "/genres";
	
	private final Genre TEST_Genre_1 = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", tracks);
	private final Genre TEST_Genre_2 = new Genre(2L, "Indie Rock and Roll", "straight bangers from your youth", tracks);
	
	@Test
	void createTest() throws Exception {
		GenreDTO testDTO = mapToDTO(new Genre("Metal", "Hardcore metal to get you through the day."));
		String testDTOAsJSON = this.jsonifier.writeValueAsString(testDTO);
		
		RequestBuilder request = post(URI + "/create").contentType(MediaType.APPLICATION_JSON).content(testDTOAsJSON);
		
		ResultMatcher checkStatus = status().isCreated();
		
		GenreDTO testSavedDTO = mapToDTO(new Genre(3L, "Metal", "Hardcore metal to get you through the day."));
		String testSavedDTOAsJSON = this.jsonifier.writeValueAsString(testSavedDTO);
		
		ResultMatcher checkBody = content().json(testSavedDTOAsJSON);
		
		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void readAllTest() throws Exception {
		String expected = this.jsonifier.writeValueAsString(List.of(this.mapToDTO(TEST_Genre_1),
																	this.mapToDTO(TEST_Genre_2)));
		RequestBuilder request = get(URI + "/read").contentType(MediaType.APPLICATION_JSON);
		ResultMatcher checkStatus = status().isOk();
		MvcResult result = mvc.perform(request).andExpect(checkStatus).andReturn();
		
		String content = result.getResponse().getContentAsString();
	
		assertThat(expected).isEqualTo(content);
	}
	
	@Test
	void readOneTest() throws Exception {
		String expected = this.jsonifier.writeValueAsString(this.mapToDTO(TEST_Genre_1));
		
		RequestBuilder request = get(URI + "/read/1").contentType(MediaType.APPLICATION_JSON);
		ResultMatcher checkStatus = status().isOk();
		MvcResult result = mvc.perform(request).andExpect(checkStatus).andReturn();
		
		String content = result.getResponse().getContentAsString();
		
		assertThat(expected).isEqualTo(content);
	}
	
	@Test
	void updateTest() throws Exception {
		String toUpdate = "{\"description\":\"It's about making other people feel\",\"name\":\"Blues\"}";
		String expected = this.jsonifier.writeValueAsString(this.mapToDTO(new Genre(1L, "Blues", "It's about making other people feel")));
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

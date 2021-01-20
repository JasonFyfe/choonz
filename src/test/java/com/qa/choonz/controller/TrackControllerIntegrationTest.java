package com.qa.choonz.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.dto.TrackDTO;

@SingleTenantTest
@AutoConfigureMockMvc
class TrackControllerIntegrationTest {
	
	@Autowired
	private MockMvc mvc;
	
	@Autowired
	private ObjectMapper jsonifier;
	
	@Autowired
	private ModelMapper mapper;
	
	private TrackDTO mapToDTO(Track track) {
		return this.mapper.map(track, TrackDTO.class);
	}
	
	private final String URI = "/tracks";
	
	private final Track TEST_TRACK_1 = new Track(1L,"Cotton", 360, "This song is for the rats...");
	private final Track TEST_TRACK_2 = new Track(2L, "Oceanographers Choice", 400, "WELL...");
	private final Track TEST_TRACK_3 = new Track(3L, "Younger", 500, "Crank that siren high...");
	private final Track TEST_TRACK_4 = new Track(4L, "Broom People", 360, "36 Hudson in the garage...");
	private final Track TEST_TRACK_5 = new Track(5L, "This Is My House, This Is My Home", 545, "Woke when it was dark...");
	
	@Test
	void createTest() throws Exception {
		TrackDTO testDTO = mapToDTO(new Track("Re-Arrange", 360, "Doo dooo dooo doo doododo do"));
		String testDTOAsJSON = this.jsonifier.writeValueAsString(testDTO);
		
		RequestBuilder request = post(URI + "/create").contentType(MediaType.APPLICATION_JSON).content(testDTOAsJSON);
		
		ResultMatcher checkStatus = status().isCreated();
		
		TrackDTO testSavedDTO = mapToDTO(new Track("Re-Arrange", 360, "Doo dooo dooo doo doododo do"));
		testSavedDTO.setId(6L);
		String testSavedDTOAsJSON = this.jsonifier.writeValueAsString(testSavedDTO);
		
		ResultMatcher checkBody = content().json(testSavedDTOAsJSON);
		
		this.mvc.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void readAllTest() throws Exception {
		String expected = this.jsonifier.writeValueAsString(List.of(this.mapToDTO(TEST_TRACK_1),
																	this.mapToDTO(TEST_TRACK_2),
																	this.mapToDTO(TEST_TRACK_3),
																	this.mapToDTO(TEST_TRACK_4),
																	this.mapToDTO(TEST_TRACK_5)));
		RequestBuilder request = get(URI + "/read").contentType(MediaType.APPLICATION_JSON);
		ResultMatcher checkStatus = status().isOk();
		MvcResult result = mvc.perform(request).andExpect(checkStatus).andReturn();
		
		String content = result.getResponse().getContentAsString();
	
		assertThat(expected).isEqualTo(content);
	}
	
	@Test
	void readOneTest() throws Exception {
		String expected = this.jsonifier.writeValueAsString(this.mapToDTO(TEST_TRACK_1));
		
		RequestBuilder request = get(URI + "/read/1").contentType(MediaType.APPLICATION_JSON);
		ResultMatcher checkStatus = status().isOk();
		MvcResult result = mvc.perform(request).andExpect(checkStatus).andReturn();
		
		String content = result.getResponse().getContentAsString();
		
		assertThat(expected).isEqualTo(content);
	}
	
	@Test
	void updateTest() throws Exception {
		String toUpdate = "{\"name\": \"Positions\",\"duration\": 247,\"lyrics\": \"Switching the positions for you...\"}";
		String expected = this.jsonifier.writeValueAsString(this.mapToDTO(new Track(1L, "Positions", 247, "Switching the positions for you...")));
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
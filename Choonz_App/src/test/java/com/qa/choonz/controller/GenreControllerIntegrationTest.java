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
import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.assembler.GenreModelAssembler;
import com.qa.choonz.rest.model.GenreModel;

@SingleTenantTest
@AutoConfigureMockMvc
public class GenreControllerIntegrationTest {
	@Autowired
	private MockMvc mvc;

	@Autowired
	private ObjectMapper jsonifier;

	@Autowired
	private GenreModelAssembler assembler;

	private Track track = new Track(1L, "name", null, null, null, 350, "lyrics");
	private List<Track> tracks = List.of(track);

	private final String URI = "/api/genres";

	private final Genre TEST_Genre_1 = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", tracks);

	@Test
	void createTest() throws Exception {
		GenreModel testModel = this.assembler.toModel(TEST_Genre_1);
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
		String toUpdate = "{\"description\":\"It's about making other people feel\",\"name\":\"Blues\"}";
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

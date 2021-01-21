package com.qa.choonz.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.hateoas.mediatype.MessageResolver;
import org.springframework.hateoas.mediatype.hal.CurieProvider;
import org.springframework.hateoas.mediatype.hal.Jackson2HalModule;
import org.springframework.hateoas.server.core.EvoInflectorLinkRelationProvider;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.qa.choonz.config.SingleTenantTest;
import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.assembler.PlaylistModelAssembler;
import com.qa.choonz.rest.model.PlaylistModel;

@SingleTenantTest
@AutoConfigureMockMvc
class PlaylistControllerIntegrationTest {
	@Autowired
	private MockMvc mvc;

	@Autowired
	private ObjectMapper jsonifier;

	@Autowired
	private PlaylistModelAssembler assembler;

	private ObjectMapper mapper;

	private final String URI = "/playlists";

	private List<Track> tracks = Collections.emptyList();

	private final Playlist TEST_Playlist_1 = new Playlist(1L, "Sadbois", "whiny musics", "some url", tracks);

	@BeforeEach
	void setUp() {
		this.mapper = new ObjectMapper();
		this.mapper.registerModule(new Jackson2HalModule());
		this.mapper.setHandlerInstantiator(new Jackson2HalModule.HalHandlerInstantiator(
				new EvoInflectorLinkRelationProvider(), CurieProvider.NONE, MessageResolver.DEFAULTS_ONLY));
		this.mapper.enable(SerializationFeature.INDENT_OUTPUT);
	}

	@Test
	void createTest() throws Exception {
		PlaylistModel testModel = this.assembler.toModel(TEST_Playlist_1);
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
		String toUpdate = "{\"name\": \"Jazz\",\"description\": \"Smooth like butter...\",\"artwork\": \"some url\"}";
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

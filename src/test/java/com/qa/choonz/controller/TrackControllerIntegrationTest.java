package com.qa.choonz.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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

	private ObjectMapper mapper;

	private final String URI = "/tracks";

	private final Track TEST_TRACK_1 = new Track(1L, "Cotton", null, null, null, 360, "This song is for the rats...");
	private final Track TEST_TRACK_2 = new Track(2L, "Oceanographers Choice", null, null, null, 400, "WELL...");
	private final Track TEST_TRACK_3 = new Track(3L, "Younger", null, null, null, 500, "Crank that siren high...");
	private final Track TEST_TRACK_4 = new Track(4L, "Broom People", null, null, null, 360,
			"36 Hudson in the garage...");
	private final Track TEST_TRACK_5 = new Track(5L, "This Is My House, This Is My Home", null, null, null, 545,
			"Woke when it was dark...");

	private final List<Track> LIST_OF_ARTISTS = List.of(TEST_TRACK_1, TEST_TRACK_2, TEST_TRACK_3, TEST_TRACK_4,
			TEST_TRACK_5);

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
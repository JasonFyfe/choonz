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
import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.rest.assembler.AlbumModelAssembler;
import com.qa.choonz.rest.model.AlbumModel;

@SingleTenantTest
@AutoConfigureMockMvc
public class AlbumControllerIntegrationTest {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private ObjectMapper jsonifier;

	@Autowired
	private AlbumModelAssembler assembler;

	private ObjectMapper mapper;

	private List<Track> tracks = Collections.emptyList();

	private final String URI = "/albums";

	private final Album TEST_Album_1 = new Album(1L, "We Shall All Be Healed", "some url", tracks, null);
	private final Album TEST_Album_2 = new Album(2L, "Tallahassee", "some other url", tracks, null);
	private final Album TEST_Album_3 = new Album(3L, "In League With Dragons", "some other other url", tracks, null);
	private final Album TEST_Album_4 = new Album(4L, "The Sunset Tree", "and another", tracks, null);
	private final Album TEST_Album_5 = new Album(5L, "These Four Walls", "and again!", tracks, null);

	private final List<Album> LIST_OF_ALBUMS = List.of(TEST_Album_1, TEST_Album_2, TEST_Album_3, TEST_Album_4,
			TEST_Album_5);

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
		AlbumModel testModel = this.assembler.toModel(TEST_Album_1);
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
		String toUpdate = "{\"name\":\"Hello\",\"cover\":\"www.world.com\"}";
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

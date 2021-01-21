package com.qa.choonz.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.qa.choonz.config.SingleTenantTest;
import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.rest.assembler.ArtistModelAssembler;
import com.qa.choonz.rest.controller.ArtistController;
import com.qa.choonz.rest.model.ArtistModel;
import com.qa.choonz.service.ArtistService;

@SingleTenantTest
public class ArtistControllerUnitTest {

	@Autowired
	private ArtistController controller;

	@MockBean
	private ArtistService service;

	@Autowired
	private ArtistModelAssembler assembler;

	private final Artist TEST_ARTIST_1 = new Artist(1L, "The Mountain Goats", null);
	private final Artist TEST_ARTIST_2 = new Artist(2L, "We Were Promised Jetpacks", null);

	private final List<Artist> LIST_OF_ARTIST = List.of(TEST_ARTIST_1, TEST_ARTIST_2);

	@Test
	void createTest() throws Exception {
		when(this.service.create(TEST_ARTIST_1)).thenReturn(this.assembler.toModel(TEST_ARTIST_1));
		assertThat(new ResponseEntity<ArtistModel>(this.assembler.toModel(TEST_ARTIST_1), HttpStatus.CREATED))
				.isEqualTo(this.controller.create(TEST_ARTIST_1));
		verify(this.service, atLeastOnce()).create(TEST_ARTIST_1);
	}

	@Test
	void readOneTest() throws Exception {
		when(this.service.findById(TEST_ARTIST_1.getId())).thenReturn(this.assembler.toModel(TEST_ARTIST_1));
		assertThat(new ResponseEntity<ArtistModel>(this.assembler.toModel(TEST_ARTIST_1), HttpStatus.OK))
				.isEqualTo(this.controller.findById(TEST_ARTIST_1.getId()));
		verify(this.service, atLeastOnce()).findById(TEST_ARTIST_1.getId());
	}

	@Test
	void readAllTest() throws Exception {
		when(this.service.findAll()).thenReturn(this.assembler.toCollectionModel(LIST_OF_ARTIST));
		assertThat(this.controller.findAll()).isEqualTo(new ResponseEntity<>(this.assembler.toCollectionModel(LIST_OF_ARTIST), HttpStatus.OK));
		verify(this.service, atLeastOnce()).findAll();
	}

	@Test
	void updateTest() throws Exception {
		when(this.service.update(TEST_ARTIST_1, TEST_ARTIST_1.getId())).thenReturn(this.assembler.toModel(TEST_ARTIST_1));
		assertThat(new ResponseEntity<ArtistModel>(this.assembler.toModel(TEST_ARTIST_1), HttpStatus.ACCEPTED))
				.isEqualTo(this.controller.update(TEST_ARTIST_1, (TEST_ARTIST_1.getId())));
		verify(this.service, atLeastOnce()).update((TEST_ARTIST_1), TEST_ARTIST_1.getId());
	}

	@Test
	void deleteTest() throws Exception {
		when(this.service.delete(TEST_ARTIST_1.getId())).thenReturn(false);
		assertThat(this.controller.delete(TEST_ARTIST_1.getId()))
				.isEqualTo(new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
		verify(this.service, atLeastOnce()).delete(TEST_ARTIST_1.getId());
	}

	@Test
	void deleteTestTwo() throws Exception {
		when(this.service.delete(TEST_ARTIST_1.getId())).thenReturn(true);
		assertThat(this.controller.delete(TEST_ARTIST_1.getId()))
				.isEqualTo(new ResponseEntity<>(HttpStatus.NO_CONTENT));
		verify(this.service, atLeastOnce()).delete(TEST_ARTIST_1.getId());
	}

}

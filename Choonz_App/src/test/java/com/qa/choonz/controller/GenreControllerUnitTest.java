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
import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.rest.assembler.GenreModelAssembler;
import com.qa.choonz.rest.controller.GenreController;
import com.qa.choonz.rest.model.GenreModel;
import com.qa.choonz.service.GenreService;

@SingleTenantTest
public class GenreControllerUnitTest {

	@Autowired
	private GenreController controller;

	@MockBean
	private GenreService service;

	@Autowired
	private GenreModelAssembler assembler;

	private final Genre TEST_GENRE_1 = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", null);
	private final Genre TEST_GENRE_2 = new Genre(2L, "Indie Rock and Roll", "straight bangers from your youth", null);

	private final List<Genre> LISTOFGENRE = List.of(TEST_GENRE_1, TEST_GENRE_2);

	@Test
	void createTest() throws Exception {
		when(this.service.create(TEST_GENRE_1)).thenReturn(this.assembler.toModel(TEST_GENRE_1));
		assertThat(new ResponseEntity<GenreModel>(this.assembler.toModel(TEST_GENRE_1), HttpStatus.CREATED))
				.isEqualTo(this.controller.create(TEST_GENRE_1));
		verify(this.service, atLeastOnce()).create(TEST_GENRE_1);
	}

	@Test
	void readOneTest() throws Exception {
		when(this.service.findById(TEST_GENRE_1.getId())).thenReturn(this.assembler.toModel(TEST_GENRE_1));
		assertThat(new ResponseEntity<GenreModel>(this.assembler.toModel(TEST_GENRE_1), HttpStatus.OK))
				.isEqualTo(this.controller.findById(TEST_GENRE_1.getId()));
		verify(this.service, atLeastOnce()).findById(TEST_GENRE_1.getId());
	}

	@Test
	void readAllTest() throws Exception {
		when(this.service.findAll()).thenReturn(this.assembler.toCollectionModel(LISTOFGENRE));
		assertThat(this.controller.findAll())
				.isEqualTo(new ResponseEntity<>(this.assembler.toCollectionModel(LISTOFGENRE), HttpStatus.OK));
		verify(this.service, atLeastOnce()).findAll();
	}

	@Test
	void updateTest() throws Exception {
		when(this.service.update(TEST_GENRE_1, TEST_GENRE_1.getId())).thenReturn(this.assembler.toModel(TEST_GENRE_1));
		assertThat(new ResponseEntity<GenreModel>(this.assembler.toModel(TEST_GENRE_1), HttpStatus.ACCEPTED))
				.isEqualTo(this.controller.update(TEST_GENRE_1, (TEST_GENRE_1.getId())));
		verify(this.service, atLeastOnce()).update((TEST_GENRE_1), TEST_GENRE_1.getId());
	}

	@Test
	void deleteTest() throws Exception {
		when(this.service.delete(TEST_GENRE_1.getId())).thenReturn(false);
		assertThat(this.controller.delete(TEST_GENRE_1.getId()))
				.isEqualTo(new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
		verify(this.service, atLeastOnce()).delete(TEST_GENRE_1.getId());
	}

	@Test
	void deleteTestTwo() throws Exception {
		when(this.service.delete(TEST_GENRE_1.getId())).thenReturn(true);
		assertThat(this.controller.delete(TEST_GENRE_1.getId())).isEqualTo(new ResponseEntity<>(HttpStatus.NO_CONTENT));
		verify(this.service, atLeastOnce()).delete(TEST_GENRE_1.getId());
	}
}

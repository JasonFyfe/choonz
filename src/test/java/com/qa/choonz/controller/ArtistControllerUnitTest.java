package com.qa.choonz.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.qa.choonz.config.SingleTenantTest;
import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.rest.controller.ArtistController;
import com.qa.choonz.rest.dto.ArtistDTO;
import com.qa.choonz.service.ArtistService;

@SingleTenantTest
public class ArtistControllerUnitTest {

	@Autowired
	private ArtistController controller;

	@MockBean
	private ArtistService service;

	@Autowired
	private ModelMapper mapper;

	private ArtistDTO mapToDTO(Artist artist) {
		return this.mapper.map(artist, ArtistDTO.class);
	}

	private final Artist TEST_ARTIST_1 = new Artist(1L, "The Mountain Goats");
	private final Artist TEST_ARTIST_2 = new Artist(2L, "We Were Promised Jetpacks");

	private final List<Artist> LISTOFARTIST = List.of(TEST_ARTIST_1, TEST_ARTIST_2);

	@Test
	void createTest() throws Exception {
		when(this.service.create(TEST_ARTIST_1)).thenReturn(this.mapToDTO(TEST_ARTIST_1));
		assertThat(new ResponseEntity<ArtistDTO>(this.mapToDTO(TEST_ARTIST_1), HttpStatus.CREATED))
				.isEqualTo(this.controller.create(TEST_ARTIST_1));
		verify(this.service, atLeastOnce()).create(TEST_ARTIST_1);
	}

	@Test
	void readOneTest() throws Exception {
		when(this.service.read(TEST_ARTIST_1.getId())).thenReturn(this.mapToDTO(TEST_ARTIST_1));
		assertThat(new ResponseEntity<ArtistDTO>(this.mapToDTO(TEST_ARTIST_1), HttpStatus.OK))
				.isEqualTo(this.controller.read(TEST_ARTIST_1.getId()));
		verify(this.service, atLeastOnce()).read(TEST_ARTIST_1.getId());
	}

	@Test
	void readAllTest() throws Exception {
		when(this.service.read()).thenReturn(LISTOFARTIST.stream().map(this::mapToDTO).collect(Collectors.toList()));
		assertThat(this.controller.read()).isEqualTo(new ResponseEntity<>(
				LISTOFARTIST.stream().map(this::mapToDTO).collect(Collectors.toList()), HttpStatus.OK));
		verify(this.service, atLeastOnce()).read();
	}

	@Test
	void updateTest() throws Exception {
		when(this.service.update(TEST_ARTIST_1, TEST_ARTIST_1.getId())).thenReturn(this.mapToDTO(TEST_ARTIST_1));
		assertThat(new ResponseEntity<ArtistDTO>(this.mapToDTO(TEST_ARTIST_1), HttpStatus.ACCEPTED))
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

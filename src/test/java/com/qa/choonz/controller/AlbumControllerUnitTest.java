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
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.qa.choonz.config.SingleTenantTest;
import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.rest.controller.AlbumController;
import com.qa.choonz.rest.dto.AlbumDTO;
import com.qa.choonz.service.AlbumService;

@SingleTenantTest
public class AlbumControllerUnitTest {

	@Autowired
	private AlbumController controller;

	@MockBean
	private AlbumService service;

	@Autowired
	private ModelMapper mapper;

	private AlbumDTO mapToDTO(Album album) {
		return this.mapper.map(album, AlbumDTO.class);
	}

	// Test data
	// id, name, cover
	private final Album TEST_ALBUM_1 = new Album(1L, "We Shall All Be Healed", "some url");
	private final Album TEST_ALBUM_2 = new Album(2L, "Tallahassee", "some other url");
	private final Album TEST_ALBUM_3 = new Album(3L, "In League With Dragons", "some other other url");
	private final Album TEST_ALBUM_4 = new Album(4L, "The Sunset Tree", "and another");
	private final Album TEST_ALBUM_5 = new Album(5L, "These Four Walls", "and again!");

	// list
	private final List<Album> LISTOFALBUM = List.of(TEST_ALBUM_1, TEST_ALBUM_2, TEST_ALBUM_3, TEST_ALBUM_4,
			TEST_ALBUM_5);

	@Test
	void createTest() throws Exception {
		when(this.service.create(TEST_ALBUM_1)).thenReturn(this.mapToDTO(TEST_ALBUM_1));
		assertThat(new ResponseEntity<AlbumDTO>(this.mapToDTO(TEST_ALBUM_1), HttpStatus.CREATED))
				.isEqualTo(this.controller.create(TEST_ALBUM_1));
		verify(this.service, atLeastOnce()).create(TEST_ALBUM_1);
	}

	@Test
	void readOneTest() throws Exception {
		when(this.service.read(TEST_ALBUM_1.getId())).thenReturn(this.mapToDTO(TEST_ALBUM_1));
		assertThat(new ResponseEntity<AlbumDTO>(this.mapToDTO(TEST_ALBUM_1), HttpStatus.OK))
				.isEqualTo(this.controller.read(TEST_ALBUM_1.getId()));
		verify(this.service, atLeastOnce()).read(TEST_ALBUM_1.getId());
	}

	@Test
	void readAllTest() throws Exception {
		when(this.service.read()).thenReturn(LISTOFALBUM.stream().map(this::mapToDTO).collect(Collectors.toList()));
		assertThat(this.controller.read()).isEqualTo(new ResponseEntity<>(
				LISTOFALBUM.stream().map(this::mapToDTO).collect(Collectors.toList()), HttpStatus.OK));
		verify(this.service, atLeastOnce()).read();
	}

	@Test
	void updateTest() throws Exception {
		when(this.service.update(TEST_ALBUM_1, TEST_ALBUM_1.getId())).thenReturn(this.mapToDTO(TEST_ALBUM_1));
		assertThat(new ResponseEntity<AlbumDTO>(this.mapToDTO(TEST_ALBUM_1), HttpStatus.ACCEPTED))
				.isEqualTo(this.controller.update(TEST_ALBUM_1, (TEST_ALBUM_1.getId())));
		verify(this.service, atLeastOnce()).update((TEST_ALBUM_1), TEST_ALBUM_1.getId());
	}

	@Test
	void deleteTest() throws Exception {
		when(this.service.delete(TEST_ALBUM_1.getId())).thenReturn(false);
		assertThat(this.controller.delete(TEST_ALBUM_1.getId()))
				.isEqualTo(new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
		verify(this.service, atLeastOnce()).delete(TEST_ALBUM_1.getId());

	}

	@Test
	void deleteTestTwo() throws Exception {
		when(this.service.delete(TEST_ALBUM_1.getId())).thenReturn(true);
		assertThat(this.controller.delete(TEST_ALBUM_1.getId())).isEqualTo(new ResponseEntity<>(HttpStatus.NO_CONTENT));
		verify(this.service, atLeastOnce()).delete(TEST_ALBUM_1.getId());

	}

}

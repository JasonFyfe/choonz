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

import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.rest.controller.PlaylistController;
import com.qa.choonz.rest.dto.PlaylistDTO;
import com.qa.choonz.service.PlaylistService;

@SpringBootTest
public class PlaylistControllerUnitTest {

	@Autowired
	private PlaylistController controller;

	@MockBean
	private PlaylistService service;

	@Autowired
	private ModelMapper mapper;

	private PlaylistDTO mapToDTO(Playlist playlist) {
		return this.mapper.map(playlist, PlaylistDTO.class);
	}

	private final Playlist TEST_PLAYLIST_1 = new Playlist(1L, "Sadbois", "whiny musics", "some url");
	private final Playlist TEST_PLAYLIST_2 = new Playlist(2L, "Happybois", "less whiny musics", "some other url");

	private final List<Playlist> LISTOFPLAYLIST = List.of(TEST_PLAYLIST_1, TEST_PLAYLIST_2);

	@Test
	void createTest() throws Exception {
		when(this.service.create(TEST_PLAYLIST_1)).thenReturn(this.mapToDTO(TEST_PLAYLIST_1));
		assertThat(new ResponseEntity<PlaylistDTO>(this.mapToDTO(TEST_PLAYLIST_1), HttpStatus.CREATED))
				.isEqualTo(this.controller.create(TEST_PLAYLIST_1));
		verify(this.service, atLeastOnce()).create(TEST_PLAYLIST_1);
	}

	@Test
	void readOneTest() throws Exception {
		when(this.service.read(TEST_PLAYLIST_1.getId())).thenReturn(this.mapToDTO(TEST_PLAYLIST_1));
		assertThat(new ResponseEntity<PlaylistDTO>(this.mapToDTO(TEST_PLAYLIST_1), HttpStatus.OK))
				.isEqualTo(this.controller.read(TEST_PLAYLIST_1.getId()));
		verify(this.service, atLeastOnce()).read(TEST_PLAYLIST_1.getId());
	}

	@Test
	void readAllTest() throws Exception {
		when(this.service.read()).thenReturn(LISTOFPLAYLIST.stream().map(this::mapToDTO).collect(Collectors.toList()));
		assertThat(this.controller.read()).isEqualTo(new ResponseEntity<>(
				LISTOFPLAYLIST.stream().map(this::mapToDTO).collect(Collectors.toList()), HttpStatus.OK));
		verify(this.service, atLeastOnce()).read();
	}

	@Test
	void updateTest() throws Exception {
		when(this.service.update(TEST_PLAYLIST_1, TEST_PLAYLIST_1.getId())).thenReturn(this.mapToDTO(TEST_PLAYLIST_1));
		assertThat(new ResponseEntity<PlaylistDTO>(this.mapToDTO(TEST_PLAYLIST_1), HttpStatus.ACCEPTED))
				.isEqualTo(this.controller.update(TEST_PLAYLIST_1, (TEST_PLAYLIST_1.getId())));
		verify(this.service, atLeastOnce()).update((TEST_PLAYLIST_1), TEST_PLAYLIST_1.getId());
	}

	@Test
	void deleteTest() throws Exception {
		when(this.service.delete(TEST_PLAYLIST_1.getId())).thenReturn(false);
		assertThat(this.controller.delete(TEST_PLAYLIST_1.getId()))
				.isEqualTo(new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
		verify(this.service, atLeastOnce()).delete(TEST_PLAYLIST_1.getId());

	}

	@Test
	void deleteTestTwo() throws Exception {
		when(this.service.delete(TEST_PLAYLIST_1.getId())).thenReturn(true);
		assertThat(this.controller.delete(TEST_PLAYLIST_1.getId()))
				.isEqualTo(new ResponseEntity<>(HttpStatus.NO_CONTENT));
		verify(this.service, atLeastOnce()).delete(TEST_PLAYLIST_1.getId());

	}

}

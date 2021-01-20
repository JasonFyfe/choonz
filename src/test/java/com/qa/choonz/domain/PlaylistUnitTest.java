package com.qa.choonz.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.persistence.domain.Track;

public class PlaylistUnitTest {

	@Test
	void hashcodetest() {
		Playlist playlist = new Playlist(1L, "Sadbois", "whiny musics", "some url");

		System.out.println(playlist.hashCode());
		assertEquals(-1929077813, playlist.hashCode());
	}

	@Test
	public void equalsTrueTest() {
		List<Track> tracks = Collections.emptyList();
		Playlist playlist = new Playlist(1L, "test", "test", "test", tracks);
		Playlist playlist2 = new Playlist(1L, "test", "test", "test", tracks);

		assertEquals(playlist, playlist2);
	}

	@Test
	public void equalsFalseTest() {
		List<Track> tracks = Collections.emptyList();
		Playlist playlist = new Playlist(1L, "test", "test", "test", tracks);
		Object obj = new Object();
		System.out.println(obj);

		assertNotEquals(playlist, obj);
	}

	@Test
	public void equalsFalseTest2() {
		List<Track> tracks = Collections.emptyList();
		Playlist playlist = new Playlist(1L, "test", "test", "test", tracks);
		Playlist playlist2 = new Playlist(2L, "test", "test", "test", tracks);

		assertNotEquals(playlist, playlist2);
	}

	@Test
	public void equalsFalseTest3() {
		List<Track> tracks = Collections.emptyList();
		Playlist playlist = new Playlist(1L, "test", "test", "test", tracks);
		Playlist playlist2 = new Playlist(1L, "no", "test", "test", tracks);

		assertNotEquals(playlist, playlist2);
	}

	@Test
	public void equalsFalseTest4() {
		List<Track> tracks = Collections.emptyList();
		Playlist playlist = new Playlist(1L, "test", "test", "test", tracks);
		Playlist playlist2 = new Playlist(1L, "test", "no", "test", tracks);

		assertNotEquals(playlist, playlist2);
	}

	@Test
	public void equalsFalseTest5() {
		List<Track> tracks = Collections.emptyList();
		Playlist playlist = new Playlist(1L, "test", "test", "test", tracks);
		Playlist playlist2 = new Playlist(1L, "test", "test", "no", tracks);

		assertNotEquals(playlist, playlist2);
	}

	@Test
	public void equalsFalseTest6() {
		Track TEST_TRACK_1 = new Track(1L, "Cotton", 360, "This song is for the rats...");
		List<Track> tracks = Collections.emptyList();
		List<Track> track2 = List.of(TEST_TRACK_1);
		Playlist playlist = new Playlist(1L, "test", "test", "test", tracks);
		Playlist playlist2 = new Playlist(1L, "test", "test", "test", track2);

		assertNotEquals(playlist, playlist2);
	}

}
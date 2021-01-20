package com.qa.choonz.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.qa.choonz.config.SingleTenantTest;
import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.persistence.domain.Track;

@SingleTenantTest
public class AlbumUnitTest {

	private Artist artist;
	private Artist artist2 = new Artist(1L, "The Mountain Goats");

	@Test
	void hashcodetest() {
		Album album = new Album(1L, "We Shall All Be Healed", "some url");

		System.out.println(album.hashCode());
		assertEquals(-1605091266, album.hashCode());
	}

	@Test
	public void equalsTrueTest() {
		List<Track> tracks = Collections.emptyList();
		Album album = new Album(1L, "We Shall All Be Healed", "some url", tracks);
		Album album2 = new Album(1L, "We Shall All Be Healed", "some url", tracks);

		assertEquals(album, album2);
	}

	@Test
	public void equalsFalseTest() {
		List<Track> tracks = Collections.emptyList();
		Album album = new Album(1L, "We Shall All Be Healed", "some url", tracks);
		Object obj = new Object();
		System.out.println(obj);

		assertNotEquals(album, obj);
	}

	@Test
	public void equalsFalseTest2() {
		List<Track> tracks = Collections.emptyList();
		Album album = new Album(1L, "We Shall All Be Healed", "some url", tracks);
		Album album2 = new Album(1L, "test", "some url", tracks);

		assertNotEquals(album, album2);
	}

	@Test
	public void equalsFalseTest3() {
		List<Track> tracks = Collections.emptyList();
		Album album = new Album(1L, "We Shall All Be Healed", "some url", tracks);
		Album album2 = new Album(2L, "We Shall All Be Healed", "some url", tracks);

		assertNotEquals(album, album2);
	}

	@Test
	public void equalsFalseTest4() {
		Track TEST_TRACK_1 = new Track(1L, "Cotton", 360, "This song is for the rats...");
		List<Track> tracks = Collections.emptyList();
		List<Track> track2 = List.of(TEST_TRACK_1);
		Album album = new Album(1L, "We Shall All Be Healed", "some url", tracks);
		Album album2 = new Album(1L, "We Shall All Be Healed", "some url", track2);

		assertNotEquals(album, album2);
	}

	@Test
	public void equalsFalseTest5() {
		List<Track> tracks = Collections.emptyList();
		Album album = new Album(1L, "We Shall All Be Healed", "some url", tracks);
		Album album2 = new Album(1L, "We Shall All Be Healed", "test", tracks);

		assertNotEquals(album, album2);
	}

	@Test
	public void equalsFalseTest6() {
		List<Track> tracks = Collections.emptyList();
		Album album = new Album(1L, "We Shall All Be Healed", "some url", artist, tracks);
		Album album2 = new Album(1L, "We Shall All Be Healed", "some url", artist2, tracks);

		assertNotEquals(album, album2);
	}

}
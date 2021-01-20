package com.qa.choonz.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.persistence.domain.Track;

public class GenreUnitTest {

	@Test
	void hashcodetest() {
		Genre genre = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music");

		System.out.println(genre.hashCode());
		assertEquals(-1396854765, genre.hashCode());
	}

	@Test
	public void equalsTrueTest() {
		List<Track> tracks = Collections.emptyList();
		Genre genre = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", tracks);
		Genre genre2 = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", tracks);

		assertEquals(genre, genre2);
	}

	@Test
	public void equalsFalseTest() {
		List<Track> tracks = Collections.emptyList();
		Genre genre = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", tracks);
		Object obj = new Object();
		System.out.println(obj);

		assertNotEquals(genre, obj);
	}

	@Test
	public void equalsFalseTest2() {
		List<Track> tracks = Collections.emptyList();
		Genre genre = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", tracks);
		Genre genre2 = new Genre(2L, "Indie Folk", "whiny-voiced white sadboi music", tracks);

		assertNotEquals(genre, genre2);
	}

	@Test
	public void equalsFalseTest3() {
		List<Track> tracks = Collections.emptyList();
		Genre genre = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", tracks);
		Genre genre2 = new Genre(1L, "test", "whiny-voiced white sadboi music", tracks);

		assertNotEquals(genre, genre2);
	}

	@Test
	public void equalsFalseTest4() {
		List<Track> tracks = Collections.emptyList();
		Genre genre = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", tracks);
		Genre genre2 = new Genre(1L, "Indie Folk", "test", tracks);

		assertNotEquals(genre, genre2);
	}

	@Test
	public void equalsFalseTest5() {
		Track TEST_TRACK_1 = new Track(1L, "Cotton", 360, "This song is for the rats...");
		List<Track> tracks = Collections.emptyList();
		List<Track> track2 = List.of(TEST_TRACK_1);
		Genre genre = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", tracks);
		Genre genre2 = new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", track2);

		assertNotEquals(genre, genre2);
	}

}
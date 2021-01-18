package com.qa.choonz.rest.dto;

import java.util.Objects;

import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.persistence.domain.Playlist;

public class TrackDTO {

    private long id;
    private String name;
    private Album album;
    private Playlist playlist;
    private int duration;
    private String lyrics;
    private Genre genre;

    public TrackDTO() {
        super();
    }

	public TrackDTO(long id, String name, Album album, Playlist playlist, int duration, String lyrics, Genre genre) {
		super();
		this.id = id;
		this.name = name;
		this.album = album;
		this.playlist = playlist;
		this.duration = duration;
		this.lyrics = lyrics;
		this.genre = genre;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Album getAlbum() {
		return album;
	}

	public void setAlbum(Album album) {
		this.album = album;
	}

	public Playlist getPlaylist() {
		return playlist;
	}

	public void setPlaylist(Playlist playlist) {
		this.playlist = playlist;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public String getLyrics() {
		return lyrics;
	}

	public void setLyrics(String lyrics) {
		this.lyrics = lyrics;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("TrackDTO [id=").append(id).append(", name=").append(name).append(", album=").append(album)
				.append(", playlist=").append(playlist).append(", duration=").append(duration).append(", lyrics=")
				.append(lyrics).append(", genre=").append(genre).append("]");
		return builder.toString();
	}

	@Override
	public int hashCode() {
		return Objects.hash(album, duration, genre, id, lyrics, name, playlist);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!(obj instanceof TrackDTO))
			return false;
		TrackDTO other = (TrackDTO) obj;
		return Objects.equals(album, other.album) && duration == other.duration && Objects.equals(genre, other.genre)
				&& id == other.id && Objects.equals(lyrics, other.lyrics) && Objects.equals(name, other.name)
				&& Objects.equals(playlist, other.playlist);
	}

}

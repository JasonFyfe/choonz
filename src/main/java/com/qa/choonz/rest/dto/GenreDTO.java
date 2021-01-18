package com.qa.choonz.rest.dto;

import java.util.List;
import java.util.Objects;

import com.qa.choonz.persistence.domain.Track;

public class GenreDTO {

    private long id;
    private String name;
    private String description;
    private List<Track> tracks;

    public GenreDTO() {
        super();
        // TODO Auto-generated constructor stub
    }

    public GenreDTO(long id, String name, String description, List<Track> tracks) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.tracks = tracks;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Track> getTracks() {
        return tracks;
    }

    public void setTracks(List<Track> tracks) {
        this.tracks = tracks;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("GenreDTO [id=").append(id).append(", name=").append(name).append(", description=")
                .append(description).append(", tracks=").append(tracks).append("]");
        return builder.toString();
    }

    @Override
    public int hashCode() {
        return Objects.hash(tracks, description, id, name);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof GenreDTO)) {
            return false;
        }
        GenreDTO other = (GenreDTO) obj;
        return Objects.equals(tracks, other.tracks) && Objects.equals(description, other.description) && id == other.id
                && Objects.equals(name, other.name);
    }

}

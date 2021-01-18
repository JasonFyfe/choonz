package com.qa.choonz.persistence.domain;

import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(max = 100)
    @Column(unique = true)
    private String name;

    @NotNull
    @Size(max = 250)
    @Column(unique = true)
    private String description;

    @OneToMany(mappedBy = "genre", cascade = CascadeType.ALL)
    private List<Track> tracks;

    public Genre() {
        super();
    }
    
    public Genre(@NotNull @Size(max = 100) String name, @NotNull @Size(max = 250) String description) {
        super();
        this.name = name;
        this.description = description;
    }

    public Genre(long id, @NotNull @Size(max = 100) String name, @NotNull @Size(max = 250) String description) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
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
        builder.append("Genre [id=").append(id).append(", name=").append(name).append(", description=")
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
        if (!(obj instanceof Genre)) {
            return false;
        }
        Genre other = (Genre) obj;
        return Objects.equals(tracks, other.tracks) && Objects.equals(description, other.description) && id == other.id
                && Objects.equals(name, other.name);
    }

}

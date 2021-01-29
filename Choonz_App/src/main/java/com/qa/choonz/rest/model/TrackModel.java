package com.qa.choonz.rest.model;

import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Relation(itemRelation = "track", collectionRelation = "tracks")
@JsonInclude(Include.NON_NULL)
public class TrackModel extends RepresentationModel<TrackModel>{
	private long id;
    private String name;
    private int duration;
    private String lyrics;
    private AlbumModel album;
    private PlaylistModel playlist;
    private GenreModel genre;
}

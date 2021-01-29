package com.qa.choonz.rest.model;

import java.util.List;

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
@Relation(itemRelation = "album", collectionRelation = "albums")
@JsonInclude(Include.NON_NULL)
public class AlbumModel extends RepresentationModel<AlbumModel>{
	private Long id;
	private String name;
	private String cover;
	private List<TrackModel> tracks;
	private ArtistModel artist;
}

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
@Relation(itemRelation = "genre", collectionRelation = "genres")
@JsonInclude(Include.NON_NULL)
public class GenreModel extends RepresentationModel<GenreModel>{
	private Long id;
	private String name;
	private String description;
	private List<TrackModel> tracks;
}

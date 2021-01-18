package com.qa.choonz.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.qa.choonz.persistence.domain.Genre;

@RepositoryRestResource
public interface GenreRepository extends JpaRepository<Genre, Long> {

}

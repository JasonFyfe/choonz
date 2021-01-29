package com.qa.choonz.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.qa.choonz.persistence.domain.Album;

@RepositoryRestResource
public interface AlbumRepository extends JpaRepository<Album, Long> {

}

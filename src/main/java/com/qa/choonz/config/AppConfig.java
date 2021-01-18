package com.qa.choonz.config;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.persistence.repository.AlbumRepository;
import com.qa.choonz.persistence.repository.ArtistRepository;
import com.qa.choonz.persistence.repository.TrackRepository;
import com.qa.choonz.persistence.repository.GenreRepository;
import com.qa.choonz.persistence.repository.PlaylistRepository;

@Configuration
public class AppConfig {
	
	private static final Logger log = LoggerFactory.getLogger(AppConfig.class);

    @Bean
    @Scope("prototype")
    public ModelMapper mapper() {
        return new ModelMapper();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedMethods("*");
            }
        };
    }
    
    @Bean
    CommandLineRunner initDatabase(ArtistRepository artistRepo,
    							   AlbumRepository albumRepo,
    							   TrackRepository trackRepo,
    							   GenreRepository genreRepo,
    							   PlaylistRepository playlistRepo)
    {
    	return args ->
    	{
    		// Artists
    		log.info("Preloading " + artistRepo.save(new Artist("The Mountain Goats")));
    		log.info("Preloading " + artistRepo.save(new Artist("We Were Promised Jetpacks")));
    		// Albums
    		log.info("Preloading " + albumRepo.save(new Album("The Mountain Goats")));
    		log.info("Preloading " + albumRepo.save(new Album("We Were Promised Jetpacks")));
    	};
    }

}

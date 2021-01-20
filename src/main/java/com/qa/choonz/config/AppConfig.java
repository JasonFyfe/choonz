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

import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.persistence.repository.AlbumRepository;
import com.qa.choonz.persistence.repository.ArtistRepository;
import com.qa.choonz.persistence.repository.GenreRepository;
import com.qa.choonz.persistence.repository.PlaylistRepository;
import com.qa.choonz.persistence.repository.TrackRepository;

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
    		log.info("Preloading " + albumRepo.save(new Album("We Shall All Be Healed", "some url")));
    		log.info("Preloading " + albumRepo.save(new Album("Tallahassee", "some other url")));
    		log.info("Preloading " + albumRepo.save(new Album("In League With Dragons", "some other other url")));
    		log.info("Preloading " + albumRepo.save(new Album("The Sunset Tree", "and another")));
    		log.info("Preloading " + albumRepo.save(new Album("These Four Walls", "and again!")));
    		// Tracks
    		log.info("Preloading " + trackRepo.save(new Track("Cotton", 360, "This song is for the rats...")));
    		log.info("Preloading " + trackRepo.save(new Track("Oceanographers Choice", 400, "WELL...")));
    		log.info("Preloading " + trackRepo.save(new Track("Younger", 500, "Crank that siren high...")));
    		log.info("Preloading " + trackRepo.save(new Track("Broom People", 360, "36 Hudson in the garage...")));
    		log.info("Preloading " + trackRepo.save(new Track("This Is My House, This Is My Home", 545, "Woke when it was dark...")));
    		// Genres
    		log.info("Preloading " + genreRepo.save(new Genre("Indie Folk", "whiny-voiced white sadboi music")));
    		log.info("Preloading " + genreRepo.save(new Genre("Indie Rock and Roll", "straight bangers from your youth")));
    		// Playlists
    		log.info("Preloading " + playlistRepo.save(new Playlist("Sadbois", "whiny musics", "some url")));
    		log.info("Preloading " + playlistRepo.save(new Playlist("Happybois", "less whiny musics", "some other url")));
    	};
    }

}

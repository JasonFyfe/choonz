package com.qa.choonz.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.qa.choonz.persistence.domain.Album;
import com.qa.choonz.persistence.domain.Artist;
import com.qa.choonz.persistence.domain.Genre;
import com.qa.choonz.persistence.domain.Playlist;
import com.qa.choonz.persistence.domain.Track;
import com.qa.choonz.persistence.domain.User;
import com.qa.choonz.persistence.repository.AlbumRepository;
import com.qa.choonz.persistence.repository.ArtistRepository;
import com.qa.choonz.persistence.repository.GenreRepository;
import com.qa.choonz.persistence.repository.PlaylistRepository;
import com.qa.choonz.persistence.repository.TrackRepository;
import com.qa.choonz.persistence.repository.UserRepository;

@Configuration
public class AppConfig {
	
	private static final Logger log = LoggerFactory.getLogger(AppConfig.class);

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
    public PasswordEncoder getPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }
    

    @Bean
    @Profile("devst")
    CommandLineRunner initDatabase(ArtistRepository artistRepo,
    							   AlbumRepository albumRepo,
    							   TrackRepository trackRepo,
    							   GenreRepository genreRepo,
    							   PlaylistRepository playlistRepo,
    							   UserRepository userRepo)
    {
    	return args ->
    	{
    		// Users
    		log.info("Preloading " + userRepo.save(new User(1L, "admin", "password")));
    		log.info("Preloading " + userRepo.save(new User(2L, "user", "password")));
    		// Artists
    		log.info("Preloading " + artistRepo.save(new Artist(1L, "The Mountain Goats", null)));
    		log.info("Preloading " + artistRepo.save(new Artist(2L, "We Were Promised Jetpacks", null)));
    		// Albums
    		log.info("Preloading " + albumRepo.save(new Album(1L, "We Shall All Be Healed", "some url", null, null)));
    		log.info("Preloading " + albumRepo.save(new Album(2L, "Tallahassee", "some other url", null, null)));
    		log.info("Preloading " + albumRepo.save(new Album(3L, "In League With Dragons", "some other other url", null, null)));
    		log.info("Preloading " + albumRepo.save(new Album(4L, "The Sunset Tree", "and another", null, null)));
    		log.info("Preloading " + albumRepo.save(new Album(5L, "These Four Walls", "and again!", null, null)));
    		// Tracks id, name, playlist, genre, duration, lyrics
    		log.info("Preloading " + trackRepo.save(new Track(1L, "Cotton", null, null, null, 360, "This song is for the rats...")));
    		log.info("Preloading " + trackRepo.save(new Track(2L, "Oceanographers Choice", null, null, null, 400, "WELL...")));
    		log.info("Preloading " + trackRepo.save(new Track(3L, "Younger", null, null, null, 500, "Crank that siren high...")));
    		log.info("Preloading " + trackRepo.save(new Track(4L, "Broom People", null, null, null, 360, "36 Hudson in the garage...")));
    		log.info("Preloading " + trackRepo.save(new Track(5L, "This Is My House, This Is My Home", null, null, null, 545, "Woke when it was dark...")));
    		// Genres
    		log.info("Preloading " + genreRepo.save(new Genre(1L, "Indie Folk", "whiny-voiced white sadboi music", null)));
    		log.info("Preloading " + genreRepo.save(new Genre(2L, "Indie Rock and Roll", "straight bangers from your youth", null)));
    		// Playlists
    		log.info("Preloading " + playlistRepo.save(new Playlist(1L, "Sadbois", "whiny musics", "some url", null)));
    		log.info("Preloading " + playlistRepo.save(new Playlist(2L, "Happybois", "less whiny musics", "some other url", null)));
    	};
    }

}

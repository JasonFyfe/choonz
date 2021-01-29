package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomeNav {
	
	public static final String LoginURL = "http://localhost:8082/login";
	
	public static final String HomeURL = "http://localhost:8082/html/welcome.html";
	
	public static final String AlbumsURL = "http://localhost:8082/html/albums.html";
	public static final String ArtistURL = "http://localhost:8082/html/artists.html";
	public static final String GenreURL = "http://localhost:8082/html/genres.html";
	public static final String PlaylistURL = "http://localhost:8082/html/playlists.html";
	public static final String TracksURL = "http://localhost:8082/html/tracks.html";
	public static final String LogoutURL = "http://localhost:8082/login?logout";
	public static final String RegURL = "http://localhost:8082/register.html";
	
	
	@FindBy(css = "#nav > div > ul > li:nth-child(2) > a")
	private WebElement TrackLink;
	
	@FindBy(css = "#nav > div > ul > li:nth-child(3) > a")
	private WebElement ArtistLink;
	
	@FindBy(css = "#nav > div > ul > li:nth-child(4) > a")
	private WebElement AlbumLink;
	
	@FindBy(css = "#nav > div > ul > li:nth-child(5) > a")
	private WebElement PlaylistLink;
	
	@FindBy(css = "#nav > div > ul > li:nth-child(6) > a")
	private WebElement GenreLink;
	
	@FindBy(css = "#search")
	private WebElement search;
	

	public void TrackPage() {
		TrackLink.click();
	}
	
	public void ArtistPage() {
		ArtistLink.click();
	}
	
	public void AlbumsPage() {
		AlbumLink.click();	
	}
	
	public void PlaylistsPage() {
		PlaylistLink.click();
	}
	
	public void GenresPage() {
		GenreLink.click();
	}
	
	public void searchplaylist(String name) {
		search.sendKeys(name);
		
	}
	
	
	
	
	
}

package stepdef;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper.Helper;
import pages.HomeNav;
import pages.createAlbum;
import pages.createArtist;
import pages.createGenre;
import pages.createPlaylists;
import pages.createTrack;
import pages.loginPage;
import pages.updateAlbum;
import pages.updateArtist;
import pages.updateGenre;
import pages.updatePlaylists;
import pages.updateTrack;

public class AllTests {
	
	private static WebDriver driver;
	
	@Before
	public static void init() {

		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");

		ChromeOptions cOptions = new ChromeOptions();
		cOptions.setHeadless(true);

		driver = new ChromeDriver(cOptions);
		driver.manage().window().setSize(new Dimension(1366, 768));
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	}

	@After
	public static void tearDown() {
		driver.quit();
	}

	@Given("^navigatea to the login page$")
	public void navigatea_to_the_login_page() throws Throwable {
		driver.get(HomeNav.LoginURL);
	}

	@When("^user enter the correcta details$")
	public void user_enter_the_correcta_details() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
		login.click();
	}

	@Then("^usera is logged in$")
	public void usera_is_logged_in() throws Throwable {

		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);

	}

	@Given("^I can access the albums page from the artist$")
	public void i_can_access_the_albums_page_from_the_artist() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot1.png");
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		createArtist artistpage = PageFactory.initElements(driver, createArtist.class);
		nav.ArtistPage();
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot2.png");
		artistpage.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot3.png");
	}

	@When("^I enter album details$")
	public void i_enter_album_details() throws Exception {
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.createAnAlbum("testing", "testing");
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot4.png");

	}

	@Then("^i can create an album entry$")
	public void i_can_create_an_album_entry() throws Exception {
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot5.png");
		driver.get(HomeNav.HomeURL);
		nav.AlbumsPage();
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot6.png");

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		Helper.snapShot(driver, "src/test/resources/reports/Album/createAlbum/shot7.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@Given("^I can access the albums page$")
	public void i_can_access_the_albums_page() throws Throwable {
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		driver.get(HomeNav.HomeURL);
		Helper.snapShot(driver, "src/test/resources/reports/Album/readAlbum/shot1.png");
		nav.AlbumsPage();
		Helper.snapShot(driver, "src/test/resources/reports/Album/readAlbum/shot2.png");
	}

	@Then("^i can read all the album entries$")
	public void i_can_read_all_the_album_entries() throws Throwable {
		
		String expected = HomeNav.AlbumsURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);

	}

	@When("^I click on view one album$")
	public void i_click_on_view_one_album() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/readOneAlbum/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/readOneAlbum/shot2.png");

	}

	@Then("^i can read that albums details$")
	public void i_can_read_that_albums_details() throws Throwable {

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Shelflife 4");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@When("^I enter new album details$")
	public void i_enter_new_album_details() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot2.png");
		updateAlbum albumup = PageFactory.initElements(driver, updateAlbum.class);
		albumup.updateanAlbum("update", "function");
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot3.png");

	}

	@Then("^i can update that albums entry$")
	public void i_can_update_that_albums_entry() throws Throwable {
		updateAlbum album = PageFactory.initElements(driver, updateAlbum.class);
		album.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot4.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");
		System.out.println(result);

		assertEquals(expected, result);
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		driver.get(HomeNav.HomeURL);
		nav.AlbumsPage();
		Helper.snapShot(driver, "src/test/resources/reports/Album/updateAlbum/shot5.png");

	}

	@When("^I click on delete album button$")
	public void i_click_on_delete_album_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/deleteAlbum/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/deleteAlbum/shot2.png");
		updateAlbum albumdel = PageFactory.initElements(driver, updateAlbum.class);
		albumdel.deleteclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/deleteAlbum/shot3.png");

	}

	@Then("^i can delete that albums entry$")
	public void i_can_delete_that_albums_entry() throws Throwable {

		String expected = HomeNav.AlbumsURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);

	}

	@When("^I click on the artist of that album$")
	public void i_click_on_the_artist_of_that_album() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/artistNav/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewtwoclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/artistNav/shot2.png");
		updateAlbum album2 = PageFactory.initElements(driver, updateAlbum.class);
		album2.artistclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/artistNav/shot3.png");

	}

	@Then("^i am taken to that artists page$")
	public void i_am_taken_to_that_artists_page() throws Throwable {

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Edit Artist");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@When("^I click on a track in that album$")
	public void i_click_on_a_track_in_that_album() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Album/trackNav/shot1.png");
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.viewtwoclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/trackNav/shot2.png");
		updateAlbum album2 = PageFactory.initElements(driver, updateAlbum.class);
		JavascriptExecutor js = (JavascriptExecutor) driver;
    	WebElement Element = driver.findElement(By.cssSelector("#tracks-container > div:nth-child(1) > input[type=button]"));
    	js.executeScript("arguments[0].scrollIntoView();", Element);
		Helper.snapShot(driver, "src/test/resources/reports/Album/trackNav/shot3.png");
    	album2.trackclick();
		Helper.snapShot(driver, "src/test/resources/reports/Album/trackNav/shot4.png");

	}

	@Then("^ia am taken to that tracks page$")
	public void i_am_taken_to_that_tracks_page() throws Throwable {

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("tracks view one");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@When("^i search for a album$")
	public void i_search_for_a_album() throws Throwable {
		createAlbum album = PageFactory.initElements(driver, createAlbum.class);
		album.searchAnAlbum("test");
		Helper.snapShot(driver, "src/test/resources/reports/Album/searchAlbum/shot1.png");

	}

	@Then("^only that albums details are displayed$")
	public void only_that_albums_details_are_displayed() throws Throwable {
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}
	
	@Given("^navigate to the login page$")
	public void navigate_to_the_login_page() throws Throwable {
		driver.get(HomeNav.LoginURL);
	}

	@When("^user enter the correct details$")
	public void user_enter_the_correct_details() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
		login.click();
	}

	@Then("^user is logged in$")
	public void user_is_logged_in() throws Throwable {

		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);

	}

	@Given("^I can access the Artists page$")
	public void i_can_access_the_Artists_page() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/createArtist/shot1.png");
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		nav.ArtistPage();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/createArtist/shot2.png");

	}

	@When("^I enter Artists details$")
	public void i_enter_Artists_details() throws Throwable {
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.createAnArtist("artiststest");
		Helper.snapShot(driver, "src/test/resources/reports/Artist/createArtist/shot3.png");

	}

	@Then("^i can create an Artists entry$")
	public void i_can_create_an_Artists_entry() throws Throwable {
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/createArtist/shot4.png");

		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.cssSelector("#main > div:nth-child(3) > input[type=button]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		Helper.snapShot(driver, "src/test/resources/reports/Artist/createArtist/shot5.png");
	

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("artiststest");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@Then("^i can read all the Artists entries$")
	public void i_can_read_all_the_Artists_entries() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/readArtist/shot1.png");
		String expected = HomeNav.ArtistURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);
		

	}

	@When("^I click on view one Artists$")
	public void i_click_on_view_one_Artists() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/readOneArtist/shot1.png");
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/readOneArtist/shot2.png");

	}

	@Then("^i can read that Artists details$")
	public void i_can_read_that_Artists_details() throws Throwable {
		

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Calibre");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@Given("^I can access the Artists view one page$")
	public void i_can_access_the_Artists_view_one_page() throws Throwable {
		driver.get(HomeNav.ArtistURL);
		Helper.snapShot(driver, "src/test/resources/reports/Artist/updateArtist/shot1.png");
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/updateArtist/shot2.png");

	}

	@When("^I enter new Artists details$")
	public void i_enter_new_Artists_details() throws Throwable {
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		artist.updateanArtist("update");
		Helper.snapShot(driver, "src/test/resources/reports/Artist/updateArtist/shot3.png");

	}

	@Then("^i can update that Artists entry$")
	public void i_can_update_that_Artists_entry() throws Throwable {
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		artist.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/updateArtist/shot4.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");
		System.out.println(result);

		assertEquals(expected, result);
		driver.get(HomeNav.ArtistURL);
		Helper.snapShot(driver, "src/test/resources/reports/Artist/updateArtist/shot5.png");

	}

	@When("^I click on delete Artists button$")
	public void i_click_on_delete_Artists_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/deleteArtist/shot1.png");
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		artist.deleteclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/deleteArtist/shot2.png");

	}

	@Then("^i can delete that Artists entry$")
	public void i_can_delete_that_Artists_entry() throws Throwable {
		

		String expected = HomeNav.ArtistURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);

	}
	
	

	@When("^I click on a linked album$")
	public void i_click_on_a_linked_album() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/albumNav/shot1.png");
		updateArtist artist = PageFactory.initElements(driver, updateArtist.class);
		artist.albumclick();
		Helper.snapShot(driver, "src/test/resources/reports/Artist/albumNav/shot2.png");
	
	}

	@Then("^i an taken to that albums page$")
	public void i_an_taken_to_that_albums_page() throws Throwable {
		
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Sincere");
		System.out.println(result);
		
		assertEquals(expected, result);

	}
	
	
	@When("^i search for a artist$")
	public void i_search_for_a_artist() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Artist/searchArtist/shot1.png");
		createArtist artist = PageFactory.initElements(driver, createArtist.class);
		artist.searchartist("test");
		Helper.snapShot(driver, "src/test/resources/reports/Artist/searchArtist/shot2.png");
	}

	@Then("^only that artists details are displayed$")
	public void only_that_artists_details_are_displayed() throws Throwable {
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);
	}
	
	@Given("^navigated to the login page$")
	public void navigated_to_the_login_page() throws Throwable {
		driver.get(HomeNav.LoginURL);
	}

	@When("^userd enter the correct details$")
	public void userd_enter_the_correct_details() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
		login.click();
	}

	@Then("^userd is logged in$")
	public void userd_is_logged_in() throws Throwable {

		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);

	}

	@Given("^I can access the genres page$")
	public void i_can_access_the_genres_page() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Genre/createGenre/shot1.png");
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		nav.GenresPage();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/createGenre/shot2.png");


	}

	@When("^I enter genres details$")
	public void i_enter_genres_details() throws Throwable {
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		genre.createAGenre("genre", "creation");
		Helper.snapShot(driver, "src/test/resources/reports/Genre/createGenre/shot3.png");

	}

	@Then("^i can create an genres entry$")
	public void i_can_create_an_genres_entry() throws Throwable {
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		genre.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/createGenre/shot4.png");
		driver.navigate().refresh();
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.cssSelector("#main > div:nth-child(3) > input[type=button]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		Helper.snapShot(driver, "src/test/resources/reports/Genre/createGenre/shot5.png");


		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("genre");
		System.out.println(result);

		assertEquals(expected, result);
	}

	@Then("^i can read all the genres entries$")
	public void i_can_read_all_the_genres_entries() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Genre/readGenre/shot1.png");
		String expected = HomeNav.GenreURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);
	}

	@When("^I click on view one genres$")
	public void i_click_on_view_one_genres() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Genre/readOneGenre/shot1.png");
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		genre.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/readOneGenre/shot2.png");

	}

	@Then("^i can read that genres details$")
	public void i_can_read_that_genres_details() throws Throwable {

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Drum");
		System.out.println(result);

		assertEquals(expected, result);
	}

	@Given("^I can access the genres view one page$")
	public void i_can_access_the_genres_view_one_page() throws Throwable {
		driver.get(HomeNav.GenreURL);
		Helper.snapShot(driver, "src/test/resources/reports/Genre/updateGenre/shot1.png");
		createGenre genre = PageFactory.initElements(driver, createGenre.class);
		genre.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/updateGenre/shot2.png");

	}

	@When("^I enter new genres details$")
	public void i_enter_new_genres_details() throws Throwable {
		updateGenre genre = PageFactory.initElements(driver, updateGenre.class);
		genre.updateaGenre("update", "function");
		Helper.snapShot(driver, "src/test/resources/reports/Genre/updateGenre/shot3.png");

	}

	@Then("^i can update that genres entry$")
	public void i_can_update_that_genres_entry() throws Throwable {
		updateGenre genre = PageFactory.initElements(driver, updateGenre.class);
		genre.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/updateGenre/shot4.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");


		assertEquals(expected, result);
		driver.get(HomeNav.GenreURL);
		Helper.snapShot(driver, "src/test/resources/reports/Genre/updateGenre/shot5.png");
	}

	@When("^I click on delete genres button$")
	public void i_click_on_delete_genres_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Genre/deleteGenre/shot1.png");
		updateGenre genre = PageFactory.initElements(driver, updateGenre.class);
		genre.deleteclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/deleteGenre/shot2.png");
		

	}

	@Then("^i can delete that genres entry$")
	public void i_can_delete_that_genres_entry() throws Throwable {
		
		String expected = HomeNav.GenreURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);

	}
	
	
	@When("^I click on a track in that genre$")
	public void i_click_on_a_track_in_that_genre() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Genre/trackNav/shot1.png");
		updateGenre genre = PageFactory.initElements(driver, updateGenre.class);
		genre.trackclick();
		Helper.snapShot(driver, "src/test/resources/reports/Genre/trackNav/shot2.png");
	
	}

	@Then("^i am taken to that tracks pagea$")
	public void i_am_taken_to_that_tracks_pagea() throws Throwable {
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Tired");
		System.out.println(result);
		
		assertEquals(expected, result);
	}
	
	@Given("^navigatec to the login page$")
	public void navigatec_to_the_login_page() throws Throwable {
		driver.get(HomeNav.LoginURL);
	}

	@When("^userc enter the correct details$")
	public void userc_enter_the_correct_details() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
		login.click();
	}

	@Then("^userc is logged in$")
	public void userc_is_logged_in() throws Throwable {

		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);

	}

	@Given("^I can access the Playlists page$")
	public void i_can_access_the_Playlists_page() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/createPlaylist/shot1.png");
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		nav.PlaylistsPage();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/createPlaylist/shot2.png");
	}

	@When("^I enter Playlists details$")
	public void i_enter_Playlists_details() throws Throwable {
		createPlaylists playlist = PageFactory.initElements(driver, createPlaylists.class);
		playlist.createAPlaylist("test", "test", "test");
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/createPlaylist/shot3.png");
	}

	@Then("^i can create an Playlists entry$")
	public void i_can_create_an_Playlists_entry() throws Throwable {
		createPlaylists playlist = PageFactory.initElements(driver, createPlaylists.class);
		playlist.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/createPlaylist/shot4.png");
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement Element = driver.findElement(By.cssSelector("#main > div:nth-child(3) > input[type=button]"));
		js.executeScript("arguments[0].scrollIntoView();", Element);
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/createPlaylist/shot5.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}

	@Then("^i can read all the Playlists entries$")
	public void i_can_read_all_the_Playlists_entries() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/readPlaylist/shot1.png");
		String expected = HomeNav.PlaylistURL;
		String result = driver.getCurrentUrl();
		
		assertEquals(expected, result);
	}

	@When("^I click on view one Playlists$")
	public void i_click_on_view_one_Playlists() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/readOnePlaylist/shot1.png");
		createPlaylists playlist = PageFactory.initElements(driver, createPlaylists.class);
		playlist.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/readOnePlaylist/shot2.png");

	}

	@Then("^i can read that Playlists details$")
	public void i_can_read_that_Playlists_details() throws Throwable {

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");
		System.out.println(result);

		assertEquals(expected, result);
	}

	@Given("^I can access the Playlists view one page$")
	public void i_can_access_the_Playlists_view_one_page() throws Throwable {
		driver.get(HomeNav.PlaylistURL);
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/updatePlaylist/shot1.png");
		createPlaylists playlist = PageFactory.initElements(driver, createPlaylists.class);
		playlist.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/updatePlaylist/shot2.png");


	}

	@When("^I enter new Playlists details$")
	public void i_enter_new_Playlists_details() throws Throwable {
		updatePlaylists playlist = PageFactory.initElements(driver, updatePlaylists.class);
		playlist.createAPlaylist("update", "update", "update");
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/updatePlaylist/shot3.png");


	}

	@Then("^i can update that Playlists entry$")
	public void i_can_update_that_Playlists_entry() throws Throwable {
		updatePlaylists playlist = PageFactory.initElements(driver, updatePlaylists.class);
		playlist.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/updatePlaylist/shot4.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");


		assertEquals(expected, result);
		driver.get(HomeNav.PlaylistURL);
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/updatePlaylist/shot5.png");

	}

	@When("^I click on delete Playlists button$")
	public void i_click_on_delete_Playlists_button() throws Throwable {
//		driver.get(HomeNav.PlaylistURL);
//		createPlaylists playlist2 = PageFactory.initElements(driver, createPlaylists.class);
//		playlist2.viewtwoclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/deletePlaylist/shot1.png");
		updatePlaylists playlist = PageFactory.initElements(driver, updatePlaylists.class);
		playlist.deleteclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/deletePlaylist/shot2.png");


	}

	@Then("^i can delete that Playlists entry$")
	public void i_can_delete_that_Playlists_entry() throws Throwable {
		
		String expected = HomeNav.PlaylistURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);
	}
	
	
	@When("^I click on a linked track$")
	public void i_click_on_a_linked_track() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/trackNav/shot1.png");
		updatePlaylists playlist = PageFactory.initElements(driver, updatePlaylists.class);
		playlist.tracklinkclick();
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/trackNav/shot2.png");
	
	}

	@Then("^i an taken to that tracks page$")
	public void i_an_taken_to_that_tracks_page() throws Throwable {
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("tracks view one");
		System.out.println(result);
		
		assertEquals(expected, result);
	}
	
	@Given("^I can access the homepage$")
	public void i_can_access_the_homepage() throws Throwable {
		driver.get(HomeNav.HomeURL);
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/homepageSearch/shot1.png");
		

	}

	@When("^i search for a playlist$")
	public void i_search_for_a_playlist() throws Throwable {
		HomeNav search = PageFactory.initElements(driver, HomeNav.class);
		search.searchplaylist("te");
		Helper.snapShot(driver, "src/test/resources/reports/Playlist/homepageSearch/shot2.png");

	}

	@Then("^only that playlists details are displayed$")
	public void only_that_playlists_details_are_displayed() throws Throwable {
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}
	
	@Given("^navigateb to the login page$")
	public void navigateb_to_the_login_page() throws Throwable {
		driver.get(HomeNav.LoginURL);
	}

	@When("^userb enter the correct details$")
	public void userb_enter_the_correct_details() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
		login.click();
	}

	@Then("^userb is logged in$")
	public void userb_is_logged_in() throws Throwable {

		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);

	}
	
	@Given("^I can access the tracks page from the albums$")
	public void i_can_access_the_tracks_page_from_the_albums() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot1.png");
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		createAlbum albumpage = PageFactory.initElements(driver, createAlbum.class);
		nav.AlbumsPage();
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot2.png");
		albumpage.viewtwoclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot3.png");
	   
	}

	@When("^I enter tracks details$")
	public void i_enter_tracks_details() throws Throwable {
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.createATrack("test", 1, "test");
		WebElement testDropDown = driver.findElement(By.id("genre"));  
		Select dropdown = new Select(testDropDown); 
		dropdown.selectByVisibleText("Garage"); 
		WebElement testDropDown2 = driver.findElement(By.id("playlist"));  
		Select dropdown2 = new Select(testDropDown2); 
		dropdown2.selectByVisibleText("More Bangers");  
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot4.png");
	}

	@Then("^i can create an tracks entry$")
	public void i_can_create_an_tracks_entry() throws Throwable {
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.createclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot5.png");
		driver.get(HomeNav.TracksURL);
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot6.png");
		
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		Helper.snapShot(driver, "src/test/resources/reports/Track/createTrack/shot7.png");

		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}
	
	@Given("^I can access the tracks page$")
	public void i_can_access_the_tracks_page() throws Throwable {
		HomeNav nav = PageFactory.initElements(driver, HomeNav.class);
		driver.get(HomeNav.HomeURL);
		Helper.snapShot(driver, "src/test/resources/reports/Track/readTrack/shot1.png");
		nav.TrackPage();
		Helper.snapShot(driver, "src/test/resources/reports/Track/readTrack/shot2.png");
	}

	@Then("^i can read all the tracks entries$")
	public void i_can_read_all_the_tracks_entries() throws Throwable {
		
		String expected = HomeNav.TracksURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);
	}

	@When("^I click on view one tracks$")
	public void i_click_on_view_one_tracks() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Track/readOneTrack/shot1.png");
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/readOneTrack/shot2.png");
	}

	@Then("^i can read that tracks details$")
	public void i_can_read_that_tracks_details() throws Throwable {
		
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Tired");
		System.out.println(result);

		assertEquals(expected, result);
	}


	@When("^I enter new tracks details$")
	public void i_enter_new_tracks_details() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Track/updateTrack/shot1.png");
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/updateTrack/shot2.png");
		updateTrack track2 = PageFactory.initElements(driver, updateTrack.class);
		track2.updateaTrack("update", 1, "function");
		Helper.snapShot(driver, "src/test/resources/reports/Track/updateTrack/shot3.png");
	}

	@Then("^i can update that tracks entry$")
	public void i_can_update_that_tracks_entry() throws Throwable {
		updateTrack track = PageFactory.initElements(driver, updateTrack.class);
		track.updateclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/updateTrack/shot4.png");


		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("update");
		System.out.println(result);

		assertEquals(expected, result);
		driver.get(HomeNav.TracksURL);
		Helper.snapShot(driver, "src/test/resources/reports/Track/updateTrack/shot5.png");
	}

	@When("^I click on delete tracks button$")
	public void i_click_on_delete_tracks_button() throws Throwable {
		Helper.snapShot(driver, "src/test/resources/reports/Track/deleteTrack/shot1.png");
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/deleteTrack/shot2.png");
		updateTrack trackdel = PageFactory.initElements(driver, updateTrack.class);
		trackdel.deleteclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/deleteTrack/shot3.png");

	}

	@Then("^i can delete that tracks entry$")
	public void i_can_delete_that_tracks_entry() throws Throwable {

		String expected = HomeNav.TracksURL;
		String result = driver.getCurrentUrl();
		System.out.println(result);

		assertEquals(expected, result);
	}
	

	@When("^I click on a album in that track$")
	public void i_click_on_a_album_in_that_track() throws Throwable {
		
		Helper.snapShot(driver, "src/test/resources/reports/Track/albumNav/shot1.png");
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.viewclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/albumNav/shot2.png");
		updateTrack track2 = PageFactory.initElements(driver, updateTrack.class);
		track2.albumlinkclick();
		Helper.snapShot(driver, "src/test/resources/reports/Track/albumNav/shot3.png");

	}

	@Then("^i am taken to that albums page$")
	public void i_am_taken_to_that_albums_page() throws Throwable {
		
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("Update Album");
		System.out.println(result);

		assertEquals(expected, result);

	}


	@When("^i search for a track$")
	public void i_search_for_a_track() throws Throwable {
		
		createTrack track = PageFactory.initElements(driver, createTrack.class);
		track.searchATrack("tes");
		Helper.snapShot(driver, "src/test/resources/reports/Track/searchTrack/shot1.png");

	}

	@Then("^only that tracks details are displayed$")
	public void only_that_tracks_details_are_displayed() throws Throwable {
		
		boolean expected;
		expected = true;
		Boolean result = driver.getPageSource().contains("test");
		System.out.println(result);

		assertEquals(expected, result);

	}
	
	@Given("^i go to the login page$")
	public void i_go_to_the_login_page() throws Throwable {
		driver.get(HomeNav.LoginURL);
		Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Login/shot1.png");

	}

	@When("^i enter the user name and passwird$")
	public void i_enter_the_user_name_and_passwird() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
		Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Login/shot2.png");
		login.click();
	}

	@Then("^i can login$")
	public void i_can_login() throws Throwable {
		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);
		Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Login/shot3.png");
	}

	@Given("^i can logina$")
	public void i_can_logina() throws Throwable {
		driver.get(HomeNav.LoginURL);
		Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Logout/shot1.png");
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("user", "password");
		Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Logout/shot2.png");
		login.click();

	}

	@When("^when i click logout$")
	public void when_i_click_logout() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		
		//wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#search")));
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("search")));
		//Thread.sleep(1000);
		login.logoutclick();

		
	    
	}

	@Then("^i am logged out$")
	public void i_am_logged_out() throws Throwable {
//		WebDriverWait wait=new WebDriverWait(driver, 20);
//		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div/form/button")));
		WebDriverWait wait=new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("body > div > form > button")));
		String expected = HomeNav.LogoutURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);
		Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Logout/shot3.png");
	   
	}

	@Given("^i can go to the register page$")
	public void i_can_go_to_the_register_page() throws Throwable {
	    driver.get(HomeNav.RegURL);
	    Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Registration/shot1.png");
	}

	@When("^i enter the registration details$")
	public void i_enter_the_registration_details() throws Throwable {
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.reguser("malik8", "malik8");
		Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Registration/shot2.png");
		login.regclick();
	    
	}

	@Then("^i can login with the details$")
	public void i_can_login_with_the_details() throws Throwable {
		WebDriverWait wait=new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("body > div > form > button")));
		Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Registration/shot3.png");
		loginPage login = PageFactory.initElements(driver, loginPage.class);
		login.loguser("malik8", "malik8");
		Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Registration/shot3.png");
		login.click();
		
		WebDriverWait wait2=new WebDriverWait(driver, 20);
		wait2.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#search")));
		
		String expected = HomeNav.HomeURL;
		String result = driver.getCurrentUrl();

		assertEquals(expected, result);
		Helper.snapShot(driver, "src/test/resources/reports/UserFunction/Registration/shot4.png");
		
	}
	
	



}

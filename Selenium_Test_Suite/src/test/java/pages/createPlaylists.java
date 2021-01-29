package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class createPlaylists {
	
	@FindBy(css = "#name")
	WebElement playlistname;

	@FindBy(css = "#description") 
	WebElement playlistdescription;
	
	@FindBy(css = "#artwork")
	WebElement playlistartwork;
	
	@FindBy(css = "#create")
	WebElement create;
	
	@FindBy(css = "#main > div:nth-child(1) > input[type=button]")	
	WebElement viewone;
	
	@FindBy(css = "#main > div:nth-child(3) > input[type=button]")	
	WebElement viewtwo;

	
	
	public void createAPlaylist(String name, String description, String artwork) {
		playlistname.sendKeys(name);
		playlistdescription.sendKeys(description);
		playlistartwork.sendKeys(artwork);
		//createalbum.click();
	}
	
	public void createclick() {

		create.click();
	}
	
	public void viewclick() {

		viewone.click();
	}
	
	public void viewtwoclick() {

		viewtwo.click();
	}
	
	
}

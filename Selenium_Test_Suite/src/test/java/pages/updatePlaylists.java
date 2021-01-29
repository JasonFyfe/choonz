package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class updatePlaylists {
	
	@FindBy(css = "#name")
	WebElement playlistname;

	@FindBy(css = "#description") 
	WebElement playlistdescription;
	
	@FindBy(css = "#artwork")
	WebElement playlistartwork;
	
	@FindBy(css = "#update")
	WebElement update;
	
	@FindBy(css = "#delete")
	WebElement delete;
	
	@FindBy(css = "#tracks-container > div:nth-child(1) > input[type=button]")
	
	WebElement tracklink;
	

	

	

	
	
	public void createAPlaylist(String name, String description, String artwork) {
		playlistname.clear();
		playlistname.sendKeys(name);
		playlistdescription.clear();
		playlistdescription.sendKeys(description);
		playlistartwork.clear();
		playlistartwork.sendKeys(artwork);

	}
	
	public void updateclick() {

		update.click();
	}
	
	public void deleteclick() {

		delete.click();
	}
	
	public void tracklinkclick() {

		tracklink.click();
	}

}

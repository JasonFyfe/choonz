package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class createTrack {
	
	@FindBy(css = "#trackName")
	WebElement trackname;

	@FindBy(css = "#trackDuration") 
	WebElement trackduration;
	
	@FindBy(css = "#trackLyrics")
	WebElement tracklyrics;
	
	
	@FindBy(css = "#search")
	WebElement search;

	
	@FindBy(css = "#createTrack")
	WebElement createtrack;
	
	@FindBy(css = "#main > div:nth-child(1) > input[type=button]")
	WebElement viewone;
	
	
	public void createATrack(String name, int duration, String lyrics) {
		trackname.sendKeys(name);
		trackduration.sendKeys(String.valueOf(duration));
		tracklyrics.sendKeys(lyrics);

	}
	
	public void searchATrack(String name) {
		search.sendKeys(name);
		
	}
	
	
	public void createclick() {

		createtrack.click();
	}
	
	public void viewclick() {

		viewone.click();
	}
	

	

}

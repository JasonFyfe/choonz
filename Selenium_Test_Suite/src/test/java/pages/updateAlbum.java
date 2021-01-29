package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class updateAlbum {
	
	@FindBy(css = "#albumName")
	WebElement albumname;

	@FindBy(css = "#albumCover") 
	WebElement albumcover;
	
	@FindBy(css = "#updateAlbum")
	WebElement updatealbum;
	
	@FindBy(css = "#delete")
	WebElement delete;
	
	@FindBy(css = "#artistID-2")
	WebElement artislink;
	
	@FindBy(css = "	#tracks-container > div:nth-child(1) > input[type=button]")
	WebElement tracklink;
	
	
	public void updateanAlbum(String name, String cover) {
		albumname.clear();
		albumname.sendKeys(name);
		albumcover.clear();
		albumcover.sendKeys(cover);
		//createalbum.click();
	}
	
	public void updateclick() {

		updatealbum.click();
	}
	
	public void deleteclick() {

		delete.click();
	}
	
	public void artistclick() {

		artislink.click();
	}
	
	public void trackclick() {

		tracklink.click();
	}

}

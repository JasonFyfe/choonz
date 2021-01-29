package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class updateArtist {
	
	
	@FindBy(css = "#artistName")
	WebElement artistname;

	@FindBy(css = "#updateArtist")
	WebElement updateartist;
	
	@FindBy(css = "#delete")
	WebElement delete;
	
	@FindBy(css = "#\\32  > input[type=button]")
	WebElement albumlink;
	

	

	
	
	public void updateanArtist(String name) {
		artistname.clear();
		artistname.sendKeys(name);

	}
	
	public void updateclick() {

		updateartist.click();
	}
	
	public void deleteclick() {

		delete.click();
	}
	
	public void albumclick() {

		albumlink.click();
	}

}

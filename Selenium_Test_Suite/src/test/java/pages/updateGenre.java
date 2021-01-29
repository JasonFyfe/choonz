package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class updateGenre {
	
	@FindBy(css = "#name")
	WebElement genrename;

	@FindBy(css = "#description") 
	WebElement genredescription;
	
	@FindBy(css = "#update")
	WebElement updategenre;
	
	@FindBy(css = "#main > div > button")
	WebElement delete;
	
	@FindBy(css = "#tracks-container > div:nth-child(1) > input[type=button]")
	WebElement tracklink;
	
	
	
	
	public void updateaGenre(String name, String description) {
		genrename.clear();
		genrename.sendKeys(name);
		genredescription.clear();
		genredescription.sendKeys(description);
		//createalbum.click();
	}
	
	public void updateclick() {

		updategenre.click();
	}
	
	public void deleteclick() {

		delete.click();
	}
	
	public void trackclick() {

		tracklink.click();
	}

}

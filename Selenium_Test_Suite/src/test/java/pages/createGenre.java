package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class createGenre {
	
	@FindBy(css = "#name")
	WebElement genrename;

	@FindBy(css = "#description") 
	WebElement genredescription;
	
	
	@FindBy(css = "#create")
	WebElement creategenre;
	
	@FindBy(css = "#main > div:nth-child(1) > input[type=button]")
	WebElement viewone;
	
	@FindBy(css = "#search")
	WebElement search;
	
	
	
	public void createAGenre(String name, String description) {
		genrename.sendKeys(name);
		genredescription.sendKeys(description);

	}
	
	public void createclick() {

		creategenre.click();
	}
	
	public void viewclick() {

		viewone.click();
	}
	

}

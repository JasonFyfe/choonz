package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class createAlbum {
	
	
	@FindBy(css = "#albumName")
	WebElement albumname;

	@FindBy(css = "#albumCover") 
	WebElement albumcover;
	
	@FindBy(css = "#createAlbum")
	WebElement createalbum;
	
	@FindBy(css = "#\\31  > input[type=button]")
	WebElement viewone;
	
	@FindBy(css = "#\\32  > input[type=button]")
	WebElement viewtwo;
	
	@FindBy(css = "#search")
	WebElement search;
	
	
	
	
	
	public void createAnAlbum(String name, String cover) {
		albumname.sendKeys(name);
		albumcover.sendKeys(cover);
	}
	
	public void searchAnAlbum(String name) {
		search.sendKeys(name);
		
	}
	
	public void createclick() {

		createalbum.click();
	}
	
	public void viewclick() {

		viewone.click();
	}
	
	public void viewtwoclick() {

		viewtwo.click();
	}
	

	
	
}

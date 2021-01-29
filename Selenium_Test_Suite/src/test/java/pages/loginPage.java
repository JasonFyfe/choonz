package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class loginPage {

	
	@FindBy(css = "#username")
	WebElement loginuser;
	

	@FindBy(css = "#password") 
	WebElement loginpass;
	
	@FindBy(css = "#create") 
	WebElement reguser;
	
	@FindBy(css = "body > div > form > button")
	WebElement signinbtn;
	
	
	@FindBy(css = "#nav > div > ul > li:nth-child(7) > a")
	WebElement logoutbtn;
	
	public void loguser(String user, String pass) throws Exception {
		loginuser.sendKeys(user);
		loginpass.sendKeys(pass);
		
	}
	
	public void reguser(String user, String pass) throws Exception {
		loginuser.sendKeys(user);
		loginpass.sendKeys(pass);
		
	}
	
	public void click() {
		signinbtn.click();
	}
	
	public void logoutclick() {
		logoutbtn.click();
	}
	
	public void regclick() {
		reguser.click();
	}
	
	

}

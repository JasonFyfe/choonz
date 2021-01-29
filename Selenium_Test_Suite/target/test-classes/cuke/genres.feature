@genres
Feature: genres Page


Background: 
		Given navigated to the login page
		When userd enter the correct details
		Then userd is logged in



  Scenario: Create genres
  
    Given I can access the genres page
    When I enter genres details
    Then i can create an genres entry 

	Scenario: Read genres
  
    Given I can access the genres page
    Then i can read all the genres entries  
    
    Scenario: Read One genres
  
    Given I can access the genres page   
    When I click on view one genres 
    Then i can read that genres details  
    
      
  Scenario: Update genres
  
    Given I can access the genres view one page   
    When I enter new genres details
    Then i can update that genres entry   
    
 
  Scenario: Delete genres
  
    Given I can access the genres view one page   
    When I click on delete genres button 
    Then i can delete that genres entry 
    
    
 Scenario: View track linked to genre
  
    Given I can access the genres view one page    
    When I click on a track in that genre  
    Then i am taken to that tracks pagea 
    
  
@artists
Feature: Artists Page

Background: 
		Given navigate to the login page
		When user enter the correct details
		Then user is logged in
		

  Scenario: Create Artists
  
    Given I can access the Artists page
    When I enter Artists details
    Then i can create an Artists entry 

	Scenario: Read Artist
  
    Given I can access the Artists page
    Then i can read all the Artists entries  
    
    Scenario: Read One Artists
  
    Given I can access the Artists page    
    When I click on view one Artists 
    Then i can read that Artists details  
    
      
  Scenario: Update Artists
  
    Given I can access the Artists view one page   
    When I enter new Artists details
    Then i can update that Artists entry   
    
 
  Scenario: Delete Artists
  
    Given I can access the Artists view one page     
    When I click on delete Artists button 
    Then i can delete that Artists entry 
    
    
    Scenario: view album from a single Artists
  
    Given I can access the Artists view one page    
    When I click on a linked album  
    Then i an taken to that albums page 
    
    Scenario: Search for a artist
  
    Given I can access the Artists page   
    When i search for a artist 
    Then only that artists details are displayed
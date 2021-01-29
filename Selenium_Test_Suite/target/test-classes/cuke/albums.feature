@albums
Feature: Albums Page

	Background: 
		Given navigatea to the login page
		When user enter the correcta details
		Then usera is logged in

  Scenario: Create Album
  
    Given I can access the albums page from the artist
    When I enter album details
    Then i can create an album entry 

	Scenario: Read Album
  
    Given I can access the albums page
    Then i can read all the album entries  
    
    Scenario: Read One Album
  
    Given I can access the albums page    
    When I click on view one album 
    Then i can read that albums details  
    
      
  Scenario: Update Album
  
    Given I can access the albums page  
    When I enter new album details
    Then i can update that albums entry   
    
 
  Scenario: Delete Album
  
    Given I can access the albums page    
    When I click on delete album button 
    Then i can delete that albums entry 
    
   
  Scenario: View artist linked to album
  
    Given I can access the albums page    
    When I click on the artist of that album  
    Then i am taken to that artists page 
    
 Scenario: View track linked to album
  
    Given I can access the albums page     
    When I click on a track in that album  
    Then ia am taken to that tracks page 
    
    
     Scenario: Search for a album
  
    Given I can access the albums page    
    When i search for a album 
    Then only that albums details are displayed
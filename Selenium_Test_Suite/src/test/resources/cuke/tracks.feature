@tracks
Feature: tracks Page

Background: 
		Given navigateb to the login page
		When userb enter the correct details
		Then userb is logged in



  Scenario: Create tracks
  
    Given I can access the tracks page from the albums
    When I enter tracks details
    Then i can create an tracks entry 

	Scenario: Read tracks
  
    Given I can access the tracks page
    Then i can read all the tracks entries  
    
    Scenario: Read One tracks
  
    Given I can access the tracks page    
    When I click on view one tracks 
    Then i can read that tracks details  
    
      
  Scenario: Update tracks
  
    Given I can access the tracks page    
    When I enter new tracks details
    Then i can update that tracks entry   
    
 
  Scenario: Delete tracks
  
    Given I can access the tracks page    
    When I click on delete tracks button 
    Then i can delete that tracks entry 
    
    
  Scenario: View album linked to track
  
    Given I can access the tracks page       
    When I click on a album in that track  
    Then i am taken to that albums page 
    
 Scenario: Search for a track
  
    Given I can access the tracks page       
    When i search for a track 
    Then only that tracks details are displayed 
@playlists
Feature: Playlists Page

Background: 
		Given navigatec to the login page
		When userc enter the correct details
		Then userc is logged in

  Scenario: Create Playlists
  
    Given I can access the Playlists page
    When I enter Playlists details
    Then i can create an Playlists entry 

	Scenario: Read Playlists
  
    Given I can access the Playlists page
    Then i can read all the Playlists entries  
    
    Scenario: Read One Playlists
  
    Given I can access the Playlists page    
    When I click on view one Playlists 
    Then i can read that Playlists details  
    
      
  Scenario: Update Playlists
  
    Given I can access the Playlists view one page   
    When I enter new Playlists details
    Then i can update that Playlists entry   
    
 
  Scenario: Delete Playlists
  
    Given I can access the Playlists view one page   
    When I click on delete Playlists button 
    Then i can delete that Playlists entry 
    
    
 Scenario: view track from a single playlist
  
    Given I can access the Playlists view one page       
    When I click on a linked track  
    Then i an taken to that tracks page
    
    Scenario: search playlists from homepage
  
    Given I can access the homepage       
    When i search for a playlist  
    Then only that playlists details are displayed

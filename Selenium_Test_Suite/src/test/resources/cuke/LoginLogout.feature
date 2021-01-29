@loginlogout
Feature: User registration, login and logout

  Scenario: I wish to login to the system
    Given i go to the login page
    When i enter the user name and passwird 
    Then i can login

  Scenario: I wish to logout of the system
    Given i can logina
    When when i click logout
    Then i am logged out 

  Scenario: I wish to register as a new user
    Given i can go to the register page 
    When i enter the registration details 
    Then i can login with the details
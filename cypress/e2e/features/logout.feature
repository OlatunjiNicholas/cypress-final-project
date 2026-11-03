Feature: Logout page
    Scenario: Logout from the application
    
        Given I am logged in to the application
        When I click on profile button
        Then I click the logout button
        
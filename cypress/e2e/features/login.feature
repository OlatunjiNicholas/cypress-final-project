Feature: Login feature

  Scenario: Successful Login
    Given I navigate to the login page
    When I enter a valid email
    And I enter a valid password
    And I click the Continue button
    Then I should be redirected to the Dashboard

Feature: Dashboard

  Scenario: Verify Dashboard transaction filters

    # Given I am logged in

    Given User views Dashboard
    When Dashboard should load successfully
    Then I should see the Dashboard page

    And I should see Transaction Trend

    When I click on Daily transaction dropdown
    And I click on Weekly transaction dropdown
    And I click on Monthly transaction dropdown
    And I click on Yearly transaction dropdown

    When I click on All transaction dropdown
    And I click on Withdrawal transaction dropdown
    And I click on Purchase transaction dropdown
    And I click on Deposit transaction dropdown
    And I click on P2P transfer dropdown
    And I click on Airtime transaction dropdown
    And I click on Bill payment transaction dropdown
    And I click on Refund transaction dropdown
    And I click on Reversal transaction dropdown
    And I click on Pre Auth transaction dropdown
    And I click on Completion transaction dropdown
    And I click on Balance transaction dropdown
    And I click on Account transfer transaction dropdown

    Then I should see the Performance
    And I should see the Transaction Status
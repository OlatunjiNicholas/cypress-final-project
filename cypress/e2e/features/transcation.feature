Feature: Transaction Management

  Scenario: User can filter transactions

    Given I can see the Transaction Management button

    When I click on Transaction Management
    Then I click on Flow dropdown
    And I select All Flows
    And I select Credit
    And I select Debit

    When I click on Transaction Type dropdown
    Then I select All Types
    And I select Withdrawal
    And I select Purchase
    And I select Transfer
    And I select Account Transfer
    And I select Airtime
    And I select Bills Payment
    And I select Refund
    And I select Reversal
    And I select Completion

    When I click Status dropdown
    Then I select All Status
    And I select Successful
    And I select Failed
    And I select Pending
    And I select Reversed


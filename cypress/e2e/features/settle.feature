
Feature: Settlement Management

  Scenario: User can view and search Merchant Settlement records
    Given I am on Dashboard page
    When I click on settlement management dropdown
    Then I click on All settlement
    Then I should see the Merchant page
    When I search for Taiwo
    Then I should see the merchant Taiwo

    When I click on settlement dropdown
    Then I should see the settlement dropdown
    Then I select settlement type T1
    Then I select settlement type T2
    Then I select settlement type Instant
    Then I select settlement type Weekly
    Then I select settlement type All

    When I click on Status
    Then I should see status dropdown
    Then I select All status
    Then I select status Pending
    Then I select status Processing
    Then I select status Completed
    Then I select status Failed
    Then I select status Flagged
    Then I select status Hold
    Then I select status Under Review
    Then I select All status

    Then I click Export button
    Then I click the first Action button
    Then I click Next Page

    When I click on the Settlement Configuration
    Then I should see the Settlement Configuration page
    Then I should see the Merchant Settlement Cycles section
    Then I click on Merchant tab
    Then I click on Agent tab
    When I click on Configure Cycle
    Then I click Settlement Blacklist

    # Then I click on Export
    # Then I should see the merchant settlement table


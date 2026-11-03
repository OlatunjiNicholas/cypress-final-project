
Feature: End-to-End Module Navigation

  Scenario: Navigate through all application modules

    # MODULE 1: LOGIN
    Given I navigate to the login page
    When I enter a valid email
    And I enter a valid password
    And I click the Continue button
    Then I should be redirected to the Dashboard

    # MODULE 2: DASHBOARD
    # Given User views Dashboard
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

    # MODULE 3: USER MANAGEMENT
    # Given the user is on the User Management page
    When user click on overview button
    Then the user clicks on usermanagement button
    Then the user searches for a username
    And the user check on Role button
    When the user hovers on status dropdown
    And the user selects All from the status dropdown
    And the user selects Active from the status dropdown
    And the user selects Suspended from the status dropdown
    And the user selects Blocked from the status dropdown
    When the user clicks on Add New User button
    Then fills the First Name field with a valid first name
    And fills the Last Name field with a valid last name
    And fills the Email field with a valid email address
    And user click on cancel button
    When the user clicks on role button
    And the user clicks on Add New Role button
    Then fills the Role Name field with a valid role name
    And fills the Description field with a valid description
    When the user clicks on Continue button
    Then the user should nagivate to Manage Permisions page
    And the user clicks on cancel Tab

    # MODULE 4: MERCHANT MANAGEMENT
    # Given User navigate to Merchant Mgt
    When User click on Merchant management button
    When User click on Manage Merchant button
    Then User can search exiting record with name
    And User click on search botton
    When User click on Status dropdown status
    Then User click All on status dropdown
    And User click Active on status dropdown
    And User click  Suspended on status dropdown
    Then User exports Merchant records

    When User click on Manage Branch button
    Then User search existing record with name
    And User click on Branch status dropdown
    And User clcik on All status
    And User click on Active status
    And User click on Suspended status
    Then User exports Branch records

    # MODULE 5: TRANSACTION MANAGEMENT
    # Given I can see the Transaction Management button
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


    # MODULE 6: COLLECTION MANAGEMENT
    When I click on Collection Management button
    When I should see the collection preview
    Then I click on search field
    When I search for merchant
    Then I should see the selected merchant

    When I click on Add new collection button
    Then I should see create new collection
    When I select Pay without ID
    Then Pay without ID should be selected
    When I select Pay with ID
    Then Pay with ID should be selected

    Then I select merchant
    When I assign the collection to selected branches
    Then selected branches should be checked
    When I enter collection name
    Then I verify the collection name
    Then I select Add Single Payer
    Then I select Upload Bulk Payers
    Then Add Single Payer should be selected

    When I enter payer name
    Then I verify the payer name
    When I enter payer ID
    Then I verify payer ID
    When I enter payer email
    Then I verify the payer email
    When I enter payer phone number

    When I click on payment expiration
    Then I click on Add a start date
    Then I select start date
    When I click on Expire date field
    Then I verify the Preview
    When I click on cancel button
    Then I should see cancel progress
    When I click on No button
    Then the cancel confirmation should close

    Then I should see configure input page
    Then I verify add inputs field
    Then I verify payer identifier field
    Then I verify fullname field
    Then I verify email field
    Then I verify phone number field
    

    # MODULE 7: SETTLEMENT MANAGEMENT
    # Given I am on Dashboard page
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

    # MODULE 8: LOGOUT
    #     Given I am logged in to the application
        When I click on profile button
        Then I click the logout button



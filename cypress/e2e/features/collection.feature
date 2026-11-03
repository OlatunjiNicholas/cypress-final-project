Feature: Function Collection management

    Scenario: Verify And Create New Collection page

        Given I am on the Create New Collection page
        When I click on Collection Management button
        Then I should see the collection preview
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
        # Then User click the next button

        # Then I verify configuration amount page
        # Then I select variable amount
        # Then I select fixed amount
        # Then I enter collection amount
        # Then I click on payment installment
        # Then I click on Apply VAT
        # Then I verify settlement options
        # Then I select Head Office
        # Then I select Branches
        # Then User click on submit button




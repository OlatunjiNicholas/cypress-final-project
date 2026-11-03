import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CollectionMgtPage from "../../pages/collectionPage";

const collection = new CollectionMgtPage

Given("I am on the Create New Collection page", () => {
     cy.login();

});

When("I click on Collection Management button", () => {
     collection.verifycollectionMgt();
});
   
Then("I should see the collection preview", () => {
    collection.verifyPage();
});

Then("I click on search field", () => {
    collection.clickMerchantField();

});

Then("I search for merchant", () => {
    collection.searchMerchant();

});

Then("I should see the selected merchant", () => {
    collection.verifySelectedMerchant();

});

When("I click on Add new collection button", () => {
    collection.clickAddnewCollection();

});

Then("I should see create new collection", () => {
    collection.verifycreateNewCollection();

});

When("I select Pay without ID", () => {
    collection.selectPayWithoutId();

});

Then("Pay without ID should be selected", () => {
    collection.verifyPayWithoutIdSelected();
});

When("I select Pay with ID", () => {
    collection.selectPayWithId();
});

Then("Pay with ID should be selected", () => {
    collection.verifyPayWithIdSelected();
});

Then("I select merchant", () => {
    collection.selectMerchant();
});

Then("I assign the collection to selected branches", () => {
    collection.assignSelectedBranches();

});

Then("selected branches should be checked", () => {
    collection.verifyBranchesChecked();

});

When("I enter collection name", () => {
    collection.enterCollectionName();

});
 
Then("I verify the collection name", () => {
    collection.verifyCollectionName();
});

Then("I select Add Single Payer", () => {
    collection.selectSinglePayer();
});

Then("I select Upload Bulk Payers", () => {
    collection.selectBulkPayers();
    
});

Then("Add Single Payer should be selected", () => {
    collection.verifySinglePayerSelected();
});


Then("I enter payer name", () => {
    collection.enterPayerName();
});

Then("I verify the payer name", () => {
    collection.verifyPayerName();
});

Then("I enter payer ID", () => {
    collection.enterPayerId();
});

Then("I verify payer ID", () => {
    collection.verifyPayerId();
});

Then("I enter payer email", () => {
    collection.enterPayerEmail();
});

Then("I verify the payer email", () => {
    collection.verifyPayerEmail();
});

Then("I enter payer phone number", () => {
    collection.enterPayerPhone();
});

When("I click on payment expiration", () => {
    collection.setPaymentExpiration();

});

// Then("I should see pament expiration field", () => {
//     collection.verifyDateSection();

// });

Then("I click on Add a start date", () => {
    collection.selectAddStartDate();
});

// Then("I verify Add a start selected", () => {
//     collection.verifyAddStartDateSelected();
// });

// When("I click on start date field", () => {
//     collection.verifyDateSection()
// });

Then("I select start date", () => {
    collection.clickStartDate();
});

When("I click on Expire date field", () => {
    collection.clickExpiryDate();
});


Then("I verify the Preview", () => {
    collection.verifyPreview();
});

When("I click on cancel button", () => {
    collection.clickCancel();
});

Then("I should see cancel progress", () => {
    collection.verifyCancelprogress();

});
When("I click on No button", () => {
     collection.clickNobutton();

});

When("the cancel confirmation should close", () => {
    collection.clickNext();
});

// LAST PAGE

Then("I should see configure input page", () => {
    collection.verifyConfigurePage();
});

Then("I verify add inputs field", () => {
    collection.verifyAddedInputsSection();
});

Then("I verify payer identifier field", () => {
    collection.verifyUniquePayerIdentifier();
});

Then("I verify fullname field", () => {
    collection.verifyFullNameField();
});

Then("I verify email field", () => {
    collection.verifyEmailAddressField();
});

Then("I verify phone number field", () => {
    collection.verifyPhoneNumberField();
});

// Then("I click on add new field", () => {
//     collection.clickAddNewFields();
// });

// Then("I should see add new field", () => {
//     collection.verifyFieldNameInput();
// });

// Then("I verify Add Hint/Help text", () => {
//     collection.verifyHintHelpTextOption();
// });

// Then("I verify data type selection", () => {
//     collection.verifyDataTypeSection();
// });

// Then("I verify format condition selection", () => {
//     collection.verifyFormatConditionsSection();
// });

// Then("I verify require option", () => {
//     collection.verifyRequiredOption();
// });

// Then("I verify button cancel", () => {
//     collection.verifyCancelButton();
// });

// Then("I verify submit button", () => {
//     collection.verifySubmitButton();
// });

// Then("I enter name for field", () => {
//     collection.enterFieldName();
// });

// Then("I check value for field", () => {
//     collection.verifyFieldValue();
// });

// Then("I click on Add hint checkbox", () => {
//     collection.selectHintHelpText();
// });

// Then("I verify hint/help text is checked", () => {
//     collection.verifyHintHelpTextChecked();
// });

// Then("I click on Data Type", () => {
//     collection.selectDataType();
// });


// Then("I verify data type is selected", () => {
//     collection.verifyDataTypeSelected();
// });

// Then("I click on Required field", () => {
//     collection.selectRequiredField();
// }); 

// Then("I verify required field is selected", () => {
//     collection.verifyRequiredFieldSelected();
// });

// When("I click on Submit button", () => {
//     collection.clickSubmit();
// });


// Then("I click on cancel button", () => {
//     collection.clickCancel();
// });

// Then("I verify submit button is disabled", () => {
//     collection.verifySubmitDisabled();
// });

// Then("I verify submit button is enabled", () => {
//     collection.verifySubmitEnabled();
// });

// Then("I click on cancel button", () => {
//     collection.CancelButton();
// });

// Then("I verify field name input", () => {
//     collection.verifyFieldAdded();

// });

// Then("I verify form closed", () => {
//     collection.verifyFormClosed();
// });

// Then("I verify configuration amount page", () => {
//     collection.verifyAmountConfiguration();
// });

// Then("I select fixed amount", () => {
//     collection.selectFixedAmount();
// });

// Then("I select variable amount", () => {
//     collection.selectVariableAmount();
// });

// Then("I enter collection amount", () => {
//     collection.enterCollectionAmount();
// });

// Then("I click on payment installment", () => {
//     collection.enableInstallment();
// });

// Then("I verify payment installement checked", () => {
//     collection.verifyInstallmentEnabled();
// });

// Then("I click on Apply VAT", () => {
//     collection.enableVAT();
// });

// Then("I verify Apply VAT checked", () => {
//     collection.verifyVATEnabled();
// });

// Then("I verify settlement options", () => {
//     collection.verifySettlementOptions();
// });

// Then("I select Head Office", () => {
//     collection.selectHeadOffice();
// });

// Then("I select Branches", () => {
//     collection.selectBranches();
// });

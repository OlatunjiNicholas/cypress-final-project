import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MerchantMgtPage from "../../pages/merchantPage";

const mgt = new MerchantMgtPage();

Given("User navigate to Merchant Mgt", () => {
    cy.login();

});

When("User click on Merchant management button", () => {
    mgt.clickMerchantMgtButton()  
});

When("User click on Manage Merchant button", () => {
    mgt.clickMgtMerchantButton()
});

Then("User can search exiting record with name", () => {
    mgt.clickMgtMerchantsearchField()
});

Then("User click on search botton", () => {
    mgt.ClickMerchantSearchButton()
});

When("User click on Status dropdown status", () => {
    mgt.clickMgtMerchantStatusdropdown()
});

Then("User click All on status dropdown", () => {
    mgt.clickMgtMerchantStatusAlldropdown()
});

Then("User click Active on status dropdown", () => {
    mgt.clickMgtMerchantStatusActivedropdown()
});

Then("User click  Suspended on status dropdown", () => {
    mgt.clickMgtMerchantStatusSuspendeddropdown()
});

Then("User exports Merchant records", () => {
    mgt.clickMgtMerchantExportButton()
});


When("User click on Manage Branch button", () => {
    mgt.clickMgtBranchButton()
});

Then("User search existing record with name", () => {
    mgt.clickMgtBranchsearchField()
});

Then("User click on Branch status dropdown", () => {
    mgt.clickMgtBranchStatusDropdown()
});

Then("User clcik on All status", () => {
    mgt.clickMgtBranchStatusAllDropdown()
});

Then("User click on Active status", () => {
    mgt.clickMgtBranchStatusActiveDropdown()
});

Then("User click on Suspended status", () => {
    mgt.clickMgtBranchStatusSuspendedDropDown()
});

Then("User exports Branch records", () => {
    mgt.clickMgtBranchExportButton()
});
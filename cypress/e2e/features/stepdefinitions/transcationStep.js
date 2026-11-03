import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import TranscationPage from "../../pages/transcationPage";

const transaction = new TranscationPage();

Given("I can see the Transaction Management button", () => {
     cy.login();
});

When("I click on Transaction Management", () => {
    transaction.clickMgtbutton();
});

Then("I search for a transaction", () => {
    transaction.searchtranscation();
});

Then("I click on Flow dropdown", () => {
    transaction.clickflowDropdown();
});

Then("I select All Flows", () => {
    transaction.selectAllFlows();
});

Then("I select Credit", () => {
    transaction.selectCredit();
});

Then("I select Debit", () => {
    transaction.selectDebit();
});

When("I click on Transaction Type dropdown", () => {
    transaction.clickTrantypeDropdown();
});

Then("I select All Types", () => {
    transaction.selectAllTypes();
});

Then("I select Withdrawal", () => {
    transaction.selectWithdrawal();
});

Then("I select Purchase", () => {
    transaction.selectPurchase();
});

Then("I select Transfer", () => {
    transaction.selectTransfer();
});

Then("I select Account Transfer", () => {
    transaction.selectAccountTransfer();
});

Then("I select Airtime", () => {
    transaction.selectAirtime();
});

Then("I select Bills Payment", () => {
    transaction.selectBillpayment();
});

Then("I select Refund", () => {
    transaction.selectRefund();
});

Then("I select Reversal", () => {
    transaction.selectReversal();
});

Then("I select Completion", () => {
    transaction.selectCompletion();
});

When("I click Status dropdown", () => {
    transaction.clickStatusdropdown();
});

Then("I select All Status", () => {
    transaction.selectAllstatus();
});

Then("I select Successful", () => {
    transaction.selectSuccessful();
});

Then("I select Failed", () => {
    transaction.selectFailed();
});

Then("I select Pending", () => {
    transaction.selectPending();
});

Then("I select Reversed", () => {
    transaction.selectReversed();
});
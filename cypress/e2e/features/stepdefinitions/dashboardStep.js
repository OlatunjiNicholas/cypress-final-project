import { Given, When,Then } from '@badeball/cypress-cucumber-preprocessor'
import DashboardPage from '../../pages/dashboardPage'

const dashboardPage = new DashboardPage();


// =========================
// DASHBOARD
// =========================
Given("User views Dashboard", () => {
    cy.login();
});

When("Dashboard should load successfully", () => {
    dashboardPage.verifyDashboard();
});

Then("I should see the Dashboard page", () => {
    dashboardPage.verifyDashboard();
});

Then("I should see Transaction Trend", () => {
    dashboardPage.verifyTransactionTrend();
});

// =========================
// TRANSACTION PERIOD
// =========================

When("I click on Daily transaction dropdown", () => {
    dashboardPage.selectDaily();

});

When("I click on Weekly transaction dropdown", () => {
    dashboardPage.selectWeekly();

});

When("I click on Monthly transaction dropdown", () => {
    dashboardPage.selectMonthly();

});

When("I click on Yearly transaction dropdown", () => {
    dashboardPage.selectYearly();

});


// =========================
// TRANSACTION TYPE
// =========================

When("I click on All transaction dropdown", () => {
    dashboardPage.openTransactionDropdown();

});


When("I click on Withdrawal transaction dropdown", () => {
    dashboardPage.selectWithdrawal();

});


When("I click on Purchase transaction dropdown", () => {
    dashboardPage.selectPurchase();

});


When("I click on Deposit transaction dropdown", () => {
    dashboardPage.selectDeposit();

});


When("I click on P2P transfer dropdown", () => {
    dashboardPage.selectP2PTransfer();

});


When("I click on Airtime transaction dropdown", () => {
    dashboardPage.selectAirtime();

});


When("I click on Bill payment transaction dropdown", () => {
    dashboardPage.selectBillPayment();

});  


When("I click on Refund transaction dropdown", () => {
    dashboardPage.selectRefund();

});


When("I click on Reversal transaction dropdown", () => {
    dashboardPage.selectReversal();

});

When("I click on Pre Auth transaction dropdown", () => {
    dashboardPage.selectPreAuth();

});


When("I click on Completion transaction dropdown", () => {
    dashboardPage.selectCompletion();

});


When("I click on Balance transaction dropdown", () => {
    dashboardPage.selectBalance();

});

When("I click on Account transfer transaction dropdown", () => {
    dashboardPage.selectAccountTransfer();

});

// =========================
// OTHER DASHBOARD SECTIONS
// =========================

Then("I should see the Performance", () => {
    dashboardPage.verifyPerformance();

});

Then("I should see the Transaction Status", () => {
    dashboardPage.verifyTransactionStatus();

});
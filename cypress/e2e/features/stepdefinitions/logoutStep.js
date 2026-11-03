import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import logoutPage from "../../pages/logoutPage";

const logout = new logoutPage

Given("I am logged in to the application", () => {
    cy.login();
});

When("I click on profile button", () => {
    logout.clickprofileButton();
});

Then("I click the logout button", () => {
    logout.clicklogoutButton();
});

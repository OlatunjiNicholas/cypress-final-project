import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import signinPage from "../../pages/loginpage";

const login = new signinPage();

Given("I navigate to the login page", () => {
  login.setupVisit();
});

When("I enter a valid email", () => {
  login.setupLogin();
});

When("I enter a valid password", () => {
  login.setupPassword();
});

When("I click the Continue button", () => {
  login.setupContinue();
});

Then("I should be redirected to the Dashboard", () => {
  login.verifyDashboard();
});
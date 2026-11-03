 import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import UserManagementPage from "../../pages/usermanagementPage";

const user = new UserManagementPage();

Given("the user is on the User Management page", () => {
  cy.login();
});
When("user click on overview button", () => {
  user.clickoverview();
});

When('the user clicks on usermanagement button', () => {
  user.clickUserManagement();
});

Then('the user searches for a username', () => {
    user.enterSearchField();
});

When('the user check on Role button', () => {
    user.selectRoleButton();
});
When('the user hovers on status dropdown', () => {
    user.clickStatusButton();
})
When('the user selects All from the status dropdown', () => {
    user.clickAllStatus();
});

When('the user selects Active from the status dropdown', () => {
    user.clickActiveStatus();
});

When('the user selects Suspended from the status dropdown', () => {
    user.clickSuspendedStatus();
});

Then('the user selects Blocked from the status dropdown', () => {
    user.clickBlockedStatus();
});

Then('the user clicks on Export button', () => {
    user.clickExportButton();
});

Then('the user clicks on Add New User button', () => {
    user.clickAddNewUser();
})

Then('fills the First Name field with a valid first name', () => {
    user.createNewuserFirst();
})

Then('fills the Last Name field with a valid last name', () => {
    user.creatNewuserLast();
})

Then('fills the Email field with a valid email address', () => {
    user.createnewuserEmail();
})
Then('user click on cancel button', () => {
    user.clickCancelButton();
})

Then('the user clicks on role button', () => {
    user.clickRolesButtonTab();
})

Then('the user clicks on Add New Role button', () => {
    user.clickAddNewRole();
})
Then('fills the Role Name field with a valid role name', () => {
    user.enterRoleName();
})
Then('fills the Description field with a valid description', () => {
    user.enterDescription();
})
When('the user clicks on Continue button', () => {
    user.setupRoleContinue();
})
Then('the user should nagivate to Manage Permisions page', () => {
    user.setupManagePermissionsHeader();
})

Then('the user clicks on cancel Tab', () => {
    user.clickCancelTab();
})



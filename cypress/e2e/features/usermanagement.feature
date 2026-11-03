Feature: User Management

Scenario: user can create a new account
  Given the user is on the User Management page
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

  
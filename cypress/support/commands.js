
Cypress.Commands.add("login", () => {
  // Set the browser viewport
  cy.viewport(1920, 1080);

  // Visit the application
  cy.visit("https://admin.proxima.ng");

  // Enter email
  cy.get('[type="email"]', { timeout: 15000 })
    .should("be.visible")
    .type("ayanloyesegun+6@gmail.com");

  // Enter password
  cy.get('[type="password"]', { timeout: 15000 })
    .should("be.visible")
    .type("Password@@2", { log: false });

  // Click the submit button
  cy.get('[type="submit"]', { timeout: 15000 })
    .should("be.visible")
    .click();

  // Verify successful login
  cy.url({ timeout: 20000 }).should("include", "/dashboard");
});

// ***********************************************
// Visit https://on.cypress.io/custom-commands to
// learn more about custom commands.
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
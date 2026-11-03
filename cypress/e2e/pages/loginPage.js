class signinPage{
    emailField = '[type="email"]'
    passwordField = '[type="password"]'
    continueButton = '[type="submit"]'
    dashboard = '[class="w-[104px]"]'

    // registersetup
    email = 'ayanloyesegun+6@gmail.com'
    password = 'Password@@2'

    // loginSetup
    setupVisit() {
    cy.visit("/");
    
    }
    setupLogin(){
        cy.get(this.emailField)
            .should('be.visible')
            .and('be.empty')
            .type(this.email)
    }

    setupPassword(){
        cy.get(this.passwordField)
            .should('be.visible')
            .type(this.password)
            .should('have.value', this.password)
    }

    setupContinue(){
        cy.get(this.continueButton)
            .should('be.visible')
            .click()
    }

    verifyDashboard(){
        cy.get(this.dashboard)
            .should('exist')
            .and('be.visible')
    }

}
export default signinPage
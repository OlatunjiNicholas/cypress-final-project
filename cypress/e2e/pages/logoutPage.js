class logoutPage {
    profileButton = '.w-fit > :nth-child(1) > .flex > .font-semibold'
    logoutButton = 'Logout'


    clickprofileButton() {
        cy.get(this.profileButton)
            .should('be.visible')
            .click();
    }

    clicklogoutButton() {
        cy.contains(this.logoutButton)
            .should('be.visible')
            .click();
    }

}
export default logoutPage
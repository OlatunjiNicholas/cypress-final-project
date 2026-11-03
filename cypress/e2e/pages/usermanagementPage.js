class UserManagementPage {
    overViewButton = "Overview"
    usermanagementButton = "User Management"
    addnewuserButton = 'button.bg-primary'
    searchField = 'input[placeholder="Search name, email address"]'
    searchButton = 'button.ant-input-search-button'
    selectRole = '[type="button"]'
    statusButton = "Status"
    allStatusdropdown = "All"
    activeStatusdropdown = "Active"
    suspendedStatusdropdown = "Suspended"
    blockedStatusdropdown = "Blocked"
    exportButton = "Export"
    firstnameField = '#firstName'
    lastnameField = '#lastName'
    emailField = '#email'
    cancelButton = '.ant-modal-close'
    submitbutton = 'button[type=submit]'
    closeButton = 'svg[data-icon="close"]'
    rolesButton = "Roles"
    addnewRoleButton = 'div.flex.gap-2.justify-center.items-center'
    rolenameField = '#roleName'
    descriptionField = '#description'
    continueButton = '.ant-form-item-control-input-content > .w-fit'
    managePermissionsHeader = "Manage Permissions"
    cancelTab = ':nth-child(4) > .ant-modal-root > .ant-modal-wrap > .ant-modal > [style="outline: none;"] > .ant-modal-content > .ant-modal-close'
    
    clickoverview() {
        cy.contains(this.overViewButton)
            .should('exist')
            .click({wait : 10000})
    }

    clickUserManagement() {
        cy.get('p.font-medium.text-\\[\\#535862\\].text-\\[16px\\].font-figtree')
            .first()
            .scrollIntoView()
            .should('be.visible');

        cy.contains(this.usermanagementButton)
            .should('be.visible')
            .click({force: true})
    }

    enterSearchField() {
        cy.get(this.searchField)
            .should('be.visible')
            .type('Ayan')
    }

    clickSearchButton() {
        cy.get(this.searchButton)
            .should('be.visible')
            .click()
    }

    selectRoleButton() {
        cy.get(this.selectRole)
            .should('be.visible')
            .and('contain.text', 'Role')
    }

    clickStatusButton() {
        cy.contains(this.statusButton)
            .should('contain.text', 'Status')
            .click()
    }
    clickAllStatus() {
        cy.contains(this.allStatusdropdown)
            .should('be.visible')
            .and('contain.text', 'All')
            .click()

    }
    clickActiveStatus() {
        // cy.get(this.clickStatusButton)
        cy.contains(this.activeStatusdropdown).should('be.visible').and('contain.text', 'Active').click()

    }
    clickSuspendedStatus() {
        // cy.get(this.clickStatusButton)
        cy.contains(this.suspendedStatusdropdown).should('be.visible').and('contain.text', 'Suspended').click({force: true})
       
    }
    clickBlockedStatus() {
        // cy.get(this.clickStatusButton)
        cy.contains(this.blockedStatusdropdown).should('be.visible').and('contain.text', 'Blocked').click()
    
    }

    clickExportButton() {
        cy.contains(this.exportButton).should('exist').click()
    }

    clickAddNewUser() {
        cy.get(this.addnewuserButton).should('be.visible').click()
    }

    createNewuserFirst() {
        cy.get(this.firstnameField).should('be.visible').type('Ayan')
    }

    creatNewuserLast() {
        cy.get(this.lastnameField).should('be.visible').type('Loyesegun').should('be.visible')
    }

    createnewuserEmail() {
        cy.get(this.emailField).should('exist').type('olanic@gmail.com').should('be.visible')
    }

    clickCancelButton() {
        cy.get(this.cancelButton).click()
    }
    
    clickRolesButtonTab() {
        cy.contains(this.rolesButton).should('be.visible').click()
    }

    clickAddNewRole() {
        cy.get(this.addnewRoleButton).should('be.visible').click()
    }

    enterRoleName() {
        cy.get(this.rolenameField).should('be.visible').type('Admin')
    }

    enterDescription() {
        cy.get(this.descriptionField).should('be.visible').type('Admin role')
    }

    setupRoleContinue() {
        cy.get(this.continueButton).click()
    }
    setupManagePermissionsHeader() {
        cy.contains(this.managePermissionsHeader).should('be.visible').should('contain.text', 'Manage Permissions')
    }

    clickCancelTab() {
        cy.get(this.cancelTab)
        // .should('be.visible')
        .click({force: true})
    }

}
export default UserManagementPage 
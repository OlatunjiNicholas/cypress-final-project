class MerchantMgtPage {
    merchantmgtButton = ':nth-child(3) > .w-full > .font-medium'
    managemerchantButton = "Manage Merchants"
    mmsearchField = '.ant-input'
    mmsearchButton = '.ant-input-group-addon > .ant-btn'
    mmstatusbutton = "Status"
    mmstatusdropdownAll = "All"
    mmstatusdropdownActive = "Active"
    mmstatusdropdownSuspended = "Suspended"
    mmexportButton = "Export"
    cancelButton ='[class="ant-input-suffix"]'
    mbButton = "Manage Branch"
    mbsearchField = 'input[type="search"]'
    mbsearchButton = '.ant-input-group-addon > .ant-btn'
    mbstatusButton = "Status"
    mbstatusallButton = "All"
    mbstatusactiveButton = "Active"
    mbstatussuspendedButton = "Suspended"
    mbexportButton = "Export"
    accountupgradeButton = "Account Upgrade Requests"


    clickMerchantMgtButton() {
        cy.get(this.merchantmgtButton)
            .should('exist')
            .click()
    }

    clickMgtMerchantButton() {
        cy.contains(this.managemerchantButton)
            .should('be.visible')
            .click()
    }

    clickMgtMerchantsearchField() {
        cy.get(this.mmsearchField)
            .should('exist')
            .clear()
            .type('Bauch')
            .and('be.visible')
    }

    ClickMerchantSearchButton() {
        cy.get(this.mmsearchButton)
            .should('exist')
            .click()
    }

    clickMgtMerchantStatusdropdown() {
        cy.contains(this.mmstatusbutton)
            .should('exist')
            .click()
    }

    clickMgtMerchantStatusAlldropdown() {
        cy.contains(this.mmstatusdropdownAll)
            .should('exist')
            .and('contain.text', 'All')
            .click({force: true})
    }

    clickMgtMerchantStatusActivedropdown() {
        cy.contains(this.mmstatusbutton)
            .should('exist')
            .click({force: true})

        cy.contains(this.mmstatusdropdownActive)
            .should('exist')
            .and('contain.text', 'Active')
            .click({ force: true });
    }

    clickMgtMerchantStatusSuspendeddropdown() {
        cy.contains(this.mmstatusbutton)
            .click()
            
        cy.contains(this.mmstatusdropdownSuspended)
            .should('exist')
            .and('contain.text','Suspended')
            .click({ force: true });
    }

    clickMgtMerchantExportButton() {
        cy.contains(this.mmexportButton)
            .should('exist')
    }

    clickMgtBranchButton() {
        cy.get(this.merchantmgtButton)
            .should('exist')
            .click()
        cy.contains(this.mbButton)
            .should('exist')
            .click()
    }

    clickMgtBranchsearchField() {
        cy.get(this.mbsearchField)
            .should('exist')
            .click()
            .type('Roberts')
            .should('have.value', 'Roberts')

        cy.get(this.mbsearchButton)
            .should('exist')
            .click()

        cy.get(this.cancelButton)
            .should('exist')
            .click()

    }

    clickMgtBranchStatusDropdown() {
        cy.contains(this.mmstatusbutton)
            .should('exist')
            .and('contain.text', 'Status')
    }

    clickMgtBranchStatusAllDropdown() {
        cy.contains(this.mmstatusdropdownAll)
            .should('exist')
            .and('contain.text', 'All')
            .click()
    }

    clickMgtBranchStatusActiveDropdown() {
        cy.contains(this.mmstatusdropdownActive)
            .should('exist')
            .and('contain.text', 'Active')
            .click()
    }

    clickMgtBranchStatusSuspendedDropDown() {
        cy.contains(this.mmstatusbutton)
            .should('exist')
            .click()
        cy.contains(this.mmstatusdropdownSuspended)
            .should('exist')
            .and('contain.text', 'Suspended')
            .click({ force: true })
    }

    clickMgtBranchExportButton() {
        cy.contains(this.mmexportButton)
            .should('exist')
            .click()
    }

}
export default MerchantMgtPage
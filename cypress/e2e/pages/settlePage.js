
class SettleMgtPage {

    // =========================
    // NAVIGATION
    // =========================

    settlementButton = ':nth-child(8) > .w-full > .ml-auto';
    allSettlementButton = "All Settlement";
    merchantsettlement = "Merchant Settlement"
    configurationButton = "Configuration";


    // =========================
    // MERCHANT PAGE
    // =========================

    merchantTitle = "h1";
    searchField = '.ant-input';
    searchButton = '.ant-input-search-button';
    statusButton = 'button.ant-dropdown-trigger';
    dropdownMenu = 'li[role="menuitem"]';
    table = "table";
    tableRows = "tbody tr";
    actionButton = ".anticon-more";
    nextPageButton = ".ant-pagination-next";
    settlementType = "Settlement Type";
    settletypeDropdownalltypes = "All Types";
    settlementdropdownT1 = "T+1";
    settlementdropdownT2 = "T+2"
    settlementdropdowninstant = "Instant";
    settlementdropdownweekly = "Weekly"


    statusbutton = "Status";
    allStatus = "All Status"
    pendingStatus = "Pending";
    approvedStatus = "Approved"
    rejectedStatus = "Rejected";
    processingStatus = "Processing"
    completedStatus = "Completed";
    failedStatus = "Failed";
    flaggedStatus = "Flagged";
    holdStatus = "Hold";
    underReviewStatus = "Under Review";
    merchantTable = "table";


    // =========================
    // SETTLEMENT CONFIGURATION
    // =========================

    configurationTitle = "h3";
    merchantTab = 'h3';
    agentTab = 'h3';

    merchantsettlemnetcycles = "Merchant Settlement Cycles";
    configureCycleButton = 'button';
    settlementBlacklistButton = 'button';
    settlementSearchField ='input[placeholder="Search by merchant name & ID"]';
    settlementSearchButton = ".ant-input-search-button";
    


    // =========================
    // NAVIGATION METHODS
    // =========================

    clickSettlementButton() {

        cy.get(this.settlementButton)
            .should("be.visible")
            .click();

    }


    clickAllSettlementButton() {

        cy.contains(this.allSettlementButton)
            .should("exist")
            .click();

    }


    // 


    // =========================
    // MERCHANT PAGE ASSERTION
    // =========================

    verifyMerchantPage() {

        cy.contains(this.merchantsettlement)
            .should("be.visible");

        cy.get(this.searchField)
            .should("be.visible");

        cy.contains("Status")
            .should("be.visible");

        cy.contains("Export")
            .should("be.visible");

        cy.get(this.table)
            .should("be.visible");

    }


    // =========================
    // SEARCH MERCHANT
    // =========================

    enterMerchantName() {

        cy.get(this.searchField)
            .should("be.visible")
            .clear()
            .type('Taiwo');

    }

    clickSearchButton() {

        cy.get(this.searchButton)
            .should("be.visible")
            .click();

    }

    verifyMerchantFound() {

        cy.get(this.tableRows)
            .should("contain.text", 'TAIWO FAYIPE');

    }


    // =========================
    // SETTLEMENT TYPE FILTER
    // =========================

    clickSettlementTypeButton() {

        cy.contains(this.settlementType)
            .should("be.visible")
            .click();

    }

    verifySettlementType() {
        cy.contains(this.settlementType)
            .should("be.visible")
            .click();
    }        
    
    verifysettlementT1() {
        cy.contains(this.settlementType).click();
        cy.contains(this.settlementdropdownT1)
            .should("be.visible")
            .click();
    }

    verifysettlementT2() {
        cy.contains(this.settlementType).click();
        cy.contains(this.settlementdropdownT2)
            .should("be.visible")
            .click();
    }

    verifysettlementinstant() {
        cy.contains(this.settlementType).click();
        cy.contains(this.settlementdropdowninstant)
            .should("be.visible")
            .click();
    }

    verifysettlementweekly() {
        cy.contains(this.settlementType).click();
        cy.contains(this.settlementdropdownweekly)
            .should("be.visible")
            .click();
    }
    verifysettlementalltypes() {
        cy.contains(this.settlementType).click();
        cy.contains(this.settletypeDropdownalltypes)
            .should("be.visible")
            .click();
    }
       
    // FILTER STATUS BUTTON
    clickStatusButton() {
        cy.contains(this.statusbutton)
            .should("exist")
            .click();

    }
    

    verifyStatus() {
        cy.contains(this.statusbutton)
            .should("be.visible")
            .click();

    }

    verifyAllStatus() {
        cy.contains(this.statusbutton).click()
        cy.contains(this.allStatus)
            .should('exist').and('contain.text', 'All Status')
            .click();
    }        

    verifyPendingStatus() {
        cy.contains(this.pendingStatus)
            .should('exist').and('contain.text', 'Pending')
            .click();
    }
    
    verifyProcessingStatus() {
        cy.contains(this.statusbutton).click()
        cy.contains(this.approvedStatus)
            .should("be.visible")
            .click();
    }

    verifyCompletedStatus() {

        cy.contains(this.statusbutton).click()
        cy.contains(this.completedStatus)
            .should("be.visible")
            .click();
    }

    verifyFailedStatus() {
        cy.contains(this.statusbutton).click()
        cy.contains(this.failedStatus)
            .should("be.visible")
            .click();
    }
    verifyFlaggedStatus() {
        cy.contains(this.statusbutton).click()
        cy.contains(this.flaggedStatus)
            .should("be.visible")
            .click();
    }

    verifyHoldStatus() {
        cy.contains(this.statusbutton).click()
        cy.contains(this.holdStatus)
            .should("be.visible")
            .click();
    }
    
    verifyUnderReviewStatus() {
        cy.contains(this.statusbutton).click()
        cy.contains(this.underReviewStatus)
            .should("be.visible")
            .click();
    }



    // =========================
    // EXPORT
    // =========================

    clickExport() {

        cy.contains("Export")
            .should("be.visible")
            .click();

    }


    // =========================
    // ACTION BUTTON
    // =========================

    clickFirstActionButton() {

        cy.get(this.actionButton)
            .first()
            .should("be.visible")
            .click();

    }


    // =========================
    // PAGINATION
    // =========================

    clickNextPage() {

        cy.get(this.nextPageButton)
            .should("be.visible")
            .click();

    }


    // =========================
    // SETTLEMENT CONFIGURATION
    // =========================

clickConfigurationButton() {

    cy.contains(this.configurationButton)
        .should("be.visible")
        .click();

    }

verifySettlementConfigurationPage() {

    cy.contains("Settlement Configuration")
        .should("be.visible");

    cy.contains("Merchant")
        .should("be.visible");

    cy.contains("Agent")
        .should("be.visible");

    cy.contains("Merchant Settlement Cycles")
        .should("be.visible");

    }
    
    verifyMerchantSettlementCycles() {

        cy.contains(this.merchantsettlemnetcycles)
            .should("be.visible");

    }


    // =========================
    // MERCHANT TAB
    // =========================

    clickMerchantTab() {

        cy.contains("h3", "Merchant")
            .should("be.visible")
            .click();

    }


    // =========================
    // AGENT TAB
    // =========================

    clickAgentTab() {

        cy.contains("h3", "Agent")
            .should("be.visible")
            .click();

    }


    // =========================
    // CONFIGURE CYCLE
    // =========================

    clickConfigureCycle() {
        cy.contains("h3", "Merchant")
            .click()
        cy.contains("button", "Configure Cycle")
            .should("be.visible")
            .click();

    }


    // =========================
    // SETTLEMENT BLACKLIST
    // =========================

    clickSettlementBlacklist() {

        cy.contains("button", "Settlement Blacklist")
            .should("be.visible")
            .click();

    }


    // =========================
    // SETTLEMENT SEARCH
    // =========================

    searchSettlementMerchant() {
    cy.contains("h3", "Merchant")
            .click()
    cy.contains("button", "Configure Cycle")
        .should("be.visible")
        .click();
        
    cy.get(this.settlementSearchField)
        .should("be.visible")
        .clear()
        .type("FAYIPE");

    cy.get(this.settlementSearchButton)
        .click();

    }


    // =========================
    // SETTLEMENT TABLE
    // =========================

    // verifyMerchantSettlementTable() {

    //     cy.get(this.merchantTable)
    //         .should("be.visible");

    //     cy.contains("Merchant Name & ID")
    //         .should("be.visible");

    //     cy.contains("Settlement Type")
    //         .should("be.visible");

    //     cy.contains("Actions")
    //         .should("be.visible");

    // }

}

export default SettleMgtPage

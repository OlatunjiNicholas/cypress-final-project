class DashboardPage {

    // =========================
    // DASHBOARD
    // =========================

    dashBoard = "Dashboard";

    periodDropdown = '.justify-between > :nth-child(2) > :nth-child(2) > :nth-child(1).justify-between > :nth-child(2) > :nth-child(2) > :nth-child(1)';
    dailyDropdown = '.justify-between > :nth-child(2) > :nth-child(2) > :nth-child(1)'

    daily = "Daily";
    weekly = "Weekly";
    monthly = "Monthly";
    yearly = "Yearly";

    transactionTrend = '[class="bg-white h-[492px] pl-[25px] pr-[13px] rounded-[4px] border border-[#E9EAEB]"]';

    allTransactionDropdown = "All Transactions";
    allTransactionDropdownSelector = '.justify-between > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1)';
    allDropdown = '.justify-between > :nth-child(2) > :nth-child(2) > :nth-child(2)';

    withdrawalDropdown = "Withdrawal";
    purchaseDropdown = "Purchase";
    depositDropdown = "Deposit";
    p2pTransferDropdown = "P2P Transfer";
    airtimeDropdown = "Airtime";
    billPaymentDropdown = "Bills Payment";
    refundDropdown = "Refund";
    reversalDropdown = "Reversal";
    preAuthDropdown = "Pre Auth";
    completionDropdown = "Completion";
    balanceDropdown = "Balance";
    collectionsDropdown = "Collections";
    accountTransferDropdown = "Account Transfer";

    performance = "Performance";
    transactionStatus = "Transaction Status";


    // =========================
    // DASHBOARD ASSERTION
    // =========================

    verifyDashboard() {

        cy.contains(this.dashBoard)
            .should('be.visible')
            .and('contain.text', 'Dashboard');

    }


    // =========================
    // TRANSACTION TREND
    // =========================

    verifyTransactionTrend() {

        cy.get(this.transactionTrend)
            .should('be.visible');

    }


    // =========================
    // TRANSACTION PERIOD
    // =========================

    selectDaily() {

        cy.get(this.dailyDropdown)
            .should('be.visible')
            .select(this.daily);



    }


    selectWeekly() {

        cy.get(this.dailyDropdown)
            .should('be.visible')
            .select(this.weekly);

        cy.contains(this.weekly)
            .should('be.visible');
            

    }


    selectMonthly() {

        cy.get(this.dailyDropdown)
            .should('be.visible')
            .select(this.monthly);

        cy.contains(this.monthly)
            .should('be.visible');

    }


    selectYearly() {

        cy.get(this.dailyDropdown)
            .should('be.visible')
            .select(this.yearly);

        cy.contains(this.yearly)
            .should('be.visible');

    }


    // =========================
    // TRANSACTION TYPE
    // =========================

    openTransactionDropdown() {

        cy.contains(this.allTransactionDropdown)
            .should('be.visible')
            .click( { force: true })
            

    }


    selectWithdrawal() {

        cy.contains(this.withdrawalDropdown)
            .should('be.visible')
            .click({force: true});

    }


    selectPurchase() {

        cy.contains(this.purchaseDropdown)
            .should('be.visible')
            .click({force: true});

    }


    selectDeposit() {

        cy.contains(this.depositDropdown)
            .should('be.visible')
            .click({force: true});

    }


    selectP2PTransfer() {

        
        cy.contains(this.p2pTransferDropdown)
            .should('be.visible')
            .click({force: true});

    }


    selectAirtime() {

        
        cy.contains(this.airtimeDropdown)
            .should('be.visible')
            .click({force: true});

    }


    selectBillPayment() {

        cy.contains(this.billPaymentDropdown)
            .should('be.visible')
            .click({force: true});

    }


    selectRefund() {

    
        cy.contains(this.refundDropdown)
            .should('be.visible')
            .click({force: true});

    }


    selectReversal() {

        cy.contains(this.reversalDropdown)
            .should('be.visible')
            .click({force: true});

    }


    selectPreAuth() {

        cy.contains(this.preAuthDropdown)
            .should('be.visible')
            .click({force: true});

    }


    selectCompletion() {

        cy.contains(this.completionDropdown)
            .should('be.visible')
            .click({force: true});

    }


    selectBalance() {

        cy.contains(this.balanceDropdown)
            .should('be.visible')
            .click({force: true});

    }


    selectAccountTransfer() {

        cy.contains(this.accountTransferDropdown)
            .should('be.visible')
            .click({force: true});

    }


    // =========================
    // PERFORMANCE
    // =========================

    verifyPerformance() {

        cy.contains(this.performance)
            .should('be.visible');

    }


    // =========================
    // TRANSACTION STATUS
    // =========================

    verifyTransactionStatus() {

        cy.contains(this.transactionStatus)
            .should('be.visible');

    }

}

export default DashboardPage;

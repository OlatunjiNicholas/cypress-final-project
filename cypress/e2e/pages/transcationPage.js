
class TranscationPage {
    transcationMgtButton = "Transaction Mgt"
    merchantButton = "Merchant"
    transcationMGT =':nth-child(6) > .w-full > .font-medium'
    searchField = '[type="search"]'
    searchButton = '.ant-input-group-addon > .ant-btn'
    agentTranButton = '[type="button"]'
    flowdropdownButton = "Flow"
    flowdropdownAllFlows = "All Flows"
    flowdropdownCredit = "Credit"
    flowdropdownDebit = "Debit"
    cancel = '.ant-modal-close'
    trantypedropdownButton = 'Tran Type'
    trantypedropdownALLtype = 'All Types'
    trantypedropdownWithdrawal = 'Withdrawal'
    trantypedropdownPurchase = 'Purchase'
    trantypedropdownTransfer = 'Transfer'
    trantypedropdownaccountTransfer = 'Account Transfer'
    trantypedropdownAirtime = 'Airtime'
    trantypedropdownBillpayment = 'Bills Payment'
    trantypedropdownBillPayment = '[class="ant-dropdown-menu-title-content"]'
    trantypedropdownrRefund = 'Refund'
    trantypedropdownReversal = 'Reversal'
    trantypedropdownCompletion = 'Completion'
    trantypedropdownCollections = 'Collections'
    statusdropdownButton = 'Status'
    statusdropdownAllstatus = 'All Status'
    statusdropdownSuccessful = 'Successful'
    statusdropdownFailed = 'Failed'
    statusdropdownPending = 'Pending'
    statusdropdownReversed = 'Reversed'
    agentButton = '.border-b-2'
    agent = '[class="cursor-pointer font-figtree text-[15px] text-[#346AFF] font-medium text-lg leading-7 "]'
    agentsearchfield = '[class="ant-input-affix-wrapper ant-input-affix-wrapper-lg css-1261szd ant-input-outlined"]'
    agentsearchBotton = '[type="button"]'

    clickMgtbutton() {
        
        cy.contains(this.transcationMgtButton,{waiting :15000})
            .should('exist')
            .click();
    }
    verifymerchantButton() {
        cy.contains(this.merchantButton)
            .should('exist')
            .and('be.visible')
            .should('contain.text', 'Merchant');

    }

    searchtranscation() {
        cy.get(this.searchField)
            .should('exist')
            .type('PXFL1783074941434344');

        cy.get(this.searchButton)
            .should('exist')
            .click();

        cy.get(this.searchField)
            .should('exist')
            .click()
            .clear();
    }

    clickflowDropdown() {
        cy.contains(this.flowdropdownButton)
            .should('exist')
            .click();
    }
    selectAllFlows() {
        cy.contains(this.flowdropdownButton)
            .click();

        cy.contains(this.flowdropdownAllFlows)
            .should('be.visible')
            .click();
    }

    selectCredit() {
        cy.contains(this.flowdropdownButton)
            .click();
        cy.contains(this.flowdropdownCredit)
            .should('exist')
            .click({force:true})
            .get('.ant-modal-close')
            .click({force:true });
    }

    selectDebit() {
        cy.contains(this.flowdropdownButton)
            .click();

        cy.contains(this.flowdropdownDebit)
            .should('exist')
            .click({force:true})
            // .get('.ant-modal-close')
            // .click({force:true });
    }

    clickCancel() {
        cy.get(this.cancel)
            .should('exist')
            .click();

        // cy.contains(this.flowdropdownAllFlows)
        //     .should('exist')
        //     .click({force: true});

    }

    clickTrantypeDropdown() {
        cy.contains(this.trantypedropdownButton)
            .should('be.visible')
            .click();
    }

    selectAllTypes() {
        cy.contains(this.trantypedropdownALLtype)
            .should('be.visible')
            .click();
    }

    selectWithdrawal() {
        cy.contains(this.trantypedropdownButton)
            .click();

        cy.contains(this.trantypedropdownWithdrawal)
            .should('be.visible')
            .click();
    }

    selectPurchase() {
        cy.contains(this.trantypedropdownButton)
            .click();

        cy.contains(this.trantypedropdownPurchase)
            .should('be.visible')
            .click({force:true})
            // .get('.ant-modal-close-x')
            // .click();
    }

    selectTransfer() {
        cy.contains(this.trantypedropdownButton)
            .click()

        cy.contains(this.trantypedropdownTransfer)
            .should('be.visible')
            .click()
            // .get('.ant-modal-close-x')
            // .click();
    }

    selectAccountTransfer() {
        cy.contains(this.trantypedropdownButton)
            .click()

        cy.contains(this.trantypedropdownaccountTransfer)
            .should('be.visible')
            .click({force:true})
            // .get('.ant-modal-close-x')
            // .click();
            
            
    }

    selectAirtime() {
        cy.contains(this.trantypedropdownButton)
            .click();

        cy.contains(this.trantypedropdownAirtime)
            .should('be.visible')
            .click();
    }

    selectBillpayment() {
        cy.contains(this.trantypedropdownButton)
            .click();

        cy.contains(this.trantypedropdownBillpayment)
            .should('be.visible')
            .click();
    }

    selectRefund() {
        cy.contains(this.trantypedropdownButton)
            .click();

        cy.contains(this.trantypedropdownrRefund)
            .should('be.visible')
            .click();
    }

    selectReversal() {
        cy.contains(this.trantypedropdownButton)
            .click();

        cy.contains(this.trantypedropdownReversal)
            .should('be.visible')
            .click();
    }

    selectCompletion() {
        cy.contains(this.trantypedropdownButton)
            .click();

        cy.contains(this.trantypedropdownCompletion)
            .should('be.visible')
            .click();
    }

    selectCollections() {
        cy.contains(this.trantypedropdownButton)
            .click();

        cy.contains(this.trantypedropdownCollections)
            .should('be.visible')
            .click();
    }

    clickStatusdropdown() {
        cy.contains(this.statusdropdownButton)
            .should('be.visible')
            .click();
    }

    selectAllstatus() {
        cy.contains(this.statusdropdownButton)
            .click();

        cy.contains(this.statusdropdownAllstatus)
            .should('be.visible')
            .click();
    }

    selectSuccessful() {
        cy.contains(this.statusdropdownButton)
            .click();

        cy.contains(this.statusdropdownSuccessful)
            .should('be.visible')
            .click()
            .get(this.cancel)
            .click();
    }

    selectFailed() {
        cy.contains(this.statusdropdownButton)
            .click();

        cy.contains(this.statusdropdownFailed)
            .should('be.visible')
            .click();
    }

    selectPending() {
        cy.contains(this.statusdropdownButton)
            .click();

        cy.contains(this.statusdropdownPending)
            .should('be.visible')
            .click();
    }

    selectReversed() {
        cy.contains(this.statusdropdownButton)
            .click();

        cy.contains(this.statusdropdownReversed)
            .should('be.visible')
            .click();
    }
    clickAgentButton() {
        cy.get(this.agentButton)
            .should('exist')
            .click();
    }

    getAgentSearch() {
        cy.get(this.agentsearchfield)
            .should('exist')
            .click()
            .type('Taiwo Fayipe');

    }

    getAgentBotton() {
        cy.get(this.agentsearchBotton)
            .should('exist')
            .click();
    }

    getAgentclear() {
        cy.get(this.agentsearchfield)
            .clear();
    }

    getflowDropdown() {
        cy.contains(this.flowdropdownButton)
            .should('exist')
            .click();
    }

    getAgentAllflow() {
        cy.contains(this.flowdropdownButton)
            .click()
        cy.contains(this.flowdropdownAllFlows)
            .should('exist')
            .click();
    }
    getAgentCredit() {
        cy.contains(this.flowdropdownButton)
            .click()
        cy.contains(this.flowdropdownCredit)
            .should('exist')
            .click();
    }

    getAgentDebit() {
        cy.contains(this.flowdropdownButton)
            .click()
        cy.contains(this.flowdropdownDebit)
            .should('exist')
            .click();
    }

    getTrantypeDropdown() {
        cy.contains(this.trantypedropdownButton)
            .should('be.visible')
            .click();
    }

    getAlltype() {
        cy.contains(this.trantypedropdownButton)
            .click()
        cy.contains(this.trantypedropdownALLtype)
            .should('be.visible')
            .and('contains.text', 'All Types')
            .click()
    }

    getWithdrawal() {
        cy.contains(this.trantypedropdownButton)
            .click()
        cy.contains(this.trantypedropdownWithdrawal)
            .should('be.visible')
            .and('contains.text', 'Withdrawal')
            .click();
    }

    getPurchase() {
        cy.contains(this.trantypedropdownButton)
            .click()
            .contains(this.trantypedropdownPurchase)
            .should('be.visible')
            .and('contains.text', 'Purchase')
            .click();

    }

    getTransfer() {
        cy.contains(this.trantypedropdownButton)
            .click()
        cy.contains(this.trantypedropdownTransfer)
            .should('be.visible')
            .and('contains.text', 'Transfer')
            .click();
    }
    getAccounttrasfer() {
        cy.contains(this.trantypedropdownaccountTransfer)
            .should('be.visible')
            .and('contains.text', 'Account Transfer')
            .click();
    }

    getAirtime() {
        cy.contains(this.trantypedropdownButton)
            .click()
        cy.contains(this.trantypedropdownAirtime)
            .should('be.visible')
            .and('contains.text', 'Airtime')
            .click();
    }
    getBillpayment() {
        cy.contains(this.trantypedropdownButton)
            .click()
        cy.contains(this.trantypedropdownBillpayment)
            .should('be.visible')
            .and('contains.text', 'Bills Payment')
            .click();

    }

    getRefund() {
        cy.contains(this.trantypedropdownButton)
            .click()
        cy.contains(this.trantypedropdownrRefund)
            .should('be.visible')
            .and('contains.text', 'Refund')
            .click();
    }

    getReversal() {
        cy.contains(this.trantypedropdownButton)
            .click()
        cy.contains(this.trantypedropdownReversal)
            .should('be.visible')
            .and('contains.text', 'Reversal')
            .click();
    }

    getCompletion() {
        cy.contains(this.trantypedropdownButton)
            .click()
        cy.contains(this.trantypedropdownCompletion)
            .should('be.visible')
            .and('contains.text', 'Completion')
            .click();
    }

    getStatusdropdown() {
        cy.contains(this.statusdropdownButton)
            .should('be.visible')
            .and('contains.text', 'Status')
            .click();
    }

    getAllstatus() {

        cy.contains(this.statusdropdownAllstatus)
            .should('be.visible')
            .and('contains.text', 'All Status')
            .click();

    }
    getSuccessful() {
        cy.contains(this.statusdropdownButton)
            .click()
            .contains(this.statusdropdownSuccessful)
            .should('be.visible')
            .and('contains.text', 'Successful')
            .click();
    }
    getFailed() {
        cy.contains(this.statusdropdownButton)
            .click()
        cy.contains(this.statusdropdownFailed)
            .should('be.visible')
            .and('contains.text', 'Failed')
            .click();
    }

    getPending() {
        cy.contains(this.statusdropdownButton)
            .click()
        cy.contains(this.statusdropdownPending)
            .should('be.visible')
            .and('contains.text', 'Pending')
            .click();
    }

    getReversed() {
        cy.contains(this.statusdropdownButton)
            .click()
        cy.contains(this.statusdropdownReversed)
            .should('be.visible')
            .and('contains.text', 'Reversed')
            .click();
    }

}
export default TranscationPage
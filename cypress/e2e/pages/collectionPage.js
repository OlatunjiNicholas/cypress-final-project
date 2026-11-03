
class CollectionMgtPage {

    collectionMgtbotton = ':nth-child(7) > .w-full > .font-medium'
    allCollectionbotton = "All Collections"
    merchantSearch = '.ant-input';
    searchBotton = '.ant-btn';
    addBotton = "Add New Collection"
    createNewCollection = "Create New Collection"
    addnewCollection = "Add a new collection configuration"
    pageTitle = "h1";
    payWithId = 'input[type="radio"][value="withId"]';
    payWithoutId = 'input[type="radio"][value="withoutId"]';
    merchantfield = '.ant-select-selection-item'
    merchant = 'Angelina Klocko'
    assigncheckBox = ':nth-child(3) > .flex > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input'
    larsonGroupkwaraCheckbox = ':nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox-label > .text-sm'
    larsoncheckbox = ':nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox-label > .text-sm'
    collectionName = 'input[placeholder="E.g Payment for Materials \'24"]';
    checkboxes = 'input[type="checkbox"]';
    cancelButton = 'button';
    nocancelButton = '.flex-col > .flex > .bg-white'
    nextButton = 'button';
    addSinglePayer = 'input[type="checkbox"]';
    payerNameInput = 'input[placeholder="Enter new Payer\'s Name"]';
    payerIdInput = 'input[placeholder="Enter new Payer\'s ID"]';
    payerEmailInput = 'input[placeholder="Enter payer\'s email address"]';
    payerPhoneInput = 'input[placeholder="Enter payer\'s phone number"]';
    addSinglePayerText = "Add Single Payer";
    uploadBulkPayersText = ("span", "Upload Bulk Payers");

    uploadBulkPayers = 'input[type="checkbox"]';
    payeraddlater = "Payers can be added later in Merchant/Collection feature"
    expiredcheckbox = "Set a payment expiration"
    addstartdateCheckbox = "Add Start Date"
    addStartDateCheckbox = 'input[type="checkbox"]';
    startdate = ':nth-child(1) > .relative > .ant-picker';
    expiryDate = ':nth-child(2) > .relative > .ant-picker > .ant-picker-input > input';
    cancel = '[data-icon="close"]';
    configureinput = "Configure Inputs"
    configureCustom = "Configure custom fields to be captured during collection"


    addedInputsTitle = 'h3';
    uniquePayerIdentifier = ':nth-child(1) > .ant-input';
    fullNameField = ':nth-child(2) > .ant-input';
    emailAddressField = ':nth-child(3) > .ant-input';
    phoneNumberField = ':nth-child(4) > .ant-input';
    addNewFieldsButton = 'Add New Fields';

    // ========================================== 
    // // PAGE ELEMENTS 
    // // ==========================================

    addFieldTitle = 'h3';
    fieldNameInput = 'input[placeholder="Enter field name"]';
    hintHelpText = 'input[type="checkbox"]';
    dataTypeLabel = 'label';
    formatConditionsLabel = 'label';
    requiredFieldText = 'Field is Required (Compulsory)';
    submitButton = 'button';

    // =========================
    // AMOUNT CONFIGURATION
    // =========================

    amountConfigurationTitle = "Amount Configuration";

    fixedAmount = "Fixed Amount";
    variableAmount = "Variable Amount";

    collectionAmountInput = 'input[placeholder="50,000"]';

    installmentCheckbox = 'input[type="checkbox"]';

    vatCheckbox = 'input[type="checkbox"]';

    // =========================
    // SETTLE COLLECTIONS TO
    // =========================

    settleCollectionsTo = "Settle Collections To";

    headOffice = "Head Office";
    branches = "Branches";




    // ==========================================
    // PAGE ASSERTION
    // ==========================================
    verifycollectionMgt() {

        cy.get(this.collectionMgtbotton)
            .should('be.visible')
            .click();

    }

    verifyPage() {

        cy.get(this.collectionMgtbotton)
            .should("be.visible");

        cy.contains(this.allCollectionbotton)
            .should("be.visible");

        cy.contains("Add New Collection")
            .should("be.visible");

    }

    // ==========================================
    // MERCHANT
    // ==========================================

    clickMerchantField() {

        cy.get(this.merchantSearch)
            .should("be.visible")
            .click();

    }


    searchMerchant() {

        cy.get(this.merchantSearch)
            .click()
            .type("c840ddd49606")
            .get(this.searchBotton)
            .click();

    }


    verifySelectedMerchant() {

        cy.contains("Taiwo Fayipe")
            .should("be.visible");


    }

    // ==========================================
    // COLLECTION TYPE
    // ==========================================
    clickAddnewCollection() {

        cy.contains("Add New Collection")
            .should("be.visible")
            .click();
    }

    verifycreateNewCollection() {

        cy.contains(this.createNewCollection)
            .should('be.visible')

        cy.contains(this.addnewCollection)
            .should('be.visible')
    }

    selectPayWithId() {

        cy.get(this.payWithId)
            .check({ force: true });
    }

    verifyPayWithIdSelected() {

        cy.get(this.payWithId)
            .should("be.checked");

    }


    selectPayWithoutId() {

        cy.get(this.payWithoutId)
            .check({ force: true });

    }
    verifyPayWithoutIdSelected() {

        cy.get(this.payWithoutId)
            .should("be.checked");

    }

    // ==========================================
    // BRANCH
    // ==========================================

    selectMerchant() {

        // Open the dropdown
        cy.get('.ant-select-selection-item',{timeout: 10000})
            .click();

        // Select Lonnie Effertz
        cy.contains('.ant-select-item-option-content', 'Lonnie Effertz',{ timeout: 10000 })
            .should('be.visible')
            .click();

        // Verify the selected value
        cy.get('.ant-select-selection-item')
            .should('contain.text', 'Lonnie Effertz');

    }

    assignSelectedBranches() {

        cy.get(this.assigncheckBox)
            .click()
            .should('be.checked');

        cy.get(this.larsonGroupkwaraCheckbox)
            .click();
        // .should("be.checked");

        cy.get(this.larsoncheckbox)
            .click({ force: true });
        // .should("be.checked");

    }

    verifyBranchesChecked() {

        cy.contains("Assign to Selected Branches")
            .parent()
            .find('input[type="checkbox"]')
            .should("be.checked");

    }


    // ==========================================
    // COLLECTION NAME
    // ==========================================


    enterCollectionName() {

        cy.get(this.collectionName)
            .should("be.visible")
            .click()
            .type('nic');

    }


    verifyCollectionName() {

        cy.get(this.collectionName)
            .should("have.value", 'nic');

    }


    // ==========================================
    // PAYERS
    // ==========================================

    selectSinglePayer() {

        cy.contains("Add Single Payer")
            .should("be.visible")
            .click();

    }


    selectBulkPayers() {

        cy.contains("Upload Bulk Payers")
            .should("be.visible")
            .click();

    }
    // =========================
    // ADD SINGLE PAYER
    // =========================

    selectAddSinglePayer() {

        cy.contains("span", "Add Single Payer")
            .should("be.visible")
            .click();

    }


    verifySinglePayerSelected() {

        cy.contains("Add Single Payer")
            .should("be.visible")
            .click();

        cy.contains("span", "Add Single Payer")
            .parents("label")
            .find('input[type="checkbox"]')
            .should("be.checked");

    }


    // =========================
    // PAYER NAME
    // =========================

    enterPayerName() {

        cy.get(this.payerNameInput)
            .should("be.visible")
            .clear()
            .type('Ola');

    }


    verifyPayerName() {

        cy.get(this.payerNameInput)
            .should("have.value", 'Ola');

    }


    // =========================
    // PAYER ID
    // =========================

    enterPayerId() {

        cy.get(this.payerIdInput)
            .should("be.visible")
            .clear()
            .type('TID123243');

    }


    verifyPayerId() {

        cy.get(this.payerIdInput)
            .should("have.value", 'TID123243');

    }


    // =========================
    // EMAIL
    // =========================

    enterPayerEmail() {

        cy.get(this.payerEmailInput)
            .should("be.visible")
            .clear()
            .type('ola@gmail.com');

    }


    verifyPayerEmail() {

        cy.get(this.payerEmailInput)
            .should("have.value", 'ola@gmail.com');

    }


    // =========================
    // PHONE NUMBER
    // =========================

    enterPayerPhone() {

        cy.get(this.payerPhoneInput)
            .should("be.visible")
            .clear()
            .type('08012345678');

    }


    verifyPayerPhone() {

        cy.get(this.payerPhoneInput)
            .should("have.value", '08012345678');

    }


    // =========================
    // VERIFY PAYER FIELDS
    // =========================

    verifyPayerFieldsVisible() {

        cy.get(this.payerNameInput)
            .should("be.visible");

        cy.get(this.payerIdInput)
            .should("be.visible");

        cy.get(this.payerEmailInput)
            .should("be.visible");

        cy.get(this.payerPhoneInput)
            .should("be.visible");

    }


    // =========================
    // BULK PAYERS
    // =========================

    selectUploadBulkPayers() {

        cy.contains(this.uploadBulkPayersText)
            .should('be.checked')
            .click();

    }



    // ==========================================
    // PAYMENT EXPIRATION
    // ==========================================

    setPaymentExpiration() {

        cy.contains(this.expiredcheckbox)
            .should('be.visible')
            .click();


    }

    // =========================
    // ADD START DATE
    // =========================

    selectAddStartDate() {

        cy.contains("Add Start Date")
            .should('be.visible')
            .click();

    }


    // =========================
    // VERIFY CHECKBOX
    // =========================

    verifyAddStartDateSelected() {

        cy.contains("Add Start Date")
            .should("be.checked");

    }


    // =========================
    // START DATE
    // =========================

    clickStartDate() {

        cy.get(this.startdate)
            .should('be.visible')
            .click()
            .type("December 30, 2026");

    }



    // =========================
    // EXPIRY DATE
    // =========================

    clickExpiryDate() {

        cy.get(this.expiryDate)
            .should('be.visible')
            .click()
            .type("December 31, 2026")
            .click();

    }

    // =========================
    // VERIFY START DATE
    // =========================

    verifyStartDate() {

        cy.get(this.startdate)
            .click()
            .should("have.value", 'December 30, 2026');

    }


    // =========================
    // VERIFY EXPIRY DATE
    // =========================

    verifyExpiryDate() {

        cy.get(this.expiryDate)
            .should("have.value", 'December 31, 2026');

    }

    // ==========================================
    // PREVIEW
    // ==========================================

    verifyPreview() {

        cy.contains("Preview")
            .should("be.visible");

    }

    clickCancel() {

        cy.contains("button", "Cancel")
            .first()
            .should('be.visible')
            .click();

    }

    verifyCancelprogress() {
        cy.contains("Cancel Progress")
            .should("be.visible");

        cy.get('.flex-col > .flex > .bg-white')
            .should("be.visible");

    }
    clickNobutton() {

        cy.get('.flex-col > .flex > .bg-white')
            .should("be.visible")
            .click();
    }

    clickNext() {

        cy.contains("button", "Next")
            .first()
            .should("be.visible")
            .click();

    }

    // 
    // LAST PAGE
    // 


    verifyConfigurePage() {

        cy.contains(this.configureinput)
            .should('be.visible')

        cy.contains(this.configureCustom)
            .should('be.visible')
    }

    verifyAddedInputsSection() {
        cy.contains('h3', 'Added Inputs')
            .should('be.visible');
    }

    verifyUniquePayerIdentifier() {
        cy.get(this.uniquePayerIdentifier)
            .should('be.visible');
    }

    verifyFullNameField() {
        cy.get(this.fullNameField)
            .should('be.visible');
    }

    verifyEmailAddressField() {
        cy.get(this.emailAddressField)
            .should('be.visible');
    }

    verifyPhoneNumberField() {
        cy.get(this.phoneNumberField)
            .should('be.visible');
    }

    clickAddNewFields() {
        cy.contains('button', 'Add New Fields')
            .should('be.visible')
            .click();
    }


    nextbotton() {

        cy.contains("button", "Next")
            .first()
            .should("be.visible")
            .click();
    }
    verifyAmountConfiguration() {

            cy.contains("h3", this.amountConfigurationTitle)
                .should("be.visible");

            cy.contains(this.fixedAmount)
                .should("be.visible");

            cy.contains(this.variableAmount)
                .should("be.visible");

            cy.get(this.collectionAmountInput)
                .should("be.visible");
        }


        // =========================
        // FIXED AMOUNT
        // =========================

        selectFixedAmount() {

            cy.contains(this.fixedAmount)
                .click();

            cy.contains(this.fixedAmount)
                .parent()
                .should("have.class", "border-[#006AFF]");
        }


        // =========================
        // VARIABLE AMOUNT
        // =========================

        selectVariableAmount() {

            cy.contains(this.variableAmount)
                .click();
        }


        // =========================
        // ENTER AMOUNT
        // =========================

        enterCollectionAmount(amount) {

            cy.get(this.collectionAmountInput)
                .clear()
                .type(amount);

            cy.get(this.collectionAmountInput)
                .should("have.value", amount);
        }


        // =========================
        // INSTALLMENT
        // =========================

        enableInstallment() {

            cy.contains("Enable payment installments for this collection")
                .click();

        }


        verifyInstallmentEnabled() {

            cy.contains("Enable payment installments for this collection")
                .parent()
                .find('input[type="checkbox"]')
                .should("be.checked");
        }


        // =========================
        // VAT
        // =========================

        enableVAT() {

            cy.contains("Apply VAT to Payment Amount")
                .click();
        }


        verifyVATEnabled() {

            cy.contains("Apply VAT to Payment Amount")
                .parent()
                .find('input[type="checkbox"]')
                .should("be.checked");
        }


        // =========================
        // SETTLEMENT
        // =========================

        verifySettlementOptions() {

            cy.contains(this.settleCollectionsTo)
                .should("be.visible");

            cy.contains(this.headOffice)
                .should("be.visible");

            cy.contains(this.branches)
                .should("be.visible");
        }


        // =========================
        // HEAD OFFICE
        // =========================

        selectHeadOffice() {

            cy.contains(this.headOffice)
                .click();

            cy.contains(this.headOffice)
                .parent()
                .find('input[type="radio"]')
                .should("be.checked");
        }


        // =========================
        // BRANCHES
        // =========================

        selectBranches() {

            cy.contains(this.branches)
                .click();

            cy.contains(this.branches)
                .parent()
                .find('input[type="radio"]')
                .should("be.checked");

        }
}

export default CollectionMgtPage;

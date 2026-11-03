
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import SettleMgtPage from "../../pages/settlePage";

const settleMgt = new SettleMgtPage;


// =========================
// MERCHANT PAGE
// =========================

Given("I am on Dashboard page", () => {
     cy.login();
    
});
When("I click on settlement management dropdown", () =>{
    
    settleMgt.clickSettlementButton();
})

Then("I click on All settlement", () => {
    
    settleMgt.clickAllSettlementButton();

})

Then("I should see the Merchant page", () => {

    settleMgt.verifyMerchantPage();

});


When("I search for Taiwo", () => {

    settleMgt.enterMerchantName();

    settleMgt.clickSearchButton();

});


Then("I should see the merchant Taiwo", () => {

    settleMgt.verifyMerchantFound();

});

When("I click on settlement dropdown", () => {

    settleMgt.clickSettlementTypeButton();
});    

Then("I should see the settlement dropdown", () => {

    settleMgt.verifySettlementType();

});

When("I select settlement type T1", () => {

    settleMgt.verifysettlementT1();

});

When("I select settlement type T2", () => {

    settleMgt.verifysettlementT2();
});

When("I select settlement type Instant", () => {

    settleMgt.verifysettlementinstant();

});

When("I select settlement type Weekly", () => {

    settleMgt.verifysettlementweekly();

});

When("I select settlement type All", () => {

    settleMgt.verifysettlementalltypes();

});

When("I click on Status", () => {

    settleMgt.clickStatusButton();
});

Then("I should see status dropdown", () => {

    settleMgt.verifyStatus();
});    

Then("I select status Pending", () => {

    settleMgt.verifyPendingStatus();

});
Then("I select status Processing", () => {

    settleMgt.verifyProcessingStatus
})

Then("I select status Completed", () => {

    settleMgt.verifyCompletedStatus
})
Then('I select status Failed', () => {

    settleMgt.verifyFailedStatus
})

Then("I select status Flagged", () => {

    settleMgt.verifyFlaggedStatus
})

Then('I select status Hold', () => {

    settleMgt.verifyHoldStatus
})

Then("I select status Under Review", () => {   

    settleMgt.verifyUnderReviewStatus();
});

Then("I select All status", () => { 

    settleMgt.verifyAllStatus();
});

Then("I click Export button", () => {

    settleMgt.clickExport();

}); 

Then("I click the first Action button", () => {

    settleMgt.clickFirstActionButton();

});


Then("I click Next Page", () => {

    settleMgt.clickNextPage();

});


// =========================
// SETTLEMENT CONFIGURATION
// =========================

When("I click on the Settlement Configuration", () => {

    settleMgt.clickSettlementButton();
    settleMgt.clickConfigurationButton();

});

Then("I should see the Settlement Configuration page", () => {

    settleMgt.verifySettlementConfigurationPage();

});

Then("I should see the Merchant Settlement Cycles section", () => {

    settleMgt.verifyMerchantSettlementCycles();

});

Then("I click on Merchant tab", () => {

    settleMgt.clickMerchantTab();

});

Then("I click on Agent tab", () => {
    settleMgt.clickAgentTab();

});

Then("I click on Configure Cycle", () => {

    settleMgt.clickConfigureCycle();
    settleMgt.searchSettlementMerchant();

});

When("I click Settlement Blacklist", () => {

    settleMgt.clickSettlementBlacklist();

});



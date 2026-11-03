Feature: Merchant Management Description

Scenario: User can observe Merchant record
Given User navigate to Merchant Mgt
When User click on Merchant management button
When User click on Manage Merchant button
Then User can search exiting record with name
And User click on search botton
When User click on Status dropdown status
Then User click All on status dropdown
And User click Active on status dropdown
And User click  Suspended on status dropdown
Then User exports Merchant records
When User click on Manage Branch button
Then User search existing record with name
And User click on Branch status dropdown
And User clcik on All status
And User click on Active status
And User click on Suspended status
Then User exports Branch records
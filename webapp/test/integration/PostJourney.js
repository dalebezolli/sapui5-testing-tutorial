sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/Worklist",
    "./pages/Browser",
    "./pages/Post",
], function(opaTest) {
    "use strict";

    QUnit.module("Post");
    opaTest("Should see the post page when a user clicks on an entry of the list", function(Given, When, Then) {
        Given.iStartMyApp();
        When.onTheWorklistPage.iPressOnTheItemWithTheID("PostID_15");
        Then.onThePostPage.theTitleShouldDisplayTheName("Jeans");
    });

    opaTest("Should go back to the title page", function(Given, When, Then) {
        When.onThePostPage.iPressTheBackButton();
        Then.onTheWorklistPage.iShouldSeeTheTable();
    });

    opaTest("Should be on the post page when the browser's forward button is pressed", function(Given, When, Then) {
        When.onTheBrowser.iPressOnTheForwardButton();
        Then.onThePostPage.theTitleShouldDisplayTheName("Jeans");
        Then.iTeardownMyApp();
    });
});
sap.ui.define([
    'sap/ui/test/Opa5',
    'sap/ui/test/matchers/Properties',
    'sap/ui/test/actions/Press',
], function(Opa5, Properties, Press) {
    "use strict";

    const viewName = "Post";
    Opa5.createPageObjects({
        onThePostPage: {
            actions: {
                iPressTheBackButton: function() {
                    return this.waitFor({
                        id: "page",
                        viewName: viewName,
                        actions: new Press(),
                        errorMessage: "Did not find the nav button on object page"
                    });
                },
                iPressOnTheTabWithTheKey: function(key) {
                    return this.waitFor({
                        controlType: "sap.m.IconTabFilter",
                        viewName: viewName,
                        matchers: new Properties({ key }),
                        actions: new Press(),
                        errorMessage: "Cannot find the icon tab bar"
                    });
                }
            },
            assertions: {
                theTitleShouldDisplayTheName: function(name) {
                    return this.waitFor({
                        success: function() {
                            return this.waitFor({
                                id: "objectHeader",
                                viewName: viewName,
                                matchers: new Properties({ title: name }),
                                success: function(page) { 
                                    Opa5.assert.ok(true, "was on the remembered detail page");
                                },
                                errorMessage: `The post ${name} is not shown`
                            });
                        }
                    });
                },
                iShouldSeeTheViewCounter: function() {
                    return this.waitFor({
                        id: "viewCounter",
                        viewName: viewName,
                        success: function() {
                            Opa5.assert.ok(true, "The view counter was visible");
                        },
                        errorMessage: "The view counter could not be found"
                    });
                }
            }
        }
    });
});
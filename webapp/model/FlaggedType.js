sap.ui.define([ 
    "sap/ui/model/SimpleType",
], function(SimpleType) {
    "use strict";

    return SimpleType.extend("sap.ui.demo.bulletinboard.model.FlaggedType", {
        formatValue: function(flagged) {
            return flagged === 1;
        },
        parseValue: function(flagged) {
            return flagged ? 1 : 0;
        },
        validateValue: function() {
            return true;
        }
    });
});
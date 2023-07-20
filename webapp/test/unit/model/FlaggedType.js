sap.ui.define([ "sap/ui/demo/bulletinboard/model/FlaggedType" ], function(FlaggedType) {
    "use strict";

    QUnit.module("Flagged Type - formatting");
    QUnit.test("Should convert 1 to true", function(assert) {
        const formatValue = new FlaggedType().formatValue(1);
        assert.strictEqual(formatValue, true, "The formatting conversion was correct");
    });

    QUnit.test("Should convert rest values to false", function(assert) {
        const formatValue = new FlaggedType().formatValue(-666);
        assert.strictEqual(formatValue, false, "The formatting conversion was correct");
    });

    QUnit.module("Flagged Type - parsing");
    QUnit.test("Should parse false to 0", function(assert) {
        const parsedValue = new FlaggedType().parseValue(false);
        assert.strictEqual(parsedValue, 0, "The parsing conversion was correct");
    });

    QUnit.test("Should parse true to 1", function(assert) {
        const parseValue = new FlaggedType().parseValue(false);
        assert.strictEqual(parsedValue, 1, "The parsing conversion was correct");
    });

});
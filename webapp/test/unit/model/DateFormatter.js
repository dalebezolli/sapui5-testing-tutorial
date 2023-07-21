sap.ui.define([
    "sap/ui/demo/bulletinboard/model/DateFormatter",
    "sap/ui/core/Locale",
    "sap/ui/core/date/UI5Date",
], function(DateFormatter, Locale, UI5Date) {
    "use strict";

    let formatter = null;
    QUnit.module("Date Formatter", {
        beforeEach: function() {
            formatter = new DateFormatter({ 
                now: UI5Date.getInstance(2023, 6, 21, 15, 15, 0, 0).getTime(),
                locale: new Locale("en-US") 
            });
        }
    });

    QUnit.test("Should return empty string if no data is given", function(assert) {
        assert.strictEqual(formatter.format(null), "");
    });

    QUnit.test("Should return time if date from today", function(assert) {
        const date = UI5Date.getInstance(2023, 6, 21, 15, 15, 0, 0);
        assert.strictEqual(formatter.format(date), "3:15 PM");
    });

    QUnit.test("Should return 'Yesterday' if date from yesterday", function(assert) {
        const date = UI5Date.getInstance(2023, 6, 20);
        assert.strictEqual(formatter.format(date), "Yesterday");
    });

    QUnit.test("Should return day of the week if date < 7 days ago", function(assert) {
        const date = UI5Date.getInstance(2023, 6, 18);
        assert.strictEqual(formatter.format(date), "Tuesday");
    });

    QUnit.test("Should return date w/o time if date > days ago", function(assert) {
        const date = UI5Date.getInstance(2023, 6, 1);
        assert.strictEqual(formatter.format(date), "Jul 1, 2023");
    });
});
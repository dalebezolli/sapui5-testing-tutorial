sap.ui.define([
    "sap/ui/base/Object",
    "sap/ui/core/format/DateFormat",
], function(Object, DateFormat) {
    "use strict";   

    return Object.extend("sap/ui/demo/bulletinboard/model/DateFormatter", {
        constructor: function(properties) {
            const locale = (properties && properties.locale) ? properties.locale : null;

            this.timeFormat = DateFormat.getTimeInstance({ style: "short" }, locale);
            
            this.weekdayFormat = DateFormat.getDateInstance({ pattern: "EEEE" }, locale);

            this.dateFormat = DateFormat.getDateInstance({ style: "medium" }, locale);

            this.now = (properties && properties.now) ? properties.now : null;
        },
        format: function(date) {
            if(!date) return "";

            const ellapsedDays = this._getElapsedDays(date);
            if(ellapsedDays === 0) {
                return this.timeFormat.format(date);
            } else if(ellapsedDays === 1) {
                return "Yesterday";
            } else if(ellapsedDays < 7) {
                return this.weekdayFormat.format(date);
            } else {
                return this.dateFormat.format(date);
            }

        },
        _getElapsedDays: function(date) {
            const ellapsedMs = this.now -  date.getTime();
            const ellapsedDays = ellapsedMs / 1000 / 60 / 60 / 24;
            return Math.floor(ellapsedDays);
        }
    });
});
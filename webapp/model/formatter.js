sap.ui.define([
	"sap/ui/demo/bulletinboard/model/DateFormatter",
], function (DateFormatter) {
	"use strict";

	return {
		/**
		 * Rounds the number unit value to 2 digits
		 *
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit: function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		priceState: function(price) {
			if(price < 50) {
				return "Success";
			} else if(price < 250) {
				return "None";
			} else if(price < 2000) {
				return "Warning";
			} else {
				return "Error";
			}
		},
		date: function(date) {
			return new DateFormatter({ now: Date.now }).format(date);
		}

	};

});

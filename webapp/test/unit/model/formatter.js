/*global QUnit*/

sap.ui.define([
	"sap/ui/demo/bulletinboard/model/formatter"
], function (formatter) {
	"use strict";

	QUnit.module("Number unit");

	function numberUnitValueTestCase(assert, sValue, fExpectedNumber) {
		// Act
		var fNumber = formatter.numberUnit(sValue);

		// Assert
		assert.strictEqual(fNumber, fExpectedNumber, "The rounding was correct");
	}

	QUnit.test("Should round down a 3 digit number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "3.123", "3.12");
	});

	QUnit.test("Should round up a 3 digit number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "3.128", "3.13");
	});

	QUnit.test("Should round a negative number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "-3", "-3.00");
	});

	QUnit.test("Should round an empty string", function (assert) {
		numberUnitValueTestCase.call(this, assert, "", "");
	});

	QUnit.test("Should round a zero", function (assert) {
		numberUnitValueTestCase.call(this, assert, "0", "0.00");
	});

	QUnit.module("Price State");
	function priceStateTestCase(options) {
		const state = formatter.priceState(options.price);
		options.assert.strictEqual(state, options.expected, "The price state was correct");
	}

	QUnit.test("Should format the product with a price lower than 50 Success", function(assert) {
		priceStateTestCase.call(this, { assert, price: 42, expected: "Success" });
	});

	QUnit.test("Should format the product with a price of 50 Normal", function(assert) {
		priceStateTestCase.call(this, { assert, price: 50, expected: "None" });
	});

	QUnit.test("Should format the product with a price between 50 and 250 Normal", function(assert) {
		priceStateTestCase.call(this, { assert, price: 249, expected: "None" });
	});

	QUnit.test("Should format the product with a price of 250 Warning", function(assert) {
		priceStateTestCase.call(this, { assert, price: 250, expected: "Warning" });
	});

	QUnit.test("Should format the product with a price between 250 and 2000 Warning", function(assert) {
		priceStateTestCase.call(this, { assert, price: 1999, expected: "Warning" });
	});

	QUnit.test("Should format the product with a price of 2000 and over Error", function(assert) {
		priceStateTestCase.call(this, { assert, price: 2000, expected: "Error" });
	});

});

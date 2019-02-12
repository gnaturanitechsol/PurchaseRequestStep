/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"it/marcegaglia/mm/PurchaseRequest/PurchaseRequestStep/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
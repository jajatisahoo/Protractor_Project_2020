"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
var cucumber_1 = require("cucumber");
cucumber_1.Given("a calculator", function () {
    this.calculator = new app_po_1.Calculator();
});

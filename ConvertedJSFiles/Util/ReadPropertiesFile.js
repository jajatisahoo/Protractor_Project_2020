"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var rawContent = fs.readFileSync('./data.properties');
var propertyMap = {};
var fullContent = rawContent.toString();
var allPairs = fullContent.split("");
console.log("allPairs" + allPairs);
var ReadExcel = /** @class */ (function () {
    function ReadExcel() {
    }
    ReadExcel.prototype.Read = function () {
        for (var i = 0; i < allPairs.length; i++) {
            var keyValue = allPairs[i].split("=");
            propertyMap[keyValue[0]] = keyValue[1];
        }
        console.log("****Full content  : ");
        console.log(propertyMap);
    };
    return ReadExcel;
}());
exports.ReadExcel = ReadExcel;

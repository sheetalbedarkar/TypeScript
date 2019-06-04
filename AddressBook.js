"use strict";
exports.__esModule = true;
var read = require('readline-sync');
var utility = require("../TypeScript/Utility/OOPUtil");
var fs = require('fs');
var data = fs.readFileSync('PersonAddress.json', 'utf8');
var addressb = JSON.parse(data);
/**
 * @description main function to call create,open address Book
 */
function addressBook() {
    var address = new utility.Data.Address(address);
    while (choice1 != 3) {
        console.log("\n\t\t**********ADDRESS BOOK*********");
        console.log(" \t\t1 Create Profile");
        console.log(" \t\t2 Open Address Book");
        console.log(" \t\t3 Exit");
        console.log(" \t\t*********************************\n");
        var choice1 = read.question("~Enter your choice: \n");
        switch (parseInt(choice1)) {
            case 1:
                address.createAddress(addressb);
                break;
            case 2:
                address.openProfile(addressb);
                break;
            case 3:
                console.log("\nThankYou!");
                break;
            default:
                console.log("Please enter a valid option!!");
        }
    }
}
addressBook();

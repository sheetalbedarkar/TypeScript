"use strict";
exports.__esModule = true;
var readfile = require("readline-sync");
var Utility = require("../TypeScript/Utility/OOPUtil");
var files = require('fs');
var data = files.readFileSync("/home/bridgeit/TypeScript/InventoryManagerStock.json", "utf8");
function inventoryManager() {
    var data1 = JSON.parse(data); //Parse the data so that data becomes a JavaScript object.
    var object = new Utility.Data.InventoryManagerStock();
    try {
        while (ch != 5) {
            console.log("\n  Press 1 to add ");
            console.log("  Press 2 to remove ");
            console.log("  Press 3 to edit  ");
            console.log("  Press 4 to print ");
            console.log("  Press 5 to exit\n  ");
            var ch = readfile.questionInt("Enter the number : ");
            switch (ch) {
                case 1:
                    object.add(data1);
                    break;
                case 2:
                    object.remove(data1);
                    break;
                case 3:
                    object.edit(data1);
                    break;
                case 4:
                    object.print(data1);
                    break;
                case 5:
                    console.log("Program terminated!!");
                    break;
                default:
                    console.log("Please Enter correct choice!  ");
            }
        }
    }
    catch (e) {
        console.log(e.message);
    }
}
inventoryManager();

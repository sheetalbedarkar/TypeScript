// /*************************************************************************/
//                         /*Inventory Management*/
// /*************************************************************************/
// const assert = require('chai').assert;
// const obj = require('../InventoryManagement');
// const fs1 = require('fs');

// describe('InventoryManagement', function()
// {
//     it('Content of the file should not be empty', function()
//     {
//         var input = fs1.readFileSync("InventoryManagement.json", JSON.stringify(input));
//         assert.isNotEmpty(input);
//     });
// });

// describe('InventoryManagement', function()
// {
//     it('Parse data must be javaScript object', function()
//     {
//         var input = fs1.readFileSync("InventoryManagement.json");
//         const text = JSON.parse(input)  //Parse the data, So data becomes a JavaScript object.
//         assert.isObject(text);
//     });
// });

/*************************************************************************/
                        /*Regular Expression*/
/*************************************************************************/
// const assert = require('chai').assert;
// const obj = require('../RegularExpression');
// const file1 = require('fs');

// describe('RegularExpression', function()
// {
//     it('Content of file should neither NULL nor UNDEFINED', function()
//     {
//         var input = file1.readFileSync("/home/bridgeit/TypeScript/RegularExpression.txt");
//         assert.exists(input)    //Asserts that the target is neither null nor undefined
//     });
// });

// describe('RegularExpression', function()
// {
//     it('Content must be present in the file', function()
//     {
//         var input = file1.readFileSync("/home/bridgeit/TypeScript/RegularExpression.txt");
//         assert.isNotEmpty(input);
//     });
// });

/*************************************************************************/
                            /*Stock Report*/
/*************************************************************************/
// const assert = require('chai').assert;
// const obj = require('../Stock');
// const file1 = require('fs');

// describe('Stock', function()
// {
//     it('Parse data must be javaScript object', function()
//     {
//         var input = file1.readFileSync("/home/bridgeit/TypeScript/Stock.json");
//         const text = JSON.parse(input)  //Parse the data, So data becomes a JavaScript object.
//         assert.isObject(text);
//     });
// });

/*************************************************************************/
                        /*Inventory Manager Stock*/
/*************************************************************************/
// const assert = require('chai').assert;
// const obj = require('../InventoryManagerStock');
// const file1 = require('fs');

// describe('InventoryManagerStock', function()
// {
//     it('Parse data must be javaScript object', function()
//     {
//         var input = file1.readFileSync("/home/bridgeit/TypeScript/InventoryManagerStock.json");
//         const text = JSON.parse(input)  //Parse the data, So data becomes a JavaScript object.
//         assert.isObject(text);
//     });
// });

// describe('InventoryManagerStock', function()
// {
//     it('Content of file should neither NULL nor UNDEFINED', function()
//     {
//         var input = file1.readFileSync("/home/bridgeit/TypeScript/InventoryManagerStock.json");
//         assert.exists(input);
//     });
// });

/*************************************************************************/
                            /*Address Book*/
/*************************************************************************/
// const assert = require('chai').assert;
// const obj = require('../AddressBook');
// var file1 = require('fs');

// describe('AddressBook', function()
// {
//     it('Content of file should neither NULL nor UNDEFINED', function()
//     {
//         var input = file1.readFileSync("/home/bridgeit/TypeScript/AddressBook.json");
//         assert.exists(input);
//     });
// });

/*************************************************************************/
                            /*Clinic Management*/
/*************************************************************************/
const assert = require('chai').assert;
const obj = require('../ClinicManagement');
var file1 = require('fs');

describe('ClinicManagement', function()
{
    it('Parse data must be javaScript object', function()
    {
        var input = file1.readFileSync("/home/bridgeit/TypeScript/ClinicManagement.json");
        const text = JSON.parse(input); //Parse the data, So data becomes a JavaScript object.
        assert.isObject(text);
    });
});

describe('ClinicManagement', function()
{
    it('Content of file should neither NULL nor UNDEFINED', function()
    {
        var input = file1.readFileSync("/home/bridgeit/TypeScript/ClinicManagement.json");
        assert.exists(input);
    });
});
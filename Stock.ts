import utility = require("../TypeScript/Utility/OOPUtil");
const files1 = require('fs');
const input1 = files1.readFileSync("/home/bridgeit/TypeScript/Stock.json");
try {
    const object = JSON.parse(input1);   //Parse the data so that data becomes a JavaScript object.
    console.log("Stock Report!!!!!!");
    var stock = new utility.Data.Stock(name, share, price);
    for (var key in object.stock) 
    {
        var name = object.stock[key].name;
        var share = object.stock[key].share;
        var price = object.stock[key].price;
        console.log(`The total value of ${object.stock[key].name}  is : ${stock.addValue(share, price)}`);
    }
} 
catch (e) 
{
    console.log("file is empty!!");
}
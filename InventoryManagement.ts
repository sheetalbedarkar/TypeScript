import util = require("../TypeScript/Utility/OOPUtil");
const fileStream = require('fs');
try 
{
    var input = fileStream.readFileSync("/home/bridgeit/TypeScript/InventoryManagement.json");
} 
catch (e) 
{
    console.log("File is empty!!!!");
}

/**
* @description :Parse a string as JSON, optionally transform the produced value and its properties,
                and return the value 
*/

const obj = JSON.parse(input);
var sum = 0;
var rice = obj.Rice;
var wheat = obj.Wheat;
var pulses = obj.Pulses;
try 
{
    var i : any
    for (i in rice) 
    {
        var names = rice[i].name;
        var weight = rice[i].weight;
        var price = rice[i].price;
        var total = rice[i].weight * rice[i].price;
        console.log(`The Total of ${rice[i].name} is ${total}`);
        sum = sum + total;
        i = new util.Data.Rice(names, weight, price);
        console.log(i);
    }
} 
catch (e) 
{
    console.log(e.message);
}
console.log(sum);
console.log();
try 
{
    var j
    for (j in wheat) 
    {
        var names = wheat[j].name;
        var weight = wheat[j].weight;
        var price = wheat[j].price;
        var total = wheat[j].weight * wheat[j].price;
        console.log(`The Total of ${wheat[j].name} is ${total}`);
        sum = sum + total;
        j = new util.Data.Wheat(names, weight, price);
        console.log(j);
    }
} 
catch (e) 
{
    console.log(e.message);
}
console.log(sum);
console.log();
try 
{
    var k
    for (k in pulses) 
    {
        var names = pulses[k].name;
        var weight = pulses[k].weight;
        var price = pulses[k].weight;
        var total = pulses[k].weight * pulses[k].price;
        console.log(`The Total of ${pulses[k].name} is ${total}`);
        sum = sum + total;
        k = new util.Data.Pulses(names, weight, price);
        console.log(k);
    }
} 
catch (e) 
{
    console.log(e.message);
}
console.log(sum);
console.log();
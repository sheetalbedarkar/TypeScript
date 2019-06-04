const Read = require("readline-sync");
import utilityy = require("../TypeScript/Utility/OOPUtil");
var flag = true;

//To print the FirstName

do 
{
    var firstName = Read.question("Enter your firstName :: ");
    var re = /^[A-Za-z]+$/;     //to check given input is string or not
    if (firstName.match(re)) 
    {
        flag = true;
    } 
    else 
    {
        console.log("Please enter your valid name :: ");
        flag = false;
    }
} while (flag != true);

//To print the last LastName

do 
{
    var lastName = Read.question("Enter your lastName :: ");
    var re = /^[A-Za-z]+$/;     //to check given input is string or not
    if (lastName.match(re)) 
    {
        flag = true;
    } 
    else 
    {
        console.log("Please enter your valid name :: ");
        flag = false;
    }
} while (flag != true);

var fullName = `${firstName}  ${lastName}`;

//To display contact Number

do 
{
    var contactNo = Read.question("Enter your Mobile Number :: ");
    var reg = /^[7-9]\d{9}$/;   //to validate mobile number
    if (contactNo.match(reg)) 
    {
        flag = true;
    }
    else 
    {
        console.log("Please Enter your Correct Mobile Number :: ");
        flag = false;
    }
} while (flag != true);

var date = new Date;
var day = date.toDateString();
var result = utilityy.Data.replaceUsingRegex(firstName, fullName, contactNo, day);
console.log(result);
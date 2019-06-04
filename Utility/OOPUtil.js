"use strict";
/***********************************************************************************************************************
 * @purpose : To deploy all the business logic
 * @file    : OOPUtil.js
 * @author  : Sheetal Shamkant Bedarkar
 * @version : 1.0
 * @since   : 03/05/2019
 *****************************************************************************************************************/
/**********************************InventoryManagement**********************************************/
// * @purpose :class to fetch and display the data 
// * @param   :JSON file properties
/**************************************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 * @purpose : parent class of all InventoryManagent and comman logic for it
 */
var Data;
(function (Data) {
    var readline = require("readline-sync");
    var file = require('fs');
    var Item = /** @class */ (function () {
        function Item(name, weight, price) {
            this.name = name;
            this.weight = weight;
            this.price = price;
        }
        Item.prototype.totalValue = function () {
            return this.weight * this.price;
        };
        return Item;
    }());
    /**
     * @purpose : to display the element of rice
     */
    var Rice = /** @class */ (function (_super) {
        __extends(Rice, _super);
        function Rice(name, weight, price) {
            return _super.call(this, name, weight, price) || this;
        }
        return Rice;
    }(Item));
    /**
     * @purpose : to display the element of wheat
     */
    var Wheat = /** @class */ (function (_super) {
        __extends(Wheat, _super);
        function Wheat(name, weight, price) {
            return _super.call(this, name, weight, price) || this;
        }
        return Wheat;
    }(Item));
    /**
     * @purpose : to diplay the element of pulses
     */
    var Pulses = /** @class */ (function (_super) {
        __extends(Pulses, _super);
        function Pulses(name, weight, price) {
            return _super.call(this, name, weight, price) || this;
        }
        return Pulses;
    }(Item));
    /*****************************************replaceUsingRegex****************************************/
    //  * @purpose    : To print the Modified Message.
    //  * @param      : To accept the input from the user and replace the string with the given input.
    //  * @function   : To read in the following message: Hello <<name>>, We have your full name as 
    //  *               <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let 
    //  *               us know in case of any clarification Thank you BridgeLabz 01/01/2016. Use Regex 
    //  *               to replace name, full name, Mobile#, and Date with proper value.
    /**************************************************************************************************/
    function replaceUsingRegex(name, fullName, num, day) {
        var fileStream = require('fs');
        try {
            var fileString = fileStream.readFileSync('RegularExpression.txt', 'utf8');
            fileString = fileString.replace(/<<name>>/, name);
            fileString = fileString.replace(/<<full name>>/, fullName);
            fileString = fileString.replace(/xxxxxxxxxx/, num);
            fileString = fileString.replace("01/01/2016", day);
            return fileString;
        }
        catch (e) {
            console.log(e.message);
        }
    }
    Data.replaceUsingRegex = replaceUsingRegex;
    /***************************************Stock**********************************************************/
    //  * @description : function to read in Stock Names, Number of Share, Share Price.
    //  *                Print a Stock Report with total value of each Stock and the total value of Stock
    /******************************************************************************************************/
    var Stock = /** @class */ (function () {
        function Stock(name, share, price) {
            this.name = name;
            this.share = share;
            this.price = price;
        }
        Stock.prototype.addValue = function (share, price) {
            try {
                var sum = 0;
                sum = price * share;
                return sum;
            }
            catch (e) {
                console.log(e.message);
            }
        };
        return Stock;
    }());
    Data.Stock = Stock;
    /************************************InventoryManager***********************************************/
    //  * @description : perform CRUD operation on file
    /**************************************************************************************************/
    var InventoryManagerStock = /** @class */ (function () {
        function InventoryManagerStock() {
        }
        /**
         * @description : function to validate given string
         * @param {string} data
         */
        InventoryManagerStock.prototype.checkString = function (data) {
            try {
                var reg = /^[A-Za-z]+$/;
                var result = reg.test(data);
                return result;
            }
            catch (e) {
                console.log(e.message);
            }
        };
        /**
         * @description : function to search element into file
         * @param {string} data
         * @param {string} name
         */
        InventoryManagerStock.prototype.searchElement = function (data, name) {
            try {
                var index = -1;
                for (var i = 0; i < data.Stock.length; i++) {
                    if (data.Stock[i].sharename == name) {
                        index = data.Stock.indexOf(data.Stock[i]);
                    }
                }
                return index;
            }
            catch (e) {
                console.log(e.message);
            }
        };
        /**
         * @description : function to add data into file
         * @param {string} data
         */
        InventoryManagerStock.prototype.add = function (data) {
            try {
                var flag = true;
                do {
                    var name = readline.question("Enter the name of the stock to add : ");
                    if (this.checkString(name)) {
                        flag = true;
                        if (this.searchElement(data, name) == -1) {
                            flag = true;
                            var shares = readline.questionInt("Enter number of shares : ");
                            var quantity = readline.questionInt("Enter the price of the shares : ");
                            data.Stock.push({
                                sharename: name,
                                numberofshare: shares,
                                shareprice: quantity
                            });
                            console.log("Added into file");
                            var data = file.writeFileSync('/home/bridgeit/TypeScript/InventoryManagerStock', JSON.stringify(data));
                        }
                        else {
                            flag = false;
                            console.log(" Name already exist ");
                        }
                    }
                    else {
                        flag = false;
                        console.log("Please enter correct String!!");
                    }
                } while (flag != true);
            }
            catch (e) {
                console.log(e.message);
            }
        };
        /**
         * @description : function to remove data from file
         * @param {string} data
         */
        InventoryManagerStock.prototype.remove = function (data) {
            try {
                var name = readline.question("Enter the name u want to remove ");
                for (var i = 0; i < data.Stock.length; i++) {
                    if (data.Stock[i].sharename == name) {
                        var index = data.Stock.indexOf(data.Stock[i]);
                        data.Stock.splice(index, 1);
                    }
                }
                console.log("Removed from file!!");
                data = file.writeFileSync("/home/bridgeit/TypeScript/InventoryManagerStock.json", JSON.stringify(data));
            }
            catch (e) {
                console.log(e.message);
            }
        };
        /**
         * @description : function to read and display data
         * @param {string} data
         */
        InventoryManagerStock.prototype.print = function (data) {
            try {
                var stock = data.Stock;
                for (var key in stock) {
                    console.log(stock[key]);
                }
            }
            catch (e) {
                console.log(e.message);
            }
        };
        /**
         * @description : function to edit data on the file
         * @param {string} data
         */
        InventoryManagerStock.prototype.edit = function (data) {
            var stock = data.Stock;
            var flag = true;
            do {
                var name = readline.question("Enter the stock name to edit :");
                if (this.checkString(name)) {
                    flag = true;
                    var sharess = readline.question("Enter noofShares to edit : ");
                    var money = readline.question("Enter the shares price :");
                    var value, value1, value2;
                    for (var key in stock) {
                        //console.log(stock[key].sharename)
                        if (stock[key].sharename == name)
                            value = key;
                        if (stock[key].numberofshare == sharess)
                            value1 = key;
                        if (stock[key].shareprice == money)
                            value2 = key;
                    }
                    console.log(stock[value].sharename);
                    var name1 = readline.question("Enter the new name of the share :");
                    stock[value].sharename = name1;
                    var name2 = readline.question("Enter the new noofShares :");
                    stock[value1].numberofshare = name2;
                    var name3 = readline.question("Enter  the new price of the shares :");
                    stock[value2].shareprice = name3;
                    var data = file.writeFileSync('/home/bridgeit/TypeScript/InventoryManagement.json', JSON.stringify(data));
                }
                else {
                    flag = false;
                    console.log("please enter correct string");
                }
            } while (flag != true);
        };
        return InventoryManagerStock;
    }());
    Data.InventoryManagerStock = InventoryManagerStock;
    /*************************************************************************************************************/
    //  * @description : be designed is a program that can be used to maintain an address book. An address book
    //  *                holds a collection of entries, each recording a person's first and last names, address, 
    //  *                city, state, zip, and phone number.
    /*************************************************************************************************************/
    var p = file.readFileSync('AddressBook.json');
    var nameRestriction = /[A-Za-z]/g;
    var contactRestriction = /[0-9]/g;
    var nameRestriction = /[a-z]/ig;
    var contactRestriction = /[0-9]/g;
    var Address = /** @class */ (function () {
        function Address(address) {
            this.address;
        }
        /**
         * @description : function to create address book having name,lastName,city,street,phoneNumber etc
         * @param {any} addressb
         */
        Address.prototype.createAddress = function (address) {
            var flag = true;
            //FirstName
            do {
                var name = readline.question("Enter your firstName ");
                var re = /^[A-Za-z]+$/;
                if (name.match(re)) {
                    flag = true;
                }
                else {
                    console.log("Please enter valid name");
                    flag = false;
                }
            } while (flag != true);
            //LastName
            do {
                var lastName = readline.question("Enter your lastName ");
                var re = /^[A-Za-z]+$/;
                if (lastName.match(re)) {
                    flag = true;
                }
                else {
                    console.log("Please enter valid name");
                    flag = false;
                }
            } while (flag != true);
            console.log("\n\t\t***Address Info***");
            var street = readline.question("StreetNum: ");
            //CityName
            do {
                var city = readline.question("Enter your CityName ");
                var re = /^[A-Za-z]+$/;
                if (city.match(re)) {
                    flag = true;
                }
                else {
                    console.log("Please enter valid Cityname");
                    flag = false;
                }
            } while (flag != true);
            //StateName
            do {
                var state = readline.question("Enter StateName: ");
                var re = /^[A-Za-z]+$/;
                if (state.match(re)) {
                    flag = true;
                }
                else {
                    console.log("Please enter valid StateName!!");
                    flag = false;
                }
            } while (flag != true);
            //Nationality
            do {
                var nation = readline.question("Nationality: ");
                var re = /^[A-Za-z]+$/;
                if (nation.match(re)) {
                    flag = true;
                }
                else {
                    console.log("Please enter valid name");
                    flag = false;
                }
            } while (flag != true);
            //ZipCode
            var zip = readline.question("Zip code: ");
            if (contactRestriction.test(zip) == false || zip.length != 6) {
                console.log("Invalid zip code!");
                zip = readline.question("Zip : ");
            }
            //phoneNum
            var phoneNum = readline.question("Phone number: ");
            if (contactRestriction.test(phoneNum) == false || phoneNum.length != 10) {
                console.log("Invalid phone number!");
                phoneNum = readline.question("Phone number: ");
            }
            console.log("Address updated succesfully!");
            console.log("Your information as per our record is!!: \r\nFirst Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
            address.Person.push({
                "Name": name,
                "LastName": lastName,
                "Address": {
                    "Street": street,
                    "City": city,
                    "State": state,
                    "Nationality": nation,
                    "Zip": zip,
                    "PhoneNum": phoneNum
                }
            });
            file.writeFile('AddressBook.json', JSON.stringify(address), 'utf-8', function (err) {
                if (err)
                    throw err;
                console.log('Done!');
            });
        };
        Address.prototype.compare = function (a, b) {
            if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
                return -1;
            }
            if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
                return 1;
            }
            return 0;
        };
        /**
        * @description : function to open profile to edit data
        * @param {String} addressb
        */
        Address.prototype.sorting = function (address) {
            console.log(address.Person.sort(this.compare));
        };
        /*************************************************************************************************************/
        //  * @description : open a disk file containing an existing address book to close an address
        //  *                book, and to save an address book to a disk file, using standard New,
        //  *                Open, Close, Save
        //  * @param {*}   : address
        /*************************************************************************************************************/
        Address.prototype.save = function () {
            file.writeFile('AddressBook.json', JSON.stringify(this.address), 'utf-8', function (err) {
                if (err)
                    throw err;
                console.log('File Saved!!');
            });
        };
        Address.prototype.openProfile = function (address) {
            var temp = -1;
            if (address.Person.length > 0) {
                for (var i = 0; i < address.Person.length; i++) {
                    console.log(address.Person[i]);
                }
                console.log("\n\t***********Welcome!!**************\n");
                var update = readline.question("Please enter the name of profile: ");
                for (var k = 0; k < address.Person.length; k++) {
                    if (update == address.Person[k].Name) {
                        temp = k;
                        console.log("\t\t---------------------------------");
                        console.log("\t\t|\tWhat you want to do?\t|");
                        console.log("\t\t|\t1: Update\t\t|");
                        console.log("\t\t|\t2: Delete\t\t|");
                        console.log("\t\t|\t3: Sort\t\t\t|");
                        console.log("\t\t|\t4: Save\t\t\t|");
                        console.log("\t\t|\t5: Close\t\t\t|");
                        console.log("\t\t---------------------------------");
                        var choice2 = readline.question("Please enter your choice: ");
                        console.log();
                        switch (parseInt(choice2)) {
                            case 1:
                                console.log("\tWhat do you want to update? ");
                                console.log("\t\t1: Street");
                                console.log("\t\t2: City");
                                console.log("\t\t3: State");
                                console.log("\t\t4: Nationality");
                                console.log("\t\t5: Zip code");
                                console.log("\t\t6: Phone");
                                console.log("\t\t7: Exit");
                                var choice3 = readline.question("Please enter your choice: ");
                                switch (parseInt(choice3)) {
                                    case 1:
                                        var sUpdate = readline.question("Enter the new street number: ");
                                        if (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) {
                                            console.log("Invalid name!");
                                            return false;
                                        }
                                        var obj = {
                                            "Name": address.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": {
                                                "Street": sUpdate,
                                                "City": address.Person[k]["Address"].City,
                                                "State": address.Person[k]["Address"].State,
                                                "Nationality": address.Person[k]["Address"].Nation,
                                                "Zip": address.Person[k]["Address"].Zip,
                                                "PhoneNum": address.Person[k]["Address"].PhoneNum
                                            }
                                        };
                                        address.Person[k] = obj;
                                        console.log("Mobile Number updated sussfully");
                                        this.save();
                                        break;
                                    case 2:
                                        var cUpdate = readline.question("Enter the new city name: ");
                                        if (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) {
                                            console.log("Invalid name!");
                                            return false;
                                        }
                                        var obj = {
                                            "Name": address.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": {
                                                "Street": address.Person[k]["Address"].Street,
                                                "City": cUpdate,
                                                "State": address.Person[k]["Address"].State,
                                                "Nationality": address.Person[k]["Address"].Nation,
                                                "Zip": address.Person[k]["Address"].Zip,
                                                "PhoneNum": address.Person[k]["Address"].PhoneNum
                                            }
                                        };
                                        address.Person[k] = obj;
                                        this.save();
                                        break;
                                    case 3:
                                        var stUpdate = readline.question("Enter the new state name: ");
                                        if (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) {
                                            console.log("Invalid name!");
                                            return false;
                                        }
                                        var obj = {
                                            "Name": address.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": {
                                                "Street": address.Person[k]["Address"].Street,
                                                "City": address.Person[k]["Address"].City,
                                                "State": stUpdate,
                                                "Nationality": address.Person[k]["Address"].Nation,
                                                "Zip": address.Person[k]["Address"].Zip,
                                                "PhoneNum": address.Person[k]["Address"].PhoneNum
                                            }
                                        };
                                        address.Person[k] = obj;
                                        this.save();
                                        break;
                                    case 4:
                                        var nUpdate = readline.question("Enter the new nation name: ");
                                        if (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) {
                                            console.log("Invalid name!");
                                            return false;
                                        }
                                        var obj = {
                                            "Name": address.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": {
                                                "Street": address.Person[k]["Address"].Street,
                                                "City": address.Person[k]["Address"].City,
                                                "State": address.Person[k]["Address"].State,
                                                "Nationality": nUpdate,
                                                "Zip": address.Person[k]["Address"].Zip,
                                                "PhoneNum": address.Person[k]["Address"].PhoneNum
                                            }
                                        };
                                        address.Person[k] = obj;
                                        this.save();
                                        break;
                                    case 5:
                                        var zUpdate = readline.question("Enter the new zip code: ");
                                        if (contactRestriction.test(zUpdate) == false) {
                                            console.log("Invalid number!");
                                            return false;
                                        }
                                        var obj = {
                                            "Name": address.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": {
                                                "Street": address.Person[k]["Address"].Street,
                                                "City": address.Person[k]["Address"].City,
                                                "State": address.Person[k]["Address"].State,
                                                "Nationality": address.Person[k]["Address"].Nation,
                                                "Zip": zUpdate,
                                                "PhoneNum": address.Person[k]["Address"].PhoneNum
                                            }
                                        };
                                        address.Person[k] = obj;
                                        this.save();
                                        break;
                                    case 6:
                                        var pUpdate = readline.question("Enter the new phone number: ");
                                        while (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) {
                                            console.log("No special characters Invalid number! ");
                                            pUpdate = readline.question("Enter the new phone number: ");
                                        }
                                        var obj = {
                                            "Name": address.Person[k].Name,
                                            "LastName": address.Person[k].LastName,
                                            "Address": {
                                                "Street": address.Person[k]["Address"].Street,
                                                "City": address.Person[k]["Address"].City,
                                                "State": address.Person[k]["Address"].State,
                                                "Nationality": address.Person[k]["Address"].Nation,
                                                "Zip": address.Person[k]["Address"].Zip,
                                                "PhoneNum": pUpdate
                                            }
                                        };
                                        address.Person[k] = obj;
                                        this.save();
                                        break;
                                    case 7:
                                        console.log("ThankYou!");
                                        break;
                                }
                                break;
                            case 2:
                                var update = readline.question("Please enter the index you want to delete: \n");
                                delete address.Person[update];
                                for (var k = 0; k < address.Person.length; k++) {
                                    if (address.Person[k] == null) {
                                        address.Person.splice(k, 1);
                                    }
                                }
                                file.writeFile('AddressBook.json', JSON.stringify(address), 'utf-8', function (err) {
                                    if (err)
                                        throw err;
                                    console.log('Done!');
                                });
                                break;
                            case 3:
                                this.sorting(address);
                                this.save();
                                break;
                            case 4:
                                this.save();
                                break;
                            case 5:
                                console.log("ThankYou!!");
                                break;
                            default:
                                console.log("Please enter valid option");
                                break;
                        }
                    }
                }
                if (temp == -1) {
                    console.log("Profile unavailable!!Please create new one.");
                }
            }
            else {
                console.log("No profiles to display!!Please create a new profile!");
                this.createAddress(address);
            }
        };
        return Address;
    }());
    Data.Address = Address;
    /*************************************************************************************************************/
    //  * @description: class to used to manage a list of Doctors associated with the Clinique. 
    //  *               It manages Doctors by Name, Id, Specialization and Availability (AM,  PM or both). 
    //  *               It manages Patients by Name, ID, Mobile Number and Age. The Program allows users 
    //  *               to search Doctor by name, id, Specialization or Availability. Also the programs 
    //  *               allows users to search patient by name, mobile number or id. The programs allows patients 
    //  *               to take appointment with the doctor. A doctor at  any availability time can see only 
    //  *               5 patients. If exceeded the user can take appointment for patient at different date 
    //  *               or availability time. Print the Doctor Patient Report
    /*************************************************************************************************************/
    //var read = require('readline-sync')
    var Doctors = /** @class */ (function () {
        function Doctors() {
        }
        /**
         * @description : function to search doctoe by name or by id or by Specialization
         * @param {*} data
         */
        Doctors.prototype.searchDoctor = function (data) {
            var doctors = data.Doctors;
            console.log("\n 1.Search Doctor By Name \n 2.By Id \n 3.by Specialization:");
            var number = readline.questionInt("Enter your choice: ");
            if (number == 1) {
                var name1 = readline.question("Enter Doctor name:");
                for (var key in doctors) {
                    if (doctors[key].Name == name1) {
                        console.log("\n-------Your Doctor Information is-------\n");
                        console.log(doctors[key]);
                    }
                }
            }
            if (number == 2) {
                var Id1 = readline.question("Enter Doctor Id: ");
                for (var key in doctors) {
                    if (doctors[key].Id == Id1) {
                        console.log("\n-------Your Doctor Information is-------\n");
                        console.log(doctors[key]);
                    }
                }
            }
            if (number == 3) {
                var sp = readline.question(" Enter Doctor Specialization: ");
                for (var key in doctors) {
                    if (doctors[key].Specialization == sp) {
                        console.log("\n-------Your Doctor Information is-------\n");
                        console.log(doctors[key]);
                    }
                }
            }
        };
        /**
         * @description : Function to take appointment from doctor
         * @param {String} data
         */
        Doctors.prototype.appointment = function (data) {
            var patient = data.Patient;
            var doctors = data.Doctors;
            var arrdr = [];
            var arr11 = [];
            var arrpa = [];
            var arrtime = [];
            console.log("Doctors list is: ");
            for (var key in doctors) {
                arr11.push(doctors[key].Name);
            }
            console.log(arr11);
            var c = 0;
            for (var key in patient) {
                var drname = "";
                var namedr = readline.question(patient[key].Name + " Enter Doctor Name you want take appointment:");
                for (var key_1 = 0; key_1 < 2; key_1++) {
                    if (doctors[key_1].Name == namedr) {
                        arrdr.push(doctors[key_1].Name);
                        arrtime.push(doctors[key_1].Availability);
                        var n = doctors[key_1].Numberofappointmaent;
                    }
                }
                arrpa.push(patient[key].Name);
                c++;
            }
            console.log();
            console.log("slno" + " Doctor Name   Patient Name   Availability Time");
            for (var i = 0; i < c; i++) {
                console.log(i + 1 + "    " + arrdr[i] + "       " + arrpa[i] + "          " + arrtime[i]);
            }
            var arrc = [];
            for (var i = 0; i < doctors.length; i++) {
                var c = 0;
                arrc.push([]);
                for (var j = 0; j < arrdr.length; j++) {
                    if (doctors[i].Name == arrdr[j]) {
                        c++;
                    }
                }
                var s = "" + c + doctors[i].Name;
                if (!arrc.includes(s)) {
                    arrc.push(s);
                }
            }
            console.log();
            var sortarr = arrc.sort();
            var st = sortarr[sortarr.length - 1];
            var st1 = st.substring(1, st.length);
            console.log(" popular Doctor is: " + st1);
        };
        return Doctors;
    }());
    /**
     * @description : This class is used to  manages the list of patients who use the clinique.
     *                 and also search Patient by name or by Id or by mobileNumber
     */
    var Patient = /** @class */ (function () {
        function Patient() {
        }
        /**
         * @description : Function to search Patient by name or by Id or by mobileNumber
         *  @param {String} data
         */
        Patient.prototype.searchpatient = function (data) {
            var patient = data.Patient;
            console.log(" \n 1.Search Patient by Name \n 2.By Id \n 3.By MobileNumber:");
            var number1 = readline.questionInt("Enter your choice: ");
            if (number1 == 1) {
                var name1 = readline.question("Enter patient name:");
                for (var key in patient) {
                    if (patient[key].Name == name1) {
                        console.log("-------Your patient Information is-------");
                        console.log(patient[key]);
                    }
                }
            }
            if (number1 == 2) {
                var Id1 = readline.question("Enter patient Id: ");
                for (var key in patient) {
                    if (patient[key].Id == Id1) {
                        console.log("\n-------Your patient Information is-------\n");
                        console.log(patient[key]);
                    }
                }
            }
            if (number1 == 3) {
                var mobilenumber1 = readline.question("Enter patient mobilenumber: ");
                for (var key in patient) {
                    if (patient[key].mobilenumber == mobilenumber1) {
                        console.log("\n-------Your patient Information is-------\n");
                        console.log(patient[key]);
                    }
                }
            }
        };
        return Patient;
    }());
    // module.exports = {Item, Rice, Wheat, Pulses, replaceUsingRegex, Stock, InventoryManagerStock,
    //     Address, Doctors, Patient}
})(Data = exports.Data || (exports.Data = {}));

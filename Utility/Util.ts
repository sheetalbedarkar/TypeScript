/****************************************************************************************************/
//  * @purpose :to deploy all the business logic
//  * @file    :util.js
//  * @author  :Sheetal Shamkant Bedarkar
//  * @version :1.0
//  * @since   :15/04/2019 
/***************************************************************************************************/


/*******************fileRead*************************************************************/
// * @purpose :To read file from the path
// * @function : fileRead Function reads the file and split it by space and returns
/***************************************************************************************/
const readline = require('readline-sync');
module.exports = {
    fileRead() 
    {
        var fileStream = require('fs');
        var f = fileStream.readFileSync('/home/bridgeit/Desktop/DataStructure/UnOrderList.txt', 'utf8');
        var arr = f.trim().split(' ');
        return arr;
    },
    /** for ordered number */
    FileRead() 
    {
        var fileStream = require('fs');
        var f = fileStream.readFileSync('/home/bridgeit/Desktop/DataStructure/OrderList.txt', 'utf8');
        var arr = f.trim().split(' ');
        return arr;
    },
    /**************************************************************************************
     * @purpose :To write the datd into file 
     * @function :fileWrite function write the data to afile.
     * @param    :fileWrite function accepts fileName and data to be writen.
     ***************************************************************************************/
    fileWrite(fileName, data) 
    {
        const fs = require('fs');
        fs.writeFile(fileName, data, function (err) 
        {
            if (err) 
            {
                return console.log(err);
            }
        });
    },
/******************************* String Template ***************************************/
//@purpose      : To ensure that user name should be minimum 3 characters, not a number
//                 and must be an alphabet, then replace the username with user input 
//                 and print the value.
//@param        : Invoke this method and pass user input as parameter.
//@function     : username takes the user input and prints the value 
/*************************************************************************************/

username(name)
{
    let str = /[a-zA-Z]/
    try
    {
        if(name.length >= 3 && isNaN(name) && str.test(name))
        {
            var input = "Hello <<username>>, How are you ?"
            var output = input.replace("<<username>>", name);
            console.log(output)
        }
        else
        {
            if(!isNaN(name)) throw "User name must not be a number.."
            if(name.length < 3) throw "User name must be minimum 3 digits"
            if(!str.test(name)) throw "User name must be a string"
        }      
    }
    catch(e)
    {
        console.log(e)
    }    
},

/*********************************** Flip Coin *******************************************/
// * @purpose :By using rondam function filp the coin the number of times the user input and 
// *           print percentage of heads and tails
// * @param   :pass no of coin flips
/****************************************************************************************/
coinFlip(flips)
{
    let randNum = 0;
    let head = 0
    let tail = 0;
    let hPerc
    let tPerc
    let counter = 1;
    try
    {
        if(flips<0) throw "Enter the positive number"
        while(counter<=flips)
        {
            randNum = Math.random();
            console.log(counter + " " + randNum)
            if(randNum < 0.5)
            {
                head++;
                console.log("Head")
            }
            else
            {
                tail++;
                console.log("Tail")
            }
        counter++;
        }
        console.log("Number of heads are :: "+head)
        console.log("Number if tails are :: "+tail)
        hPerc = (head * 100)/flips;
        console.log("Percentafe of getting Head :: "+hPerc)
        tPerc = (tail * 100)/flips;
        console.log("Percentafe of getting Tail :: "+tPerc)
    }  
    catch(e)
    {
        console.log(e)
    }
},

/*********************** Leap Year **************************/
//@purpose  : To Check Leap year or not
//@param    : Take 4 digit user input String
/***********************************************************/

leapYear(year)
{
    try
    {
        if(year.length < 4) throw "Year must be 4 digit"
        if(year.length > 4) throw "Year must be 4 digit"
        if(((year%4==0) && (year%100!=0)) || (year % 400 == 0))
        {
            console.log(year + " Year is Leap year")
        }
        else
        {
            console.log(year + " Year is not Leap year")
        }        
    }
    catch(e)
    {
        console.log(e)
    }
},

/******************************** Power of Two ********************************************/
// * @purpose     :To Accept value of "N" from user and prints a table of the powers of 2 
//                  that are less than or equal to 2^N. value of N should be less then 31.
// * @param       :Prints the value of two's power, accepting input from the command line 
//                  argument.
// * @function    :function checks the given number is less then 31, if less than 31, then 
//                  it prints the value of two's power i.e., 2^N value
/******************************************************************************************/

powerOfTwo():any
{
    try
    {    
    var power:any = process.argv[2]
    if(power >= 0 && power < 31 && !isNaN(power))
    {
        for(let i = 0; i <= power; i++)
        {
            console.log("2^"+ i +" = " +Math.pow(2, i));
        } 
    }
        if(power > 32 || power < 0) throw "OVERFLOW!!!!!!"   
    }
    catch(e)
    {
        console.log(e)
    }    
},

/********************************** Harmonic Series *********************************/
// * @purpose   :Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
// * @param     :To generate sum of harmonic numbers by accepting input from user
// * @function  :function Harmonic function takes user input and sum it number of
// *              times that user given.
/**********************************************************************************/
harmonic(num)
{
    var sum = 0;
    var i = 0;
    try
    {
        if(num != 0)
        {
            for(i = 1; i <= num; i++)
            {
                sum += (1 / i)
                console.log("1 /" + i + " + ")
            }
            console.log("Harmonic series "+ num + " = "+ sum);
        }
        if(num == 0) throw "Number should not be ZERO..!!"    
    }
    catch(e)
    {
        console.log(e)
    }    
},

/********************************* Prime Factors *****************************************/
// * @purpose     : To generate the prime factorials of N number using brute force.
// * @param       : Prints the factorials of a number by accepting the num as argument.
// * @function    : Traverse till i*i <= N instead of i <= N for efficiency and prints the 
// *                factorials for the given user input value.
/****************************************************************************************/

primeFactor(num)
{
    try
    {
        var i;
        for(i = 2 ; i * i < num ; i++)
        {
            while(num % i == 0)
            {
                console.log(i);
                num = num / i;
            }
        }
        if(num > 2)
        {
            console.log(num)
        }
        if(num == 0) throw "Number should not be ZERO..!!"
    }
    catch(e)
    {
        console.log(e)
    }
},

/*************************************** Gambler *********************************************/
// * @purpose     : Simulates a gambler who start with some initial stake amount and plays 
//                  fair one bets until he/she goes broke (i.e. has no money) or reach 
//                  goal(gains expected amount). Keeps track of the number of times he/she wins
//                  and the number of bets he/she makes. will run the experiment N times, 
//                  averages the results, and prints them out.
// * @param       : It accepts the stake and the goal amount from the user, where stake<goal and
//                  must be a number also it keeps track on the number of times he/she bets and 
//                  prints the percentage of win and loss and the number of wins.
// * @function    : Play till the gambler is broke or has won.
/****************************************************************************************/

gambler(stake, goal, times)
{
    try
    {
        var win = 0;
        var loss = 0;
        if(times == 0) throw "You should bet atleast once.."
        if(stake > goal) throw "stake should be less than goal"
        for(let i = 0 ; i <= times ; i++)
        {
            while(times > 0 && stake <= goal && stake > 0)
            {
                if(Math.random() > 0.5)
                {
                    win++;
                    stake++;
                    times--;
                }
                else
                {
                    loss++;
                    stake--;
                    times--;
                }
            }
        }
        var total = win + loss;
        var winPerc = (win / total) * 100
        var lossPerc = (loss / total) * 100
        console.log("Percentage of win :: " + winPerc + "%");
        console.log("Percentage of loss :: " + lossPerc + "%")
    }
    catch(e)
    {
        console.log(e)
    }
},

/********************************* Coupan Number *****************************************/
// * @purpose  : Given N distinct Coupon Numbers, how many random numbers do you need to
// *             generate distinct coupon number? This program simulates this random process.
// * @param    : To print the distinct numbers by accepting the N number from the user. 
// * @function : repeatedly choose a random number and check whether it's a new one.
/****************************************************************************************/

getCoupan(coupon)
    {
        return (Math.round(Math.random() * coupon));
    },
    //return number of cards you collect before obtaining one of each of the n types
    collect(num)
    {
        var isCollect = []; //isCollect[i] = true if card type i already collected
        var distinct = 0; // number of distinct card types collected
        var count = 0; // numbers of cards collected
        while(distinct < num)
        {
            var value = this.getCoupan(num) // pick a random card
            console.log(value);
            count++;
            if(!isCollect[value]) // discovered new card type
            {
                distinct++;
                isCollect[value] = true;
            }
        }
        return count;
    },

/************************************* 2D Array *****************************************/
// * @purpose     : To create 2 dimensional array in memory to read in M rows and N cols. 
// * @param       : It accepts rows, cols and the elements from the user and prints the output. 
// * @function    : A library for reading in 2D arrays of integers, doubles, or booleans 
// *                from standard input and printing them out to standard output.
/****************************************************************************************/
array1(row, coloumn, read)
{
    try
    {
        if(row < 0) throw "Array Index Out Of Bound Exception!!!"
        if(coloumn < 0) throw "Array Index Out Of Bound Exception!!!"
        var arr = [];
        var element;
        for(let i = 0; i < row; i++)
        {
            arr.push([]);
            for(let j = 0; j < coloumn; j++)
            {
                element = read.question("Enter the array elements :: ")
                arr[i][j] = element;
            }
        }
        for(let i = 0; i < arr.length; i++)
        {
            var temp = "";
            for(let j = 0; j < arr[i].length; j++)
            {
                temp = temp + (arr[i][j] + " ");
            }
            console.log(temp);
        }
    }
    catch(e)
    {
       console.log(e) 
    }
},

/************************************** Triplets *******************************************/
//  * @purpose :A function with cubic running time. Read in N integers and counts the   
//  *           number of triples that sum to exactly 0.Output is number of distinct triplets as
//  *           well as the second output is to print the distinct triplets.
//  * @param   :N number of integer, and N integer input array
/******************************************************************************************/

triplets(arr, n)
{  
    var found1 = false;
    try
    {
        for(var i = 0; i<n-2; i++)
            {
                for(var j = i+1; j<n-1; j++)
                {
                    for(var k = j+1; k<n; k++)
                    {
                        if(arr[i] + arr[j] + arr[k] == 0)
                        {
                            console.log(arr[i] + " " + arr[j] + " " + arr[k]);
                            console.log();
                            found1 = true;
                        }
                    }
                }
            }
        if(found1 == false) throw "Numbers with sum 0 are not exists"
    }
    
    catch(e)
    {
        console.log(e)
    }
},   

/********************************* Euclidian Distance ***********************************/
//  * @purpose : Function to takes two integer command-line arguments x and y and 
//  *            prints the Euclidean distance from the point (x, y) to the origin (0, 0). 
//  *            The formulae to calculate distance = sqrt(x*x + y*y). Use Math.power function
/*****************************************************************************************/
euclidean()
{
    var x:any = process.argv[2]
    var y:any = process.argv[3]
    var distance = Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
    console.log("Euclidian distance from (x, y) to origin (0, 0) is ::" + distance)
},


/********************************************** Permutation **************************************************/
//  * @Purpose -Function to calculate permutation of a String using iterative method and Recursion method. Check 
//  *           if the arrays returned by two string functions are equal. 
//  * @param   -take input String
/************************************************************************************************************/

getStringPermutation(string) {
    try {
        var res = [];
        if (string.length === 1) {
            res.push(string);
            return res;
        }
        for (var i = 0; i < string.length; i++) {
            var firstChar = string[i];
            var charsLeft = string.substring(0, i) + string.substring(i + 1);
            var innerPermutations = this.getStringPermutation(charsLeft);
            for (var j = 0; j < innerPermutations.length; j++) {
                res.push(firstChar + innerPermutations[j]);
            }
        }
        return res;
    } catch (e) {
        console.log(e.message);
    }
},

/******************************************* StopWatch ************************************************/
//  * @purpose : Stopwatch Program for measuring the time that elapses between the
//               start and end clicks
//  * @param {*} read 
/*****************************************************************************************************/
stopWatch(read)
{
    var startTime = read.question("Press Enter to start ");
    var start:any = new Date;
    var stopTime = read.question("Press Enter to stop ");
    var stop:any = new Date;
    var totalTime = stop - start;
    totalTime = totalTime / 1000;
    var second = Math.round(totalTime);
    console.log(second + " sec");
},

/**************************************** TicTacToe **************************************************/
//  * @purpose :functions to play a Cross Game or Tic-Tac-Toe Game. Player 1 is the Computer and the
//              Player 2 is the user. Player 1 take Random Cell that is the Column and Row. 
/****************************************************************************************************/

intializeGame():any {
    var game = [];
    for (let i = 0; i <= 2; i++) {
        game.push([]);
        for (let j = 0; j <= 2; j++)
            game[i][j] = '-';
    }
    return game;
},

random():any {
    var value = Math.floor(Math.random() * 3);
    // console.log(value + 1);
    return value;
},

mark(game, x, y, value):any  {
    if (game[x][y] == '-')
        game[x][y] = value;
    for (let i = 0; i <= 2; i++) {
        var print = [];
        for (let j = 0; j <= 2; j++)
            print[j] = game[i][j];
        console.log(print);

    }
    console.log("\n");
    return game;
}
,
computerPlayer(game):any  {
    var arr;
    var flag = false;
    while (flag == false) {
        var x = this.random();
        var y = this.random();
        if (game[x][y] == '-') {
            arr = this.mark(game, x, y, 'O');
            flag = true;
        }
    }
    return game;
},
userPlayer(game):any  {
    var flag = false;
    while (flag == false) {
        console.log("Enter the row value:");
        let x = readline.questionInt('Enter the value of x within 1,2,3 : ') - 1;
        let y = readline.questionInt('Enter the value of y within 1,2,3 : ') - 1;
        if (game[x][y] == '-') {
            this.mark(game, x, y, 'X');
            flag = true;
        }
        else
            console.log("Please enter the correct choice");
    }
    return game;
}
,
check(game):any  {
    for (let i = 0; i <= 2; i++) {
        if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) {
            if (game[i][0] == 'O' || game[i][0] == 'X') {
                return true;
            }
        }
        if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) {
            if (game[0][i] == 'O' || game[0][i] == 'X') {
                return true;
            }
        }
    }
    var k = 0, l = 0;
    if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) {
        if (game[0][0] == 'O' || game[0][0] == 'X') {
            return true;
        }
    }
    if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) {
        if (game[0][0] == 'O' || game[0][0] == 'X') {
            return true;
        }
    }
    return false;
},
 
/***************************************** Quadratic Equations ***********************************************/
//  * @purpose :  find the roots of the equation a*x*x + b*x + c. Since the equation is x*x, hence there are 2 roots.
//                The 2 roots of the equation can be found using a formula 
//                 delta = b*b - 4*a*c
//                 Root 1 of x = (-b + sqrt(delta))/(2*a)
//                 Root 2 of x = (-b - sqrt(delta))/(2*a)
// * @param    :  Take a, b and c as input values to find the roots of x.
/*********************************************************************************************************/
quadratic(a, b, c):any 
{
    try
    {
        var root1, root2;
        var delta = b * b - 4 * a * c;
        if(delta > 0)
        {
            root1 = (- b + Math.sqrt(delta)) / (2 * a)
            root2 = (- b + Math.sqrt(delta)) / (2 * a)
            console.log("Roots of the equation are :: " + root1 + " " + root2);
        }
        if(delta < 0) throw "Roots are IMAGINARY.!!!"
    }
    catch(e)
    {
        console.log(e)
    }
},      

/**************************************** WindChill **************************************************/
//  * @purpose  : To calculate windChilll
//  * @param    : Takes two command line argument
/*****************************************************************************************************/
windchill():any 
{
    var t:any  = process.argv[2]
    var v:any  = process.argv[3]
    var w:any  = 0;
    try
    {
        if(t < 50 && v > 3 && v < 120)
        {
            w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            console.log("Temperature = " + t)
            console.log("wind speed = " + v)
            console.log("wind chill = " + w)
        }
        else
        {
            if(t > 50 || v > 120 || v < 3) throw "NOT VALID..!!!!"
        }
    }
    catch(e)
    {
        console.log(e)
    }
},
/****************************************************************************************************/
                                      /****ALGORITHM PROGRAMS****/
/****************************************************************************************************/

/************************ Anagram ****************************/
// * @Purpose :chech Whether tow strings are anagram or not
// * @param   :take string from user
/*************************************************************/
isAnagram(s1, s2):any 
{
    try
    {
        var format = /[a-zA-Z0-9]/
        var result;
        if(format.test(s1) && format.test(s2))
        {
            if(s1.length !== s2.length)
            {
                result = false;
            }
            var sortS1 = s1.toString().split("").sort().join("");
            var sortS2 = s2.toString().split("").sort().join("");
            result = sortS1 === sortS2;
            if(result == true)
            {
                console.log(`${s1} and ${s2} are ANAGRAMS..!!!`)
            }
            else
            {
                console.log(`${s1} and ${s2} are not ANAGRAMS..!!!`)
            }
        }
        else throw "Enter only letters or alphabets..!!"        
    }
    catch(e)
    {
        console.log(e)
    }
},
/*********************** Prime Numbers ************************/
isPrime(num):any 
{
    try
    {
        if(num == 0 || num == 1)
        {
            return false;
        }
        for(let i = 2; i < num; i++)
        {
            if(num % i == 0)
                return false;
        }
        return true;
    }
    catch(e)
    {
        console.log(e)
    }   
},
/*********************** Prime Numbers ************************/
// * @Purpose :Prime numbers from 0 to 1000
/*************************************************************/
findPrimeNumber():any 
{
    try
    {
        console.log("Prime number between 0 to 1000");
        for(let i = 0; i <=1000; i++)
        {
            if(this.isPrime(i))
                console.log(i)
        }
    }
    catch(e)
    {
        console.log(e)
    }
    
},
/************************** Prime Numbers are Palindrome or Anagram **********************************/
// * @Purpose - Function to find the prime numbers that are Anagram and Palindrome 
// * @param   :  Extending the above program to find the prime numbers that are Anagram and Palindrome.
/*****************************************************************************************************/
isNumberPalindrome(num):any 
{
    try
    {
        var str = "";
        num = num + "";
        for(let i = 0; i < num.length; i++)
        {
            str = num.charAt(i) + str;
        }
        if(str == num)
        {
            return true;
        }
        return false;
    }
    catch(e)
    {
        console.log(e)
    }
},
isAnagramPalindrome():any 
{
    console.log("Prime number in the range 0 to 1000 :: ");
    var arr = [];
    for(let i = 0; i < 1000 ; i++)
    {
        if(this.isPrime(i))
        {
            arr.push(i)
        }
    }
    for(let i = 0; i < 1000; i++)
    {
        for(let j = i + 1; j < arr.length; j++)
        {
            if(this.isAnagram(arr[i], arr[j]))
            {
                console.log(arr[i] + " and " + arr[j] + " are Anagram");
                if(this.isNumberPalindrome(arr[i]))
                {
                    console.log(arr[i] + " is Palindrome")
                }
                if(this.isNumberPalindrome(arr[j]))
                {
                    console.log(arr[j] + " is Palindrome")
                }
            }
        }
    }
},
/*********************************** Binary Search Integer *******************************************/
// * @purpose     : To search the number using binary search.
// * @param       : It accepts the input and searches for the given number.
// * @function    : A function to binary which accepts the input to find the number and print the result.
/*****************************************************************************************************/
binarySeachInt(arr, search):any 
{
    try
    {
        var low = 0;
        var high = arr.length - 1;
        while(low <= high)
        {
            var mid = low + Math.floor((high - low) / 2);
            if(Number(arr[mid]) == search)
            {
                return true;
            }
            else if(Number(arr[mid]) < search)
            {
                low = mid + 1;
            }
            else
            {
                high = mid - 1;
            }
            return false;
        }
    if(low > high) throw "Number is NOT FOUND..!!!!"
    }
    catch(e)
    {
        console.log(e)
    }

},
/*********************************** Binary Search String *******************************************/
// * @purpose     : To search the string using binary search.
// * @param       : It accepts the input and searches for the given number.
// * @function    : A function to binary which accepts the input to find the number and print the result.
/*****************************************************************************************************/

binarySearchStr(arr, search):any 
{
    try
    {
        arr.sort();
        console.log(arr)
        var low = 0;
        var high = arr.length - 1;
        while(low <= high)
        {
            var mid = low + Math.floor((high - low) / 2);
            if(arr[mid] === search)
                return true;
            else if(arr[mid] < search)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return false;
        if(low > high) throw "String is NOT FOUND...!!!"
    }
    catch(e)
    {
        console.log(e)
    }
    
},

/**************************************** Insertion Sort *********************************************/
// * @purpose     : Use Insertion Sort to sort the words in the String array.
// * @param       : It accepts the input from the user and sort the array using insertion sort.
// * @function    : Reads in strings from standard input and prints them in sorted order.
//                  Uses insertion sort.
/*****************************************************************************************************/
getInsertionSort(size):any 
{
    try
    {
        var arr = [];
        for(let i = 0; i < size; i++)
        {
            arr[i] = readline.question("Enter the string to sort :: ");
        }
        for(let i = 1; i < arr.length; i++)
        {
            var temp = arr[i];
            var j = i - 1;
            while(j >= 0 && arr[j] > temp)
            {
                console.log(arr);
                arr[j + 1] = arr[j]
                j = j - 1;
            }
            arr[j + 1] = temp;
        }
        console.log(arr);
    }
    catch(e)
    {
        console.log(e)
    }  
},
/*********************************** Insertion Sort String *********************************************/
// * @purpose     : Use Insertion Sort to sort the words in the String array.
// * @param       : It accepts the input from the user and sort the array using insertion sort.
// * @function    : Reads in strings from standard input and prints them in sorted order.
//                  Uses insertion sort.
/******************************************************************************************************/
searchWord():any 
{
    try
    {
        var arr = [];
        var search = readline.question("Enter a string to search :: ");
        const fs = require("fs");
        fs.readline("C:\Users\SHREE\Desktop\Javascript\AlgorithmPrograms\searchSample.txt", (err, data) =>
        {
            if(err) throw err;
            arr = data.toString.split(",");
            console.log(this.binarySearchStr(arr, search));
        })
    }
    catch(e)
    {
        console.log(e.message)
    }
},

/****************************************** Bubble Sort *************************************************/
// * @purpose : Reads in integers prints them in sorted order using Bubble Sort
// * @param   :read in the list ints
/*****************************************************************************************************/

getBubbleSort(size) :any {
    try {
        var arr = [];
        for (let i = 0; i < size; i++) {
            arr[i] = readline.question("Enter the elements = ");
        }
        for (let a = 0; a < arr.length; a++) {
            for (let b = a + 1; b < arr.length; b++) {
                if (arr[a] > arr[b]) {
                    var temp = arr[a];
                    arr[a] = arr[b];
                    arr[b] = temp;
                }
            }
        }
        console.log("Sorted elements are = " + arr);

    }
    catch (e) {
        console.log(e.message);
    }
},

bubbleSort(size):any  {
    for (let a = 0; a < size.length; a++) {
        for (let b = a + 1; b < size.length; b++) {
            if (size[a] > size[b]) {
                var temp = size[a];
                size[a] = size[b];
                size[b] = temp;
            }
        }
    }
    return size;
    // console.log("  [  "+size +"  ]  " );
},
/****************************************** Merge Sort *************************************************/
// * @purpose      : To get merge Sort of list of Strings. 
// * @param        : It accepts the input from the user and prints the result.
// * @function     : To Merge Sort an array, we divide it into two halves, sort the two halves
// *                 independently, and then merge the results to sort the full array.
/*****************************************************************************************************/
mergeSort(res) :any 
{
    try 
    {

        var n = res.length;
        if (n < 2) 
        {
            return;
        }
        var mid = Math.floor(n / 2);
        var left = [mid];
        var right = [n - mid];
        for (let i = 0; i < mid; i++) 
        {
            left[i] = res[i];
        }
        for (let j = mid; j < n; j++) 
        {
            right[j - mid] = res[j];
        }
        this.mergeSort(left);
        this.mergeSort(right);
        this.merge(left, right, res);
    } 
    catch (e) 
    {
        console.log(e.message);
    }

},

merge(arr, brr, crr) :any 
{
    try 
    {
        var i = 0; var j = 0;
        var k = 0;
        while (i < arr.length && j < brr.length) 
        {
            if (arr[i] <= brr[j]) 
            {
                crr[k] = arr[i]
                i++;
            }
            else 
            {
                crr[k] = brr[j];
                j++;
            }
            k++;
        }
        while (i < arr.length) 
        {
            crr[k] = arr[i];
            i++;
            k++;
        }
        while (j < brr.length) 
        {
            crr[k] = brr[j];
            j++;
            k++;
        }
        return crr;
    } 
    catch (e) 
    {
        console.log(e.message);
    }
},
/***************************************** Guess Number ***********************************************/
// * @purpose     : Print the intermediary number and the final answer
// * @param       : takes a command-line argument N, asks you to think of a number between 0 and N-1, 
//                  where N = 2^n, and always guesses the answer with n questions.
// * @function    : A function Print the intermediary number and the final answer
/*****************************************************************************************************/
findNumber(low, high):any  {
    try {
        var mid = low + Math.floor((high - low) / 2);
        var k;
        if (low < high) {
            if (low == high - 1) {
                k = readline.question("Is the number " + low + "  if yes press->yes " + " IF the number is high press->no" + " ");
                if (k == "yes")
                    return low;
                if (k == "no")
                    return high;
            }
            k = readline.question("Is the number in the range " + mid + "-" + high + " If yes press yes else press no" + " ");
            if (k == "yes")
                mid = this.findNumber(mid, high);
            if (k == "no")
                mid = this.findNumber(low, mid - 1);
        }
        return mid;
    }
    catch (e) 
    {
        console.log(e.message);
    }
},
/***************************************** Vending Machine ********************************************/
// * @purpose     : To calculate the minimum number of Notes as well as the 
// *                Notes to be returned by the Vending Machine as a Change.
// * @param       : It accepts the amount from the user and print the number of notes.
// * @function    : There is 1, 2, 5, 10, 50, 100, 500 and 2000 Rs Notes which can be 
// *               returned by Vending Machine and print the number of notes.
/*****************************************************************************************************/
findNumberOfNotes(arr, amount):any  {
    try 
    {
        var notes = 0
        for (let i = 0; i < arr.length; i++) 
        {
            if (amount / arr[i] >= 1) 
            {
                var c = Math.floor(amount / arr[i])
                notes = notes + c
                console.log(arr[i] + " notes are :" + c)
                amount = amount % arr[i]
            }
        }
        console.log("total number of notes :" + notes)
    }
    catch (e) {
        console.log(e.message);

    }

},
/****************************************** Days OF The Week *************************************************/
// * @purpose :prints the day of the week that date falls on. 
// * @param   :command-line arguments: m (month), d (day), and y (year).
/*****************************************************************************************************/
dayOfWeek(day:any, month:any, year:any):any  {
    try {
        if ((0 < day && day < 32) && (0 < month && month < 13) && (999 < year && year < 10000)) 
        {
            var y0 = year - Math.floor((14 - month) / 12);
            var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
            var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
            var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;


            switch (d0) 
            {
                case 0: return "Friday";
                case 1: return "Saturday";
                case 2: return "sunday";
                case 3: return "monday";
                case 4: return "Tuesday";
                case 5: return "Wednesday";
                case 6: return "Thrusday";
                default:
                    console.log("Plese try again ");
                    break;
            }

        }
    } catch (e) {
        console.log(e.message);
    }
},
/************************************* Tempreture Converter ******************************************/
// * @purpose :Converts the tempreture from celcius to fahrenheit or vice versa 
// * @param   :tempreture in celsius or fahrenheit
/*****************************************************************************************************/
tempConvertor() :any {
    try {
        console.log("Temprature Calculator : ");
        var choice = readline.question("Enter temprature in celsius or Fahrenheit  \n 1 for celsius\n 2 for Fahrenheit\n Enter your choice : ");
        var tempInFarient = 0;
        var tempInCelsius = 0;
        if (choice == 1) {
            tempInFarient = readline.question("Enter temp in fehrenheit : ");
            var celsius = (tempInFarient - 32) * 5 / 9;
            return celsius;
        } else if (choice == 2) {
            tempInCelsius = readline.question("Enter temp in celsius : ");
            var fahrenheit = ((tempInCelsius + 32) * 9 / 5);
            return fahrenheit;

        } else
            console.log("incorrect choice ");
    }
    //return -1;
    catch (e) {
        console.log(e.message);
    }
},
/****************************************** Monthly Payment *************************************************/
// * @purpose     : To calculate thye monthly payment.
// * @param       : It accepts the input from the command line argument and calculates the monthly 
// *                payment.
// * @function    : It reads in three command-line arguments P, Y, and R and calculates the monthly 
// *                payments you would have to make over Y years to pay off a P principal loan amount
// *                at R per cent interest compounded monthly
/*****************************************************************************************************/
findMonthlyPayment():any  {
    try {
        var principal:any  = process.argv[2];
        var year:any  = process.argv[3];
        var rate:any  = process.argv[4];
        var payment = 0;
        var n = 12 * year;
        var r = (rate / (12 * 100));
        payment = (principal * r) / (1 - Math.pow((1 + r), -n)) * 100;
        console.log("Monthly payment is " + payment);
    } catch (e) {
        console.log(e.message);
    }

},
/************************************** Find square root *********************************************/
// * @purpose :Compute the square root of non negative number
// * @param   :take input
/*****************************************************************************************************/
findSqrt(num) :any 
{
    try 
    {
        var epsilon = Number.EPSILON;
        var c = num;
        var t = c;
        while (Math.abs(t - c / t) > epsilon * t) 
        {
            t = (c / t + t) / 2.0;
        }
        console.log("sqrt of number is " + t);
    } 
    catch (e) 
    {
        console.log(e.message);
    }
},
/****************************************** To Binary *************************************************/
// * @purpose :function toBinary that outputs the binary (base 2) representation of the decimal number typed as the input.
// *           It is based on decomposing the number into a sum of powers of 2.
// * @param   :take decimal input
/*****************************************************************************************************/
toBinary(num):any  {
    try {
        var temp = num;
        var string = "";
        while (num > .9) 
        {
            var result = Math.floor(num % 2);
            string = string + result;
            num = num / 2;
        }
        console.log("Binary value of given number : "+string);
        return string;
    } catch (e) {
        console.log(e.message);
    }
},
/****************************************** Swap Nibble *************************************************/
// * @Purpose : 1) Swap nibbles and find the new number.
// *            2) Find the resultant number is the number is a power of 2.
// * @param   : take number to perform operation
/*****************************************************************************************************/
swapBinary(num):any  {
    try 
    {
        // var bin =0
        var bin = this.toBinary(num);
        console.log(bin);
        while (bin.length < 8) 
        {
            bin = 0 + bin;
        }
        console.log(bin);
        var st = bin.substring(4, 8) + bin.substring(0, 4)
        console.log(st);
        var arr = st.split("");
        var sum = 0;
        console.log(arr);
        var c = 0;
        for (let i = arr.length - 1; i >= 0; i--) 
        {
            var s = 2 ** c;
            var s1 = arr[i] * s;
            sum = sum + s1;
            c++;

        }
        console.log(sum);
        var x = this.toBinary(sum);
        var arr2 = x.split("");
        var con = 0;
        for (let i = 0; i < arr2.length; i++) 
        {
            if (arr2[i] == 1) 
            {
                c++;
            }
        }
        if (con == 1) 
        {
            console.log("Number is power of 2");
        }
        else
            console.log("Not power of 2");

    } 
    catch (e) 
    {
        console.log(e.message);
    }
},


/********************************** Elapsed Time *******************************************/
// * @purpose :Print Elapsed time using StopWatch for Search and Sort Mat
// * @param   :search sort methods
/******************************************************************************************/
currentTime():any  {
    try {
        //to take current time in miliseconds
        var d = new Date();
        //var time =d.getTime();
        var time = d.getMilliseconds();
        return time;
    } catch (e) {
        console.log(e.message)
    }
},

elapsedTime(start, end) :any 
{
    try 
    {
        var elapsed = Math.abs(end - start);
        return elapsed;
    } 
    catch (e) 
    {
        console.log(e.message)
    }
},
insertionSortInt(arrInt, nI):any  {
    try {
        for (let i = 1; i < nI; i++) {
            var a = arrInt[i];
            var j = i - 1;

            //Loop till j is greater than or equal to 0 and arr[j] is greater than a             
            while (j >= 0 && arrInt[j] > (a)) 
            {
                //if above condtion is true then swap values
                arrInt[j + 1] = arrInt[j];
                j = j - 1;
            }
            arrInt[j + 1] = a;
        }
        //print the sorted array
        console.log("Sorted array is:");
        for (let k = 0; k < nI; k++) {
            console.log(arrInt[k] + " ");
        }
    } catch (e) {
        console.log(e.message)
    }
},

bubbleSortInt(arrInt1, nI1) :any {

    var temp;
    nI1 = arrInt1.length;
    console.log("Sorted array is:");
    try {
        //Loop to iterate through array
        for (let i = 0; i < nI1; i++) 
        {
            for (let j = i + 1; j < nI1; j++) 
            {
                //if arr[i] is greater than arr[j] then swap
                if (arrInt1[i] > arrInt1[j]) 
                {
                    temp = arrInt1[i];
                    arrInt1[i] = arrInt1[j];
                    arrInt1[j] = temp;
                }
            }
        }

        for (let k = 0; k < arrInt1.length; k++) 
        {
            console.log(arrInt1[k] + " ");
        }
    } 
    catch (e) 
    {
        console.log(e.message)
    }
},

bubbleSortStr(arrStr1, nS1):any  
{
    var temp;
    nS1 = arrStr1.length;
    console.log("Sorted array is:");
    try {
        //Loop to iterate through array
        for (let i = 0; i < nS1; i++) 
        {
            for (let j = i + 1; j < nS1; j++) 
            {
                //if arr[i] is greater than arr[j] then swap
                if (arrStr1[i].localeCompare(arrStr1[j]) > 0) 
                {
                    temp = arrStr1[i];
                    arrStr1[i] = arrStr1[j];
                    arrStr1[j] = temp;
                }
            }
        }
        for (let k = 0; k < arrStr1.length; k++) 
        {
            console.log(arrStr1[k] + " ");
        }
    } 
    catch (e) 
    {
        console.log(e.message)
    }
},
insertion(arr, n):any  {
    try 
    {
        //Loop to iterate through array
        for (let i = 1; i < n; i++) 
        {
            var a = arr[i];
            let j = i - 1;

            //Loop till j is greater than or equal to 0 and arr[j] is greater than a       
            while (j >= 0 && arr[j] > a) 
            {
                //if above condtion is true then swap values
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = a;
        }
        //print the sorted array
        console.log("Sorted array is:");
        for (let k = 0; k < n; k++) 
        {
            console.log(arr[k] + " ");
        }
    } 
    catch (e) 
    {
        console.log(e.message)
    }
}
}
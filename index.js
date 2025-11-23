// //Code your solutions in this file
// 1. Write a function `fiveToOneHundred` that console logs all numbers from 5 to 100.
function fiveToOneHundred() {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}

fiveToOneHundred();



// 2. Write a function `multiplesOfThree` that console logs all positive numbers to 100 that is a multiple of 3.
// > Multiples  of 3 are: `3, 6, 9, 12, 15, ...`
function multiplesOfThree() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
multiplesOfThree();

// 3. Write a function `multiplesOfThreeOrFive` that console logs all positive numbers to 100 if that number is either a mulitple of 3 or a mutliple of 5.
// > `3, 5, 6, 9, 10, 12, 15, ...`
function multiplesOfThreeOrFive() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

multiplesOfThreeOrFive();

// 4. Write a function `untilNum` that takes in an integer parameter and console logs all numbers from 1 to that number.
// ```
// untilNum(5)    //prints out numbers 1 through 5
// untilNum(9)    //prints out numbers 1 through 9
// untilNum(42)   //prints out numbers 1 through 42
// ```
function untilNum(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

untilNum(5);   // 1,2,3,4,5
untilNum(9);   // 1..9
untilNum(42);  // 1..42

// 5. Write a function `multiply` that takes in two number parameters and **returns** their product.
// ```
// multiply(2, 4)     //returns 8
// multiply(10, -5)   //returns -50
// multiply(3, 7.5)   //returns 22.5
// ```
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 4));    // 8
console.log(multiply(10, -5));  // -50
console.log(multiply(3, 7.5));  // 22.5

// 6. Write a function `add` that takes in two number parameters and **returns** their sum. But if the two values are the same, return **triple their sum**!
// ```
// add(2, 4)     //returns 6
// add(10, -5)   //returns 5
// add(3, 7.5)   //returns 10.5
// add(5, 5)     //returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
// add(6, 6)     //returns 36 because the sum of 6 + 6 = 12 and 36 is triple that
// ```
function add(a, b) {
    let sum = a + b;
    if (a === b) {
        return sum * 3;
    }
    return sum;
}

console.log(add(2, 4));    // 6
console.log(add(10, -5));  // 5
console.log(add(3, 7.5));  // 10.5
console.log(add(5, 5));    // 30
console.log(add(6, 6));    // 36

// 7. Write a function `isNegative` that takes in a number parameter and **returns** `true` is the number is a negative value and `false` is the number is a positive value. 
// ```
// isNegative(3)         //returns false
// isNegative(-2)        //returns true
// isNegative(Math.PI)   //returns false
// ```
function isNegative(num) {
    return num < 0;
}

console.log(isNegative(3));        // false
console.log(isNegative(-2));       // true
console.log(isNegative(Math.PI));  // false

// 8. Write a function `triangleArea` that takes in the height and base of a triangle and **returns** the [area of the triangle](https://www.mathsisfun.com/algebra/trig-area-triangle-without-right-angle.html). 
// ```
// triangleArea(5, 7)    //returns 17.5
// triangleArea(6, 8)    //returns 24
// ```
function triangleArea(base, height) {
    return (base * height) / 2;
}

console.log(triangleArea(5, 7));  // 17.5
console.log(triangleArea(6, 8));  // 24

// 9. Write a function `betweenTwentyAndFourty` that takes in a number parameter and checks whether a given integer is within 20 to 40. It **returns** `true` if it is and `false` if not.
// ```
// betweenTwentyAndFourty(20)      //return false
// betweenTwentyAndFourty(21)     //return true
// betweenTwentyAndFourty(39)     //return true
// betweenTwentyAndFourty(40)    //return false
// ```

function betweenTwentyAndFourty(num) {
    return num > 20 && num < 40;
}

// 10. Write a function `largest` that takes in three number parameters and **returns** the largest of the values.
// ```
// largest(4, 6, 8)        //returns 8
// largest(30, 22, 17)     //returns 30
// largest(41, 108, 86)    //returns 108


function largest(a, b, c) {
    return Math.max(a, b, c);
}


// 11. Write a function `printTime` that prints out the current time in the format `HH:MM:ss`. Do not hard code the hour, minute, or seconds values.

function printTime() {
    let now = new Date();  // get the current date and time
    let hours = String(now.getHours()).padStart(2, "0");   // HH
    let minutes = String(now.getMinutes()).padStart(2, "0"); // MM
    let seconds = String(now.getSeconds()).padStart(2, "0"); // ss

    console.log(`${hours}:${minutes}:${seconds}`);
}


// 12. Write a function `isLeapYear` to determine whether a given year is a [leap year](https://www.rmg.co.uk/stories/topics/which-years-are-leap-years-can-you-have-leap-seconds#:~:text=To%20be%20a%20leap%20year,2028%20are%20all%20leap%20years.) in the Gregorian calendar.
// ```
// isLeapYear(2000)    //returns true
// isLeapYear(1900)    //returns false
// isLeapYear(2020)    //returns true
// isLeapYear(1999)    //returns false
// ```
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
// 13. Write a function `getExtention` to get the extension of a filename.
// ```
// getExtention("hello.txt")     //returns ".txt"
// getExtention("app.js")        //returns ".js"
// getExtention("README.md")     //returns ".md"
// ```

function getExtention(filename) {
    let dotIndex = filename.lastIndexOf("."); t
    if (dotIndex === -1) return "";
    return filename.substring(dotIndex);
}
// 14. Write a function `absoluteNineteen` to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function absoluteNineteen(num) {
    let diff = Math.abs(num - 19);
    if (num > 19) {
        return diff * 3;
    }
    return diff;
}

// Examples:
console.log(absoluteNineteen(20)); // 3
console.log(absoluteNineteen(25)); // 18
console.log(absoluteNineteen(10)); // 9

// 15. Write a function `switchLetters` that creates a new string from a given string changing the position of first and last characters. 
// ```
// switchLetters("anne")         //return "enna"
// switchLetters("hello world")  //return "dello worlh"
// switchLetters("a")            //return "a"
// switchLetters("")             //return ""
// ```
function switchLetters(str) {
    if (str.length <= 1) return str;
    return str[str.length - 1] + str.slice(1, -1) + str[0];
}

// Examples:
console.log(switchLetters("anne"));        // "enna"
console.log(switchLetters("hello world")); // "dello worlh"
console.log(switchLetters("a"));           // "a"
console.log(switchLetters(""));            // ""

// 16. Write a function `changeString` to replace every character in a given string with the character following it in the alphabet/
// ```
// changeString("abc")             //return "bcd"
// changeString("helloworld")      //return "ifmmpxpsme"
// ```
function changeString(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) + 1);
    }
    return result;
}

// Examples:
console.log(changeString("abc"));        // "bcd"
console.log(changeString("helloworld")); // "ifmmpxpsme"


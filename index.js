const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
};

//Write a function multiplesOfThree that console logs all positive numbers to 100 that is a multiple of 3.


const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
};

/* 
Write a function multiplesOfThreeOrFive that console logs all positive numbers to 100 if that number is either a mulitple of 3 or a mutliple of 5.
*/


const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
};

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
};

const multiply = (a, b) => {
    return a * b;
};

const add = (a, b) => {
    return a === b ? (a + b) * 3 : a + b;
};

// console.log(add(2, 4));
// console.log(add(10, -5));
// console.log(add(3, 7.5));
// console.log(add(5, 5));
// console.log(add(6, 6));

const isNegative = (num) => {
    if(Math.sign(num) === -1 ){
    console.log(true)
   } else {
    console.log(false)
   }
}

// isNegative(3)         //returns false
// isNegative(-1)        //returns true
// isNegative(Math.PI)   //returns false

// 8
const triangleArea = (height, base) => 0.5 * base * height;

// 10
const largest = (num1, num2, num3) => Math.max(num1, num2, num3);

// 12
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// 14
const absoluteNineteen = (num) => Math.abs(num - 19) * num > 19 ? 3 : 1;

// 16
const changeString = (str) => {
    // NOTE: this solution allocates more than it needs to and it makes 'z' become '{' (ASCII),
    // but the prompt doesn't specify what should happen in this situation.
    return String.fromCharCode(...[...str].map(ch => ch.charCodeAt(0) + 1));
};

console.log(changeString("abc"))             //return "bcd"
console.log(changeString("helloworld"))      //return "ifmmpxpsme"

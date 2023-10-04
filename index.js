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

console.log(add(2, 4));
console.log(add(10, -5));
console.log(add(3, 7.5));
console.log(add(5, 5));
console.log(add(6, 6));

const isNegative = (num) => {
    if(Math.sign(num) === -1 ){
    console.log(true)
   } else {
    console.log(false)
   }
}

isNegative(3)         //returns false
isNegative(-1)        //returns true
isNegative(Math.PI)   //returns false
// 1. Write a function `fiveToOneHundred` that console logs all numbers from 5 to 100.
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}

fiveToOneHundred();

// 2. Write a function `multiplesOfThree` that console logs all positive numbers to 100 that is a multiple of 3.
//> Multiples of 3 are: `3, 6, 9, 12, 15, ...`

function multiplesOfThree() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
multiplesOfThree();

//3. Write a function `multiplesOfThreeOrFive` that console logs all positive numbers to 100 if that number is either a mulitple of 3 or a mutliple of 5.
//> `3, 5, 6, 9, 10, 12, 15, ...`

function multiplesOfThreeOrFive() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

multiplesOfThreeOrFive();

// 4. Write a function `untilNum` that takes in an integer parameter and console logs all numbers from 1 to that number.
// untilNum(5)    //prints out numbers 1 through 5
// untilNum(9)    //prints out numbers 1 through 9
// untilNum(42)   //prints out numbers 1 through 42
function untilNum(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
untilNum(5);
untilNum(9);
untilNum(42);

// 5. Write a function `multiply` that takes in two number parameters and **returns** their product.
//multiply(2, 4)     //returns 8
//multiply(10, -5)   //returns -50
//multiply(3, 7.5)   //returns 22.5

function multiply(a, b) {
    return a * b;
}

// Example calls:
console.log(multiply(2, 4));    // 8
console.log(multiply(10, -5));  // -50
console.log(multiply(3, 7.5));  // 22.5





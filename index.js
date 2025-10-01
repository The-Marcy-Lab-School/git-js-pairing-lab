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

//6. Write a function `add` that takes in two number parameters and **returns** their sum. But if the two values are the same, return **triple their sum**!
const add = (num, num2) => {
    let total = num + num2
      console.log(total);
  };

add(2, 4)     //returns 6
add(10, -5)   //returns 5
add(3, 7.5)   //returns 10.5
add(5, 5)     //returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
add(6, 6)     //returns 36 because the sum of 6 + 6 = 12 and 36 is triple that


//7. Write a function `isNegative` that takes in a number parameter and **returns** `true` is the number is a negative value and `false` is the number is a positive value. 
const isNegative = (num) => {
    if(num < 0) {
      return true;
    } else if(num > 0) {
      return false;
    }
  };
  console.log(isNegative(3));

isNegative(3)         //returns false
isNegative(-2)        //returns true
isNegative(Math.PI)   //returns false


//8. Write a function `triangleArea` that takes in the height and base of a triangle and **returns** the [area of the triangle](https://www.mathsisfun.com/algebra/trig-area-triangle-without-right-angle.html). 
const triangleArea = (height, base)=>{
    return (height * base/2);
   }
   console.log(triangleArea(2, 4));

triangleArea(5, 7)    //returns 17.5
triangleArea(6, 8)    //returns 24


//9. Write a function `betweenTwentyAndFourty` that takes in a number parameter and checks whether a given integer is within 20 to 40. It **returns** `true` if it is and `false` if not.
const betweenTwentyAndFourty = (num)=>{
    if(num > 20 && num < 40){
      return true;
    }
      return false;
  };

betweenTwentyAndFourty(20)      //return false
betweenTwentyAndFourty(21)     //return true
betweenTwentyAndFourty(39)     //return true
betweenTwentyAndFourty(40)    //return false


//10. Write a function `largest` that takes in three number parameters and **returns** the largest of the values.
const largest = (num1, num2, num3)=>{
    if(num1 > num2 && num1 > num3){
      return num1;
    }else if(num2 > num1 && num2 > num3){
      return num2;
    }else if(num3 > num1 && num3 > num2){
      return num3;
    }
  };
  console.log(largest(40,30,20));

largest(4, 6, 8)        //returns 8
largest(30, 22, 17)     //returns 30
largest(41, 108, 86)    //returns 108




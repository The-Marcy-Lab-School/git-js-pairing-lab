//Code your solutions in this file
//Question 1
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
    return;
};
// fiveToOneHundred()

//Question 2 
const multiplesOfThree = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
    return;
};

//multiplesOfThree()
//No parameter name = no parameter or room for arguments

//Question 3
const multiplesOfThreeOrFive = () => {
    for (i = 0; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    } return;
}
//multiplesOfThreeOrFive()

//Question 4 
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }

};
//console.log(untilNum(5))

//Question 5
const multiply = (arg1, arg2) => {
    let result = arg1 * arg2
    return result
}
// console.log(multiply(2, 4))
// console.log(multiply(10, -5))
// console.log(multiply(3, 7.5))


//Question 6
const add = (num1, num2) => {
    if (num1 == num2) {
        return (num1 + num2) * 3
    } else {
        return num1 + num2
    }
}
// console.log(add(3, 6))
// console.log(add(5, 5))

// Question 7

const isNegative = (num) => {
    if (num <= 0) {
        return true
    } else return false
}
// console.log(isNegative(3))         //returns false
// console.log(isNegative(-2))        //returns true
// console.log(isNegative(Math.PI))   //returns false

//Question 8
const triangleArea = (h, b) => {
    return 0.5 * h * b
}
// console.log(triangleArea(5, 7))  

//Question 9
const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
        return true
    } else return false
}
// console.log(betweenTwentyAndFourty(20))      //return false
// console.log(betweenTwentyAndFourty(21))     //return true
// console.log(betweenTwentyAndFourty(39))     //return true
// console.log(betweenTwentyAndFourty(40))    //return false

//Question 10
const largest = (n1, n2, n3) => {
    if (n1 > n2 && n2 > n3) {
        return n1
    } else if (n1 < n2 && n2 > n3) {
        return n2
    } else if (n1 < n2 && n2 < n3) {
        return n3
    }

};

console.log(largest(41, 108, 86))


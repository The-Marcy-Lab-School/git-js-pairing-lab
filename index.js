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

console.log(add(3, 6))
console.log(add(5, 5))
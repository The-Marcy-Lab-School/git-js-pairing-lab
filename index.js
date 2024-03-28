
//Question 1
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
}
//fiveToOneHundred()


//Question 2
const multiplesOfThree = () => {
    for (let i = 3; i < 100; i += 3) {
        console.log(i)
    }
}
//multiplesOfThree()

//Question 3
const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }
}
//multiplesOfThreeOrFive()

//Question 4
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}
//untilNum(6)

//Question 5
const multiply = (num1, num2) => {
    return num1 * num2
}

//(multiply(2, 4))

//Question 6
const add = (num1, num2) => {
    if (num1 !== num2) {
        return num1 + num2
    } else {
        return (num1 + num2) * 3
    }
}
//console.log(add(2, 4))
//console.log(add(5, 5))

//Question 7 

const isNegative = (num) => {
    if (num < 0) {
        return true
    } else {
        return false
    }
}
//console.log(isNegative(3))
//console.log(isNegative(-2))
//console.log(isNegative(Math.PI))

//Question 8
const triangleArea = (height, base) => {
    return (height * base) * (1 / 2)
}
//console.log(triangleArea(5, 7))

//Question 9

const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
        return true
    } else {
        return false
    }
}

//console.log(betweenTwentyAndFourty(20))
//console.log(betweenTwentyAndFourty(21))
//onsole.log(betweenTwentyAndFourty(39))
//console.log(betweenTwentyAndFourty(40))


//Question 10
const largest = (a, b, c,) => {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }
}
//console.log(largest(30, 22, 17))
//console.log(largest(4, 6, 8))
//console.log(largest(41, 108, 86))



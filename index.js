// Jahmari-Problem 1: fiveToHundred();
const fiveToAHundred = () => {
    for (let i = 5; i <= 100; i++) console.log([i]);
};
console.log(fiveToAHundred());

// Patrick-problem 2: mulitplesOfThree()
const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
console.log(multiplesOfThree());

// Jahmari-problem 3: multiplesOfThreeOrFive
const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) console.log(i);
    }
};
console.log(multiplesOfThreeOrFive());

// Patrick-problem 4: untilNum();
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}

console.log(untilNum(5))


// problem 6 
const add = (arg1, arg2) => {
    if (arg1 === arg2) {
        return (arg1 + arg2) * 3
    } else {
        return (arg1 + arg2)
    }
}
console.log(add(2, 4))
console.log(add(10, -5))
console.log(add(3, 7.5))
console.log(add(5, 5))
console.log(add(6, 6))


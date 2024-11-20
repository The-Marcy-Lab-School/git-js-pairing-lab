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



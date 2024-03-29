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
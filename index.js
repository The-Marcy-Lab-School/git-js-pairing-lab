//Code your solutions in this file
const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
console.log(multiplesOfThree(100))
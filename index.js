/*Code your solutions in this fill
const fiveToOneHundred = () => {
    for (let i = 5 ; i <= 100; i++){
    console.log(i)
    }
}

fiveToOneHundred();
*/

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i);
        }
    }
}
console.log(multiplesOfThreeOrFive(100));
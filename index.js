//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) { console.log(i) }
}

const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++)
        if (i % 3 === 0) {
            console.log(i)
        }
}

multiplesOfThree()
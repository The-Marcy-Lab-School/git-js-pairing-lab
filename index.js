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
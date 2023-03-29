//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let num = 5; num <= 100; num++) {
        console.log(num);
    }
}
//fiveToOneHundred();

const multiplesOfThree = () => {
    for ( let i = 3; i <= 100; i+= 3)
    console.log(i);
}

//multiplesOfThree();

const multiplesOfThreeOrFive = () => {
    for ( let i = 3; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}
//multiplesOfThreeOrFive();

const untilNum = (int) => {
    for (let i = 1; i <= int; i++) {
        console.log(i);
    }
}
//untilNum(26);

const multiply = (num1, num2) => {
    console.log(num1 * num2);
}
multiply(3,3);
multiply(6,4);

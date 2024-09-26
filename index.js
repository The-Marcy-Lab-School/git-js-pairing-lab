//Code your solutions in this file

//1.

const fiveToOneHundred = () => {

    for (let i = 5; i < 101; i++) {
        console.log(`Counting: ${i}`);
    };

};
//console.log(fiveToOneHundred())


//2.

const multiplesOfThree = () => {
    for (let i = 3; i < 100; i += 3) {
        console.log(i);
    };
};
//multiplesOfThree()

//3.

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 33; i++) {
        const multiple3 = i * 3
        console.log(`${multiple3}`)
    }
    for (let j = 1; j <= 20; j++) {
        const multiple5 = j * 5
        console.log(`${multiple5}`)
    };
};
//console.log(multiplesOfThreeOrFive())

//4.

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    };
};
//untilNum(6)

//5.

const multiply = (num, num2) => {
    return num * num2
};
//console.log(multiply(-2, 2))

//6.

const add = (num1, num2) => {
    if (num1 === num2) {
        return console.log(num1 * num2);
    } else {
        return console.log(num1 + num2);
    };
};
//add(4, 4)

//7

const isNegative = (num) => {
    if (num < 0) {
        return true
    } else {
        return false
    };
};
//console.log(isNegative(1))

//8

const triangleArea = (base, height) => {
    return console.log((base * height) / 2);
};
//triangleArea(6, 8)

9.


10.

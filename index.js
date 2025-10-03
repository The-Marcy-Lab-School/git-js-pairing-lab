//Code your solutions in this file
function fiveToOneHundred() {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}

const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
};

const multiply = (num1, num2) => {
    return num1 * num2;
}

const add = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }
    return (num1 + num2);
};

const isNegative = (num) => {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}

const triangleArea = (base, height) => {
    return (base * height) / 2;
}

const betweenTwentyAndFourty = (num) => {
    if (num <= 20 || num >= 40) {
        return false;
    }
    return true;
}
const largest = (num1, num2, num3) => {
    let arr = [num1, num2, num3];
    let max = num1
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const printTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
}
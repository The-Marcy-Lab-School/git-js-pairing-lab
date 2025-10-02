//Code your solutions in this file
// first function fiveToOneHundred
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}
// fiveToOneHundred();

const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
// multiplesOfThree();

const multipletimesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}
// multipletimesOfThreeOrFive();

const untilNum = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}
// untilNum(5);

const multiply = (num1, num2) => {
    let result = num1 * num2;
    return result;
}
// console.log(multiply(5, 5));

const add = (n1, n2) => {
    if (n1 === n2) {
        return (n1 + n2) * 3
    } else {
        return n1 + n2
    }
}
// console.log(add(2, 4));

const isNegative = (num) => {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}
//console.log(isNegative(0))

const triangleArea = (h, b) => {
    return (1 / 2) * b * h
}
//console.log(triangleArea(5, 7));

const betweenTwentyAndFourty = (num) => {
    if (num >= 20 && num <= 40) {
        return true;
    } else {
        return false;
    }
}
// console.log(betweenTwentyAndFourty(20))

const largest = (n1, n2, n3) => {
    if (n1 > n2 && n1 > n3) {
        return n1
    } else if (n2 > n1 && n2 > n3) {
        return n2
    } else {
        return n3
    }
}
// console.log(largest(4, 6, 8));



//////////////////////////// BONUS /////////////////////////////////

const printTime = () => {
    const now = new Date();
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const time = now.toLocaleTimeString('en-US', timeOptions);
    return time
}
// console.log(printTime());

const isLeapYear = (year) => {
    return new Date(year, 1, 29).getDate() === 29;
};
// console.log(isLeapYear(2000));

const getExtention = (filename) => {
    return filename.split(".").pop();
}
// console.log(getExtention("README.md"));

const absoluteNineteen = (num) => {
    let absoleteDifference = num - 19;
    absoleteDifference = Math.abs(absoleteDifference);
    if (absoleteDifference > 19) {
        absoleteDifference *= 3;
    }
    return absoleteDifference;
}
console.log(absoluteNineteen(-9))

function changeString(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        // handle "z"
        if (122 == str.charCodeAt(i)) {
            result += "a";
            // handle "Z"
        } else if (90 == str.charCodeAt(i)) {
            result += "A";
            // handle all other letter characters
        } else if ((65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 89) ||
            (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 121)) {
            result += String.fromCharCode(str.charCodeAt(i) + 1);
            // append all other characters unchanged
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

console.log(changeString("abcd"));
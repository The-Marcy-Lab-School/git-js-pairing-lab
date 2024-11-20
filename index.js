//Code your solutions in this file
Name: Kevin & Zhenni

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


//9.

const bewtweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
        return true
    } else {
        return false
    }
};
//console.log(bewtweenTwentyAndFourty(40))

//10.

const largest = (numa, numb, numc) => {
    if (numa > numb && numa > numc) {
        return console.log(numa);
    } else if (numb > numa && numb > numc) {
        return console.log(numb);
    } else { return console.log(numc); };
};
//largest(41, 108, 86)

//11.

const printTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "am";

    if (hour == 0) {
        hour = 12
    };
    if (hour > 12) {
        hour = hour - 12;
        session = "pm";
    };

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = `${hour}:${minute}:${seconds} ${session}`;
    return time;
}
//console.log(printTime())

//12.

const isLeapYear = (year) => {
    if (Number.isInteger(year / 100) === true && Number.isInteger(year / 400) === true) {
        return console.log(true);
    } else if (Number.isInteger(year / 100) === false && Number.isInteger(year / 4) === true) {
        return console.log(true);
    }
    else if (Number.isInteger(year / 100) === false && Number.isInteger(year / 400) === false) {
        return console.log(false);
    }
    else { return console.log(false); }
}
// isLeapYear(2000)

//13.
const getExtention = (file) => {
    let fileName = file;
    let ext = fileName.split('.').pop();
    console.log(`.${ext}`);
};
// getExtention("app.js") 


//14

const absoluteNineteen = (num) => {
    const nineteen = 19
    absDifference = Math.abs(num - nineteen)
    if (absDifference > 19) {
        return absDifference * 3;
    } else if (absDifference < 19) {
        return absDifference;
    }
}
//console.log(absoluteNineteen(50))

//15

const switchLetters = (name) => {
    middleMan = name.substring(1, name.length - 1);
    if (name.length === 1) {
        return name;
    } else if (name.length >= 2) {
        return (name.charAt(name.length - 1)) + middleMan + name.charAt(0);
    } else {
        return "";
    }

}
//console.log(switchLetters('hello world'))

//16.
const changeString = (string) => {
    let letter = "";
    for (let i = 0; i < string.length; i++) {
        letter += String.fromCharCode(string.charCodeAt(i) + 1);
    }
    console.log(letter);
};
//changeString("abd")


//Code your solutions in this file

// Problem 1
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
};
console.log('\n')
console.log('Problem 1:');
fiveToOneHundred();


// Problem 2
const multiplesOfThree = () =>{
    for (i = 3; i <= 100; i+=3){
        console.log(i)
    }
}
console.log('\n')
console.log('Problem 2:');
multiplesOfThree();


// Problem 3
const multiplesOfThreeOrFive = () => {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i);
        }
    }
};
console.log('\n')
console.log('Problem 3:');
multiplesOfThreeOrFive();


//Problem 4
const untilNum = (int) =>{
    for(i = 1; i <= int; i++){
        console.log(i)
    }
}
console.log('\n')
console.log('Problem 4');
untilNum(5);


// Problem 5:
const multiply = (num1, num2) => {
    const finalVal = num1 * num2;
    return finalVal;
};
console.log('\n')
console.log('Problem 5:');
console.log(multiply(2, 4));     //returns 8
console.log(multiply(10, -5));  //returns -50
console.log(multiply(3, 7.5));  //returns 22.5


//Problem 6
const add = (num1, num2) => {
    if (num1 === num2){
        return 3 * (num1 + num2);
    }else{
        return num1 + num2;
    }
}
console.log('\n')
console.log('Problem 6')
console.log(add(2,4))
console.log(add(10, -5))
console.log(add(3, 7.5))
console.log(add(5, 5))
console.log(add(6, 6))

// Problem 7
const isNegative = (value) => {
    if (value < 0) {
        return true;
    } else {
        return false;
    }
};
console.log('\n');
console.log('Problem 7:');
console.log(isNegative(3));        //returns false
console.log(isNegative(-2));       //returns true
console.log(isNegative(Math.PI));  //returns false

// Problem 8
const triangleArea = (height, base) => {
    return 0.5 * base * height;
};

console.log('\n');
console.log("Problem 8:");
console.log(triangleArea(5, 7));
console.log(triangleArea(6, 8));

//Problem 9
const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
        return true;
    } else {
        return false;
    }
};

console.log('\n');
console.log('Problem 9');
console.log(betweenTwentyAndFourty(20));    //return false
console.log(betweenTwentyAndFourty(21));    //return true
console.log(betweenTwentyAndFourty(39));   //return true
console.log(betweenTwentyAndFourty(40));   //return false

const largest = (a, b ,c) =>{
    if (a > b && a > c){
        return a
    } else if (b > a && b > c){
        return b
    }else{
        return c
    }
}
console.log('\n');
console.log('Problem 10:');
console.log(largest(4, 6, 8));
console.log(largest(30, 22, 17));
console.log(largest(41, 108, 86));

// Bonus 1
const printTime = () => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();
    console.log(`${hour}:${minute}:${second}`);
};

console.log('\n');
console.log('Bonus 1:');
printTime();

// Bonus 4
const absoluteNineteen = (num) =>{
    const difference = Math.abs(num - 19);
        return num > 19 ? 3 * difference : difference
}

console.log('\n Bonus 4:')
console.log(absoluteNineteen(22))
console.log(absoluteNineteen(14))

//Bonus 5
const switchLetters = (str) =>{
    if (str.length < 2){
        return str;
    }
    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    const midStr = str.slice(1, -1);

    return lastChar + midStr + firstChar
}

console.log('\n Bonus 5:')
console.log(switchLetters("anne"));
console.log(switchLetters("hello world"));
console.log(switchLetters("a"));
console.log(switchLetters(""));

//Bonus 6
const changeString = (str) =>{
    return str.replace(/[a-zA-Z]/g, (char) =>{

        if (char === 'z')
            return 'a';
        if (char === 'Z')
            return 'A';

        return String.fromCharCode(char.charCodeAt(0) + 1);
    });
};

console.log('\n Bonus: 6');
console.log(changeString('hello'));
console.log(changeString('xyz'));
console.log(changeString('Hello!'));

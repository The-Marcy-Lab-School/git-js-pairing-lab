//Code your solutions in this file

// Problem 1
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
};

console.log('Problem 1:');
fiveToOneHundred();

// Problem 2
const multiplesOfThree = () =>{
    for (i = 3; i <= 100; i+=3){
        console.log(i)
    }
}
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

console.log('Problem 3:');
multiplesOfThreeOrFive();

//Problem 4
const untilNum = (int) =>{
    for(i = 1; i <= int; i++){
        console.log(i)
    }
}
console.log('Problem 4');
untilNum(5);

// Problem 5:
const multiply = (num1, num2) => {
    const finalVal = num1 * num2;
    return finalVal;
};

console.log('Problem 5:');
console.log(multiply(2, 4));     //returns 8
console.log(multiply(10, -5));  //returns -50
console.log(multiply(3, 7.5));  //returns 22.5
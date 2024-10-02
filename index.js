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

const triangleArea = (height, base) =>{
    return 0.5 * base * height
}
console.log('\n')
console.log("Problem 8:")
console.log(triangleArea(5, 7))
console.log(triangleArea(6, 8))

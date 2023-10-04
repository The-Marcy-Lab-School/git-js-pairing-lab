//Code your solutions in this file

//Problem 1
const fiveToOneHundred = () => {
for (i =5; i <= 100; i++) {
    console.log(i)
}
}
(fiveToOneHundred());

//Problem 2
const multiplesOfThree = () =>{
    for (let i = 0; i <= 100; i+=3)
    {
     console.log(i);
    }
}
multiplesOfThree();

//Problem 3
const multipleOfThreeOrFive = (num) => {
    for (let i =0; i <= 100; i++  )
    
    if(i % 3 === 0 || i % 5 === 0 ) {
        console.log(i);
    }
}
multipleOfThreeOrFive(100)

//Problem 4

const untilNum = (num) => {
    for (let i = 1; i <= num; i++){
        console.log(i);
    }
}
untilNum(36);

//Problem 5

const multiply = (num1, num2) => {
return num1 * num2
}
console.log(multiply(5,5))

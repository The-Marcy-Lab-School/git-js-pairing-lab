//Code your solutions in this file
const fiveToOneHundred = () =>{
    for(i=5 ; i<=100 ; i++){
        console.log(i)
    }
}
//fiveToOneHundred()

//Problem #2
const multiplesOfThree = () => {
    for (i=1; i <= 100; i++) {
    if ( i % 3 === 0 ) {
    console.log(i)  
    }
}
}
//multiplesOfThree();
const multiplesOfThreeOrFive = () =>{
    for(i =1 ; i<=100 ; i++){
        if(i % 3 ===0 || i % 5 === 0 ){
            console.log(i)
         }
    }
}
//multiplesOfThreeOrFive();

//Problem 4
const untilNum = (num) => {
    for (i=1; i <= num; i++)
    console.log(i)
}
//untilNum(5);    //prints out numbers 1 through 5
//untilNum(9);    //prints out numbers 1 through 9
//untilNum(42);   //prints out numbers 1 through 42

//Question 5

const multiply = (num1,num2) =>{
return num1 * num2
}
//console.log(multiply(1,5))


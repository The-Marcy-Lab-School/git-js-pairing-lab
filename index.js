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
//untilNum(5);    prints out numbers 1 through 5
//untilNum(9);    prints out numbers 1 through 9
//untilNum(42);   prints out numbers 1 through 42

//Question 5

const multiply = (num1,num2) =>{
return num1 * num2
}
//console.log(multiply(1,5))

//Question 6
const add = (integer1, integer2) => {
    let sum = integer1 + integer2
    
    if (integer1 === integer2) {
        return  sum * 3
    } else {
        return sum
    }
}

//console.log( add(2, 4));     returns 6
//console.log( add(10, -5));   eturns 5
//console.log( add(3, 7.5));   returns 10.5
//console.log( add(5, 5));     returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
//console.log( add(6, 6));     eturns 36 because the sum of 6 + 6 = 12 and 36 is triple that

//question 7

const isNegative = (num) =>{
    if(num * -1 < 0){
        return false
    }else{
        return true
    }
}

//console.log(isNegative(3))
//console.log(isNegative(-2))
//console.log(isNegative(Math.PI))

//Question 8
const triangleArea = (height, base) => {
    let area = (1/2) * height * base
    console.log(area)
}
//triangleArea(5, 7);    //returns 17.5
//triangleArea(6, 8);    //returns 24

//Question 9

const betweenTwentyAndFourty = (num) =>{
    if(num<40 && num>20 ){
        return true
    }else{
        return false
    }
}
//console.log(betweenTwentyAndFourty(4))     //return false
//console.log(betweenTwentyAndFourty(21))     //return true
//console.log(betweenTwentyAndFourty(99))     //return true
//console.log(betweenTwentyAndFourty(101))   //return false

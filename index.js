//Code your solutions in this file
const fiveToOneHundred=()=>{
    for(let i=5;i<=100;i++){
        console.log(i)
    }
}
const multiplesOfThree=()=>{
    for(let i=3;i<100;i++){
        if(i%3===0){
            console.log(i)
        }
    }
}
console.log(multiplesOfThree()) 

const multiplesOfThreeOrFive=()=>{
    for(let i=3;i<100;i++){
        if(i%3===0){
            console.log(i)
        }
    }
}
console.log(multiplesOfThreeOrFive())

 //5
 const multiply=(num1,num2)=>{
    return num1*num2
 }
 console.log(multiply(5,5))
 
=======
// 4
const untilNum = (integer) => {
    for(let i=1;i<=integer;i++) {
        console.log(i)
    }
}
console.log(untilNum(6))

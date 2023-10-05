//Code your solutions in this file
//1
const fiveToOneHundred=()=>{
    for(let i=5;i<=100;i++){
        console.log(i)
    }
}
fiveToOneHundred()
//2
const multiplesOfThree=()=>{
    for(let i=3;i<100;i++){
        if(i%3===0){
            console.log(i)
        }
    }
}
multiplesOfThree()
//3
const multiplesOfThreeOrFive=()=>{
    for(let i=3;i<100;i++){
        if(i%3===0){
            console.log(i)
        }
    }
}
multiplesOfThreeOrFive()
 //4
const untilNum=(num)=>{
    for(let i=1;i<=num;i++){
        console.log(i)
    }
    }
    untilNum(5)
 //5
 const multiply=(num1,num2)=>{
    return num1*num2
 }
 console.log(multiply(5,5))
 //6
 const add=(num1,num2)=>{
    if(num1===num2){
        return((num1+num2)*3)
    }else{
        return num1+num2
    }
 }
 console.log(add(5,3))
 //7
 const isNegative=(num)=>{
    if(num===0){
        console.log('Number is neither positive nor negative')
    }else if(num<0){
        return true
    }else{
        return false
    }
    }
    console.log(isNegative(-5))
 //8
 const triangleArea=(b,h)=>{
    return 1/2*(b*h)
}
console.log(triangleArea(5,4))
//9
const betweenTwentyAndFourty=(num)=>{
    if (num>20 && num<40){
        return true
    }else{
        return false
    }
}
console.log(betweenTwentyAndFourty(21))
//Code your solutions in this file
function countToHundred(){
    console.log("Question 1")
  for (let i=5;i<=100; i++){console.log(i)}
}

countToHundred()

function multiplesOf3(){
    console.log("Question 2")
    for (let i = 0; i < 100; i++){
        if (i % 3 === 0 ){
            console.log(i)
        }
    }
}

multiplesOf3()

function multiplesOfthreeorfive(){
   for (let i=1; i <= 100; i++)
    if(i % 3 === 0 || i % 5 === 0){console.log(i)}
    
}
multiplesOfthreeorfive() 

function untilNum(num){
    console.log('Q4')
    for (let i = 1;i <= num;i++){
        console.log(i)
    }
}
untilNum(6)

function Multiply(num1,num2){console.log("Question 5") 
console.log (num1 * num2)}
Multiply(3,4)



function add(num1,num2){
    if (num1 !== num2){
        return num1 + num2;
    }else{
        return (num1 + num2) * 3; 
    }
}
console.log('Q6')
 console.log(add(4,5))

function isNegative(num){
    console.log("Question7")
    if (num>0){console.log("false")}
    else{console.log("true")
}
}
isNegative(0)

let triangleArea = (a,b) =>{
    return (a*b) / 2
}
console.log('Q8')
console.log(triangleArea(5,7))

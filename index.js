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

function betweenTwentyandFourty(num){
    console.log("Question 9")
    if(num<100 && num>20){console.log("true")}
else {console.log("false")
}
}
betweenTwentyandFourty(101)


function largest(a,b,c){
    if (a>b && a>c){
        console.log(a)
    }else if (b>a && b>c){
        console.log(b)
    }else{
        console.log(c)
    }
    
}

console.log('Q10')
largest(9,9,9)

function printTime() {
    let time = new Date();
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}
//console.log(printTime());
//problem 12
function isLeapYear(year){
    if (year % 4 === 0) {
        return true
    } else {
        return false
    }
}
//console.log(isLeapYear(1800))
//problem 13
function getExtension(file) {
    return "." + file.split('.').pop();
}
//console.log(getExtension("Book.mp3"));
//problem 14
function absolute19(num){
    let absoluteValue = Math.abs(num - 19)
    if (num > 19){
        return 3 * absoluteValue
    }
}
//console.log(absolute19(22))
//problem 15

function switchLetters(string) {
    let emptyString = ""

    for(let i = 0; i < string.length; i++) {
        if(i != 0 && i != string.length - 1) {
            emptyString += string[i]
            //console.log(i);
        }
    }return string[string.length - 1] + emptyString + string[0]

}

console.log(switchLetters("Emmanuel"));

//problem 16

function changeString(string) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let newString = [];
    
    for(let i = 0; i < string.length; i++) {
        let temp = alphabet.indexOf(string[i]) + 1;
        newString.push(alphabet[temp]);
    }
    console.log(newString.join(''));
}
changeString("hello")

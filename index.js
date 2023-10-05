//1
const fiveToOneHundred = () => {for (let i = 5; i <= 100; i++) {console.log(i);}};
fiveToOneHundred();

//2
const multiplesOfThree = () => {for (i = 0; i < 100; i++){if (i % 3 === 0) {console.log(i)}}}
multiplesOfThree()

//3
const multiplesOfThreeOrFive = () => {for (let i = 3; i <= 100; i += 3) {console.log(i);}};
multiplesOfThreeOrFive()

//4
const untilNum = num => {for (i = 1; i <= num; i++){console.log(i)}}
untilNum(9)

//5 
const multiply = (num1, num2) =>{return num1 * num2;}
console.log(multiply(2, 4));
  
//6
const add = (num1, num2) => {
  if (num1 === num2) {console.log((num1 + num2)*3)}
  else {console.log(num1 + num2)}
}
add(3, 7.5)
add(6, 6)
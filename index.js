/*
// queestion one tested and complete
//Code your solutions in this file
const fiveToOneHundred = () => {
    for(let i = 5; i<=100; i++){
       console.log(i)
    }
}

fiveToOneHundred();


// queestion two tested and complete
const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i += 3) {
      console.log(i);
    }
  };
  multiplesOfThree();
  

 // queestion thre tested and complete 
const multiplesOfThreeOrFive =() => {
    for(let i=3; i <= 100; i++){
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }
}
multiplesOfThreeOrFive();


// question 4 completed
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
      console.log(i);
    }
  };

untilNum(5);

// question 5
const multiply = (num1, num2) => {
    return num1 * num2
};

console.log(multiply(3, 5));

// queestion 6
const add = (num1, num2) => {
    return num1 === num2 ? 3 * (num1 + num2) : num1 + num2;
  };


  console.log(add(3, 5));
  

  // question 7
  const isNegative = (num1) =>{
    return num1 < 0;
  }
  console.log(isNegative(-1));
*/

const triangleArea = (height, base) => {
  return 0.5 * height * base;
};

console.log(triangleArea(5, 7));
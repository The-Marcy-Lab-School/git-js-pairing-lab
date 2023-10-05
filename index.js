//1
const fiveToOneHundred = () => {
  for (let i = 5; i <= 100; i++) {
    console.log(i);
  }
};
fiveToOneHundred();

//2
const multiplesOfThree = () => {
  for (i = 3; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};
multiplesOfThree();

//3
const multiplesOfThreeOrFive = () => {
  for (let i = 3; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  
};
multiplesOfThreeOrFive();

//4
const untilNum = (num) => {
  for (i = 1; i <= num; i++) {
    console.log(i);
  }
};
untilNum(9);

//5
const multiply = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply(2, 4));

//6
const add = (num1, num2) => {
  if (num1 === num2) {
    console.log((num1 + num2) * 3);
  } else {
    console.log(num1 + num2);
  }
};
add(3, 7.5);
add(6, 6);

//7
const isNegative = (positve) => {
  if (postive < 0) {
    return true;
  } else {
    return false;
  }
};

//8
const triangleArea = (num1, num2) => {
  console.log((num1 * num2) / 2);
};
triangleArea(5, 7);
triangleArea(6, 8);

//9
const betweenTwentyAndFourty = (num) => num >= 20 && num <= 40;

//10
const largest = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};
console.log(largest(4, 6, 8));
console.log(largest(30, 22, 17));
console.log(largest(41, 108, 86));

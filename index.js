// //Code your solutions in this file

// //Question 1 - Madison

// const fiveToOneHundred = () => {
//     for(i = 5; i <= 100; i++){
//         console.log(i)
//     }
// }

// fiveToOneHundred()

// // Question 2 - Mei 
// const multiplesOfThree = () => {
//     for (i = 1; i <= 100; i++) {
//         if (i % 3 === 0) {
//             console.log(i);
//         }
//     }
// }

// multiplesOfThree();

// //Question 3 - Madison

// const multiplesOfThreeOrFive = () => {
//     for(i = 3; i <= 100; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//             console.log(i)
//         }
//     }
// }

// multiplesOfThreeOrFive()

// Question 4 - Mei 
// const untilNum = (numbers) => {
//     for(i = 1; i <= numbers; i++) {
//         console.log(i); 
//     }
// }

// untilNum(5);

// //Question 5 - Madison

// const multiply = (num1,num2) => {
//     console.log(num1*num2)
// }

// multiply(2,4)

// // Question 6 - Mei 
// const add = (num3, num4) => {
//     if (num3 === num4) {
//         return ((num3 + num4) * 3);
//     } else {
//         return num3 + num4;
//     }
// }

// console.log(add(6,6))

// //Question 7 - Madison

// const isNegative = (num) => {
//     num < 0 ? console.log(true):console.log(false)
// }

// isNegative(6)

// Question 8 - Mei 
// const triangleArea = (height, base) => {
//     return ((height * base) * 1/2);
// }
// console.log(triangleArea(6,8))

// //Question 9 - Madison

// const betweenTwentyAndForty = (num) => {
//     num > 20 && num < 40 ? console.log(true): console.log(false)
// }

// betweenTwentyAndForty(90)

// Question 10 - Mei 
const largest = (num5, num6, num7) => {
    if (num5 > num6 && num5 > num7) {
        return num5;
    } else if (num6 > num5 && num6 > num7) {
        return num6;
    } else {
        return num7;
    }
}
console.log(largest(4, 6, 8))


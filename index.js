//1
function fiveToOneHundred(){
  for(let i = 5; i <= 100; i++){
    console.log(i);  
  }
}

//fiveToOneHundred();


//2
function multiplesOfThree(){
  for(let i = 0; i <= 100; i++){
    if(i % 3 ==0){
        console.log(i);
    }
 }
}
//multiplesOfThree()


//3
function multiplesOfThreeOrFive(){
  for(let i = 0; i <= 100; i++){
    if(i % 3 ==0 || i % 5 ==0){
        console.log(i);
    }
 }
}
//multiplesOfThreeOrFive()


//4
function untilNum(number){
  for(let i = 1; i <= number; i++){
    console.log(i);  
  }
}
//untilNum(8);

//5
function multiply(num1, num2){
 return num1 * num2;
}
//console.log(multiply(5, 7))


//6a
function add(num1, num2){
 if (num1 == num2){
   return(num1 + num2) * 3;
 }else  
   return num1 + num2;  
}
//console.log(add(5, 5))
//6b
function add(num1, num2){
 if (num1 != num2){
     return num1 + num2;
 }else   
   return (num1 + num2) * 3 ;  
}
//console.log(add(5, 8))


//7
function isNegative(num){
  if (num < 0){
    return 'true';
  }else 
    return 'false';
}
//7B
function isNegative(num){
  if (num > 0){
    return 'false';
  }else 
    return 'true';
}


//console.log(isNegative(7))

//8
function triangleArea(base, hgt){
 return (base * hgt) / 2;
}

//console.log(triangleArea(3, 5))

//9
function betweenTwentyAndFourty(num){
    if(num > 20 && num < 100){
        return true;
    }else
     return false;
}
//console.log(betweenTwentyAndFourty(66))


//Code your solutions in this file
function fiveToOneHundred(){
    for ( var i = 5; i <= 100; i++){
        console.log(i)
    }
};

function multiplesOfThreeOrFive(){
    for(var i = 0; i <= 100; i++){
    if(i % 3 == 0 || i % 5 == 0){
    console.log(i)
    }   
    }
};

function multiplesOfThree(){
    for(var i = 0; i <= 100; i++)
    if(i % 3 == 0){
    console.log(i)
    }
};

function untilNum(num){
    for (var i = 1; i<= num; i++){
        console.log(i)
    }
    
};

function mulitply(num1,num2){
    const mul = num1 * num2
        return mul
    }
;

function isNegative(num){
   if (num  < 0) {
      return true
   } else {
      return false }
}



function triangleArea(b,h){
    const ar = b * h;
    const area = ar / 2;
    return area
    
};
console.log(triangleArea(10,60))

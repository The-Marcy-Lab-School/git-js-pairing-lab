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

//10
function largest(num1, num2, num3){
    return Math.max(num1, num2, num3);
}

//console.log(largest(7, 3, 4));

//11 *
function printTime(){
    var currentTime = new Date();
    var time = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
    return time;
}
//console.log(printTime());

//12
function isLeapYear(year){
    if(year % 4 == 0 && year % 400 == 0){
        return true;
    }else
        return false;
}
//console.log(isLeapYear(1900));

//13
function getExtension(fileName) {
    return fileName.split('.').pop();
}
//console.log(getExtension("hello.txt"));

//14
function absoluteNineteen(num1){
    let absdiff = Math.abs(num1-19);
    if(absdiff>19){
        return absdiff * 3;
    }else 
        return absdiff;
}

//console.log(absoluteNineteen(1));

//15
function switchLetters(str){
    if( str.length > 1){
     let firstChar = str[0];
     let lastChar = str[str.length-1];
     let middle = str.substring(1, str.length-1);
     console.log(lastChar + middle + firstChar );
    }else
        console.log(str);
}

//switchLetters("an");

//16
function changeString (str){
    let newStr = '';
    for(let i=0; i <str.length;i++  ){
       let charcode = (str.charCodeAt(i))+1;
       let newLetter = String.fromCharCode(charcode);
       newStr = newStr + newLetter;
    }
    console.log(newStr);
}
changeString('abc');
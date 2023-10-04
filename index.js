//Code your solutions in this file

/*const fiveToOneHundred = () => {
for (i =5; i <= 100; i++) {
    console.log(i)
}
}
(fiveToOneHundred());
*/
/*
//Problem 2
const multiplesOfThree = () =>{
    for (let i = 0; i <= 100; i+=3)
    {
     console.log(i);
    }
}
multiplesOfThree();
*/
const multipleOfThreeOrFive = (num) => {
    for (let i =0; i <= 100; i++  )
    
    if(i % 3 === 0 || i % 5 === 0 ) {
        console.log(i);
    }
}
multipleOfThreeOrFive(100)

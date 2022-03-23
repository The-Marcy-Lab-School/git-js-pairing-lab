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
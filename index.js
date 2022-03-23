//Code your solutions in this file

function fiveToOneHundred(){
    
    console.log("--q1---")
    for (let i =5; i <= 100; i++){ // i will increase tpo 100
        console.log(i); // this will log the results 
    }
    
};
 fiveToOneHundred()

function multiplesOfThree() {
    console.log("Q2 ---") 
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
    
}
multiplesOfThree() 

function multiplesOfThreeAndFive(){ 
    console.log("Q3 ---") 
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i)
        }
    }
    
}
multiplesOfThreeAndFive()

 

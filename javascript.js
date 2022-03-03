function fizzbuzz(){
    let userNum = parseInt(prompt("Enter number to count to."));
    let i = 1;
    for (i = 1; i <= userNum; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FIZZBUZZ");
        }
        else if (i % 3 == 0){
            console.log("FIZZ");
        }
        else if(i % 5 === 0){
            console.log("BUZZ");
        }
        else {
            console.log(i);
        }
    }
}

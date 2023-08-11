
let ansNumber = "";
let isEmpty;
let isNan;
let outOfRange;
let n = 0;

do {
    ansNumber = prompt("Enter your magic number") || "";

    isEmpty = ansNumber.trim() === "";
    isNan = isNaN(ansNumber);   
    outOfRange = +ansNumber < 1 || +ansNumber > 99;
    if(isEmpty || isNan) {
        alert("Invalid Input");
    }else if(outOfRange) {
        alert("Invalid Range");
    }
} while (outOfRange || isEmpty || isNan);


let guessNumber;

do {
    if(n === 5) break;

    guessNumber = prompt("Enter your answer") || "";
    isEmpty = guessNumber.trim() === "";
    isNan = isNaN(guessNumber);   
 outOfRange = +guessNumber < 1 || +guessNumber > 99;

    if(isEmpty || isNan) {
        alert("Invalid Input");
    }else if(outOfRange) {
        alert("Invalid Range");
    }else if(+guessNumber > ansNumber){
        alert("Too High");
    }else if(+guessNumber < ansNumber){
        alert("Too Low");
    }

    n++
} while (+guessNumber != +ansNumber) {
    (n === 5)? alert("Fail!!") :  alert("Correct!!");
}
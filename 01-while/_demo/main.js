
// let i = 1;

// while (i <= 20) {
// // loop block
//     if(i % 5 == 0){
//         console.log(`${i} : HighFive`);
//     }else if(i % 3 == 0) {
//         console.log(i);
//     };

//     i++;
// };

// FizzBuzz
// Range : 1-20;
// divided by 3 : PRINT Fizz
// divided by 5 : PRINT Buzz
// divided by 3 and 5 : PRINT FizzBuzz
// others : PRINT number

let i = 1;

while(i <= 20) {
    (i % 3 === 0 && i % 5 === 0) ? console.log("FizzBuzz"):
    (i % 3 === 0) ? console.log("Fizz"):
    (i % 5 === 0) ? console.log("Buzz"):
    console.log(i);
    i++;
};
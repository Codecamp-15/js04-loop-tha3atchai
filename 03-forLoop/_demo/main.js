console.log("learn couting loop");

console.log("starting...");
// () = parnethesis; = วงเล็บ;
// {} = bracket; = ปีกกา;
// [] = squeare bracket; = ก้ามปู;

// for(let i = 2 ; i <= 20; i+=2) {
//     console.log(i);
// };

// for(let i = 1; i <= 20; i += 1) {
//     if(i % 3 === 0 && i % 5 === 0) console.log(`${i}: FizzBuzz`);
//     else if(i % 3 === 0) continue;
//     else if(i % 5 === 0) console.log(`${i}: Buzz`);
//     else console.log(i);
// }

// for(let i = 1; i <= 20; i += 1) {
//     if(i % 2 === 0) console.log(i);
//     else continue; // update ค่า และเริ่มรัน loop รอบถัดไป
//     console.log("even");
// };

// let str = "";

// for(let i = 1; i <= 10; i++) {
//     // Guard
//     if(i % 3 === 0) continue;
//     str += i;
// };
// console.log(str);

// let src = "codecamp";
// let res = ""; // cdcmp;

// src.length ==> 8
// src[0] ==> c
// src[1] ==> o

// for(let i = 0; i < src.length; i++) {
//     // console.log(i, src[i]);
//     let c = src[i];
//     //** */ let isVowel = c === "a" || c === "e" || c === "i" || c === "o" || c === "u";
//     //** */ if (isVowel) continue;
//     //** */ else res = res + src[i];
//     if(c === "a" || c === "e" || c === "i" || c === "o" || c === "u") continue;
//     res += c;
// };

// console.log(res);

for(let i = 1; i <= 12; i++){
    console.log(`เริ่มท่องแม่สูตรคูณ แม่ ${i}`);
    for(let j = 1; j <= 12; j++) console.log(`${i} * ${j} = ${i*j}`);
  console.log("\n");
}

console.log("end...");



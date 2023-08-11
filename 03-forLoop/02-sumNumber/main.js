// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let sum5 = 0;

for(let i = 1; i <= 100; i++) {
   sum1 += i;
    if(i % 2 === 0){
        sum2 += i;
    }else {
        sum3 += i;
    }
    if(i % 2 ===0){
        sum4 += i*i;
    }
    if(i % 3 ===0){
        sum5 += i*i;
    }
};


console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(sum5);
console.log(sum4 - sum5);



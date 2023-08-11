// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

// ```js

// let number; 
// let sum = 0;

// do {
//     number = prompt("Enter your number: ") || "";
//     if(number.trim() === "" || isNaN(number) || number < 1 || number === 0){
//         break;
//     }

//     sum += +number;
// } while (1) {
//     console.log(sum);
// };

let number = "";
let sum = 0;
let isNan;
let isEmpty;

do {
    number = prompt("Enter your number: ") || "";
    isNan = isNaN(number);
    isEmpty = number.trim() === "";
    sum += +number;
} while (!(isNan || isEmpty || number === 0 || number < 1)) console.log(`sum = ${sum}`);
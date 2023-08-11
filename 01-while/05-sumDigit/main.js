// ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นผลรวมของเลขแต่ละหลัก

// <!-- 4596 === 4+5+9+6 -->

let n = +prompt("Enter your number: ");
let sum = 0;

while(n) {
    let remainder = n % 10;
    n = (n - remainder) / 10;
    sum += remainder;
};

console.log(sum);
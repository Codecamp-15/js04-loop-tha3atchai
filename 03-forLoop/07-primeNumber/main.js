
// 17/1;
// 17 % 17 === 0;
// มีแค่ตัวมันเอง และ 1 เท่านั้น ที่หารลงตัว;
// ต้องไม่เข้าเงื่อนไข จนไปถึง ค่าที่เป็นตัวมันเอง จะไม่ toggle prime => false;

for(let i = 2; i <= 100; i++){
    let prime = true;
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            prime = false; 
            break;
        }
    }
    prime? console.log(`${i} is prime number`) : console.log(`${i} is not prime number`); 
}



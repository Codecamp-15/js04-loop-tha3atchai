// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย

// Program V.1

// let ansNumber = prompt("Enter your magic number");

// ansNumber === null || ansNumber.trim() === "" || isNaN(ansNumber)

// let isNull = ansNumber === null;
// let isEmpty = ansNumber.trim() === "";
// let isNaN = isNaN(ansNumber);
// let isValid = ansNumber == null || ansNumber.trim() === "" || isNaN(ansNumber);
// let outOfRange = +ansNumber < 1 || +ansNumber > 99; 
// let isInRange = +ansNumber >= 1 && +ansNumber <= 99;

// if(isValid) {
    //     alert("Invalid Input");
    // } else if (outOfRange) {
        //     alert("Invalid Range");
        // } else if (isInRange) {
            //     alert("Try to guess number");
            // };
            
// Program V.2 : รับ Input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้กด ESC เพื่อจบโปรแกรมได้;

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

// Program 2 : Guess
// --ทายซ้ำ
// --Hint OutOfRange
// --Hint Invalid Range
// --Hint Too High, Too Low
// --Alert Correct

let guessNumber;

do {
    if(n === 5){
        break;
    }
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
         


    



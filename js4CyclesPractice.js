//1. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

//	John 80

//	Bill 77

//	David 68

//	Ryan 88

//	Nick 95



//	<60 F

//	<70 D

//	<80 C

//	<90 B

//	<100 A


// const USERSMARK = [{
//         name: 'John',
//         points: 80
//     },
//     {
//         name: 'Bill',
//         points: 77
//     },
//     {
//         name: 'David',
//         points: 68
//     },
//     {
//         name: 'Ryan',
//         points: 88
//     },
//     {
//         name: 'Nick',
//         points: 95
//     },
// ];

// let avPoint = 0; // average mark;

// for (let i = 0; i < USERSMARK.length; i++) {
//     avPoint += USERSMARK[i].points; // sum of all points;
//     console.log(avPoint, "avPoint in cycle")
// };

// avPoint /= USERSMARK.length; // avPoint (C - 81.6)

// console.log(avPoint, "avPoint");


// let gradeA = 100;
// let gradeB;
// let gradeC = 81.6;
// let gradeD;
// let gradeF = 60;

// gradeC = Math.round(gradeC); //82
// gradeB = Math.round((gradeA + gradeC) / 2); // 91
// gradeD = Math.round((gradeF + gradeC) / 2); // 71

// console.log(gradeC, "gradeC");
// console.log(gradeB, "gradeB");
// console.log(gradeD, "gradeD");

// let studGrade;
// let studName;
// for (let i = 0; i < USERSMARK.length; i++) {
//     studName = USERSMARK[i].name; // searching names;
//     studGrade = USERSMARK[i].points; // searching points;

//     switch (true) {
//         case studGrade <= gradeF:
//             console.log(`${studName}, your grade: F`);
//             break;
//         case studGrade <= gradeD:
//             console.log(`${studName}, your grade: D`);
//             break;
//         case studGrade <= gradeC:
//             console.log(`${studName}, your grade: C`);
//             break;
//         case studGrade <= gradeB:
//             console.log(`${studName}, your grade: B`);
//             break;
//         case studGrade <= gradeA:
//             console.log(`${studName}, your grade: A`);
//             break;
//     }
// };

// John, your grade: C
// Bill, your grade: C
// David, your grade: D
// Ryan, your grade: B
// Nick, your grade: A




// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.

// let i = 0;
// let sum = 0;

// while (i < 100) {

//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//         console.log(sum, "sum in cycle");
//     }
//     ++i;
// };
// console.log(sum, "sum out of cycle");





//	3. Write a JavaScript program to construct the following pattern, using a nested for loop.

// *

// * *

// * * *

// * * * *

// * * * * *


let result = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        result += '* ';
    }
    result += `\n \n`;

};
console.log(result)
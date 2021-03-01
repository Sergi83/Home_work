// 1. Напишіть функцію, що повертає куб числа.

// let cube = a => a ** 3;
// a = 3;
// console.log(cube(a));



// 	2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

// let sumDivide = (a, b, div) => { return (a + b) / div };

// console.log(sumDivide(8, 8, 2));


// 	3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).


// function dayWeek(num) {
//     num = +prompt("Введіть число від 1 до 7, щоб побачити відповідний день тижня")
//     switch (num) {
//         case 1:
//             console.log(`${num} - "Понеділок"`);
//             break;
//         case 2:
//             console.log(`${num} - "Вівторок"`);

//             break;
//         case 3:
//             console.log(`${num} - "Середа"`);

//             break;
//         case 4:
//             console.log(`${num} - "Четвер"`);

//             break;
//         case 5:
//             console.log(`${num} - "П'ятниця"`);

//             break;
//         case 6:
//             console.log(`${num} - "Субота"`);

//             break;
//         case 7:
//             console.log(`${num} - "Неділя"`);

//             break;
//         default:
//             console.log(`${num} - "Немає такого дня."`);

//             break;
//     }
// };

// let num;

// dayWeek(num);



// 	4. Реалізуйте функцію знаходження факторіала


// let num = +prompt(`Write some positive integer number and you'll see factorial of the number.`);
// let i = 0;
// let j = 0;
// let k = 0;
// let n = 1;

// let intNum = Number.isInteger(num);

// // check the number if we can use it for factorial calculation  (integer, >= 0)

// function checkNumber() {

//     if (num >= 0 && intNum == true) {
//         i = num;
//     } else { false };
//     return i;

// };
// console.log(num, "num in checkNumber");
// console.log(i, "i in checkNumber");
// console.log(intNum, "check if integer Number");


// let factArr = [1];
// let result = factArr[k];

// function factorNum(checkNumber, result, cancel) {

//     for (i; i > 0; i--) {

//         if (i >= 2) {
//             factArr[j] = i;
//         };
//         if (i < 2) {
//             factArr[j] = 1;
//         };

//         console.log(i, "i in cycle factorNum");
//         console.log(j, "j in cycle factorNum");
//         ++j;
//     };


//     console.log(factArr, " factArr");

//     for (k = factArr.length; k >= 0; k--) {
//         if (factArr[k] > 0) {
//             result *= factArr[k];
//             console.log(result, "result");
//         };
//     };
//     console.log(i, "i");
//     console.log(num, "num");
//     console.log(result, "result");
//     if (result == undefined || result == NaN) {
//         cancel = alert("False")
//     };
// };

// function showFactorial() {
//     alert(`factorial of ${num} = ${result}`)
// };

// function showCancel() {
//     alert(`${num} is less than 0 or not an integer number!`);
// };


// factorNum(checkNumber, showFactorial, showCancel);


// console.log(i, "i");
// console.log(num, "num");
// result = i * n;
// console.log(result, "result");
// if (result == undefined || result == NaN) {
//     cancel = alert("False")
// };



// 	5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

let timeCalcStart = true;

let hS;
let mS;
let resultS = 0;

do {

    timeCalcStart = confirm("Розрахунок часу в секундах. Почати?");

    if (timeCalcStart === true) {
        let h = +prompt('Введіть час, години(гг): ', "години"); // hours
        let m = +prompt('Введіть час, хвилини(хх): ', "хвилини"); // minutes
        let s = +prompt('Введіть час, секунди(сс): ', "секунди"); // seconds


        switch (true) {
            case (h < 24 && h >= 0):
                hS = h * 60 * 60;
            case (m < 60 && m >= 0):
                mS = m * 60;
            case (s < 60 && s >= 0):
                resultS = hS + mS + s;
                alert(`Ваш час (гг:хх:сс) - ${h} : ${m} : ${s} = ${resultS} секунд.`);
                break;
            default:
                alert('Невірні данні!');
                break;
        };
    };
} while (timeCalcStart === true);


// 	6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 

let timeCalcStart = true;

let hS;
let mS;
let resultS = 0;

do {

    timeCalcStart = confirm("Перерахунок часу з секунд у формат «гг:хх:сс». Почати?");

    if (timeCalcStart === true) {
        let timeS = +prompt("Введіть час в секундах (не більше одного дня). Результат показується у форматі «гг:хх:сс».");

        let h = timeS / 86400;
        let m;
        let s;


        switch (true) {
            case (h < 24 && h >= 0):
                hS = h * 60 * 60;
            case (m < 60 && m >= 0):
                mS = m * 60;
            case (s < 60 && s >= 0):
                resultS = hS + mS + s;
                alert(`Ваш час (гг:хх:сс) - ${h} : ${m} : ${s} = ${resultS} секунд.`);
                break;
            default:
                alert('Невірні данні!');
                break;
        };
    };
} while (timeCalcStart === true);





// 	7. 4 відмінності ерров фанкшина від звичайної функції.
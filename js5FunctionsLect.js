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


// let findFactor = (number) => {
//     let factor = 1;

//     while (number > 1) {
//         factor *= number;
//         number -= 1;
//     }
//     return factor;
// };
// console.log(findFactor(4), "function that search factorial of number (4)");



// 	5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

// let timeCalcStart = true;

// let hS;
// let mS;
// let resultS = 0;

// do {

//     timeCalcStart = confirm("Розрахунок часу в секундах. Почати?");

//     if (timeCalcStart === true) {
//         let h = +prompt('Введіть час, години(гг): ', "години"); // hours
//         let m = +prompt('Введіть час, хвилини(хх): ', "хвилини"); // minutes
//         let s = +prompt('Введіть час, секунди(сс): ', "секунди"); // seconds


//         switch (true) {
//             case (h < 24 && h >= 0):
//                 hS = h * 60 * 60;
//             case (m < 60 && m >= 0):
//                 mS = m * 60;
//             case (s < 60 && s >= 0):
//                 resultS = hS + mS + s;
//                 alert(`Ваш час (гг:хх:сс) - ${h} : ${m} : ${s} = ${resultS} секунд.`);
//                 break;
//             default:
//                 alert('Невірні данні!');
//                 break;
//         };
//     };
// } while (timeCalcStart === true);


// 	6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 



// const get24hoursFormat = (sec) => {
//     const hours = Math.floor(sec / 3600); // take hours from seconds (3600 seconds -> 1 hour);
//     const minutes = Math.floor(sec / 60) - hours * 60; // how much time left for minutes;
//     const seconds = sec % 60; // how much - left for seconds;


//     const timeInString = [
//         hours.toString().padStart(2, "0"),
//         minutes.toString().padStart(2, "0"),
//         seconds.toString().padStart(2, "0"),
//     ].join(":"); // get string from calculated time (from seconds to hh:mm:ss), make to signs format adding 0 if needed;


//     const dayHoursLimit = 24 * 3600;

//     return sec < dayHoursLimit ? timeInString : "Більше одного дня";
// };

// console.log("Current time: ", get24hoursFormat(25435));




// 	7. 4 відмінності ерров фанкшина від звичайної функції.

// 1) запис коротше

// 2) можна записувати без return та {}

// 4) не мають свого власного this, arguments, super, і new.target

// 5) не може використовуватися як конструктор

// 6) завжди анонімні
// 1. Виведіть парні числа від 2 до 20

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0 && i != 0) {
//         console.log(i);
//     }
// };

// 2. Запитуйте у користувача з допомогою prompt число, доки він не введе число більше 100.

// let num

// do {
//     num = +prompt('Give us some number that more than 100', '0');
//     console.log(num);
// } while (num < 100)


// 3. Виведіть числа Фібоначчі менші за 100

// const MAXLOOP = 50;

// let x = 0;
// let y = 1;
// let buf = 0; //буфер - буде нашими числами фібоначі!

// for (let i = 0; i < MAXLOOP; i++) {

//     buf = x + y;
//     x = y;
//     y = buf;

//     if (buf > 100) {
//         break
//     } else {

//         console.log(buf);
//     }
// };


// 1.  Знайдіть суму всіх цифр від 1 до 100.

// let arr = [];
// let ind = 0;

// for (let i = 1; i < 101; ++i) {
//     arr[ind] = i;
//     ind += 1;

// };

// console.log(arr);

// let total = 0;

// for (let i = 0; i < arr.length; ++i) {
//     total += arr[i];
//     console.log(+total)

// };

// console.log("Total values=" + total);


// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

// let srcArr = [1, 2, 3, 4, 5];
// let screen;

// for (let i = 0; i < srcArr.length; i++) {
//     screen = srcArr[i];
//     console.log(screen);
// };


// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

// let ARR = [-1, 22, 3, 44, 5];
// // const ARR = [77, -1, 44, 3, 22, 55];


// let maxNum = ARR[0];
// for (let i = 0; i < ARR.length; i++) {
//     ARR[i] > maxNum ? (maxNum = ARR[i]) : maxNum;
// }

// console.log(maxNum, 'result');

// console.log(Math.max(...ARR), 'check max number');

// console.log(ARR, 'array');


// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, від'ємних та нулів. Вивести статистику на екран. Також достатньо тільки 1 змінної для отримання даних від юзера. 


// let num;
// let lessZero = 0;
// let moreZero = 0;
// let equalZero = 0;

// let i = 0;

// for (i; i < 8; i++) {
//     num = +prompt("Write a number.");

//     switch (true) {
//         case (num === 0):
//             equalZero += 1;
//             console.log(num, `= 0: how mych matches ${equalZero} `);
//             break;
//         case (num > 0):
//             moreZero++;
//             console.log(num, `> 0: how mych matches ${moreZero}`);
//             break;
//         case (num < 0):
//             lessZero++;
//             console.log(num, `< 0: how mych matches ${lessZero}`);
//             break;
//         default:
//             console.log(num, 'default');
//             break;

//     }

// }

// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

// let tab;
// let count;


// for (let i = 1; i <= 9; i++) {
//     count = +i;
//     tab = count * 8;

//     // console.log(count);

//     // console.log(tab);

//     console.log(`${count} * 8 = ${tab}`);

// }

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

// let srcArr = [2, 5, 9, 15, 0, 4];
// let screen;

// for (let i = 0; i < srcArr.length; i++) {
//     screen = srcArr[i];
//     // console.log(screen);

//     if (+screen > 3 && +screen < 10) {
//         console.log(screen);
//     } else {
//         continue;
//     }
// };

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?


// let num1;
// let num2;
// let result;
// let sign;
// let arr = [];
// let calcStart;


// console.log(num1, 'n1 - before loop');
// console.log(num2, 'n2');
// console.log(result, 'res')
// console.log(arr, 'arr');

// do {
//     calcStart = confirm("Let's activate calculator!");

//     if (calcStart == true) {


//         num1 = prompt('Give us some integer numbers', '0');
//         num2 = prompt('Give us some integer numbers', '0');

//         sign = prompt('Give us a sign: +, -, * or /)');

//         arr[0] = num1;
//         arr[1] = num2;
//         arr[2] = sign;


//         switch (true) {
//             case (sign == "+"):
//                 num1 = +num1;
//                 num2 = +num2;
//                 result = num1 + num2;
//                 console.log(result);
//                 alert(`Your result: ${num1} + ${num2} = ${result}`);
//                 break;
//             case (sign == "-"):
//                 num1 = +num1;
//                 result = num1 - num2;
//                 console.log(result);
//                 alert(`Your result: ${num1} - ${num2} = ${result}`);
//                 break;
//             case (sign == "*"):

//                 num1 = +num1;
//                 num2 = +num2;
//                 result = num1 * num2;
//                 console.log(result);
//                 alert(`Your result: ${num1} * ${num2} = ${result}`);
//                 break;

//             case (sign === "/"):
//             case (num2 !== 0 && sign === "/" && num1 != NaN && num2 != NaN):
//                 num1 = +num1;
//                 num2 = +num2;
//                 result = num1 / num2;
//                 console.log(result);
//                 alert(`Your result: ${num1} / ${num2} = ${result}`);
//                 break;
//             case (num2 === 0):
//                 alert('In mathematics it is a rule that we cannot divide by zero!');
//                 break;
//             default:
//                 alert('Wrong number or sign!')
//                 break;
//                 // default:
//                 //     console.log(`Some result ${result}`);
//                 //     break;
//         }

//         console.log(num1, 'n1 - after switch');
//         console.log(num2, 'n2');
//         console.log(sign, 'sign')
//         console.log(arr, 'array');
//         console.log(result, 'res');
//     } else {
//         break;
//     }

// } while (calcStart === true);

// console.log(num1, 'n1 - after while');
// console.log(num2, 'n2');
// console.log(sign, 'sign')
// console.log(arr, 'array');
// console.log(result, 'res');

// console.log(calcStart, 'calcStart');
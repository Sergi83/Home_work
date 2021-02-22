// 1. Додати 2 скрипта на сторінку (напряму в тегу script та підключіть джс фаїл) , у кожному з скриптів виведіть алерт з хеллов ворлд текстом.
// 2. Додати 2 повідомлення “Я люблю фронтенд” та “Я люблю JS”.
let message2 = "hello world! ";

// alert(message2)
let JSmessage = "Я люблю JS";
alert(message2 + JSmessage);

// 3. Оголошуємо змінні: admin и name. Запишіть в name Ваше імя.В admin запишіть – undefined. Переприсвойте name в admin. Введіть admin . Що буде?
let admin = undefined;
let name = "Sergiy";

let name = admin;
console.log(admin); //error


// 4. Запитати в юзера його імя, додати до імені – “Батькович” та вивести його на екран

let userName = prompt("What is your name? ");
alert(`Hi ${userName} Батькович`);

// 5. Undefined, e is not defined. Спробуємо вивести оголошену але не присвоєну змінну.

let e;
alert(e)
console.log(e)




// 6. Запитайте у юзера скільки йому років: «Привіт мені - “” років!».
let userAge = +prompt("Скільки вам років?");
alert(`Привіт мені ${userAge} років!`);

console.log(userAge);


// 7. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу.

let userBirthDate = +prompt('Який ваш рік народження?');

const CURRENT_YEAR = 2021;
if (userBirthDate != NaN && userBirthDate != null && userBirthDate != undefined && userBirthDate >= 2021) {
    alert(false);
} else {
    alert(CURRENT_YEAR - userBirthDate);
}

// Виведемо скільки йому років.
console.log(userBirthDate, CURRENT_YEAR, CURRENT_YEAR - userBirthDate)



// 8. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.

let firstSide = +prompt("Напишіть довжину сторони довільного прямокутника: ");

let secondSide = +prompt("Напишіть довжину іншої сторони довільного прямокутника: ");

let perimeter = (firstSide + secondSide) * 2;
if (perimeter <= 0) {
    let negativeNumber = perimeter;
} else if (firstSide && secondSide != NaN && firstSide && secondSide != null && firstSide && secondSide != negativeNumber && firstSide && secondSide != undefined) {
    alert(perimeter);
} else {
    alert(`Не вірні дані`);

};

console.log(firstSide, "firstSide")
console.log(secondSide, "secondSide");

// 9. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі)

let circleRadius = +prompt("Напишіть довжину радіуса довільного кола: ");

if (circleRadius == NaN) {
    alert('Не вірні дані', `$(circleRadius)`);
} else if (circleRadius <= 0) {
    alert(`Не вірні дані $(circleRadius)`);
} else {
    let circleArea = Math.PI * circleRadius ** 2;
    alert(`Площа кола ${circleArea}`);
};
console.log(circleArea)
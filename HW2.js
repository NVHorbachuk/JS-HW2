//1
// let x = 1;
// let y = 2;

// let res1 = x + "" + y; число (1) до рядка (""), тому він неявно перетворює число на рядок.
// console.log(res1); // "12"
// console.log(typeof res1); // "string"


//2 
//let x = 1;
// let y = 2;
// let res2 = (x === 1) + "" + y; Плюс "" призводить булеве значення до рядка
// console.log(res2);  // "true2"
// console.log(typeof res2);  // "string"

//3
// let x = 1;
// let y = 2;
// let res3 = (x === 1) && (y === 2); Логічний оператор AND (&&) 
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// 4 
// let x = 1;
// let y = "a";
// let res4 = x / y; // Неможливо поділити число на рядок
// console.log(res4); 
// console.log(typeof res4); 


//Task 2.
// Запит числа у користувача
// let number = prompt("Введіть число:");

// // Перетворюємо введене значення у число
// number = Number(number);
// Перевірка чи введене значення є числом
// if (!isNaN(number)) {
//     // Перевірка чи число є парним і додатним
//     if (number > 0 && number % 2 === 0) {
//         console.log("Число є парним і додатним.");
//     } else {
//         console.log("Число не є одночасно парним і додатним.");
//     }

//     // Перевірка чи число кратне 7
//     if (number % 7 === 0) {
//         console.log("Число кратне 7.");
//     } else {
//         console.log("Число не кратне 7.");
//     }
// } else {
//     console.log("Ви ввели некоректне число.");
// }


// Task 3. Створіть порожній масив;

// 1. Створюємо порожній масив
// let arr = [];

// // 2. У перший елемент масиву записуємо будь-яке число
// arr[0] = 27;

// // 3. У другий елемент масиву записуємо будь-який рядок
// arr[1] = "Hello, my friend!";

// // 4. У третій елемент масиву записуємо будь-яке логічне значення
// arr[2] = true;

// // 5. У четвертий елемент масиву записуємо значення null
// arr[3] = null;

// // 6. Виводимо на екран число елементів масиву
// console.log("Число елементів у масиві:", arr.length);

// // 7. Запитуємо у користувача ввести будь-яке значення для п'ятого елементу масиву
// let userInput = prompt("Введіть будь-яке значення:");
// arr[4] = userInput;

// // 8. Виводимо п'ятий елемент масиву
// console.log("П'ятий елемент масиву:", arr[4]);

// // 9. Видаляємо 1-ий елемент масиву (масив індексується з 0)
// arr.shift(); // shift() видаляє перший елемент

// // 10. Виводимо масив після видалення першого елемента
// console.log("Масив після видалення 1-го елемента:", arr);

//Task 4
// Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
// Початковий масив
// let cities = ["Rome", "Lviv", "Warsaw", "New York"];
// let result = cities.join("*");

// // Результат
// console.log(result);

//Task 5. Використовуючи функцію prompt()
// function isAdult(age) {
//     return age >= 18;
// }

// let age = prompt("Введіть ваш вік:");
// if (isAdult(Number(age))) {
//     console.log("Ви є повнолітнім.");
// } else {
//     console.log("Ви неповнолітній.");
// }


// Task 6
// let a = parseFloat(prompt("Введіть сторону a:"));
// let b = parseFloat(prompt("Введіть сторону b:"));
// let c = parseFloat(prompt("Введіть сторону c:"));

// function isValidTriangle(a, b, c) {
//     return (
//         !isNaN(a) && !isNaN(b) && !isNaN(c) &&
//         a > 0 && b > 0 && c > 0 &&
//         a + b > c && a + c > b && b + c > a
//     );
// }

// if (isValidTriangle(a, b, c)) {
//     let cosC = (a ** 2 + b ** 2 - c ** 2) / (2 * a * b);
//     let sinC = Math.sqrt(1 - cosC ** 2);

//     let area = 0.5 * a * b * sinC;
//     console.log("Площа трикутника (через sin):", area.toFixed(3));

//     // Перевірка 
//     let sides = [a, b, c].sort((x, y) => x - y);
//     let isRight = Math.abs(sides[0] ** 2 + sides[1] ** 2 - sides[2] ** 2) < 1e-10;

//     console.log("Трикутник є прямокутним:", isRight);
// } else {
//     console.log("Incorrect data");
// }

// Task 7
// let currentHour = new Date().getHours(); 

// if (currentHour >= 23 || currentHour < 5) {
//     console.log("Доброї ночі");
// } else if (currentHour >= 5 && currentHour < 11) {
//     console.log("Доброго ранку");
// } else if (currentHour >= 11 && currentHour < 17) {
//     console.log("Доброго дня");
// } else if (currentHour >= 17 && currentHour < 23) {
//     console.log("Доброго вечора");
// }

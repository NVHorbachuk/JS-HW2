//1// let x = 1;
// let y = 2;

// let res1 = x + "" + y; число (1) до рядка (""), тому він неявно перетворює число на рядок. Це називається неявне приведення типів (type coercion).
// console.log(res1); // "12"
// console.log(typeof res1); // "string"


//2 //let x = 1;
// let y = 2;
// let res2 = (x === 1) + "" + y; Плюс "" призводить булеве значення до рядка
// console.log(res2);  // "true2"
// console.log(typeof res2);  // "string"

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

// Запит числа у користувача
let number = prompt("9:");

// Перетворюємо введене значення у число
number = Number(number);

// Перевірка чи введене значення є числом
if (!isNaN(number)) {
    // Перевірка чи число є парним і додатним
    if (number > 0 && number % 2 === 0) {
        console.log("Число є парним і додатним.");
    } else {
        console.log("Число не є одночасно парним і додатним.");
    }

    // Перевірка чи число кратне 7
    if (number % 7 === 0) {
        console.log("Число кратне 7.");
    } else {
        console.log("Число не кратне 7.");
    }
} else {
    console.log("Ви ввели некоректне число.");
}

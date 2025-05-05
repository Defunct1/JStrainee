// Вправа 1.1
// let x = 1;
// let y = 2;

// let res1 = String(x) + String(y);
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// Вправа 1.2
// let x = 1;
// let y = 2;

// let res2 = Boolean(x) + String(y);
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// Вправа 1.3
// let x = 1;
// let y = 2;

// let res3 = Boolean(x) || Boolean(y);
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// Вправа 1.4
// let x = 1;
// let y = 2;

// let res4 = Number("x + y");
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// Вправа 2
 
// let numCheck = prompt('Введіть своє число: ', ''); //create message window with empty bar 

// if (numCheck === null) { //checking if user cancels input
//     alert('До зустрічі!');
// }
//   else if (isNaN(numCheck)) { //checking if input is not a number
//     console.log('Ви не ввели число');

// } else {
//     numCheck = +numCheck;
//     if (!Number.isInteger(numCheck)) {
//         console.log('Ваше число не є цілим');
//     } else if (numCheck !== 0 && numCheck % 7 === 0) { // Check if number is non-zero and divisible by 7
//         console.log('Ваше число кратне 7');
//     } else if (numCheck > 0 && numCheck % 2 === 0) { // Check if number is positive and even
//         console.log('Ваше число парне і додатне');
//     } else { // Handle all other cases
//         console.log('Ваше число не підходить під жодну з умов');
//     }
// }

//Вправа 3

// let checkingTypes = [ //створюємо масив в змінній 
//     1,
//     'STRING',
//     true,
//     null
// ]
// console.log(checkingTypes); //виводимо масив в консоль
// checkingTypes.push(prompt('Please, text anything in here: ', '')); //виводимо в консоль масив з новим елементом, який вводить користувач через діалогове prompt
// console.log(checkingTypes[4]);
// checkingTypes.shift(); //видаляємо перший елемент масиву
// console.log(checkingTypes)

//Вправа 4

// let cities = ["Rome", "Lviv", "Warsaw"]; 
// console.log((cities[0] + '*' + cities[1] + '*' + cities[2])) //об'єднання через додавання роздільника як рядка і почерговий вивід масиву
// console.log(cities.join('*')) //об'єднання через метод join, який об'єднує всі елементи масиву в один рядок і розділяє їх через роздільник (separator)

//Вправа 5

// let isAdult = prompt('Вам виповнилось 18 років?\nЯкщо виповнилось - введіть - "Так"');

// if (isAdult.toLowerCase() == 'так') { //Приведення isAdult до нижнього регістру і порівняння з "так"
//   alert( 'Ви досягли повнолітнього віку' );

// } else { //якщо не "так" - не дорсягли повнолітнього віку
//   alert( 'Ви ще надто молоді' ); 
// }

//Вправа 6

// let a = +prompt('Введіть першу сторону');
// let b = +prompt('Введіть другу сторону');
// let c = +prompt('Введіть третю сторону');


// if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0) {
//   if (a + b > c && a + c > b && b + c > a) {
//     let p = (a + b + c) / 2;
//     let area = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
//     let roundedArea = Math.round(area * 10000) /10000;
//     let sides = [a, b, c].sort((x, y) => x-y);
//     let isRight = Math.abs(sides[0] ** 2 + sides[1] ** 2 - sides[2] ** 2 ) < 1e-10;
//     alert(
//         `Площа трикутника: ${roundedArea}\n` +
//         (isRight ? "Трикутник прямокутний." : "Трикутник не прямокутний.")
//       );
//     } else {
//     alert("Трикутник з такими сторонами не існує!");
//     }
// } else {
//     alert('Будь ласка, введіть коректні додатні числа для всіх сторін!');
//   }
// Вправа 7
// const now = new Date(); //Отримуємо точне значення дати, годин, хвилин і т.д. та записуємо їх в змінну
// const hours = now.getHours(); //Записуємо в змінну тільки значення годин


// if (hours >= 5 && hours < 11) { //Робимо перевірку через if ранкових годин до 11

// alert('Доброго ранку');

// } else if (hours >= 11 && hours < 17) { //Робимо перевірку через else if обідніх годин до 11

//         alert('Доброго дня');

// } else {

//     const greetings = hours >= 17 && hours < 23 ? 'Доброго вечора' : 'Доброї ночі'; //Робимо перевірку через тернарний оператор вечірніх та нічних годин
//     alert(greetings);

// }

    


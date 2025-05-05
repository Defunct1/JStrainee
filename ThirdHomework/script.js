//Вправа 1
// let numbers = [2, 3, 4, 5];

// let result = 1;

// for (const num of numbers) { //для всіх num в numbers виконується множення і збереження в result
//     result *= num;
// }

// result2 = 1;
// let i = 0;

// while (i < numbers.length) { //проходить (ітерує) цикл по індексам та перемножає елементи і зберігає в результат 2
//     result2 *= numbers[i];
//     i++;
// }
// console.log(result);
// console.log(result2);

//Вправа 2

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


// for (num in numbers) { //для кожного елементу масиву виконується перевірка
//     if (num % 2 !== 0) { //якщо остача не дорівнює 0 - число непарне
//         console.log(num + '- непарне число');
//     } else { //інакше - парне
//         console.log(num + '- парне число');
//     }
// }

// Вправа 3

// function randArray(k) { //оголошую функцію 
//     let someArray = []; //створюю пустий масив
//     for (let i = 0; i < k; i++) { //роблю ітерацій циклом for
//         let num = Math.floor(Math.random() * 500) + 1; //отримую рандомне число до 500, округляю його та зберігаю в num
//         someArray.push(num); //додаю num до масиву 
//     }
//     return someArray;
//     }
// console.log(randArray(15));

// Вправа 4

// function raiseToDegree(a, b) {  //оголошую створення функції з 2 параметрами
//     let result = null;
//     if (Number.isInteger(a) && Number.isInteger(b) && !(a===0 && b===0)) { //перевірка цілих чисел
//         result = a ** b;
//         if (!isFinite(result)) { //якщо більше 9999**9999 - результат надто великий 
//             alert('Результат надто великий!');
//             return null;
//         }
//     } else {
//         alert('Введіть ціле число!');
//         return null;
//     }
//     return result;
// }
// let a = Number(prompt('Введіть основу a'));
// let b = Number(prompt('Введіть степінь b'));

// if (isNaN(a) || isNaN(b)) {
//     alert('Ви ввели не число');
// } else {
//     let result = raiseToDegree(a, b);
//     if (result !== null) {
//         alert(`Ваш результат: ${result}`);
//     }
// }

//Вправа 5

// function findMin() {
//     let min = arguments[0]; //присвоюємо min перший аргумент
//     for (let i = 1; i < arguments.length; i++ ) { //починаємо з першого індексу
//         if (arguments[i] < min) { //якщо поточний аргумент менший за min, виконується if
//             min = arguments[i]; //записуємо нове значення
//         }
//     }
//     return min;
// }

// console.log(findMin(15, 1414, -54. -5214, 7817823));

// Вправа 6

// function findUnique(arr) { //Оголошення ф-ції

//     if (!arr || !Array.isArray(arr)) { //перевірка, чи параметр це масив і не пустий
//         return false;
//     }
//     const checking = new Set(arr); // за допомогою new оператора та конструктора set створює новий масив з видаленими копіями(якщо такі є)
//     return checking.size === arr.length;

// }
// console.log(findUnique([48794,4545,41741,6165]))

// Вправа 7


// function lastElem(arr, quantity = 1) { 

//     if (quantity <= 0 || quantity > arr.length) {
//         return arr.slice(-quantity); //якщо quantity = 1 то повертаємо останній елемент
//     }
//     return quantity === 1 ? arr[arr.length - 1] : arr.slice(-quantity); //якщо quantity > 1, то повертаємо підмасив
  
// }

// console.log(lastElem([5461456,1454,56,,1,5641,4,145], 5));

// Вправа 8

// function firstUpper(str) {
//     if (!str || typeof str != 'string')
//         return str;
//     return str;
//     .split(' ');
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     .join(' ');
// }
// console.log(firstUpper('this is my firstlastCkjnajksSADADAD'));
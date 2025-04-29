
//Вправа 1

// function calcRectangleArea(width, height) {
    
    
//     if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height)) {
//         throw new TypeError('Параметри мають бути числами'); //видає помилку, якщо параметри не є числами
//     }
//     if (width <=0 || height <= 0) {
//         throw new Error('Ширина та висота повинні бути додатніми числами'); //видає помилку, якщо параметри менше або рівні 0 
//     }

//     return width * height;
// }

// console.log(calcRectangleArea("-145",587))

// Вправа 2

// function checkAge() {

//     try {
    
//         const ageInput = prompt('Введіть свій вік: ');
//         //// Перевірка на порожній ввід або скасування (null)
//         if (ageInput === null || ageInput.trim() === '') {
//             throw new Error('The field is empty! Please enter your age');
//         }

//         const age = Number(ageInput);

//         if (isNaN(age)) {
//             throw new Error('Please enter the number')
//         }
//         //// Перевірка, чи вік менше 14
//         if (age < 14) {
//             throw new Error('You are too young! Access denied.');
//         }
//         //// Якщо все правильно — доступ дозволено
//         alert("You have acces to watching film")
        
//     } catch (error) {
//         //// Виводимо помилку в alert
//         alert(`Error: ${error.message}`)
//     }
// }

// checkAge();
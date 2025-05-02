
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

//вправа 3

// class MonthException {
//     constructor(message) {
//         this.message = message;
//         this.name = 'MonthException';
//     }
// }

// function showMonthName(month) {
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     //перевірка, чи month знаходиться в межах від 1 до 12 і якщо ні - викидає помилку Incorrect month number
//     if(month < 1 || month > 12) {
//         throw new MonthException('Incorrect month number');
//     }
//     //якщо в межах діапазону - повертає назву місяця з масиву - 1 (на 1 менше, бо індекси рахуються з 0)
//     return months[month - 1];

// }
// try {
//     console.log(showMonthName(5));
//     console.log(showMonthName(15));

// } catch (e) {
//     console.log(`${e.name} ${e.message}`);
// }

// вправа 4 

// 
// function showUser(id) {
//     if (id < 0) {
//         throw new Error(`Error: ID must not be negative: ${id}`);
//     }
//     return { id };    
// }

// function showUsers(ids) {
//     let result = [];
//     for (let id of ids) {
        
//         try  {
//             // Зберігаємо результат
//             let user = showUser(id);
//             // Додаємо до масиву User
//             result.push(user);
//         } catch (error) {
//             console.log(error.message);
//         }
        
//     }
//     // Повертаємо результат після всіх ітерацій
//     return result; 
// }
// console.log(showUsers([85,34,123,-12]))
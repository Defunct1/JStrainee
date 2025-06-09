// Вправа 1
// function getPromise(message, delay) {
//     return new Promise ((resolve) => {   
//         setTimeout(() => resolve (message), delay);
//     });
// }

// getPromise('Test promise', 2000).then(function(data) {
//     console.log(data); // Через 2 секунди виводить "test promise"
// });

// Вправа 2

// function calcArrProduct(arr) {
//     return new Promise((resolve, reject) => {
//         // Перевірка, чи arr є масивом
//         if (!Array.isArray(arr)) {
//             reject(new Error("Error! Incorrect array!"));
//             return;
//         }
        
//         if (arr.length === 0) { // Чи масив порожній
//             reject(new Error("Error! Incorrect array!")); 
//             return;
//         }
        
//         const hasNonNumber = arr.some(item => typeof item !== "number" || isNaN(item)); // Чи всі елементи є числами
//         if (hasNonNumber) {
//             reject(new Error("Error! Incorrect array!"));
//             return;
//         }
        
//         const product = arr.reduce((prod, num) => prod * num); // Обчислення добутку
//         resolve(product);
//     });
// }

// calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
// calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result)).catch(err => console.log(err.message)); // "Error! Incorrect array!"
// calcArrProduct([]).then(result => console.log(result)).catch(err => console.log(err.message)); // "Error! Incorrect array!"
// Вправа 1
// let newWindow = window.open('', '_something', 'width=300,height=300')
// setTimeout(() => {
//     newWindow.resizeTo(500, 500);
// }, 2000)
// setTimeout(() => {
//     newWindow.moveTo(200,200);
// }, 4000)
// setTimeout(() => {
//     newWindow.close();
// }, 6000)

// console.log('Вікно створено');
// setTimeout(() => {
//     console.log('Розмір змінено');
// }, 2000);
// setTimeout(() => {
//     console.log('Вікно переміщено');
// }, 4000);

// вправа 2

// function changeCSS() { // створюємо функцію зміни кольору,розміру шрифту, типу шрифту 
//     let paragraph = document.getElementById("text"); // отримуємо p елемент через DOM 
//     paragraph.style.color = 'orange'; 
//     paragraph.style.fontSize = '20px';
//     paragraph.style.fontFamily = '"Comic Sans MS"';

// }

// let buttonChangeCSS = document.querySelector('button'); // через querySelector обираємо перший елемент <button>
// buttonChangeCSS.addEventListener('click', changeCSS); // додаємо обробник події та виклик функції при натисканні

// Вправа 3

// let makeBlue = document.getElementById('makeBlue');
// makeBlue.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'blue';
// });

// let makePink = document.getElementById('makePink');
// makePink.addEventListener('dblclick', () => {
//     document.body.style.backgroundColor = 'pink';
// });

// let makeBrown = document.getElementById('makeBrown');
// makeBrown.addEventListener('mousedown', () => {
//     document.body.style.backgroundColor = 'brown';
// });

// makeBrown.addEventListener('mouseup', () => {
//     document.body.style.backgroundColor = 'white';
// });

// let makeYellow = document.getElementById('makeYellow');
// makeYellow.addEventListener('mouseover', () => {
//     document.body.style.backgroundColor = 'yellow';
// });

// makeYellow.addEventListener('mouseout', () => {
//     document.body.style.backgroundColor = 'white';
// });

// Вправа 4
// let select = document.getElementById('nameSelect');
// let button = document.getElementById('chooseAndDelete');
// button.addEventListener('click', () => {
//     let index = select.selectedIndex;
//     if (index !== -1){
//         select.remove(index);
//     }
// });

// Вправа 5

// let button = document.getElementById('liveButton');
// let output = document.getElementById('output')
// button.addEventListener('click', () => {
//     output.textContent = 'I was pressed!';
// });
// button.addEventListener('mouseover', () => {
//     output.textContent = 'Mouse on me!';
// });
// button.addEventListener('mouseout', () => {
//     output.textContent = 'Mouse is not on me!';
// });

//Вправа 6


// let output = document.getElementById('output');
// window.addEventListener('resize', () => {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     output.textContent = `width: ${width}px, height: ${height}px`;
// });

// Вправа 7 

// let citiesByCountry = {
//     ger: ['Berlin', 'Munich'],
//     usa: ['New York', 'Washington'],
//     ukr: ['Kyiv', 'Lviv']
// };

// function updateCities() {
//     let country = document.getElementById('country').value;
//     let city = document.getElementById('cities').value || 'Not selected';
//     document.querySelector('p').textContent = `Country: ${country.toUpperCase()}, City: ${city}`;
// };

// // Додаємо цю функцію для ініціалізації при завантаженні
// function initCities() {
//     let country = document.getElementById('country').value;
//     let citySelect = document.getElementById('cities');
    
//     // Очищаємо і заповнюємо список міст
//     citySelect.innerHTML = '';
//     citiesByCountry[country].forEach(city => {
//         let option = document.createElement('option');
//         option.text = city;
//         citySelect.appendChild(option);
//     });
    
//     updateCities();
// }


// document.getElementById('country').addEventListener('change', () => {
//     let country = document.getElementById('country').value;
//     let citySelect = document.getElementById('cities');
    
//     citySelect.innerHTML = '';
//     citiesByCountry[country].forEach(city => {
//         let option = document.createElement('option');
//         option.text = city;
//         citySelect.appendChild(option);
//     });
//     updateCities();
// });

// document.getElementById('cities').addEventListener('change', updateCities);

// // Викликаємо ініціалізацію при завантаженні
// initCities(); 
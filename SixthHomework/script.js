// Вправа 1
// let element = document.getElementById('test');
// console.log(element);
// element.innerHTML = 'Last';
// console.log(element.textContent);

// let selectorQuery = document.querySelector('#test');
// console.log(selectorQuery);
// selectorQuery.textContent = 'Last';
// console.log(selectorQuery.textContent);

// Вправа 2

// let image = document.getElementsByClassName('image')[0];
// image.src = 'cat.jpg';
// alert(image.outerHTML);

// Вправа 3

// let paragraphs = document.querySelectorAll('#text p');
// paragraphs.forEach((paragraph, index) => {
//     console.log(`Selector text ${index}: ${paragraph.textContent}`);
// });

// Вправа 4

// let listElement = document.querySelectorAll('#list li');
// alert(`Результат: ${listElement[0].textContent}, ${listElement[4].textContent}, ${listElement[1].textContent}, ${listElement[3].textContent}, ${listElement[2].textContent}`);
// let listElement = document.getElementById('list').children;
// alert(`Результат: ${listElement[0].textContent}, ${listElement[4].textContent}, ${listElement[1].textContent}, ${listElement[3].textContent}, ${listElement[2].textContent}`);

// Вправа 5

// let header = document.querySelector('h1');
// header.style.backgroundColor = 'springgreen';
// let paragraphs = document.getElementById('myDiv').children;
// paragraphs[0].style.fontWeight = 'bold';
// paragraphs[1].style.color = 'red';
// paragraphs[2].style.textDecoration = 'underline';
// paragraphs[3].style.fontStyle = 'italic';
// const unorderList = document.querySelector('#myList')
// unorderList.style.display = 'flex';
// unorderList.style.listStyle = 'none';
// const spanElement = document.querySelector('span');
// spanElement.style.display = 'none';

// Вправа 6

// let value1 = prompt('Введіть перше значення: ') || ''; //Якщо "скасувати" - повертає пустий рядок
// let value2 = prompt('Введіть друге значення: ') || ''; //Якщо "скасувати" - повертає пустий рядок

// let input1 = document.getElementById('input1');
// input1.value = value1;

// let input2 = document.getElementById('input2');
// input2.value = value2; 
// let tempValue = input1.value; // Зберігаємо значення input1
// input1.value = input2.value; // input1 отримує значення input2
// input2.value = tempValue; // input2 отримує збережене значення input1
// console.log(input1.value, input2.value);

// Вправа 7


let p = document.createElement('p'); // створюю елемент p
p.textContent = 'First paragraph'; // додаю текстове значення в елемент
console.log(p.textContent);

let div = document.createElement('div'); // створюю div
div.id = 'myDiv'; // додаю id
div.appendChild(p); //Додаю як child елемент p
console.log(div.id);



let main = document.createElement('main'); // створюю елемент main
main.className = 'mainClass check item'; // додаю клас для цього елемента
main.appendChild(div); // додаю child елемент div
console.log(main.className);

let body = document.body; //Отримую елемент через DOM
body.appendChild(main); // додаю cild елемент main
console.log(body);

console.log(body.innerHTML)


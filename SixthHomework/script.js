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
let listElement = document.getElementById('list').children;
alert(`Результат: ${listElement[0].textContent}, ${listElement[4].textContent}, ${listElement[1].textContent}, ${listElement[3].textContent}, ${listElement[2].textContent}`);



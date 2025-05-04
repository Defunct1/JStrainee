// Вправа 1

// function propsCount(currentObject) {
//     let keys = Object.keys(currentObject); //за допомогою метода keys отримуємо ключі об'єкту і зберігаємо їх в keys
//     return keys.length; //повертаємо довжину масиву keys
// }


// let mentor = { age: 12, job:'teacher', duration: 3, unit: 'soldier' }
// console.log(propsCount(mentor))

// Вправа 2

// const typesOfData = { //створюємо об'єкт з 5 елементів
//     str : 'String',
//     num : Number,
//     boo : Boolean,
//     nul: null,
//     notANumber : NaN,

// }

// function showProps(obj) { //створює масив ключів за допомогою Object.keys(obj)
//     let keys = Object.keys(obj); //масив ключів
//     let values = Object.values(obj); //масив значень
//     console.log('Keys:', keys); //виводить масив keys
//     console.log('Values:', values); //виводить масив values
// }

// showProps(typesOfData);

// Вправа 3

// class Person { //Представлення особи з ім'ям та прізвищем
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName() { //метод повертає прізвище та ім'я через пробіл 
//         return `${this.surname} ${this.name}`;
//     }
// }

// class Student extends Person { //наслідуваний клас, що включає рік вступу
//     constructor(name, surname, year){
//         super(name, surname); // Викликає конструктор Person для ініціалізації name і surname
//         this.year = year; //зберігає рік вступу
//     }
//     showFullName(middleName) {
//         return `${this.surname} ${this.name} ${middleName}`;
//     }

//     showCourse() {
//         let course = 2025 - this.year; //різниця між потчним роком і роком вступу
//         course = Math.min(Math.max(course, 1), 6); //Обмежує курс через min і max методи(max вкладений як одне з значеннь в min)
//         return course;
//     }
// }

// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());

// class Person { //Представлення особи з ім'ям та прізвищем
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName() { //метод повертає прізвище та ім'я через пробіл 
//         return `${this.surname} ${this.name}`;
//     }
// }
// Вправа 4
// class Worker { // Клас Worker для представлення працівника з зарплатою та досвідом
//     #experience = 1.2;

//     constructor(fullName, dayRate, workingDays) { //Конструктор ініціалізує ім'я, ставку, дні та досвід
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }

//     showSalary() { // Метод повертає базову зарплату (ставка * дні)
//         return this.dayRate * this.workingDays;
//     }

//     showSalaryWithExperience() { // Метод повертає зарплату з урахуванням досвіду
//         return this.showSalary() * this.#experience;
//     }

//     get experience() {
//         return this.#experience;
//     }

//     set experience(value) {
//         if (typeof value === 'number' && value > 0) {
//             this.#experience = value;
//         } else {
//             console.log("Невірне значення досвіду");
//         }
//     }
// }

// // Створення працівників
// const worker1 = new Worker("Нік Ф'юрі", 194, 7);
// const worker2 = new Worker("Містер Краб", 80, 25);
// const worker3 = new Worker("Петро Петренко", 139, 15);

// // Встановлення нового досвіду
// worker1.experience = 1.5;
// worker2.experience = 1.8;
// worker3.experience = 1.3;

// // Виведення даних кожного працівника
// const workers = [worker1, worker2, worker3];
// workers.forEach(worker => {
//     console.log(`Ім'я: ${worker.fullName}`);
//     console.log(`Звичайна зарплата: ${worker.showSalary()}`);
//     console.log(`Досвід: ${worker.experience}`);
//     console.log(`Зарплата з досвідом: ${worker.showSalaryWithExperience()}`);
//     console.log('---');
// });

// // Сортування за зарплатою з досвідом
// console.log("Сортування за зарплатою з досвідом:");
// workers.sort((a, b) =>
//     a.showSalaryWithExperience() - b.showSalaryWithExperience()
// );

// // Виведення після сортування
// workers.forEach(worker => {
//     console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
// });


// Вправа 5 
class GeometricFigure { // Батьківський клас для геометричних фігур
    getArea(){ // Порожній метод для площі
        return 0;
    }
    toString(){ // Повертає назву класу
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure { // Клас для трикутника, наслідується від GeometricFigure
    constructor (base, height) {
    super();
    this.base = base;
    this.height = height;
    }
    getArea() {

        return this.base * this.height / 2; // Площа трикутника: (основа * висота) / 2
    }
}
class Square extends GeometricFigure { // Клас для квадрата, наслідується від GeometricFigure
    constructor (side) {
        super();
        this.side = side;
    }
    
    getArea() {
        return this.side * this.side; //Площа квадрата: сторона * сторона
    }
}
class Circle extends GeometricFigure { // Клас для кола, наслідується від GeometricFigure
    constructor (radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2; // Площа кола: π * радіус^2
    }
}


// Функція для обробки масиву фігур

function handleFigures(figures) { // Обчислюємо сумарну площу і виводимо дані для кожної фігури
    return figures.reduce((total, figure) => {
        if (figure instanceof GeometricFigure) {
            const area = figure.getArea();
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
            return total + area
        } 
        return total; //Пропускаємо об’єкти, які не є GeometricFigure
    }, 0);
}

// Тестування
let figures = [
    new Triangle(4, 5), 
    new Square(7), 
    new Circle(5)
]; 
console.log(handleFigures(figures));
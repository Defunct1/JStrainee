//Вправа 1

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x,y, ...rest] = arr;
// let z = [rest[rest.length -1]]; // повертає останній елемент масиву та обгортає його у масив
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // [Bob]

// Вправа 2

// let data = {
//    names: ["Sam", "Tom", "Ray", "Bob"],
//    ages: [20, 24, 22, 26],
// };
// let { //Деструктуризуємо об’єкт data, щоб витягнути другі та четверті елементи з масивів names і ages
//     names: [, name2, , name4],
//     ages: [, age2, , age4]
// } = data;
// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26


// Вправа 3

// function mul(...args) {
//    const numbers = args.filter(item => typeof item === 'number'); // Вибираємо тільки елементи, для яких typeof повертає 'number'
//    if (numbers.length === 0) return 0; // якщо немає чисел, повертаємо 0
//    return numbers.reduce((product, num) => product * num, 1)
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0

// Вправа 4

// let server = {
//     data: 0,
//     convertToString: function (callback) {
//        callback(() => this.data + "");
//     }
//  };
//  let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//        this.server.data = data;
//        this.server.convertToString(this.notification());
//     },
//     notification: function () {
//        return (callback) => {
//           this.result = callback();
//        };
//     }
//  };
 
//  client.calc(123);
//  console.log(client.result); // "123"
//  console.log(typeof client.result); // "string"

// Вправа 5

// function mapBuilder (keysArray, valuesArrays) {
// 	if (!Array.isArray(keysArray) || !Array.isArray(valuesArrays)) {
// 		throw new Error("Both arguments must be arrays");
// 	}
// 	if (keysArray.length !== valuesArrays.length) {
// 		throw new Error("Arrays must have equal length");
// 	}

// 	let map = new Map();
// 	keysArray.forEach((key, i) => {
// 		map.set(key, valuesArrays[i]);
// 	});
// 	return map;

// }	
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"


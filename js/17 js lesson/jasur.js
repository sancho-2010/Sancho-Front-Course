// const users = ['Коля', 'Алёня', 'Нина' ];
// console.log(users.length);


// const users = ['Коля', 'Алёня', 'Нина' ];

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);


// const users = ['Коля', 'Алёня', 'Нина' ];
// console.log(users[users.length - 1]);

// const users = ['Коля', 'Алёня', 'Нина' ];
// users[8] = "Саша";
// console.log(users[8]);

// const users = new Array('Коля', 'Алёня', 'Нина');
// console.log(users);


// const users = new Array(4);
// console.log(users);

// const users = new Array(4);
// console.log(users.length);

// const users = new Array(4);
// console.log(users[0]);

// const users = ['Коля', 'нина', null, 'алёна']
// let users = ['Коля', 'нина', null, 'алёна']

// users = [];

// users[users.length] = 'миша'
// console.log(users);


// const users = [
//     {
//         name:"Коля",
//         age:27,
//         isMarried:false,
//     },
//     {
//         name:"Нина",
//         age:25,
//         isMarried:true,
//     },
//     {
//         name:"Алена",
//         age:27,
//         isMarried:false,
//     },
// ];

// const matrix = [
//     [1, 2, 3], [4, 5, 6], [7, 8, 9],
// ];

// console.log(users);
// console.log(matrix[0][2]);

// <------ 1,17 урок ------>

// Math.abs(x) возвращает абсолютное значение числа.
// Math.ceil(x) возвращает значение числа, округленное к большему целому.
// Math.floor(x) возвращает значение числа, округленное к меньшему целому. 
// Math.max() возвращает наибольшее число из своих аргументов.
// Math.min() возвращает наименьшее число из своих аргументов.
// Math.pow(x, y) возвращает основание в степени экспоненты,
// то есть значение выражения основание экспонента:// Math.pow(2, 4) === 16 
// Math.random() возвращает псевдослучайное число в диапазоне от 0 до 1.
// Math.round(x) возвращает значение числа, округленное до ближайшего целого.
// Math.sqrt(x) возвращает положительный квадратный корень числа.
// Math.PI число «пи».

// let a = Math.round(4.4);
// let a2 = Math.round(4.5);
// console.log(a);
// console.log(a2);


// let a = Math.round(5 / 3);
// console.log(a);


// let a = Math.round((5 / 3) * 10 / 10);
// let a2 = Math.round((5 / 3) * 10) / 10;
// console.log(a);
// console.log(a2);



// let a = Math.round((5 / 3) * 1000) / 1000;
// console.log(a);

// let number = 123.456;
// let rounded = number.toFixed(1);
// console.log(rounded);


// const numbers = [5, 12, 3, 5, 35]
// console.log(typeof(numbers.join(' ,')));

// const maxNumber = Math.max.apply(null, numbers);
// const maxNumber = Math.max(5, 12, 3, 5, 35);
// const maxNumber = Math.max([5, 12, 3, 5, 35]); //NaN
// const maxNumber = Math.max(Number(numbers.join(',')));
// console.log(maxNumber);
// console.log(numbers);


// const numbers = [5, 12, 3, 5, 35]
// const maxNumber = Math.min.apply(null, numbers);
// console.log(maxNumber);


// console.log(Math.sqrt(16.3));
// console.log(Math.sqrt(-16.3));
// console.log(-10 * 10);


// const result = Math.round(Math.sqrt(-16.3));
// console.log(result);

// for (let i = 0; i < 5; i++) {
    // let result = Math.round(Math.random() * 100);
    // console.log(result);

//     function getRandomInt(minValue, maxValue) {
//         return Math.round(Math.random() * (maxValue - minValue)) + minValue;
//     }
//     console.log(getRandomInt(50, 100));
// }



// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }
// console.log(getRandomInt(5, 10));






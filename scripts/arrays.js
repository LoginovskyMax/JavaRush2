console.log('hello from arrays file');

let newName = 'Maria'

let users = ['Alice', 'Petr', 'Berik', 'Aslan', [newName, 'Askar']]

let emptyArr = []

let todoList = new Array()

// Вывод данных о массиве

// console.log(users.length);
// console.log(users[2]);

// console.log('Проверка на массиив' , Array.isArray(emptyArr));

// users[0] = newName

let newUser = 'Sergey'
// users.pop()
users.push(newUser)
users.unshift(newUser)

console.log(users);

// for (let i = 0; i < users.length; i++) {
//   if(users[i] === 'Petr') {
//     console.log(`hello ${users[i]}`);
//     break
//   }
//   if(users[i] === 'Alice') {
//     console.log(`hello ${users[i]}`);
//     continue
//   }
// if(Array.isArray(users[i])){
//     for (let j = 0; j < users[i].length; j++){
//         console.log(`hello ${users[i][j]}`)
//     }
//     continue
// }
//    console.log('Итерация цикла', i);
//    console.log(`hello ${users[i]}`)
// }

// for (let i = 0; i <= 4; i++) {
//    emptyArr.push(i + 1)
// }

let iCounter = 0

// while (iCounter < 3) {
//     console.log(iCounter);
//     iCounter++
// }

// do{
//     console.log(iCounter);
//     iCounter++
// }while(iCounter > 3)

// let ageString = prompt('Сколько тебе лет?');

// console.log(typeof Number(ageString));
// console.log(isNaN( Number(ageString)));

// console.log(Number(ageString));

// if (Number(ageString) >= 18) { 
//     console.log('Доступ разрешен');
// }

let testA = 12

if(testA){
    console.log('Это тру значение');
} else {
    console.log('это фолси значение');
}

// console.log(Boolean(testA));
// console.log(Boolean(0));
// console.log(Boolean('0'));

// let user = null;

// user = prompt('Введите ваше имя')

// if(user){
//   console.log('Hi', user); 
// } else {
//     console.log('hi');
// }


// Функция возвращает сумму товаров или же предупреждение о недостаточности средств
function calcSumOfNumbers(number1, number2) {
    let sum = number1 + number2
    console.log('результат выполнения функции: ', sum);

    if(sum > 100){
       return sum
    }

    return 'Ваша сумма недостаточно для бесплатной доставки'

    console.log('Конец функцции');
}

const sumof = (number1, number2) => number1 + number2

const sumof2 = (number1, number2) => {
   return number1 + number2
}

const doubleNnmber = number => number * 2

// console.log('результат удвоения',doubleNnmber(19));

// console.log('Результат стрелочной функции', sumof(50, 50));

let sayHello = () => {
        console.log('Сасибо за покупку');
}

calcSumOfNumbers(2, 10)
calcSumOfNumbers(12, 10)

let sumOfNumbers = calcSumOfNumbers(500, 599)

if(sumOfNumbers > 1000){
    sayHello = function (){
        sumOfNumbers = sumOfNumbers * 0.8
        // console.log('Спасибо за покупку, Ваша скидка 20%');
    }
}

sayHello()

// console.log('вы должны оплатить: ', sumOfNumbers);

const user = { 
    firstName: 'Maria', 
    age: 30, 
    isOnline: true,
    sayHello: () => {
        console.log('Hello user');
        console.log('вывод внешней  переменной', testA);
    },
    updateUserAge: function(newAge){
       this.age = newAge
       console.log(`User age is ${this.age}`);
    },
    showThis: function(){
        console.log(this);
    },
    getUserInfo: function(){
        console.log(`Пользователь с именем ${this.firstName} имеет возраст ${this.age}`);
    }
};

const user2 = {
    age: 25
}

console.log(user.firstName);

user.sayHello()

user.updateUserAge(32)

console.log(user.age);

user.showThis()

const products = [ 
    { id: 1, title: 'Book "Don Quixote"', price: 15 }, 
    { id: 2, title: 'Laptop Pro', price: 1200 }, 
    { id: 3, title: 'Coffee Beans', price: 25 }
];

for (let i = 0; i < products.length; i++) { 
    const product = products[i]; // ...и работать с каждым объектом индивидуальноc
    console.log(`Товар: ${product.title}, Цена: ${product.price} EUR`);
}








const price = 0.1;
const tax = 0.2;
const total = price + tax;

const fixedTotal = total.toFixed(2)

console.log(fixedTotal);

const date = new Date()
console.log(date.getMonth());

// Форматирование даты
const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
day: "numeric",
month: "long",
year: "numeric"
});
console.log(dateFormatter.format(date)); // "5 December 2025"

const id =  Date.now()
const randomNuber = Math.random()
console.log(id);
console.log('randomNuber is', randomNuber);

function highlight(strings, ...values) {
// strings — массив статических частей строки
// values — массив значений переменных

console.log('strings', strings);
console.log('values', values);
     let result = "";
     strings.forEach((str, i) => {
          const val = values[i] ? `<span class="highlight">${values[i]}</span>` : "";
         result += str + val;
     });
return result;
}
const user = "Alice";
const role = "Admin";
// Вызываем функцию без скобок, просто приставляя её к строке
const message = highlight`User ${user} has role ${role}.`;
console.log(message);
// "User <span class="

function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(add(3,4));

console.log(calculate(5, 6, multiply));

function createCounter() {
      let count = 0; // Эта переменная "замкнута" внутри
      return {
          increment() {
           let newCount = count += 1
           return newCount; 
         },
          reset() {
         count = 0;
       }
      };
}
const counter = createCounter();
const counter2 = createCounter();

const fruits = ["Apple", "Banana", "Mango", "Lemon"];
const fruits2 = [...fruits]
// Удаляем 2 элемента начиная с индекса 1, и вставляем "Kiwi"
// splice возвращает удаленные элементы
const removed = fruits2.splice(1, 3);


const users = [
   { id: 1, name: "Maria", active: true, price: 100 },
   { id: 2, name: "John", active: false, price: 100 },
   { id: 3, name: "Chen", active: true, price: 200 }
];

// users.forEach((item, index) => {
//     console.log(item.name);
//     console.log(index);
// })

const newUsers = users.map((item, index) => {
    return {
        ...item,
        adress: 'Pushkina' + index
    }
})

const activeUsers = users.filter((item) => item.active === true)

console.log(activeUsers);

const maria = users.find((item) => item.id === 1)

console.log(maria);

const hasActiveUsers = users.some((item) => item.active === true)

console.log(hasActiveUsers);

const allUsersIsActive = users.every((item) => item.active === true)

console.log(allUsersIsActive);

const totalPrice = users.reduce((accum, item) => {
   return accum += item.price
}, 0)

console.log(totalPrice);




showData()

const user1 = { 
    name: "Alice", 
    city: "Berlin",
    adress: {
        house: 3
    }
};

const user2 = Object.assign({}, user1); // Копируется только ссылка!

const user3 = structuredClone(user1)

const user4 = JSON.parse(JSON.stringify(user1))

const user5 = {...user1}

// user3.name = 'Max'

// user4.adress.house = 100

// user2.city = "Munich";

function showData(){
    console.log(12334);
}

const server = {
     name: "Server",
     requests: ["req1", "req2"],
     processRequests: function() {
        for(req of this.requests){
          console.log(`${this.name} is processing ${req}`);
        }

        const insideFunc = () => {
            console.log('name is', this.name);
        }
        insideFunc()

        function inside(){
            console.log('name is', this.name);
        }
        inside()
    }
};

function testFunction(param1, param2 = 1){
    console.log(param1*2);
    console.log(param2*3);
}

function getPerimetr(a, b){
    if(!b){
        b = a
    }

    let perimetr = (a + b) * 2
    console.log(perimetr);
}

function showGuests(guest1, ...guests){
    console.log(guest1);
    console.log('Остальные гости', guests);
}

let serverName = 'server 1'

function showScope(){
   let serverName1 = 'server Alice'

   console.log(serverName);
}

{
    let serverName = 'local server'
    showScope()
}

const settings = {
    theme: "Dark",
    notifications: true
};

if('theme' in settings){
    console.log(settings.theme.toLowerCase());
}

// console.log(settings.theme2?.toLowerCase());
// console.log(settings['notifications']);

// for(item in settings){
//     console.log(item);
//     console.log(settings[item]);
// }

// const keys = Object.keys(settings)
// console.log(keys);
// const values = Object.values(settings)
// console.log(values);
// const keysAndValues = Object.entries(settings)
// console.log(keysAndValues);

const player = {
   nickname: "Speedy",
   showName() {
     console.log(this.nickname);
    }
};
const player2 = {
   nickname: "Alice",
//    age: 22,
   showName() {
     console.log(this.nickname);
    }
};


player.showName(); // "Speedy" - все хорошо, вызвали от объекта
const myFunc = player.showName;
myFunc.call(player2); // undefined! Контекст потерян, this теперь window или undefined
// Та же проблема в таймерах
setTimeout(player.showName.bind(player2), 1000); // undefined через 1 секунду

function introduce(position, country) {
   console.log(`I am ${this.nickname}, a ${position} from ${country}.`);
}

// introduce('teacher', 'KZ')
// introduce.call(player, 'teacher', 'KZ')
// introduce.apply(player, ['teacher', 'KZ']);

const inroduceWithContext = introduce.bind(player2)

inroduceWithContext('teacher', 'KZ')

const { nickname: customNick, age = 20 } = player2
// const nickname = player2.nickname
console.log('DESCtured', customNick);
console.log('DESCtured', age);

const coordinates = [undefined, 2.35, 105];

// const lan = coordinates[0]

const [lat = 1, long, id] = coordinates;
console.log(`Paris: ${lat}, ${long}`);

const europeOffices = ["Berlin", "Paris"];
const asiaOffices = ["Tokyo", "Seoul"];
// Объединение массивов
const allOffices = [...europeOffices, ...asiaOffices, "Sydney"];

const badRawData = "{ bad json data }";
const rawData = "{'name': 'max' }";

function withdrawMoney(balance, amount) {
if (amount < 0) {
// Генерируем свою ошибку
  throw new Error("Amount cannot be negative");
}
if (amount > balance) {
  throw new Error("Insufficient funds");
}
  return balance - amount;
}

try {
// Пытаемся выполнить опасный код
//   const user = JSON.parse(rawData);
  withdrawMoney(100, -50)
  console.log("Success!"); // Это не выполнится
} catch (error) {
// Сюда попадем, если возникла ошибка
   console.log('Провалились в ошибку');
   console.log("Parsing failed:", error.message);
// Можем показать пользователю красивое уведомление вместо белого экрана
} finally {
// Выполняется ВСЕГДА (успех или ошибка)
   console.log("Operation attempt finished.");
}

console.log(allOffices);




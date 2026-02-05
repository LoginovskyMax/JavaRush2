// Вебсокеты и вебворкеры
let users = ['Alice', 'Petr']

const obj1 = {
    name: 'Altce',
    age: 34
}

// console.log(obj1['name']);

const user = { name: "Alice" };

const visits = new Map();

// Объект как ключ!
visits.set(user, 123);
visits.set('date', '01.02.26');
// for(item of visits){
//     console.log(item);
// }

// for(symbol of 'javaScript'){
//    console.log(symbol);
// }

let obj = {a: 1, b: 2, c: 3};
// for (let key in obj) {
//     console.log(key + ': ' + obj[key]); // Вывод: a: 1 b: 2 c: 3
// }

// Object.entries(obj).forEach(item => {
//     console.log(item[0] + ': ' + item[1])
// })


// console.log(visits.get(user)); // 123
// console.log(visits.size); // 1

// console.log(visits.get('date'));

// console.log(visits.has(user));
// // Удобные методы
// if (visits.has(user)) {
//    visits.delete(user);
// }

// console.log(visits.has(user));

function* idGenerator() {
    let id = 1;
     while (id < 4) { // Бесконечный цикл, который не зависнет!
        yield id++;
     }
}

const gen = idGenerator();

// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next());
// console.log(gen.next());

const tags = ["js", "css", "js", "html", "css"];
// Убираем дубликаты одной строкой
const uniqueTags = new Set(tags);
console.log(uniqueTags); // Set(3) { "js", "css", "html" }

uniqueTags.add('java')
uniqueTags.add('js')
uniqueTags.add('js')
uniqueTags.delete('js')

// uniqueTags.forEach(item => {
//     console.log('language:', item);
// })
// uniqueTags.clear();

// console.log(uniqueTags.size);

const USER_ID = 123
const OBJ_KEY = 222
const THEME_KEY = 'theme'

const themes = {
    DARK: 'dark',
    LIGHT: 'light'
}

let globalTheme = themes.LIGHT

function changeTheme(theme){
    if(theme === themes.LIGHT){
       localStorage.removeItem(THEME_KEY)

       globalTheme = theme
    } else {
      localStorage.setItem(THEME_KEY, theme)
    }

     globalTheme = theme
}

changeTheme(themes.DARK)
changeTheme(themes.LIGHT)

const objForStorage = JSON.stringify(obj1)

localStorage.setItem(OBJ_KEY, objForStorage)

function getStorageData(key){
    const data = localStorage.getItem(key)
       console.log(data);

    if(data){
        return JSON.parse(data)
    }

    return null
}

sessionStorage.setItem(OBJ_KEY, objForStorage)



console.log(getStorageData('123'));

// console.log(localStorage.getItem(USER_ID));

// localStorage.clear()

const cleanArray = [...uniqueTags];

// const socket = new WebSocket('ws://localhost:8080')

// socket.onmessage = function (event){
//     writeMessage(event.data)
// }
// socket.onopen = function () {
//     socket.send(JSON.stringify({type:'PING'}))
// }
// socket.onerror = function(event) {
//     console.error('WebSocket error:', event);
//     console.log('Произошла ошибка WebSocket. Пожалуйста, попробуйте позже.');
// };
// socket.onclose = function(event) {
//     console.log(event.code);
//     console.log(event.reason);
// };

// const inpText = document.querySelector('#text')
// const btn = document.querySelector('#btn')
// const btnClose = document.querySelector('#btn-close')
// const messageList = document.querySelector('#message')

// btn.addEventListener('click', ()=> {
//     if(!inpText.value){
//         return
//     }
//     const message = {
//         text: inpText.value,
//         type: 'ECHO'
//     }
//     console.log('Размер буфера');
//     console.log(socket.bufferedAmount);
//     console.log( socket.readyState);
//     socket.send(JSON.stringify(message))
//     inpText.value = ''
// })
// btnClose.addEventListener('click', ()=> {
//     socket.close(1000, 'Работа завершена')
//     writeMessage('Соединение закрыто')
// })
// function writeMessage(text){
//     const li = document.createElement('li')
//     li.textContent = text
//     messageList.appendChild(li)
// }

// if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(
//     (position) => {
//     const { latitude, longitude } = position.coords;
//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//     },
//     (error) => {
//     console.error('Error getting geolocation:', error);
//     },
//     {
//     enableHighAccuracy: true, // Высокая точность
//     timeout: 5000, // Таймаут ожидания ответа (мс)
//     maximumAge: 0
//     // Максимальное время, в течение которого можно использовать кэшированные данные (мс)
//     }
//     );
//     } else {
//     console.log('Geolocation is not supported by this browser.');
//     }

// const worker = new Worker('./scripts/worker.js')
// console.log('Отправляем сообщение');
// worker.postMessage('Hello from js')
// worker.onmessage = function(event){
//     console.log('onMeaasge');
//     console.log(event.data);
// }

// const worker = new SharedWorker('./scripts/worker.js')
// const port = worker.port
// console.log('Отправляем сообщение');
// port.postMessage('Hello from js port')
// port.onmessage = function(event){
//     console.log('onMeaasge');
//     console.log(event.data);
// }
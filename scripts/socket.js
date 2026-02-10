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
// console.log(uniqueTags); // Set(3) { "js", "css", "html" }

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

// console.log(getStorageData('123'));

// console.log(localStorage.getItem(USER_ID));

// localStorage.clear()

// const cleanArray = [...uniqueTags];

const socket = new WebSocket('ws://localhost:8080')

// const socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

socket.onmessage = function (event){
    writeMessage(event.data)
}
socket.onopen = function () {
    socket.send(JSON.stringify({type:'PING'}))
}
socket.onerror = function(event) {
    console.error('WebSocket error:', event);
    console.log('Произошла ошибка WebSocket. Пожалуйста, попробуйте позже.');
};
socket.onclose = function(event) {
    console.log(event.code);
    console.log(event.reason);
};

const input = document.getElementById('text')
const sendBtn = document.getElementById('btn')
const closeBtn = document.getElementById('btn-close')
const list = document.getElementById('list')

const messageTypes = {
    ECHO: 'ECHO',
    PING: 'PING'
}
const userTypes = {
    USER: 'user',
    SERVER: 'server'
}

function sendMessage(){
    if(!input.value){
        console.log('value is empty');
        return
    }

    const message = {
        type: messageTypes.ECHO,
        text: input.value
    }

    const validMessage = JSON.stringify(message)

    writeMessage(input.value, userTypes.USER)

    socket.send(validMessage)
    input.value = ''
}

function writeMessage(message, userType){
    const li = document.createElement('li')
    li.textContent = message

    if(userType === userTypes.USER){
        li.classList.add('chat__user')
    } else{
        li.classList.add('chat__server')
    }

    li.classList.add('chat__message')

    list.append(li)
}

sendBtn.addEventListener('click', sendMessage)

closeBtn.addEventListener('click', () => {
    socket.close(1000, 'Работа завершена')
})


if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
    (position) => {
    const { latitude, longitude } = position.coords;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => {
    console.error('Error getting geolocation:', error);
    },
    {
    enableHighAccuracy: true, // Высокая точность
    timeout: 5000, // Таймаут ожидания ответа (мс)
    maximumAge: 0
    // Максимальное время, в течение которого можно использовать кэшированные данные (мс)
    }
    );
    } else {
    console.log('Geolocation is not supported by this browser.');
    }

// Notification.requestPermission().then(permission => {
//    if (permission === "granted") {
// // 2. Показ уведомления
//       new Notification("Привет!", {
//          body: "Пора сделать перерыв и размяться.",
//          icon: "/icon.png"
//      });
//    }
// });

// const worker = new Worker('./scripts/worker.js')
// console.log('Отправляем сообщение');
// worker.postMessage('Hello from js')
// worker.onmessage = function(event){
//     console.log('onMeaasge');
//     console.log(event.data);
// }

// function stopWorker() {
//     worker.terminate()
//     console.log('Worker terminated');
// }

const worker = new SharedWorker('./scripts/worker.js')
const port = worker.port
console.log('Отправляем сообщение');
port.postMessage('Hello from js port')
port.onmessage = function(event){
    console.log('onMeaasge');
    console.log(event.data);
}
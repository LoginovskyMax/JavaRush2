const BASE_URL = 'https://rickandmortyapi.com/api'
const locale = 'ru'

function getResponse(pageNumber){
    fetch(`${BASE_URL}/character?page=${pageNumber}`)
      .then(response => {
          console.log(response.status);

          return response.json()
      })
      .then(data => {
        console.log(data);
        drawAll(data.results)
      })
      .catch(err => {
        console.log(err.message);
      })
}

// import axios from 'axios'

axios.interceptors.request.use(config => {
    config.headers.token = "Bearer my-secret-token";
    config.headers.locale = locale;

    return config;
});

function getResponseWithAxios(pageNumber){
   axios.get(`${BASE_URL}/character?page=${pageNumber}`)
   .then(response => {
    drawAll(response.data.results)
   })

//    console.log(response.status);
//    console.log(response.data);

//    drawAll(response.data.results)
}

// getResponse(1)
// getResponseWithAxios(1)


function drawCard(data){
    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('img')
    img.src = data.image
    const title = document.createElement('p')
    title.textContent = data.name

    card.append(title, img)
    return card
}

function drawAll(arrUsers){
    const box = document.getElementById('box')

    const fragment = document.createDocumentFragment()
    arrUsers.forEach(user => {
        const card = drawCard(user)

        fragment.append(card)
    });

    box.append(fragment)
}

const form = {
    name: 'Alice',
    gender: 'female'
}

async function sendForm(formData){
    const jsonBody = JSON.stringify(formData)

    const response = await fetch(`${BASE_URL}/character`, {
        method: 'POST',
        body: jsonBody
    })

    console.log(response);
}


async function sendFormWithAxios(formData){
    try {
     const response = await axios.post(`${BASE_URL}/character`, formData)

     return response
   } catch (error) {
       if (error.response) {
        // Сервер ответил кодом 4xx или 5xx
        console.log("Status:", error.response.status); // 404
     } else if (error.request) {
       // Запрос ушел, но ответа нет (сеть упала)
        console.log("Network Error");
    } else {
      // Ошибка при настройке запроса
       console.log("Config Error", error.message);
     }
    }
}

// sendFormWithAxios(form)

async function errFunc() {
    const response = await axios.post(`${BASE_URL}/character`, form)
}

// window.addEventListener("onunhandledrejection", event => {
//        console.log(`Внимание! Необработанная ошибка промиса: ${event.reason}`);
//     }
// );

const user = { name: "Alice" };
const admin = { name: "Bob" };

function sayHello(role, status) {
    
     console.log(`Hello, ${this.name}! You are ${role} (${status}).`);
}

sayHello('admin', 'on work')

sayHello.call(user, 'waiter', 'on work')
sayHello.apply(user, ['apply', 'on work'])

const sayHelloWithOtherContext = sayHello.bind(user)

const sayHelloWithOtherContextAndArgs = sayHello.bind(user, "Petr")

sayHelloWithOtherContext('bind', 'on work')

sayHelloWithOtherContextAndArgs('not work')
sayHelloWithOtherContextAndArgs('7777')

function showArgs(){


    const summ = [].reduce.call(arguments, (acc, item) => {
        return acc + item
    }, 0)

    console.log(summ);

    console.log(arguments);
}

// showArgs(1,2,3)

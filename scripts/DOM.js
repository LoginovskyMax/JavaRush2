const mainText = document.querySelector('.main__text')

const someText = document.querySelector('#someText')

const liCollection = document.querySelectorAll('.header__list-item')

const btnsCollection = document.querySelectorAll('button')

const developerBtn = document.getElementById('developerBtn')

const mainBlock = document.querySelector('main')

function disabledBtn(){
    developerBtn.classList.toggle('disabled')
    developerBtn.disabled = false
}

disabledBtn()

// mainBlock.innerHTML = ''
// mainBlock.style.backgroundColor = 'red'
let newTextElement = document.createElement('p')
newTextElement.textContent = 'new element from js'
newTextElement.classList.add('green-background')
mainBlock.prepend(newTextElement)

if(someText){
    // someText.textContent =  `<span>My text feom JS</span> end`
    someText.innerHTML = `<span class='some-text'>My text feom JS</span> end`
    someText.classList.add('green-background')

    console.log(someText.classList.contains('green-background'));

    // someText.classList.remove('green-background')
    console.log(someText);  
} else {
    console.log('элемент не найден');
}

someText.remove()

if(liCollection.length){
    for(let i = 0; i < liCollection.length; i++){
        liCollection[i].textContent = liCollection[i].textContent + ' check'
    }
} else {
    console.log('Коллекия пустая');
}

const photo = document.querySelector('#animal-photo');
const switchBtn = document.querySelector('#switch');
let isCat = false

function switchAnimal() { 
    if (isCat === true) { 
        photo.src = './images/dog.webp'; 
        photo.alt = 'Собачка';
        switchBtn.textContent = 'Показать котика';
        isCat = false; } 
        else { 
            photo.src = './images/cat.jpg'; 
            photo.alt = 'Котик';
            switchBtn.textContent = 'Показать собачку';
            isCat = true; 
        }
}

// switchAnimal()

// switchBtn.addEventListener('click', (event) => {
//     switchAnimal()
//     console.log(event.target);
// })

switchBtn.addEventListener('click', switchAnimal)

// switchBtn.removeEventListener('click',switchAnimal)



// switchBtn.addEventListener('click', switchAnimal)

const alertBtn = document.getElementById('test-btn2')

alertBtn.onclick = () => {
    alert('Второй способ навышивание обработчика')
}

function showAlert(){
    alert('Показать алерт')
}

// setTimeout(showAlert, 3000)

let timer = 0

const intervalId = setInterval(tick, 1000)

function tick() {
   timer++
   console.log(timer);
   if(timer > 4){
     clearInterval(intervalId)
   }
}

console.log('Конец файла');

const showBtn = document.querySelector('#showBtn')
const slider = document.getElementById('slider')
let isSliderVisible = false

showBtn.addEventListener('click', () => {
   slider.classList.toggle('hidden')
   isSliderVisible = !isSliderVisible

   if(!isSliderVisible){
    showBtn.textContent = 'Показать слайдер'
   } else {
     showBtn.textContent = 'Скрыть слайдер'
     getData()
   }
})

function getData(){
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
        return response.json()
    })
    .then((data)=> {
        console.log(data);
    })
}




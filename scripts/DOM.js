const list = document.querySelector("#list");
const fruits = ["Apple", "Banana", "Cherry", "Date"];

function createLi(){
    const li = document.createElement("li");
    li.textContent = 'Carrot'
    li.style.color = 'red'

    list.append(li);
}

const fragment = document.createDocumentFragment();
    fruits.forEach(fruit => {
       const li = document.createElement("li");
       li.textContent = fruit;
       li.classList.add('list-item')
       fragment.append(li); // Вставляем во фрагмент
});
// Вставляем фрагмент в DOM (1 перерисовка вместо 4)

list.append(fragment)

list.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('blue')
    }
})

const addBtn = document.getElementById('add-btn')

addBtn.addEventListener('click', () => {
  createLi()
},{
    capture: true,
    // once: true
})

const link = document.getElementById('link')

link.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log(event.target);
    console.log(event.currentTarget);
})

const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const modalContent = document.getElementById('modal-content')
const showModal = document.getElementById('show-btn')

function toggleModal(){
    modal.classList.toggle('hide')
}

closeBtn.addEventListener('click', toggleModal)
showModal.addEventListener('click', toggleModal)
modal.addEventListener('click', toggleModal)

modalContent.addEventListener('click', (event) => {
    event.stopPropagation()
})

function logEvent(event){
  console.log(event.clientX);
}

const debouncedLogEvent = debounce(logEvent, 500)

const throttledLogEvent = throttle(logEvent, 1000)

document.body.addEventListener('mousove', throttledLogEvent)

function debounce(func, timeout){
    let timerId
    return (...args) => {
 
        clearTimeout(timerId)
        
        timerId = setTimeout(() => {
            func(...args)
        }, timeout)
    }
}

function throttle(func, timeLimit){
    let isTrotle = false

    return function(...args){
        if(!isTrotle){
            func(...args)
    
            isTrotle = true

            setTimeout(() => {
                isTrotle = false
            }, timeLimit);
        }
    }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // Получаем "кисть"
// Рисуем красный квадрат
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 100, 100);
// Рисуем линию
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 200);
ctx.stroke();

let x = 0;
function animate() {
// 1. Очищаем холст
ctx.clearRect(0, 0, canvas.width, canvas.height);
// 2. Рисуем кадр
ctx.fillRect(x++, 50, 20, 20);
// 3. Зацикливаем
requestAnimationFrame(animate);
}
// animate(); // Запуск

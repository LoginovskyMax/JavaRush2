console.log('hello from js file');

let price = 777

let salePercent = 20

const MY_BIRTHDAY = '14.08'

const text = 'Your birday :'

const slogan = `Приходите! У нас огромные сидки до ${salePercent} % процентов`

const sloganBegin = 'Приходите! У нас огромные сидки до '

const sloganEnd = ' % процентов'

const finalSlogan = sloganBegin + salePercent + sloganEnd

{
    let userAge = 25
}


const totalPrice = price - (price * (salePercent/100));

let number = 12

let studentsWithoutGroup = 28 % 4

let hasSale = false

if(hasSale){
    console.log(totalPrice);
} else {
   console.log(price);
}


if(price > 5000){
    console.log('Дорогой товар');
} else if(price >= 2000){
   console.log('Средний товар');
} else if(price === '777'){
   console.log('Счастливый товар');
} else {
       console.log('Дешевый товар');
}

// if(price != 13)

if(false && false) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

if(false || true) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let caps = 99;
let canBuyClassic = caps >= 100 ? "Да" : "Нет";

if(caps >= 100) {
    canBuyClassic = 'Да'
} else {
   canBuyClassic = 'Нет'
}
console.log("Можно ли купить классическую Nuka-Cola? " + canBuyClassic);






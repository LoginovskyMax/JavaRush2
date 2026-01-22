const animal = {
   eats: true
}; 
const rabbit = {
   jumps: true
};
const rabbitMike = {
   sleep: true
}; 
// Устанавливаем animal как прототип для rabbit
Object.setPrototypeOf(rabbit, animal);
Object.setPrototypeOf(rabbitMike, rabbit);
// Ищем jumps в rabbit -> нашли (true)
console.log(rabbit.jumps);
// Ищем eats в rabbit -> не
// console.log(rabbit.eats);

// console.log(rabbitMike.eats);

// console.log(Object.getPrototypeOf(Object.getPrototypeOf(rabbitMike)));

// console.log(rabbitMike.__proto__.__proto__.__proto__.__proto__);

class User {
    // constructor вызывается автоматически при создании через new
    constructor(name) {
        this.name = name; // Создание свойства (поля)
    }
     // Метод (автоматически попадает в User.prototype)
     sayHi() {
        console.log(`Hello, my name is ${this.name}`);
       }
}

class Admin extends User {
    profession = 'admin'
    #national = 'human'

    constructor(name, age){
        super(name)
        this.age = age
    }
    sayHi() {
        console.log(`Hello, i am admin ${this.name}`);
       }
    
    showNational(){
        console.log(`i am ${this.#national}`);
    }

}

const user1 = new User("Diego");
const admin1 = new Admin('Max', 30)

// const user2 = {
//     name: 'Alice',
//     sayHi(){
//          console.log(`Hello, my name is ${this.name}`);
//     }
// }

console.log(user1);
user1.sayHi(); // Hello, my name is Diego

console.log(admin1.sayHi());

// admin1.showNational()
// admin1.profession = 'it'
// console.log(admin1.profession);

class User2 {
   #name;

      constructor(name) {
        this.name = name; // Вызывает сеттер!
      }
// Геттер: вызывается при чтении user.name
    get name() {
         return this.#name;
      }
// Сеттер: вызывается при записи user.name = "..."
    set name(value) {
      if (value.length < 3) {
          console.error("Имя слишком короткое!");
          return;
        }
     this.#name = value;
  }
}

const user2 = new User2('Alice')
// console.log(user2.name);
user2.name = 'Ma'
// console.log(user2.name);

// console.log(Object.getPrototypeOf(user2));

// console.log(user2 instanceof User2);

const arr = ['max', 'alice', 'berik']
// arr.forEach((item, index, arr) => {
//     console.log(item);
// })

Array.prototype.myMethod = function(func){
    const that = this

    if(typeof func !== 'function'){
        console.log('В аргумент передана не функция');

        return
    }

    for(let i=0; i < that.length; i++){
        func(that[i], i, that)
    }
}
// arr.myMethod((item) => {
//     console.log(item);
// })

// Базовый класс (Родитель)

const Swimmable = {
     swim() { console.log(`${this.name} is swimming`); }
};

class Runner {
    run(name){
         console.log(`${name} is runnig.`);
    }
}
class Character {
    #speed = 5

      constructor(name) {
         this.name = name;
         this.health = 50;
      }

    move() { 
        console.log(`${this.name} is moving.`); 
    }

    heal(poitns){
        let curHealth = this.health + poitns

        if(curHealth >= 100){
            curHealth = 100
        }
        this.health = curHealth
    }

    static getCharacter() {
        console.log(this.health);
        console.log('It is a character');
    }
}
// Производный класс (Наследник)
class Mage extends Character {
    #SPELS = {
        FIREBALL:'fireball',
        FREEZ: 'freze wave'
    }
    #freezeDamage = 10
    #fireDamage = 20

    cast(typeOfCast) { 
        let damage = 0

        if(typeOfCast === this.#SPELS.FIREBALL){
             damage = this.#fireDamage
        }else if(typeOfCast === this.#SPELS.FREEZ){
            damage = this.#freezeDamage
        }

        console.log(`${this.name} casts a ${typeOfCast} with damage ${damage}!`); 
    }

    getSpaels(){
        return this.#SPELS
    }
}

const merlin = new Mage("Merlin");

merlin.move(); // Метод взят у
merlin.heal(10)
console.log(merlin.health);
const spels = merlin.getSpaels()
console.log(spels);

merlin.cast(spels.FIREBALL)
merlin.cast(spels.FREEZ)

class Warrior extends Character {
    #armor = 2

    constructor(name, weapon){
        super(name)
        this.weapon = weapon
        this.runnerClass = new Runner()
    }

   increaseArmor(){
     this.#armor = 5
     console.log('Броня повышена до', this.#armor) ;console.log();

     setTimeout(this.#decreaseArmor.bind(this), 3000)
   }

   #decreaseArmor(){
    this.#armor = 2
    console.log('Броня снова равна', this.#armor);
   }

    attack(){
        console.log(`${this.name} attack with ${this.weapon}!`); 
    }

    run(){
        this.runnerClass.run(this.name)
    }
}

Object.assign(Warrior.prototype, Swimmable)

const conan = new Warrior('Conan', 'sword')

conan.attack()

conan.increaseArmor()

conan.run()
conan.swim()

// Character.getCharacter()






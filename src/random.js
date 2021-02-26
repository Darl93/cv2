// const person = {
//     name: 'Ihar',
//     age: 30,
//     sayHi: function () {
//         console.log('Say Hi');
//     },
// };


//ПЕРЕД ТЕМ КАК ВЫЗВАТЬ МЕТОД JS БРАУЗЕР ИЩЕТ ЕГО В КОДЕ И ЕСЛИ ЕГО ТАМ НЕТ ИЩЕТ В ПРОТОТИПЕ

//Object.prototype.sayHello = function() { //СОЗДАЕМ Ф-ЦИЮ В ПРОТОТИПЕ ОБЬЕКТА OBJECT

//     console.log('Hello') 
// };

// const victor = Object.create(person); //второй способ создания объкта

// console.log(victor); //ТЕПЕРЬ ПЕРЕМЕННАЯ ВИКТОР СОДЕРЖИТ ЕШЕ ОДИН ПРОТОТИП СО СВОЙСТВАМИ ПЕРЕМЕННОЙ PERSON, {name: "Ihar", age: 30, sayHi: function, sayHello: function}

//const ihar = {}; классич сп-б созд обънт


//OBJECT.CREATE - создание объкта

const person2 = Object.create({}, {
    name: {
        value: 'Ihar',
        enumerable: true, //модификатор enumerable по дефолту false
        writable: true, //модификатор writable по дефолту false
        configurable: true, 


    },
    lastName: {
        value: 'Maslakou',
        numerable: true, 
        writable: true, 
        configurable: true,
    },

    fullName: {
        get() { //функция гет
            return this.name + ' ' + this.lastName; //сложение строк
        },
        set(value) { //функция сет
            this.name = value;
            this.lastName = value;
        }
    }
})

person2.fullName = 'Victor'; //"Victor Victor" после функции set

for (let key in person2) {

    console.log('Key: ', key);

}



//__PROTO__
const animal = {
    eat: function() {
        console.log('Eat')
    }, 
    tail: true,
}

const cat = {
    tail: true,
}

const rabbit = {
    jump: function() {
        console.log('jump')
    },
}

cat.__proto__ = animal;
rabbit.__proto__ = animal;

console.log(rabbit);


//CLASS
class Animal { //результатом вызова класса является объект
    constructor(options) { //класс вызывает метод конструктор
        this.type = options.type;
        this.name = options.name;
        this.age = options.age;
    }

    sayHi() { //у клвссов мог быть ф-ции
        console.log('Hi');
    }
}

class Cat extends Animal {
    constructor(options) {
        super(options); //вызов конструктора Animal
        this.tail = true;
        this.name = options.name;
    }
}




// const animal2 = new Animal('rabbit', 'Bunny');
const catBiscuit = new Cat({
    name: 'Biscuit',
    age: 6
});

const catAnubis = new Cat({
    age: 5,
    name: 'Anubis'

})

console.log(catAnubis, catBiscuit); //Cat {type: undefined, name: "Anubis", age: 5, tail: true}
//Cat {type: undefined, name: "Biscuit", age: 6, tail: true}

//Parcel














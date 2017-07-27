console.log('Hi there! I am a JavaScript!')

//ECMAScript 5
var name = "Joao"
console.log('==> My name is ' + name)
console.log('Type: ' + typeof (name))

//ECMAScript 6
let numberA = 21
let numberB = 33
console.log('Number A: ' + numberA)
console.log('Number B: ' + numberB)
console.log('Type: ' + typeof (numberA))

let isThatTrue = true
console.log('Is that true: ' + isThatTrue)
console.log('Type: ' + typeof (isThatTrue))

//Pure Function
function adder(a, b) {
    return a + b
}

let total = adder(numberA, numberB)

//interpolação
console.log(`${numberA} + ${numberB} = ${total}`)

//Literal Object
const person = {
    firsName: 'Joao',
    lastName: 'Pedro',
    sayHello: function(){
        console.log('Hi my name is ' + this.lastName)
    }
}

console.log(`Mr. ${person.lastName}, ${person.firsName}`)
person.sayHello()


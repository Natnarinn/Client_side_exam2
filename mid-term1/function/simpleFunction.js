// calculate rectangle area
let getRectangleArea = (width, height) => {
    return width * height
}

console.log(getRectangleArea(10, 20))

// calculate factorial
let fact = (n) => {
    if (n <= 1) {
        return 1
    }
    return n * fact(n - 1)
}

console.log(fact(5))

// calculate fibonacci
let fib = (n) => {
    if (n <= 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(7))

// function return function
function said(){
    return 'Goodbye'
}

function saySomething(){
    return said
}

let sentense = saySomething()
console.log(sentense) // [Function: said]
console.log(sentense()) // Goodbye

// Object parameter passing
function modifyPerson(person) {
    person.age = 30
    person.name = "Alice"
}
const personObject = { name: "Bob", age: 25 }
modifyPerson(personObject)
console.log(personObject.name) // Outputs: "Alice"
console.log(personObject.age)  // Outputs: 30

function modifyValue(value) {
    value = 30
    return value
}
let someValue = 20
console.log(someValue) // Outputs: 20
modifyValue(someValue) // if not use reutrn and send to consol.log will display undefined
console.log(someValue) // Outputs: 20
console.log(modifyValue(someValue)) // Outputs: 30
// global scope
let myName = 'John'

function printName() {
    console.log(`myName in function printName: ${myName}`)
}

printName()
console.log(`myName in global scope: ${myName}`)

// local scope
// functional scope
let x = 20
function myFunction() {
    let x = 10
    console.log(`x in function myFunction: ${x}`)
}

myFunction()
console.log(`x in global scope: ${x}`)

// block scope
let y = 3
if (y > 2) {
    let y = 2
    let throwNum = 20
    console.log(`y in if block: ${y}`)
} else {
    let y = 1
    console.log(`y in else block: ${y}`)
}

console.log(`y in global scope: ${y}`)
console.log(`throwNum in global scope: ${throwNum}`) // ReferenceError: throwNum is not defined
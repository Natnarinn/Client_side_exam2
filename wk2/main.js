// function greeting(someone){

//     return 'Hello ' + someone

// }

 let $myName = 'Natnarin Chaisiripanich'

 console.log(`This is ${$myName}`)

// $myName = 10 // weakly and dynamic data type

// console.log('Starting...')

// //Asynchronus progamming

// setTimeout(() => {

//     console.log("more complex task finish...")

// },10000)// 5 second

// console.log(greeting($myName))

// setTimeout(() => {

//     console.log("simple task finish...")

// },2000)// 2 second

// console.log('Good Bye...')

 

// let msg = "I'm a student"

// console.log(msg)

 

let a = null

console.log(a)

let total

console.log(total)

if(total === undefined) console.log('Variable does not have initial value')

if(a === null) console.log('variable has null value')

 

if('2'== 2) console.log(`'2' == 2' : ${'2' == 2}`)

if('2'=== 2) console.log(`'2' === 2' : ${'2' === 2}`)

 

 

//object sample

const obj = { id: 1001, name:'pen', price: 100 }

const obj2 = { id: 2001}

// obj = obj2 obj cannot change value

obj.id = 999 // but obj can update properties


let str ='Hello'
console.log(str.toUpperCase())
console.log(str)
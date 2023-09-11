// let x = 1
// let y = x === 1 ? Math.random() * 2 + 3/5 : x
// console.log(x === 1 ? 1 : 0)

// let m = 1

//optional chaining
//  console.log(m?.charAt(0))
//  console.log(m?.[0])
//  console.log(m?.id)

//nullish
// let n = m ?? 0 //equal to m == nul || m===undefined? m : 0
// console.log(n)

// let c = [] // array initialization with empty array
// let z = {} // object initialization with no property
// console.log(typeof y)
// comsole.log(typeof z)

// let a
// a = a ?? c // a = c
// console.log(a)

//random number in a range 1 to 10
//Math.random() randoms in range 0 to 0.99999
// function randomNumber() {
//     return Math.floor(Math.random() * (max - min + 1 )) + min
// }

// let n1=25, n2 = 100

// const rand = randomNumber(25,100)
// console.log(rand)

// const rand2 = Math.floor(Math.random) * ( n2 - n1 + 1 ) + n1
// 1. 75
// 2. Math.random() 0 to 0.99999*4
// 3. 0*75 to 0.99999 * 75 = 0 to 74.999999
// 4. +25 = 25 to 99.9999

// console.log('------------')
// console.log(Math.round(3.1)) //3
// console.log(Math.round(3.2)) //3
// console.log(Math.round(3.7)) //4
// console.log(Math.round(3.9)) //4
// console.log('------------')
// console.log(Math.floor(3.1)) //3
// console.log(Math.floor(3.2)) //3
// console.log(Math.floor(3.7)) //3
// console.log(Math.floor(3.9)) //3
// console.log('------------')
// console.log(Math.ceil(3.1)) //4
// console.log(Math.ceil(3.2)) //4
// console.log(Math.ceil(3.7)) //4
// console.log(Math.ceil(3.9)) //4

// let str1 = 'ant'
// let str2 = 'Ant'
// let str3 = 'ANT'
// let str4 = 'ant'

// console.log(str1 === str2) //false
// console.log(str1 !== str3) //true
// console.log(str2 === str3) //false
// console.log(str1 === str4) //true
// console.log(str1 < str2) //false
// console.log(str3 < str1) //true
// console.log('------')
// console.log(str1.includes('nt')) //true
// console.log(str1.includes('Nt')) //false
// console.log(str1.toLowerCase().includes('Nt'.toLowerCase())) //true
// console.log(str1.toUpperCase().includes('Nt'.toUpperCase())) //true
// console.log(str1.includes('ant')) //true


//compare object type including object and array data type

//array data type
let x = [1,3,true,'unknown']
let y = [1,3,true,'unknown']
let z = x
console.log(x === y) //false memory address of x === memory address of y
console.log(x === z)//true memory address of x === memory address of z

z[0]='A'
x[0]='B'
y[0]='A'

console.log(x) // ['B', 3, true, 'unknown']
console.log(y) // ['A', 3, true, 'unknown']
console.log(z) // ['B', 3, true, 'unknown']

//object data type
let m = {id:1, title:'pen'}
let n = {id:1, title:'pen'}

let o = m //give memory address from m to o
console.log(m === n)  // false //memory address of m === memory address of n
console.log(o === n) //true // memory address of o === memory address of m
o.id = 888
console.log(m) //? {id:1, title: 'pen'}, {id:888, title:'pen'}
console.log(o)//? {id:888, title:'pen'}

//primity type
let a = 5
let b = 5
let c = a // give data 5 from a to c
console.log()
console.log()


let scores = 70
let grade = 'F'
//<40 'F, 41-70 'Good', 71-100 'Very Good'
if(scores < 0 || scores >100) grade = 'invalid scores'
else if (scores > 70) grade = 'Very Good'
else if (scores > 40) grade = 'Good'
console.log(grade)

const month = 1
const monthName = ''
switch (month) {
    //1===1
    case 1:
        monthName = 'Jan'
        break
    case 2 : 
        monthName = 'Feb'
        break
    case 3:
        monthName = 'Mar'
    }
console.log(monthName) //Feb

const ch = 'A'
switch(ch) {
    case 'A' :
    case 'a' :
    case 'E' :
    case 'e' :
    case 'I' :
    case 'i' :
    case 'O' :
    case 'o' :
    case 'U' :
    case 'u' :
        isVowel = true
    case '*' :
        isVowel = false
}
console.log(isVowel)

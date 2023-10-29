/*//1. create array with literal
//initial x with empty
let x = []; //typeof array is object
console.log(typeof x);

if (x.length === 0) console.log("Empty Array");
else console.log("Not Empty Array");

//x[index], add a new element by using index
x[0] = 1;
x[1] = 3;
x[2] = 5;

//add a new element in the end of array
x.push(7);
x.push(9);
console.log(x);
//[1,3,5,7,9]

const y = [1, true, "beginner", 2.5]; //untype, mixed type
console.log(y);
console.log(y[0]); //1
console.log(y[y.length - 1]); //2.5
console.log(y.length); //4

const z = [
  [2, 4, 6],
  [true, false],
  ["a", "b", "c"],
];
console.log(z[0]); //[2,4,6]
console.log(z[z.length - 1]); //['a','b','c']

const m = [
  { productID: 1, name: "pen", price: 20 },
  { productID: 2, name: "notebook", price: 100 },
  { productID: 3, name: "pencil", price: 10 }
];
console.log(m.length) //3
console.log(m[0]) //{ productID: 1, name: "pen", price: 20 }
console.log(m[m.length - 1]) //{ productID: 3, name: "npencil", price: 10 }

const n = {productID:[1001,1002,1003],productID:[100,10,15]} //object
console.log(n.productID) // [1001,1002,1003]
console.log(n.productID) // [100,10,15]
*/

/*
//2. create array with spread operator
const x = [5,7,9]
const y = [...x,11,13,...x]
console.log(x)
console.log(y)
const z = 'today is a good day'
const m = [...z]
console.log(m)
// for...of use with array
for (const ch of m) {
    console.log(ch)
}
for (const value of x) {
    console.log(value)
}
*/

/*
//3. create array with array constructor
const x = new Array()
console.log(x)
console.log(x.length) //x.length = 0

const y = new Array(5) // 5 is length of array
console.log(y.length) // 5
console.log(y[0])

const z = new Array(10,'A')
console.log(z.length) //2
console.log(z[0]) //10
console.log(z[z.length - 1]) // A
*/

// 4. create array with Array.of factory method
const x2 = Array.of(5)
const y2 = Array.of(5, 7, 9)
const z2 = Array.of(true, "A", "JS")

console.log(x2.length) //1
console.log(y2.length) //3
console.log(z2.length) //3

// 5. create array with Array.from factory method
// const x1 = [1,3,5]
// const y1 = [2,4,6]
// const z1 = Array.from(x1)
// const a1 = [...x1, ...y1]
// console.log(a1)

// delete x[1]
// console.log(x)
// console.log(x.length)

/*
//destructuring array
//create arry named nums
const nums = [1,3,5,7,9]

//destructuring
const [a,b,c] = nums //a=1, b=5, c=7
console.log(a)
console.log(b)
console.log(c)

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

const [x] = nums
console.log(x)
//destructuring with skip some index and use rest to the last destructuring variable z
const [, , , y, , ...z] = [5,10,15,20,25,30,35,40,45,50]
console.log(y) //20
console.log(z) //[ 30, 35, 40, 45, 50 ]

const [...m] = nums
console.log(m) //[1,3,5,7,9] 

//const nums = [1,3,5,7,9]
const n = nums //memory address of nums to n
n[0] = 999
console.log(nums)
console.log(n)
// all below are destructuring
const [o] = nums //999
const [, p] = nums //3
const [...q] = nums //[ 999, 3, 5, 7, 9 ]
console.log(o)
console.log(p)
console.log(q)
*/

/*
const x = [...'Hello world']
console.log(x)
//[
//    'H', 'e', 'l', 'l',
//  'o', ' ', 'w', 'o',
//  'r', 'l', 'd'
//]
//destructuring array result [index,element] from entries()
for (const [index,value] of x .entries()) {
    console.log(index)
    console.log(value)
}
*/

/*
function doSomething(msg) {
    return msg.toUpperCase()
}
console.log(doSomething('Hello'))
console.log(doSomething('Hi'))
console.log(doSomething('Hey'))

console.log(typeof doSomething)
*/

/*
//1.create function with function declaration
function concat(str1,str2,op) {
    return str1 + str2
}

//2.create function with function expression
const toUpper = function (str1) {
    return str1.toUpperCase()
} 

//3.create function with named function expression
const reverse = function rev(str1) {
    return [...str1].reverse.join('')
}
console.log(concat('js', 'beginner'))
console.log(toUpper('hello world'))
console.log(reverse('hello world'))
//doSomething is a higher order function because it accept op function as its parameter but not return function as a result
const doSomething = function (str1,op) { 
    //op=toUpper, op = reverse
    return op(str1)
}
console.log(doSomething('Heyy', toUpper))
console.log(doSomething('Heyy', reverse))

//doIT is a higher  order function because it return a function as a result
const doIT = function() {
    return concat //!==return concat ('1','2')
}
const x = doIT()
console.log(typeof x) //function
console.log(x('1','first')) //1first
*/

const x = function (a) {
  //a=b , a=1
  a = 2
}
let b = 1
x(b)
console.log(b) // b does not change after calling x()

//object parameter passing
const y = function (m) {
  m.id = 555
}
const std = { id: 65130500018, name: "Natnarin" }
y(std)
console.log(std.id) //std will change as fuction make change

// const object1 = {
//   a: "somestring",
//   b: 42,
//   c: false
// }

// console.log(Object.values(object1))
// // Expected output: Array ["somestring", 42, false]

// if (object1 !== {}) console.log("t")

let arr 
arr = arr ??  [1,2]
console.log(arr?.length)

let x1
x1 = x1 ?? ['etete', 'ji']
console.log(x1?.[1])

const add = (num1, num2) => num1 + num2
const substract = (num1, num2) => num1 - num2
function doSomething1(num1, num2, op) {
  return op(num1, num2)
}

function doSomething2(op) {
  return op
}

const result1 = doSomething1(10, 5, add) //15
console.log('result1 = ',result1) //result1 =  15
const result2 = doSomething2(add) // add function
console.log(typeof result2) //function
console.log('result2 = ',result2) //result2 =  [Function: add]
const result3 = doSomething2(substract) //substract function
console.log(typeof result3) //function
console.log('result3 = ',result3) //result3 =  [Function: substract]
const result4 = doSomething2(1) //1
console.log(typeof result4) //Number
console.log('result4 = ',result4) //1
const result5 = doSomething2("add") // 'add'
console.log(typeof result5) //String
console.log('result5 = ',result5) //result5 =  add



let a =1
let b = 10

function doSomething() {
    let b = 5
    let result = a + b 
    console.log(result) //6

    function doIt() {
        let c = 100
        console.log(c) //100
        result += c // 106
        console.log(result)
    }
    // console.log(c) //cannot access outside function doIt
    return doIt // return function doIt
}
/* 
doSomething()
a = 100
console.log(a) //100
console.log(b) //10
*/

const fn = doSomething()
console.log(typeof fn) // function
fn() //100, 106

function counter() {
    let count = 5
    function increment() {
        return ++count
    }

    function decrement() {
        return --count
    }
    return {increment,decrement}
}

//closure are increment() and decrement()

//destructuring
// const c = couter()
const {increment,decrement} = counter() //จะได้ไม่ต้องนั้งเขียนทีละตัวเเบบด้านล่าง
// c.increment
// c.decrement

console.log(increment()) //2
console.log(decrement()) //1 คือเอา 2 มาลบ 1 เนื่องจากใช้ count ตัวเดียวกันใน function
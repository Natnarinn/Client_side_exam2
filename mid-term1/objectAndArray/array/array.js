// Basic array
let colors = ['blue', 'red', 'yellow']
let x = [1, true, 'abc'] // number, boolean, string
let y = [] // empty array

// Array with Construtor
let a = new Array() // empty array
let b = new Array(65, 'red', false) // length 3
const c = new Array(5) // 5 empty elements

// Array of Spread Operator
let d = [...colors] // ['blue', 'red', 'yellow']

// Array with of method
let e = Array.of(1, 2, 3, 4, 5) // [1, 2, 3, 4, 5]
let f = Array.of(d, d) // [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

// Array with from method (like spread operator)
let g = Array.from('abc') // ['a', 'b', 'c']
let h = Array.from([1, 2, 3], x => x * 2) // [2, 4, 6]
let i = Array.from(h) // [2, 4, 6]
if (i === h)console.log('i === h')
else console.log('i !== h')
let a = [1, 2, 3, 4, 5]
let b = [1, 2, 3, 4, 5]
console.log(a === b) // false

let c = a // c assign address of a
console.log(a === c) // true
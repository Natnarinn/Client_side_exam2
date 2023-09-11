// array with destructuring
let nums = [1, 2, 3, 4, 5]
let [a, b, c, d, e] = nums
console.log(a, b, c, d, e) // 1 2 3 4 5

// array with destructuring and rest operator
let x = [1, 2, 3, 4, 5]
let [ant, bird, ...rest] = x
console.log(ant, bird, rest) // 1 2 [3, 4, 5]

// array destructuring with default value
const r = [10, 20, 30]
const [s, t, u, v = 40] = r
console.log(s) // 10
console.log(t) // 20
console.log(u) // 30
console.log(v) // 40

// array by leaving placeholders (commas without variables)
const coordinates = [10, 20, 30, 40];
const [xee, , ...z] = coordinates;
console.log(xee); // Outputs: 10
console.log(z); // Outputs: [ 30, 40 ]
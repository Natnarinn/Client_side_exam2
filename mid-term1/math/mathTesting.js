let x = 4.75;
    
let rounded = Math.round(x); // Round to the nearest integer
let ceiling = Math.ceil(x);   // Round up
let floor = Math.floor(x);    // Round down
let absolute = Math.abs(x);   // Absolute value
let power = Math.pow(x, 2);   // Exponentiation -> 4.75^2
let squareRoot = Math.sqrt(x); // Square root
let random = Math.random();    // Random number between 0 and 1
let pi = Math.PI
let floatingTwoPoint = pi.toFixed(2) // 3.14 but still string

console.log(rounded) // 5
console.log(ceiling) // 5
console.log(floor) // 4
console.log(absolute) // 4.75
console.log(power) // 22.5625
console.log(squareRoot) // 2.179449471770337
console.log(random) // 0.931596767633758
console.log(pi) // 3.141592653589793
console.log(floatingTwoPoint) // 3.14 in string
console.log(parseFloat(floatingTwoPoint)) // 3.14 in number
// push()
let numbers = [1, 5]
numbers.push(10)
numbers.push(20)
numbers.push(30)
console.log(numbers) 

let persons = []
persons.push({name: 'John', age: 20})
persons.push({name: 'Jane', age: 21})
console.log(persons)

// pop()
numbers.pop()
console.log(numbers)

// shift()
numbers.shift()
console.log(numbers)

// unshift()
numbers.unshift(6)
console.log(numbers)

// includes()
console.log(numbers.includes(6)) // true
console.log(numbers.includes(7)) // false
// spread Operator
// 1. Array
const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [...a, ...b]
console.log(c) // [ 1, 2, 3, 4, 5, 6 ]
 
const x = [1, 2, 3]
const y = [4, 5, 6]
const z = [20, ...a, 7, ...b]
console.log(c) // [ 20, 1, 2, 3, 7, 4, 5, 6 ]

// 2. Object
const obj1 = {
    name: "Josh",
    age: 30
}
const copyObj1 = { ...obj1 }
console.log(copyObj1 === obj1) // false because it is not the same address

const obj2 = {
    lastname: "Hsu"
}
const mergeObj = { ...obj1, ...obj2 }
console.log(mergeObj) // { name: 'Josh', age: 30, lastname: 'Hsu' }

const updateObj = {
    ...obj1, 
    address: {
        city: "Taipei",
        country: "Taiwan"
    }
}
console.log(updateObj) // { name: 'Josh', age: 30, address: { city: 'Taipei', country: 'Taiwan' } }
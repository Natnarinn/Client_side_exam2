console.log('task 1 complete')

setTimeout(() => {
    console.log('task 2 complete (after 5 seconds)')
}, 5000)

console.log('task 3 complete')

setTimeout(() => {
    console.log('task 1: a complex task was done.')
}, 10000) // milliseconds (1000 ms = 1 sec)

console.log('I want to do something else.')
console.log('Phuwamet Panjachalermrat')
console.log('Goodbye!')

setTimeout(() => {
    console.log('task 2: a complex task was done.')
}, 2000)

console.log('I want to do something else.')
console.log('Goodbye!')
let person = {
    name: 'John',
    age: 20
}

for (let key in person) {
    console.log(key + ' => ' + person[key])
}

// mix for...of and for...in
let persons = [
    {
        name: 'James',
        age: 30
    }
]
persons.push(person)

for (let person of persons) {
    for (let key in person) {
        console.log(key + ' => ' + person[key])
    }
}
// create object in array
let persons = [
    {
        id: 1,
        name: "Josh",
        lastName: "Hsu",
        tel: "0912345678"
    },
    {
        id: 2,
        name: "John",
        lastName: "Doe",
        tel: "0987654321"
    }
]
console.log(persons);

let newID = persons.length + 1;
const newPerson = {
    id: newID,
    name: "Mary",
    lastName: "Jane",
    tel: "0912345678"
}
persons.push(newPerson);
console.log(persons);
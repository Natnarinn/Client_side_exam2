const book = {
  isbn: "123456789",
  title: "Introduction to JavaScript",
  author: { firstname: "Adam", lastname: "Lee" },
  publisher: {
    name: "HarperCollins",
    location: {
      name: "Silicon",
      country: "USA"
    }
  }
}

const { title } = book // equally to const  title = book.title
console.log(title) //Introduction to JavaScript

//store property value  to new variable name
const { publisher: publisherName, isbn: isbn_book } = book
console.log(publisherName)
/* {
  name: 'HarperCollins',
  location: { name: 'Silicon', country: 'USA' }
}
*/
console.log(isbn_book) //123456789

const {
  publisher: {
    location: { country }
  }
} = book
console.log(country) //USA

//function declaration
function sum(n1, n2) {
  return n1 + n2
}

// Allow function with one statement
const sum1 = (n1, n2) => n1 + n2 // Auto return
// Allow function with one statement
const sum2 = (n1, n2) => {
  return n1 + n2
}

// Allow function with multiple statements
const sum3 = (n1, n2) => {
  let result = 0
  result = n1 + n2
  return result // มีหลายคำสั่งเลยต้อง return
}
const echo = (m) => m // equal with const echo = function(m) {return m}
console.log(echo("INT201")) //INT201

// forEach() เป็นการพาเข้าไปในเเต่ละ element คล้ายการใช้ loop for แต่ง่ายกว่า ไม่มีการ return
const fruits = ["apple", "mango", "orange", "pineapple"]
fruits.forEach((fruit) => console.log(fruit)) // เข้าถึงทุกตัว
/* apple
mango
orange
pineapple
*/
fruits.forEach((fruit) => console.log(fruit.charAt(0))) // เข้าถึงเเค่ตัวแรก
/* a
m
o
p
a
*/
let allFruits = ""
fruits.forEach((fruits) => (allFruits += fruits + " ")) // เข้าถึงเเบบมี ' ' คั่นระหว่าง element
//apple mango orange pineapple 
console.log(allFruits)

// filter() เป็นการreturn ตาม element ที่ผ่านเงื่อนไข
const students = [
  { id: 1, firstname: "Natnarin", lastname: "Chaisiripanichka" },
  { id: 2, firstname: "Inritaka", lastname: "Warajirawiroj" },
  { id: 3, firstname: "Warisa", lastname: "Thiamthong" }
]

const chaiStudents = students.filter((student) =>
  // student.lastname.toLowerCase().startsWith("chai")
  student.lastname.startsWith("Chai")
)
console.log(chaiStudents) //[ { id: 1, firstname: 'Natnarin', lastname: 'Chaisiripanichka' } ]

//student who has firstname or lastname include 'ka' with case insensitive
const kaStudent = students.filter(
  (student) =>
    student.firstname.toLowerCase().includes("ka") ||
    student.lastname.toLowerCase().includes("ka")
)
console.log(kaStudent)
/*[
  { id: 1, firstname: 'Natnarin', lastname: 'Chaisiripanichka' },
  { id: 2, firstname: 'Inritaka', lastname: 'Warajirawiroj' }
]*/

// map method เป็นการ return ทุก element ที่่่รับเข้ามาจะมีการ return กลับทั้งหมด
const ids = students.map((student) => student.id)
console.log(ids) //[ 1, 2, 3 ]

// return all students' fullname ,fullname format is "lastname, firstname"
const fullnames = students.map(
  (student) => `${student.lastname} , ${student.firstname}`
)
console.log(fullnames)
/* [
  'Chaisiripanichka , Natnarin',
  'Warajirawiroj , Inritaka',
  'Thiamthong , Warisa'
] */

// return all student ids in format current year foolws with student id, for examples,
// {id:1 , firstname: 'Somchai' , lastname: 'Jaidee'} => 2023 1
const newIds = students.map((student) => {
  const currentYear = new Date(Date.now()).getFullYear()
  return currentYear + " " + student.id
})
console.log(newIds) //[ '2023 1', '2023 2', '2023 3' ]

//find 'chai' of the first ftudent who starts the last name with 'chai'
const chaiFind = students.find(
  (student) => student.lastname.toLowerCase().startsWith("chai") //{ id: 1, firstname: 'Natnarin', lastname: 'Chaisiripanichka' }
)
console.log(chaiFind) //{ id: 1, firstname: 'Natnarin', lastname: 'Chaisiripanichka' }

//find the first student id who starts the lastname with jai
const chaiFistStudentIndex = students.findIndex((student) =>
  student.lastname.toLowerCase().startsWith("chai")
)
console.log(chaiFistStudentIndex) //0

//return boolean that check all student ids whether have id value more than zero
console.log(students.every((student) => student.id > 0))//true

//return boolean that check at least one student firstname ends with 'rin'
console.log(
  students.some((student) => student.firstname.toLowerCase().endsWith("rin"))
) //true

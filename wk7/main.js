// 1.create object by literal {}
const student = {
  id: 65130500018,
  firstname: "Natnarin",
  lastname: "Chaisiripanich"
}
console.log(student) //{ id: 65130500018, firstname: 'Natnarin', lastname: 'Chaisiripanich' }
console.log(Object.keys(student)) //[ 'id', 'firstname', 'lastname' ]
console.log(Object.values(student)) //[ 65130500018, 'Natnarin', 'Chaisiripanich' ]
console.log(typeof student) //object
console.log(Object.prototype.isPrototypeOf(student)) //true เป็นการเช็คว่าใช่Prototypeนั้นมั้ย
console.log(Date.prototype.isPrototypeOf(student)) //false

const lecturer = { id: 1001, firstname: "Umaporn", lastname: "Sup" }
console.log(Object.prototype.isPrototypeOf(lecturer)) //true

//Way to get property value
const someoneId = student.id // object.key
const someoneFirstName = student["firstname"] // object["key"]
console.log(someoneId) //65130500018
console.log(someoneFirstName) //Natnarin

//Way to assign/set property value
student.id = 65130500018
student["firstname"] = "Sea"
console.log(student.id) //65130500018
console.log(student["firstname"]) //Sea

// dynamic properties
//ass new property
student["email"] = "natnarin.chai@kmutt.ac.th"
student.address = "Bangkok, Thailand"
console.log(student)
/*{
    id: 65130500018,
    firstname: 'Sea',
    lastname: 'Chaisiripanich',
    email: 'natnarin.chai@kmutt.ac.th',
    address: 'Bangkok, Thailand'
  }
*/

//delete existing property
delete student.address
console.log(student)
/*
{
  id: 65130500018,
  firstname: 'Sea',
  lastname: 'Chaisiripanich',
  email: 'natnarin.chai@kmutt.ac.th'
}
*/

//nested object เป็น object ซ้อนกันได้
student.advisor = lecturer
console.log(student)
/*
{
  id: 65130500018,
  firstname: 'Sea',
  lastname: 'Chaisiripanich',
  email: 'natnarin.chai@kmutt.ac.th',
  advisor: { id: 1001, firstname: 'Umaporn', lastname: 'Sup' }
}
*/

console.log(student.advisor.firstname) //Umaporn
console.log(student["advisor"]["firstname"]) //Umaporn

//funtion declaration
function doSomething() {}

//function expresstion
student.getFullName = function () {
  return `${this.firstname} ${this.lastname}` 
}
console.log(student.getFullName) //get property of getFullName //[Function (anonymous)]
console.log(student.getFullName()) //excute function getfullname() //Sea Chaisiripanich

const student2 = { id: 555, firstname: "suda", lastname: "Jaidee" }
student2.getFullName = function () {
  return `${this.firstname} ${this.lastname}`
}
console.log(student2.getFullName()) //suda Jaidee

//2. creste oject with constructor
function Person(id, firstname, lastname) {
  this.id = id
  this.fullName = `${firstname} ${lastname}`
}
const p1 = new Person(111, "Mary", "Jo")
const p2 = new Person(222, "Adam", "Smith")
const p3 = new Person(333, "Susan", "Dee")
console.log(p1) //Person { id: 111, fullName: 'Mary Jo' }
console.log(p2) //Person { id: 222, fullName: 'Adam Smith' }
console.log(p3) //Person { id: 333, fullName: 'Susan Dee' }
console.log(Object.prototype.isPrototypeOf(p1)) //true
console.log(Object.prototype.isPrototypeOf(p2)) //true
console.log(Object.prototype.isPrototypeOf(p3)) //true
console.log(Person.prototype.isPrototypeOf(p3)) //true
console.log(Date.prototype.isPrototypeOf(p3)) //false

//3.create class obj with class
class Student {
  constructor(id, fn, ln) {
    this.id = id
    this.firstname = fn
    this.lastname = ln
  }
  getFullName() {
    return `${this.firstname} ${this.lastname}`
  }
}
const str1 = new Student(1, "Pitch", "Jo")
const str2 = new Student(2, "Lee", "Smith")
console.log(str1) //Student { id: 1, firstname: 'Pitch', lastname: 'Jo' }
console.log(str2) //Student { id: 2, firstname: 'Lee', lastname: 'Smith' }
console.log(str1.getFullName()) //Pitch Jo
console.log(str2.getFullName()) //Lee Smith
console.log(Object.prototype.isPrototypeOf(str1)) // true
console.log(Student.prototype.isPrototypeOf(str1)) // true

//4. create object by using Object.create
//undergratSt1 object -> Student prototype -> Object prototype (Ancestor)
const undergratSt1 = Object.create(str1)
console.log(undergratSt1) //Student {}
console.log(undergratSt1.id) //1
console.log(undergratSt1.firstname) //Pitch
console.log(undergratSt1.lastname) //Jo
console.log(Object.prototype.isPrototypeOf(undergratSt1)) //true
console.log(Date.prototype.isPrototypeOf(undergratSt1)) //false

undergratSt1.project = "Web Application"
console.log(undergratSt1) //Student { project: 'Web Application' }

const circle = {
  radius: 2,
  // area : function () {
  //     return Math.pow(Math.PI,2)
  // }
  // remove : function
  area() {
    return Math.PI * Math.pow(this.radius, 2)
  },
  equals(compareCircle) {
    return this.radius === compareCircle.radius
  }
}

console.log(circle) //{ radius: 2, area: [Function: area], equals: [Function: equals] }
console.log(circle.radius) //2
console.log(circle.area()) //12.566370614359172
console.log(circle.equals({ radius: 2 })) //true
console.log(circle.equals({ radius: 3 })) //false

//circle ={}
console.log(JSON.stringify(circle)) //{"radius":2}
if (JSON.stringify(circle) === "{}") console.log("empty object")
else console.log("not empty object") //not empty object

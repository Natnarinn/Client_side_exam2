const names = ["alice", "John", "Bob", "Ann"]

// all names start with 'A' or 'a'
const isStartWithALetter = names.every((name) =>
  name.toLowerCase().startsWith("a")
)
console.log(isStartWithALetter) // false

// at least one name start with 'A' or 'a'
const isSomeStartWithALetter = names.some((name) =>
  name.toLowerCase().startsWith("a")
)
console.log(isSomeStartWithALetter) // true

// return total all nums
const nums = [5, 2, 3, 4, 7]
const total = nums.reduce((sum, num) => sum + num, 0)
console.log(total) //21

// return value that contain the first character of all names
const name2 = ["Alice", "Bob", "Ann", "Cath"] //'ABAC'
console.log(name2.reduce((concat, str) => concat + str.charAt(0), "")) //ABAC

const buyProduct = [
  { price: 50, quantity: 2 },
  { price: 299, quantity: 10 },
  { price: 15, quantity: 5 }
]
const amount = buyProduct.reduce(
  (priceElement, pr) => priceElement + pr.price * pr.quantity,
  0
)
console.log(amount) //3165

const numm = [10, 3, 75, 1, 30, 100]
// 1. Splice to remove
// remove 75,1,30
// return array of deleted element
// splice(startIndex, the number of delete element)
const removeElement = numm.splice(2, 3)
console.log(removeElement) // [75,1,30]
console.log(numm) //[ 10, 3, 100 ]

// 2. Splice to add three new element at index 3, return empty array
const addElement = numm.splice(2, 0, 111, 555, 888)
console.log(addElement) // []
console.log(numm) // [ 10, 3, 111, 555, 888, 100 ]

// 3.Splice to replace at index 1 with [200,400]
const replaceElement = numm.splice(1, 2, 200, 400)
console.log(replaceElement) // [ 3, 111 ]
console.log(numm) //[ 10, 200, 400, 555, 888, 100 ]

//replace negative numbers to zero
const nenums = [-5, -6, 7, 8, 9, -1, 0]
const replaceNum = nenums.map((nummm) => {
  return nummm < 0 ? 0 : nummm
})
console.log(replaceNum)
/* [
  0, 0, 7, 8,
  9, 0, 0
]*/
const msg = "Today is a present"
// include for String
console.log(msg.includes("Re")) //false
console.log(msg.includes("re")) // true
console.log(msg.includes("day")) // true
console.log(msg.includes("present")) // true

const newMsg = msg.split(" ")
//include for Array
console.log(newMsg)
console.log(newMsg.includes("re")) //false
console.log(newMsg.includes("day")) //false
console.log(newMsg.includes("today")) //false
console.log(newMsg.includes("Today")) // true

//reverse original array
const renums = [-5, -6, 7, 77, 8, 9, -1, 0]
console.log("before", renums)
/* before [
  -5, -6,  7, 77,
   8,  9, -1,  0
]*/
renums.reverse()
console.log("after", renums)
/*after [
   0, -1,  9,  8,
  77,  7, -6, -5
]*/

const numString = renums.join(" * ")
console.log(numString) //0 * -1 * 9 * 8 * 77 * 7 * -6 * -5

console.log(renums.sort()) // [-1, -5, -6, 0,7, 77,  8, 9] defalut sorting by String

renums.sort((num1, num2) => num1 - num2)
console.log(renums) // [-6, -5, -1, 0 , 7,  8,  9, 77] ascending number sorting

renums.sort((num1, num2) => num2 - num1)
console.log(renums) // [-6, -5, -1, 0 , 7,  8,  9, 77] descending number sorting

const student = [
  { id: 1, name: "John Lee" },
  { id: 2, name: "Adam Smith" },
  { id: 3, name: "ann Smith" },
  { id: 4, name: "julia Smith" }
]

//sorting by id ascending, descending
console.log(student.sort((student1, student2) => student1.id - student2.id))
/*[
  { id: 1, name: 'John Lee' },
  { id: 2, name: 'Adam Smith' },
  { id: 3, name: 'ann Smith' },
  { id: 4, name: 'julia Smith' }
]*/
console.log(student.sort((student1, student2) => student2.id - student1.id))
/*[
  { id: 4, name: 'julia Smith' },
  { id: 3, name: 'ann Smith' },
  { id: 2, name: 'Adam Smith' },
  { id: 1, name: 'John Lee' }
]*/

console.log("-----------------------")

//sorting by name  ascending, descending
console.log(
  student.sort((student1, student2) => {
    const name1 = student1.name.toLowerCase()
    const name2 = student2.name.toLowerCase()
    if (name1 > name2) return 1
    else if (name1 < name2) return -1
    return 0
  })
)
/*[
  { id: 2, name: 'Adam Smith' },
  { id: 3, name: 'ann Smith' },
  { id: 1, name: 'John Lee' },
  { id: 4, name: 'julia Smith' }
]*/
console.log(
  student.sort(
    (student1, student2) =>
      student2.name.toLowerCase() < student1.name.toLowerCase()
  )
)
/*[
  { id: 2, name: 'Adam Smith' },
  { id: 3, name: 'ann Smith' },
  { id: 1, name: 'John Lee' },
  { id: 4, name: 'julia Smith' }
]*/
console.log(
  student.sort((student1, student2) =>
    student1.name.localeCompare(student2.name)
  )
)
/*[
  { id: 2, name: 'Adam Smith' },
  { id: 3, name: 'ann Smith' },
  { id: 1, name: 'John Lee' },
  { id: 4, name: 'julia Smith' }
]*/
console.log(
  student.sort((student1, student2) =>
    student2.name.localeCompare(student1.name)
  )
)
/*[
  { id: 4, name: 'julia Smith' },
  { id: 1, name: 'John Lee' },
  { id: 3, name: 'ann Smith' },
  { id: 2, name: 'Adam Smith' }
]*/

const st1 = "ann"
const st2 = "Boy"
const st3 = "Ann"

console.log(st1 < st2) //false
console.log(st1 > st2) //true
console.log(st1 === st2) //false
console.log(st1 === st3) //false
console.log(st1.toLowerCase() < st2.toLowerCase()) //true

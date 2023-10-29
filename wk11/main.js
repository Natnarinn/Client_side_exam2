// argument
function ops1(n1, n2, n3) {
  console.log(arguments) //special object //[Arguments] { '0': 'a', '1': true, '2': 3 }
  console.log(arguments.length) //3
  for (const a of arguments) {
    console.log(a) //a true 3
  }
  arguments[0] = 555 // n1 = 555
  console.log(n1)
}
ops1("a", true, 3)
/*
[Arguments] { '0': 'a', '1': true, '2': 3 }
3
a
true
3
555
*/

console.log("--------------")

// default parameter คือการกำหนดค่าใน parameter เลย ไม่ต้องนั่งเขียน เงื่อนไขใน function
function ops2(n1 = 0, n2 = false, n3 = "unknown") {
  console.log(n1, n2, n3) 
}

ops2(1, undefined, "Seaview")//1 false Seaview
ops2(undefined, undefined, undefined) //0 false unknown
ops2(555, true, "js") //555 true js

console.log("--------------")

function ops3(n1 = 0, n2, n3) {
  console.log(n1, n2, n3)
}

ops3(1) //1 undefined undefined

console.log("--------------")

// Rest parameter ใช้ได้แค่ครั้งเดียว เเละสามารถใช้ได้แค่กับตัวสุดท้ายของ parameter สุดท้ายเท่านั้น
function ops4(n1 = 0, n2, ...n3) {
  console.log(n1, n2, n3)
  console.log("lenght : " + arguments.length) //5 มีการมองเป็นแบบแต่ละ element ไม่ได้ยุบรวมกัน
  for (const a of arguments) {
    console.log(a)
  }
}

ops4(1, 2, 3, 4, 5)
 /* 
 1 2 [ 3, 4, 5 ]
 lenght : 5
1
2
3
4
5
 */
// ถ้า ops4(1, 2, 3, 4, 5, 6, true) คำตอบจะเป็น 1 2 [ 3, 4, 5, 6, true ]

console.log("--------------")

// ทวน destructuring on array
const [a, ...b] = ["a", "b", "c", "d"]
console.log(a) //'a'
console.log(b) //['b','c','d']

console.log("--------------")
// ทวน destructuring + rest on object
const { id: studentId, ...n } = { id: 1, title: "js", author: "James Smith" }
console.log(studentId) // 1
console.log(n) //{ title: 'js', author: 'James Smith' }

console.log("--------------")
function sum(n1, n2, n3) {
  console.log(n1) //[ 10, 20, 30 ] ,ได้ค่า 10
  console.log(n2) //undefined ,ได้ค่า 20
  console.log(n3) //undefined ,ได้ค่า 30
  return n1 + n2 + n3
}

const nums = [10, 20, 30]
console.log(sum(nums)) //10,20,30undefinedundefined ส่งผลลัพธ์ออกมาเป็นทุก parameter ซึ่งตัวเเรกคือ array ตัวที่เหลือไม่มีการส่งค่าไป เป็น undefined
console.log(sum(...nums)) //60 Spread ส่งผลลัพธ์ออดมาเป็นค่าเดียวที่มีการคำนวณทางคณิตศาสตร์เเล้ว

console.log("--------------")
// Unpack
// const x = [5, 8]
// const y = [2, 7]

// const [x1] = a
// const [y1] = b
// console.log(x1 + y1)

function arrayAdd1([, x1], [, y1]) {
  return x1 + y1
}

const x = [5, 8]
const y = [2, 7]
console.log(arrayAdd1(x, y)) //15

console.log("--------------")
//student tracking
const students = [
  {
    name: "Sophia",
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90]
  },
  {
    name: "Mason",
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62]
  },
  {
    name: "Isabella",
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78]
  },
  {
    name: "Liam",
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95]
  },
  {
    name: "Olivia",
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62]
  }
]


function getAttendanceRate(student) {
  return (
    (student.attendance.reduce(
      (total, attendance) => total + (attendance ? 1 : 0),
      0
    ) /
      student.attendance.length) *
    100
  )
}
function getAvgScore(student) {
  return (
    student.testScores.reduce((total, testScore) => total + testScore, 0) /
    student.testScores.length
  )
}
function underPerformStudents(students) {
  const underPerform = students.filter((student) => {
    return getAttendanceRate(student) < 80 && getAvgScore(student) < 70
  })
  return underPerform.map((student) => {
    return {
      name: student.name,
      attendanceRate: getAttendanceRate(student),
      avgScore: getAvgScore(student)
    }
  })
}
console.log(underPerformStudents(students)) //[ { name: 'Isabella', attendanceRate: 60, avgScore: 69.4 } ]

// destructuring Object parameter
const student = { id: 65130500018, name: "Natnarin Chaisiripanich" }

const { id: studentId1 } = student
let { name: studentName } = student
console.log(studentId1) //65130500018
console.log(studentName) //Natnarin Chaisiripanich
studentName = "Seaview"
console.log(studentName) //Seaview
console.log(student.name) //Natnarin Chaisirpanich
function doSomething({ id: studentId1 }) {
  //const { id: studentId1 } = student
  return studentId1
}
console.log(doSomething(student)) //65130500018



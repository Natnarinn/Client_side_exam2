/*
    You are given an array of objects representing student exam scores. Each object has the following properties
name: The student's name (a string)
score: The student's score on the exam (a number)
    Your task is to creste a new array that contain only the names of students who passesd the exam
    A passing score is defined as a score of 70 or higher. Additionally, you should convert the names to 
uppercase in the new array
    Write a function getPassingNames that take an array of student objects and returns an array of uppercase
names of students who passed exam
*/

const studentScores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Chalie", score: 68 },
  { name: "David", score: 55 },
  { name: "Eve", score: 78 }
]

const getPassingNames1 = (students) => {
  const studentPass = []
  students.forEach((student) => {
    if (student.score >= 70) studentPass.push(student.name.toUpperCase())
  })
  return studentPass
}

const getPassingNames = (arr) => {
  //     const studentPass = arr.filter((element) => element["score"] > 70)
  //    return studentPass.map((element) => element["name"].toUpperCase())
  //
  return arr
    .filter((element) => element["score"] >= 70)
    .map((element) => element["name"].toUpperCase())
}
const passingNames = getPassingNames(studentScores)
console.log(passingNames)

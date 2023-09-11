// //weakly and dynamic types

// let num = 1

// console.log(typeof num)

 

// num = true

// console.log(typeof num)

 

// if (typeof num === "boolean") console.log("num is a boolean type")

 

// let a = 1n

// console.log(typeof a)

 

// let b = 3.2

// console.log(typeof b)

 

// let c = `A-${b / 2 + 1}`

// console.log(c)

// console.log(typeof c)

 

// //implicit type conversion (string to boolean)

// if ("1") console.log("1 is a boolean true")

// else console.log("1 is not a boolean")

 

// if (0) console.log("value is zero") //ถ้าเป็น 0 ค่าจะเป็น false เสมอ

// else console.log("value is not zero")

 

// if (2) console.log("value is two")

// else console.log("value is not two")

 

// let msg = "a"

// if (msg) console.log("an empty string")

// else console.log("an not empty string")

 

// //sample array data type[]

// const nums = [1, 3, 5, 7]

// nums[nums.length - 1] = 11 // เปลี่ยนตัวสุดท้าย

// nums[nums.length] = 11 //ต่อท้าย

// //nums.push(9) // เพิ่มได้เรื่อยๆ

// console.log(nums)

// console.log(nums.length) // เช็คขนาด array

// nums[0] = 11

// console.log(nums)

// console.log(typeof nums)

// //sample object data type: collection of properties{}

// const obj = { id: 1, price: 100 }

// //obj = nums //const not allow

// obj.id = 555

// console.log(obj)

// console.log(typeof obj)

 

// function doSomething(activity) {

//   //=== check data type and value, === check only value, do not care data type

//   if (activity === null) return "activity is null"

//   if (activity === undefined) return "activity is undefined"

//   else return `${activity} is done`

// }

// console.log(typeof doSomething)

// let act1 // undefined

// let act2 = null // null

// let act3 = "JS learning" //string

// console.log(doSomething(act1)) // no activity

// console.log(doSomething(act2)) // no activity

// console.log(doSomething(act3)) // JS learning is done

// console.log(doSomething()) // no activity // parameter is undefined

 

// let aa,

//   bb = 0,

//   cc = null

 

// console.log(aa) // undefined

// console.log(bb) // 0

// console.log(cc) // null

 

// if (aa) console.log('aa')

// else console.log('not aa')

 

//a,b,c are global scope

// let a = 1

// const b = 2

// var c = 3

// //d,e,f are block scope

// {

//     // d nad e are local vairable in block

//   let d = 4

//   const e = 5

//   var f = 6

 

//   console.log("block scope")

//   console.log(a)

//   console.log(b)

//   console.log(c)

// }

// //h,i,j are function scope

// function doIt() {

//     // d nad e are local vairable in function

//   let h = 7

//   const i = 8

//   var j = 9

 

//   console.log("function scope")

//   console.log(a)

//   console.log(b)

//   console.log(c)

 

//   console.log(f) // f เป็น var

 

//   // block scope variable not allow in function

//   //console.log(d) // ไม่ใช่ var

//   //console.log(e) // ไม่ใช่ var

// }

 

// doIt()

// console.log("global scope")

// console.log(a)

// console.log(b)

// console.log(c)

 

// console.log(f)

// // block scope variable not allow outside block

// //console.log(d)

// //console.log(e)

 

// // function scope do not allow outside function

// //console.log(h)

// //console.log(i)

// //console.log(j)

 

let x = 1

{

  let x = 2

  console.log(x)

}

console.log(x)

 
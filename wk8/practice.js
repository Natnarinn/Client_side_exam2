/* write a fuction that take an array of numbers and returns an object with the following properties
min : the minimum value in array
max : the maximum value in array
sum : the sum of all the values in array
avg : the average of all the values in array
For example, given the array[1,2,3,4,5], the function should return : {min:1, max:5, sum: 15, avg:3} */

function practice(arr) {
  //min,max,sum.avg
  let min = arr[0]
  let max = arr[0]
  let sum = 0
  let avg = 0
  for (let i = 0; i < arr.length; i++) {
    //sum
    sum += arr[i]
    //min
    if (arr[i] < min) min = arr[i]
    //max
    if (arr[i] > max) max = arr[i]
  }
  avg = sum / arr.length
  return { min: min, max: max, sum: sum, avg: avg }
}
console.log(practice([1, 2, 3, 4, 5]))
console.log(practice([2, 4, 6, 8, 10]))



/* ให้เขียน function ชื่อ isImageFileExtension(fileName) เพื่อรับค่าชื่อไฟล์(รวมนามสกุลไฟล์) และให้ตรวจสอบว่า
เป็นนามสกุลไฟล์รูปหรือไม่ (.png, .jpg, .jpeg, .gif, .svg) ถ้าใช่ให้ return true ถ้าไม่ใช่ให้ return false 
โดยถ้าเป็นค่า null หรือ undefined ให้ return false */
function findFileExtension(filename) {​  
    return filename.substring(filename.lastIndexOf('.'))
}
​findFileExtension('sample.ex.jpeg')
    
function isImageFileExtension(filename) {​  
    if (filename === null || filename === undefined) return false  
    //.png, .jpg, .jpeg, .gif, .svg  
    return (    
        filename.endsWith('.png') ||    
        filename.endsWith('.jpg') ||    
        filename.endsWith('jpeg') ||    
        filename.endsWith('.gif') ||    
        filename.endsWith('.svg')  
    )
}
​console.log(isImageFileExtension('sample.png'))
console.log(isImageFileExtension('sample.jpg'))
console.log(isImageFileExtension('sample.jpeg'))
console.log(isImageFileExtension('sample.gif'))
console.log(isImageFileExtension('sample.svg'))
console.log(isImageFileExtension(null))
console.log(isImageFileExtension(undefined))
console.log(isImageFileExtension('sample.sve'))
    
    
  

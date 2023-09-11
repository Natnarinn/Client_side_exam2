let str1 = 'apple'
let str2 = 'Apple'
let str3 = 'APPLE'
let str4 = 'apple'

console.log(str1 === str2) //'a' === 'A' return false
console.log(str1 !== str2) //'a'!=='A' return true

console.log(str1 === str4) //'a'==='a', 'p' ==='p', 'p'==='p', 'l'==='l', 'e'==='e' return true
console.log(str1 < str2) //'a'<'A' 97 < 65 return false

console.log(str1.includes('App')) //false
console.log(str1.includes('app')) //true

//includes with case insensitive
console.log(str1.toLowerCase().includes('App'.toLowerCase()))
console.log(str1.toUpperCase().includes('APP'.toUpperCase())) 
// === vs includes() (case sensitive)
//'apple'.toLowerCase() ==='Apple'.toLowerCase() return true
//'app'==='apple' return false

//'apple'.includes('apple') return true
//'apple'.includes('app') return true

let uniCodes = []
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i] + ' => ' + str1.charCodeAt(i))
    uniCodes.push(str1.charCodeAt(i))
}

for (let i = 0; i < uniCodes.length; i++) {
    console.log(uniCodes[i] + ' => ' + String.fromCharCode(uniCodes[i]))
}

console.log(str1.slice(2)) // ple
console.log(str1.slice(-2)) // le
console.log(str1.slice(1, 3)) // pp
console.log(str1.slice(-4, 5)) // pple
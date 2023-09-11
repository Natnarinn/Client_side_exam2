# INT201-Client-Side Mid-Term Part1
JavaScript เป็นภาษาแบบ Dynamic typing (ตัวแปรหนึ่งตัวสามารถเก็บข้อมูลได้หลายประเภทในขณะที่โปรแกรมทำงาน)
### Declare Variables
- **var**
    - global-scope, non-local-scope
    - ไม่นิยมใช้
- **let**
    - นำมาใช้แทน var
    - ถูกแนะนำขึ้นมาใน ES6 (ECMAScript 2015)
    - Local-scope
- **const**
    - เหมือน let แต่ไม่สามารถเปลี่ยนแปลงค่าได้ (like **final** in java)

### Rule of Variable Declaration
- ชื่อตัวแปรสามารถมี **underscore( _ ) และ Dollar sign ( $ )**
- ชื่อตัวแปรจะต้องขึ้นด้วยตัวอักษร และสามารถขึ้นด้วย **underscore( _ ) และ Dollar sign ( $ )**
- ห้ามตั้งชื่อขึ้นต้นด้วยตัวเลข
- JS มี **case sensitive** หรือก็คือการตั้งชื่อด้วยตัวเล็กใหญ่ มีผลต่อการทำงาน และ/หรือนับเป็น variable คนละตัวกัน
- ห้ามใช้ **Reserved word(คำสงวน)** ในการตั้งชื่อ

### Object and Array
- **Object** use { } curly braces
- **Array** use [ ] square bruckets or bruckets
- not collect value but collect addres on memory ([Example](./objectAndArray/array/checkArray.js))
- [Spread Operator](./objectAndArray/spreadOperator.js)

### **Type Conversions**
    
`NaN` is `Not a Number`
    
| Value | to String | to Number | to Boolean |
| --- | --- | --- | --- |
| `undefined` | “undefined” | NaN | false |
| `null` | “null” | 0 | false |
| `true` | “true” | 1 |  |
| `false` | “false” | 0 |  |
| `""` (empty String) |  | 0 | false |
| `"1.2"` (nonempty string, numeric) |  | 1.2 | true |
| `"one"` (nonempty string, non-numeric) |  | NaN | true |
| `NaN` | “NaN” |  | false |
| [ ] empty array | "" | 0 | true |

### **Conversions and Equality**
- `==` if value is equal `return true` (ไม่สน datatype)
- `===` first check datatype and then, check value. If datatype not match `return false`

### String [Example Code String](./objectAndArray/array/string.js)
- **toLowerCase():** ทำให้ตัวอักษรภาษาอังกฤษใน String เป็นตัวพิมพ์เล็ก
- **toUpperCase():** ทำให้ตัวอักษรภาษาอังกฤษใน String เป็นตัวพิมพ์ใหญ่
- **Equality():** จะตรวจสอบผ่าน ASCII Code ของแต่ละตัวอักษรใน String 
- **charCodeAt(0):** แปลงตัวอักษรเป็น UniCode
- **fromCharCode():** แปลงตัวเลข(UniCode) เป็นตัวอักษร
- **trim():** ตัด WhiteSpace หัวและท้ายของ String 
- **slice(n):** ตัดตัวอักษร n ตัวจากด้านหน้าแล้วแสดง String ที่เหลือ
- **slice(-n):** แสดง n ตัวสุดท้ายของ String 
- **slice(n, p):** แสดงตั้งแต่ index ที่ n ไปจนถึงตัวที่ p


### Concept Synchronous (Sync) and Asynchronous (Async) 
##### **Synchronous (Sync)**([Example Code](./mid-term1/syncAndAsync/sync.js))
- การทำงานแบบตามลำดับขั้นตอน, รอส่วนอื่นทำงานเสร็จก่อนจึงค่อยทำงานต่อ

##### **Asynchronous (Async)**([Example Code](./mid-term1/syncAndAsync/async.js))
- การทำงานที่สามารถทำงานส่วนอื่น ๆ ได้โดยที่ไม่ต้องรอให้ส่วนนั้น ๆ ทำเสร็จก่อน
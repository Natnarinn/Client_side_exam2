### Array
- **is order of collection value**
- properties ที่สำคัญของ Array คือ **index** and **length**
- Array สามารถใส่ **Value จากหลาย ๆ Datatype** ใน 1 Array ได้

### Array with Special Medtod ([Example Code](./arrayWithSpecial.js))
- **push():** ใช้สำหรับเพิ่มข้อมูลเข้าไปยัง array ข้อมูลจะถูกเพิ่มไปยังตำแหน่งสุดท้ายใน array
- **pop():** ลบค่าตำแหน่งสุดท้ายใน Array
- **shift():** ลบค่าตำแหน่งแรกใน Array
- **unshift():** เพิ่ม/แทรกค่าใน Array ตำแหน่งแรกสุด
- **includes():** จะต้องมีค่านั้นๆ ที่ระบุมา ถ้ามีจะ `return true` สามารถใช้กับการหา keyword ใน String ได้

### Spread operator
เป็น Operator ที่ช่วยในการ merge Array/Object ได้
```jsx
const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [...a, ...b]
console.log(c) // [ 1, 2, 3, 4, 5, 6 ]

or 
const x = [1, 2, 3]
const y = [4, 5, 6]
const z = [20, ...a, 7, ...b]
console.log(c) // [ 20, 1, 2, 3, 7, 4, 5, 6 ]
```

```jsx
const str = 'hello world'
const chars = [...str]
console.log(chars) // [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]
```
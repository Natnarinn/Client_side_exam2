# test-concatArray

#### ให้เขียน Function ชื่อ concatArray (array1, array2) เพื่อ return เป็น array ที่ประกอบด้วยสมาชิกทั้งหมดและเรียงลำดับจาก element ใน array1 และตามด้วย element ใน array2

- กรณี array1 และ array2 ทั้งคู่มีค่า null หรือ undefined ให้คืนค่ากลับเป็น undefined
- กรณี array1 และ array2 ทั้งคู่เป็น empty array ทั้งคู่ ให้ return empty array
- กรณี array1 หรือ array2 อันใดอันหนึ่ง มีค่าเป็น empty array หรือ มีค่าเป็น null หรือ undefined ให้ return element ของ array ที่มีรายการแทน

- ตัวอย่างเช่น
  1. concatArray([5, 10, 15], [2, 4, 6, 7]) return [ 5, 10, 15, 2, 4, 6, 7]
  2. concatArray([ ], ['item1', 'item2', 'item3’]) return [ 'item1', 'item2', 'item3' ]
  3. concatArray([10, 6, 5], []) return [ 10, 6, 5 ]
  4. concatArray([], []) return []
  5. concatArray(undefined, [2, 4, 6, 7]) return [2, 4, 6, 7]
  6. concatArray([2, 4, 6, 7], null) return [2, 4, 6, 7]
  7. concatArray(undefined, undefined) return undefined
  8. concatArray(null, undefined) return undefined
  9. concatArray(undefined, null) return undefined
  10. concatArray(null, null) return undefined

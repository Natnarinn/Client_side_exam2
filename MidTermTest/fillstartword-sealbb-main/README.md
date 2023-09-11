# test-fillStartWord

#### ให้เขียน Function ชื่อ fillStartWord (startWord, word) เพื่อรับข้อความใด ๆ โดยให้ return wordข้อความที่รับเข้ามาและเติม startWord ก่อนหน้าข้อความนั้น โดยถ้า word นั้นมี startword นั้นอยู่แล้ว ไม่ต้องเติม startword อีก โดยถ้า word มีค่า null หรือ undefined ให้ return เป็น undefined

- ตัวอย่างเช่น
  1. startWord = "1-2565-", word = "Hello World", จะได้ "1-2565-Hello World"
  2. startWord = "JS" , word = "beginner" จะได้ "JSbeginner"
  3. startWord = "first" , word = "firststep" จะได้ "firststep"
  4. startWord = "first" , word = null จะได้ undefined
  5. startWord = "first" , word = undefined จะได้ undefined

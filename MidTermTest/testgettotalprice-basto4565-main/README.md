# test-getTotalPrice

#### ข้อกำหนดในการสอบ

ให้ใส่คอมเมนต์เป็นรหัส ชื่อ-นามสกุล นักศึกษาลงไปในบรรทัดแรกสุดก่อนเริ่มเขียนฟังก์ชัน นักศึกษาที่ไม่ใส่จะถูกหักคะแนน 50% ของคะแนนสอบ

1. ให้เขียน Function ชื่อ getTotalPrice(productOrder) return ยอดรวมราคาสินค้าทั้งหมดจากรายการสินค้าที่รับจากพารามิเตอร์ productOrder ซึ่งเป็นชนิดข้อมูล array โดยภายใน array ประกอบด้วย object ของรายการสินค้า ซึ่งประกอบด้วยรหัสสินค้า ชื่อสินค้า และราคาสินค้า เช่น
   [ { productId: 'p1111', quantity: 12, price: 2123 },
   { productId: 'p1122', quantity: 2, price: 1500 },
   { productId: 'p4343', quantity: 13500, price: 1 }]

- กรณี productOrder เป็น empty array [ ] ให้คืนค่าเป็น 0
- กรณีมีรายการสินค้าที่มี quantity หรือ price ไม่ใช่เลขจำนวนเต็มบวก ให้ return -1

ตัวอย่างเช่น

- getTotalPrice([]) return 0
- getTotalPrice([{ productId: 'p1001', quantity: 1, price: 50.5 }] return 50.5
- getTotalPrice([
  { productId: 'p1001', quantity: 5, price: 50.5 },
  { productId: 'p9122', quantity: 10, price: 105 }
  ]) return 1302.5
- getTotalPrice([
  { productId: 'p1111', quantity: 7, price: 990.75 },
  { productId: 'p0888', quantity: 5, price: 12500 },
  { productId: 'p8128', quantity: 250, price: 12 }
  ]) return 72435.25

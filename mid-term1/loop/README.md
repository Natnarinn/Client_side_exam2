# Loop
### while
- loop นี้จะเงื่อนไขก่อนแล้วจึงทำงานใน Block Loop
- ทำงานอย่างน้อย 0 ครั้ง

### do...while
- จะทำงานใน Block loop ก่อน 1 ครั้งแล้วค่อยเช็คเงื่อนไขว่าจะ loop ต่อไหม
- ทำงานอย่างน้อย 1 ครั้ง

### for
- **for-loop:** ([Code for loop](./for.js))
- **forEach:**
    - for loop ที่จะเข้าไปอ่านทีละ element in array
- **for...of:** ([Code forEach and for...of](./forArray.js))
    - เหมาะในการใช้อ่าน Array
    - ไม่สามารถใช้อ่าน Object ได้
- **for...in:** ([Code for...in](./forObject.js))
    - เหมาะในการใช้อ่าน Object
    - เมื่อใช้ในการอ่าน Object จะอ่านค่าออกมาเป็น Key ของ Object นั้น ๆ
    - เมื่อใช้ในการอ่าน Array จะอ่านออกมาเป็น Index ของ Array นั้น ๆ
# Condition

- if-else
    
    ```jsx
    if (someone) who = 'member'
    else who = 'guest'
    ```
    
    ```jsx
    if (someone) {
        let x = 1
        who = 'member'
        console.log(x)
    }
    else {
        let x = 2 
        who = 'guest'
        console.log(x)
    }
    ```
    
- Ternary Operator
    
    ```jsx
    who = someone ? 'member' : 'guest'
    ```
    
- Optional Chaining ( `?.` )
    - ES2020
    - เป็นเหมือนการเรียก function ซ้อนๆกันแบบปกติ แต่ถ้า object or array นั้นๆ มีค่าเป็น `null` or `undefined` จะ return เป็น `undefined`
    
    ### without Optional Chaining:
    
    ```jsx
    if (user && user.address && user.address.street) {
      console.log(user.address.street);
    } else {
      console.log('Street address not available');
    }
    ```
    
    ### with Optional Chaining:
    
    ```jsx
    console.log(user?.address?.street ?? 'Street address not available');
    ```
    
- Nullish Coalescing ( `??` )
    - ES2020
    - ตัวดำเนินการ Nullish coalescing เป็นตัวดำเนินการที่ใช้เพื่อเลือกค่าระหว่างสองค่าหรือใช้สำหรับกำหนดค่าเริ่มต้นให้กับตัวแปร ในกรณีที่ค่านั้นเป็น `null` หรือ `undefined`
    - ************Syntax:************
        
        ```jsx
        let returnedValue = value1 ?? value2;
        ```
        
    - **Example:**
        ```jsx
        let name = null;
        console.log(name ?? "Guest");   // Guest

        name = "Metin";
        console.log(name ?? "Guest");   // Metin
        ```
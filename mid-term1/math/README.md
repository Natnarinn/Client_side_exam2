# **Math**
    
```jsx
let x = 4.75;
    
let rounded = Math.round(x); // Round to the nearest integer
let ceiling = Math.ceil(x);   // Round up
let floor = Math.floor(x);    // Round down
let absolute = Math.abs(x);   // Absolute value
let power = Math.pow(x, 2);   // Exponentiation -> 4.75^2
let squareRoot = Math.sqrt(x); // Square root
let random = Math.random();    // Random number between 0 and 1
let pi = Math.PI
let floatingTwoPoint = pi.toFixed(2) // 3.14 but still string
```
    
### How to random number:
    
```jsx
let rand = Math.floor(Math.random() * (max - min + 1)) + min
let randDice = Math.floor(Math.random() * 6) + 1
```
    
### **Parsing and Converting:**
    
```jsx
let strNumber = "123.45";
    
let parsedNumber = parseFloat(strNumber);
let integerPart = parseInt(strNumber); // Parses as an integer (123)
    
// parseInt change value with floating like use Math.floor()
```
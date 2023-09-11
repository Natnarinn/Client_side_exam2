function fizzBuzz(max) {
    let a = ''
    for(i = 1; i <= max; i++) {
        if(i % 3 === 0 && !(i % 3===0 && i%5===0)){
            a += 'Fizz'
        } else if (i % 5 === 0 && !(i % 3===0 && i%5===0)) {
            a += 'Buzz'
        } else if (i % 3 === 0 && i % 5 === 0) {
            a += 'FizzBuzz'
        } else {
            a += i
        }
    }
    console.log(a)
}
fizzBuzz(16)
  
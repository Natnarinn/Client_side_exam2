class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName
    this.lastName = lastName
    this.dateOfBirth = dateOfBirth
  }
  getFullName() {
    return `${this.lastName}, ${this.firstName}`
  }
  getAge() {
    const millitoday = Date.now() // millisecond of today
    // The getTime() method of Date instances returns the number of milliseconds
    const milliBirthDate = this.dateOfBirth.getTime() // number of millisecond of this.dateOfBirth
    const diffmilli = millitoday - milliBirthDate
    const dateOfDiffMilli = new Date(diffmilli)
    return dateOfDiffMilli.getFullYear() - 1970 // getFullyear() return the year far this date
  }
  isEqual(anotherPerson) {
    return (
      this.firstName?.toLowerCase() === anotherPerson?.firstName?.toLowerCase() &&
      this.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
    )
  }
  toString() {
    return `${this.getFullName()} ${this.getAge()} `
  }
}

// new Date (year, monthIndex, day)
const me = new Person('Natnarin', 'Chaisiripanich' , new Date (2004,3,31))

console.log(me.getAge())
console.log(me.getFullName())
console.log(me.isEqual())
console.log(me.toString())
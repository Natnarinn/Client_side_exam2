class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName
    this.lastName = lastName
    this.dateOfBirth = dateOfBirth
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  getAge() {
    const millitoday = Date.now()
    const milliBirthDate = this.dateOfBirth.getTime()
    const milliDiff = millitoday - milliBirthDate
    const dateOfMilli = new Date(milliDiff)
    return dateOfMilli.getFullYear() - 1970
  }

  isEqual(anotherPerson) {
    return (
      this.firstName?.toLowerCase() ===
        anotherPerson?.firstName?.toLowerCase() &&
      this.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
    )
  }

  toString() {
    return `${this.getFullName()} ${this.getAge()}`
  }
}

const st = new Person("sea", "ja", new Date(2004, 3, 31))

console.log(st.getFullName())
console.log(st.getAge())
console.log(st.isEqual())
console.log(st.toString())

const nenums = [-5, -6, 7, 8, 9, -1, 0]
const renum = nenums.map((nenum) => {
  if (nenum < 0) {
    return 0
  } else {
    return nenum
  }
})
console.log(renum)

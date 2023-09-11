const testFn = require('./getMaxLengthString')

test('output#1', () => {
  expect(testFn(['hello', 'hi', 'hey'])).toStrictEqual(['hello'])
})

test('output#2', () => {
  expect(
    testFn(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning'])
  ).toStrictEqual(['Good Evening', 'Good Morning'])
})

test('output#3', () => {
  expect(testFn(['hi'])).toStrictEqual(['hi'])
})

test('output#4', () => {
  expect(testFn(null)).toStrictEqual(undefined)
})

test('output#5', () => {
  expect(testFn(undefined)).toStrictEqual(undefined)
})

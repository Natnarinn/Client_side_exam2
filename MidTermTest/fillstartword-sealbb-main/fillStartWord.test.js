const testFn = require('./fillStartWord')

test('output#1', () => {
  expect(testFn('1-2565-', 'Hello World')).toBe('1-2565-Hello World')
})

test('output#2', () => {
  expect(testFn('JS', 'beginner')).toBe('JSbeginner')
})

test('output#3', () => {
  expect(testFn('first', 'firststep')).toBe('firststep')
})

test('output#4', () => {
  expect(testFn('second', undefined)).toBe(undefined)
})

test('output#5', () => {
  expect(testFn('third', null)).toBe(undefined)
})

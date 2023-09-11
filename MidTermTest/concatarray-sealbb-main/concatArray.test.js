const testFn = require('./concatArray')

test('output#1', () => {
  expect(testFn([5, 10, 15], [2, 4, 6, 7])).toStrictEqual([
    5, 10, 15, 2, 4, 6, 7
  ])
})

test('output#2', () => {
  expect(testFn([], ['item1', 'item2', 'item3'])).toStrictEqual([
    'item1',
    'item2',
    'item3'
  ])
})

test('output#3', () => {
  expect(testFn([10, 6, 5], [])).toStrictEqual([10, 6, 5])
})

test('output#4', () => {
  expect(testFn([], [])).toStrictEqual([])
})

test('output#5', () => {
  expect(testFn(undefined, [2, 4, 6, 7])).toStrictEqual([2, 4, 6, 7])
})
test('output#6', () => {
  expect(testFn([2, 4, 6, 7], null)).toStrictEqual([2, 4, 6, 7])
})

test('output#7', () => {
  expect(testFn(undefined, undefined)).toStrictEqual(undefined)
})

test('output#8', () => {
  expect(testFn(null, undefined)).toStrictEqual(undefined)
})

test('output#9', () => {
  expect(testFn(undefined, null)).toStrictEqual(undefined)
})

test('output#10', () => {
  expect(testFn(null, null)).toStrictEqual(undefined)
})

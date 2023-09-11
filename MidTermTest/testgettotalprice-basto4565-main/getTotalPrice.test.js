const testFn = require('./getTotalPrice')

test('output#1', () => {
  expect(testFn([{ productId: 'p1001', quantity: 1, price: 50.5 }])).toBe(50.5)
})

test('output#2', () => {
  expect(
    testFn([
      { productId: 'p1001', quantity: 5, price: 50.5 },
      { productId: 'p9122', quantity: 10, price: 105 }
    ])
  ).toBe(1302.5)
})
test('output#3', () => {
  expect(
    testFn([
      { productId: 'p1111', quantity: 7, price: 990.75 },
      { productId: 'p0888', quantity: 5, price: 12500 },
      { productId: 'p8128', quantity: 250, price: 12 }
    ])
  ).toBe(72435.25)
})

test('output#4', () => {
  expect(
    testFn([
      { productId: 'p1111', quantity: 12, price: 2123 },
      { productId: 'p1122', quantity: 2, price: 1500 },
      { productId: 'p4343', quantity: 13500, price: 1 }
    ])
  ).toBe(41976)
})

test('output#5', () => {
  expect(testFn([])).toBe(0)
})
test('output#6', () => {
  expect(
    testFn([
      { productId: 'p1001', quantity: 5, price: 50.5 },
      { productId: 'p9122', quantity: 0, price: 105 }
    ])
  ).toBe(-1)
})
test('output#7', () => {
  expect(testFn([{ productId: 'p1001', quantity: -1, price: 50.5 }])).toBe(-1)
})
test('output#8', () => {
  expect(
    testFn([
      { productId: 'p1001', quantity: -2, price: 10 },
      { productId: 'p1002', quantity: 0, price: 5 }
    ])
  ).toBe(-1)
})

import intToString from './intToString'

test('converts 0 to string of zero', () => {
  const result = intToString(0)
  expect(result).toBe('zero')
})

test('converts 500 to string of five hundred', () => {
  const result = intToString(500)
  expect(result).toBe('five hundred ')
})

test('converts 6502 to string of six thousand five hundred two', () => {
  const result = intToString(6502)
  expect(result).toBe('six thousand  five hundred  two')
})

// error cases
test('throws correct error message if given a number less than 0', () => {
  const result = intToString(-3)
  expect(result).toBe('Please enter any number between 0 - 9999')
})

test('throws correct error message if given a number more than 9999', () => {
  const result = intToString(300000)
  expect(result).toBe('Please enter any number between 0 - 9999')
})
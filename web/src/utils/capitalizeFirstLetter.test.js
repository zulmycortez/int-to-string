import capitalizeFirstLetter from './capitalizeFirstLetter'

test('converts 0 to string of zero', () => {
  const result = capitalizeFirstLetter('a computer had a dad')
  expect(result).toBe('A computer had a dad')
})

test('converts 500 to string of five hundred', () => {
  const result = capitalizeFirstLetter('named data')
  expect(result).toBe('Named data')
})

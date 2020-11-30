const ones = [
  "zero", "one", "two", "three", "four", "five", "six", "seven",
  "eight", "nine", "ten", "eleven", "twelve", "thirteen",
  "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", 
  "nineteen"
]

const tens = [
  "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy",
  "eighty", "ninety"
]

const intToString = n => {
  const one = n % 10
  const index = (m, o) => Math.floor(m / (10 * o))
  const remainder = (m, o) => m % o
  const oneString = one ? " " + ones[one] : ""
  const recurse = m => intToString(m)
  const tenRemainder = remainder(n, 100)
  const hundredRemainer = remainder(n, 1000)
  const hasTens = tenRemainder === 0
  const hasHundred = hundredRemainer === 0

  if (n < 20) return ones[n] 
  if (n < 100) return tens[index(n, 1)] + oneString
  if (n < 1000) return ones[index(n, 10)] +" hundred " + (hasTens ? "": " " + recurse(tenRemainder))
  return recurse(index(n, 100)) + " thousand " + (hasHundred ? "" :  " " + recurse(hundredRemainer))
}

exports.intToString = intToString
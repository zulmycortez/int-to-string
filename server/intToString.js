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
  const errorMessage = "Please enter any number between 0 - 9999"
  const one = n % 10
  const index = (m, o) => Math.floor(m / (10 * o))
  const remainder = (m, o) => m % o
  const oneString = one ? " " + ones[one] : ""
  const recurse = m => intToString(m)
  const tenRemainder = remainder(n, 100)
  const hundredRemainder = remainder(n, 1000)
  const hasNoTens = tenRemainder === 0
  const hasNoHundreds = hundredRemainder === 0

  if (n < 0) return errorMessage
  if (n < 20) return ones[n]
  if (n < 100) return tens[index(n, 1)] + oneString
  if (n < 1000) return ones[index(n, 10)] +" hundred " + (hasNoTens ? "": " " + recurse(tenRemainder))
  if (n < 10000) return recurse(index(n, 100)) + " thousand " + (hasNoHundreds ? "" :  " " + recurse(hundredRemainder))
  return errorMessage
}

exports.intToString = intToString
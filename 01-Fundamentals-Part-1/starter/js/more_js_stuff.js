/*
// 20. Type Conversion and Coercion

//  Type Conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('Marshall'))
console.log(typeof NaN)

console.log(String(23), 23)

// Type Coercion
console.log('I am ' + 23 + ' years old 🤞😉')
console.log('23' - '10' - 3)
console.log('23' * '2') // or /
console.log('23' > '29')

let n = '1' + 1 // '11'
n = n - 1  // '11' - ' = 10
console.log(n)
*/

// 24. Logical Operators -> Able to drive exercise
const hasDriversLicense = true // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision) // AND
console.log(hasDriversLicense || hasGoodVision) // OR
console.log(!hasDriversLicense)

/*
if (shouldDrive) {
  console.log('COUNTRY MAMA TAKE ME HOME COUNTRY ROAD')
} else {
  console.log('GET OUT THIS CAR!')
} */

const isTired = false

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('COUNTRY ROAD COUNTRY MAMA TAKE ME HOME')
} else {
  console.log('GET OUT THIS CAR!')
}

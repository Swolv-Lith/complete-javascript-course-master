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

// 24. Logical Operators -> Able to drive exercise
const hasDriversLicense = true // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision) // AND
console.log(hasDriversLicense || hasGoodVision) // OR
console.log(!hasDriversLicense)

if (shouldDrive) {
  console.log('COUNTRY MAMA TAKE ME HOME COUNTRY ROAD')
} else {
  console.log('GET OUT THIS CAR!')
}

const isTired = false

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('COUNTRY ROAD COUNTRY MAMA TAKE ME HOME')
} else {
  console.log('GET OUT THIS CAR!')
}
*/

// 25. Coding Challenge #3

function AverageScore(firstScore, secondScore, thirdScore) {
  return Math.round((firstScore + secondScore + thirdScore) / 3)
}

const dolphinsScore = AverageScore(97, 112, 101)
const koalasScore = AverageScore(109, 95, 106)

const dolphinsGreater100 = dolphinsScore >= 100
const koalasGreater100 = koalasScore >= 100

const bothQualified = dolphinsGreater100 && koalasGreater100

if (bothQualified && (dolphinsScore === koalasScore))  {
  console.log(`
  =========================
        WE HAVE A DRAW
      DOLPHINS SCORE ${dolphinsScore}
      KOALAS SCORE ${koalasScore}
  =========================
  `)
} else if (bothQualified && (dolphinsScore > koalasScore)) {
  console.log(`
  ======================================
  Dolphins is the WINNER with ${dolphinsScore} points!!
  ======================================
            #2 Place Score ${koalasScore}
  `)
} else if (bothQualified && (dolphinsScore < koalasScore)) {
  console.log(`
  ======================================
  Koalas is the WINNER with ${koalasScore} points!!
  ======================================
            #2 Place Score ${dolphinsScore}
  `)
} else {
  console.log(`
  ========================
  No teams qualified
  Dolphins Score ${dolphinsScore}
  Koalas Score ${koalasScore}
  ========================
  `)
}
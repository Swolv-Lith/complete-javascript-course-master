/*
let js = 'Amazing'
if(js === 'Amazing') alert('JavaScripst is FUN!')

40 + 8 + 23 - 10
console.log(40 + 8 + 23 - 10)

const firstName = 'Marshall'
const lastName = 'Nhemetz'
const age = 22
const bla = "I'm " + firstName + ' ' + lastName + " and I'm " + age + ' years old!'
const bla2 = `I'm ${firstName} ${lastName} and I'm ${age} years old`

console.log(bla)
console.log(bla2)

console.log('String with \n\
multiple \n\
lines')

// better this way
console.log(`Also a string
with multiple
long lines
of whatever
and whenever`)

const age = 15
const isOldEnough = age >= 18

if (isOldEnough) {
  console.log('yey you can drive babe 😁✌')
} else {
  const yearsLeft = 18 - age
  console.log(`Oh oh no babe 🖐 you are too young.
  Wait another ${yearsLeft} years 🤞😉`)
}

const birthYear = 2012
let century
if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}
console.log(century)

// * ====================================== *

const marksWeight = 78
const marksHeight = 1.69

const johnsWeight = 92
const johnsHeight = 1.95

function FormulaBMI (weight, height) {
  let bmi = weight / height ** 2
  return bmi
}

const marksBMI = parseFloat(FormulaBMI(marksWeight, marksHeight)).toFixed(2)
const johnsBMI = parseFloat(FormulaBMI(johnsWeight, johnsHeight)).toFixed(2)

if (marksBMI > johnsBMI) {
  console.log(`Marks BMI (${marksBMI}) is higher than Johns BMI (${johnsBMI})!`)
} else {
  console.log(`Johns BMI (${johnsBMI}) is higher than Marks BMI (${marksBMI})!`)
}
*/

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
*/

// 26. The switch Statement

const day = 'wednesday'

switch (day) {
  case 'monday':
    console.log('Plan course structure')
    console.log('Go to coding meetup')
    break
  case 'tuesday':
    console.log('Prepare theory videos')
    break
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples')
    break
  case 'friday':
    console.log('Record videos')
    break
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend 🎶')

  default:
    console.log('Not a valid day!')
}

// Funny exercise

if (day === 'monday') {
  console.log('Plan course structure')
  console.log('Go to coding meetup')
} else if (day === 'tuesday') {
  console.log('Prepare theory videos')
} else if(day === 'wednesday' || day === 'thursday'){
  console.log('🎶😉🤞')
} else if (day === 'friday') {
  console.log('Write code examples')
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend 🎶')
} else {
  console.log('Not a valid day!')
}

// 28. The conditional (ternary) operator

const age = 23
age >= 18 ? console.log('I like to drink 🍻') : console.log('I like to drink 🧃')

const drink = age >= 18 ? 'drink 🍻' : 'drink 🧃'
console.log(drink)

let drink2
if (age >= 18) {
  drink2 = 'drink 🍻'
} else {
  drink2 = 'drink 🧃'
}
console.log(drink2)

console.log(`I like to ${age >= 18 ? 'drink 🍻' : 'drink 🧃'}`)


// 29. Coding Challenge #4

const bill = 275

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20

console.log(`
The bill was ${bill},
the tip was ${tip},
the total value ${bill + tip}
`)

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
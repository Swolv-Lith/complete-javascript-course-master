'use strict'
/*
// 34. Function Declaration vs. Expression

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear
}
const age1 = calcAge1(1998)

// function expression
const calcAge2 = function (birthYear) {
  return 2047 - birthYear
}
const age2 = calcAge2(1998)

// 35. Arrow Function

const calcAge3 = birthYear => 2057 - birthYear
const age3 = calcAge3(1998)

console.log(age1, age2, age3)

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2020 - birthYear
  const retirement = 65 - age
  return `${firstName} retires is ${retirement} years.`
}

console.log(yearsUntilRetirement(1998, 'Marshall'))

// 36. Functions calling other functions

const cutPieces = fruit => fruit * 4

const fruitProcessor = (apples, oranges) => {
  const applePieces = cutPieces(apples)
  const orangePieces = cutPieces(oranges)

  const juice = `
  Juice with ${applePieces}
  pieces of apple and ${orangePieces}
  pieces of orange.
  `
  return juice
}

console.log(fruitProcessor(2, 3))


// 37. Reviewing Functions

const calcAge = birthYear => 2037 - birthYear

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear)
  const retirement = 65 - age

  if (retirement > 0) {
    console.log(`${firstName} retires is ${retirement} years.`)
    return retirement
  } else {
    console.log(`You're already retired ${firstName}`)
    return -1
  }
}

console.log(yearsUntilRetirement(1920, 'Marshall'))

// 38. Coding Challenge #1 - Gymnastics Teams Average Score
  
const calcAvg = (scr1, scr2, scr3) => (scr1 + scr2 + scr3) / 3
  
const avgDph = calcAvg(44, 23, 71)
const avgKla = calcAvg(65, 54, 49)
  
function checkWinner(avgDph, avgKla) {
  if (avgDph >= (avgKla * 2)) {
    return `Dolphins Win (${avgDph} vs. ${avgKla})`
  } else if (avgKla >= (avgDph * 2)){
    return `Koalas Win (${avgKla} vs. ${avgDph})`
  } else {
    return 'No winner'
  }
}
  
console.log(checkWinner(avgDph, avgKla))
console.log(avgDph, avgKla)
*/

// 39. Arrays - Data Structures
  
const friends = ['Sophia', 'Marcele', 'Guilherme', 'Marcus', 'Nicolas']
  
const years = new Array(1990, 1998, 2004, 2010)
  
friends[0] = 'Claudio'
console.log(friends)
friends[0] = 'Sophia'
console.log(friends)
  
const firstName = 'Marshall'
const marshall = [firstName, 'Nhemetz', 2020 - 1998, 'Front End Developer', friends]
console.log(marshall)
console.log(marshall.length)
  
// Exercise
  
const calcAge = birthYear => 2020 - birthYear
const years = [1990, 1998, 2004, 2010]
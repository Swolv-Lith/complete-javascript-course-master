'use strict'

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

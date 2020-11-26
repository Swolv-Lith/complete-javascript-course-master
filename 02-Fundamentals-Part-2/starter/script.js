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

console.log(age1, age2)
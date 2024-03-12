// INSTRUCTIONS:
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should ==> [2,4,6]
// getEvenNumbers([1,2]); ==> [2]
// getEvenNumbers([12,14,15]); ==> [12,14]
// getEvenNumbers([13,15]); ==> []

// SOLUTION:
const getEvenNumbers = (numbersArray )=> numbersArray.filter(el => el%2 === 0);
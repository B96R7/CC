// Write a function which takes a list of strings and returns each line prepended by the correct number.

// // The numbering starts at 1. The format is n: string. Notice the colon and space in between.
const number = array => array.map((n, i) => `${i + 1}: ${n}`)

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }

//   Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
  function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0)
  }
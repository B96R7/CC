// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.
function noOdds( values ){
    return values.filter(value => value % 2 === 0)
  }

//   Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
  function evenNumbers(array, number) {
    let evens = array.filter(num => num % 2 === 0)
    return evens.slice(-number)
  }

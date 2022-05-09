// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
  }

//   The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age]
  function twoOldestAges(ages){
    return ages.sort((a, b) => a - b).slice(-2)
  }

//   Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.
function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }
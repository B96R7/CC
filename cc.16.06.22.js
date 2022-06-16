// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
function toNumberArray(stringarray){
    return stringarray.map(Number)
  }

//   In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer
//   [1, -1, 2, -2, 3] => 3
//   [-3, 1, 2, 3, -1, -4, -2] => -4
const solve = arr => arr.find(value => !arr.includes(-value))


























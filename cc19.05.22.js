// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even"
function oddOrEven(array) {
    return array.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
 }



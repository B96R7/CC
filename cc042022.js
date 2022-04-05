// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0){
        sum += arr[i]
      }
    }
    return sum
}

// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
    return x.split(' ').join('')
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers){
    let squaredSum = 0
    for(let i = 0; i < numbers.length; i++){
      squaredSum += numbers[i] ** 2
    }
    return squaredSum
}
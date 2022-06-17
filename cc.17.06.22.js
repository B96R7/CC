// Given an array/list [] of integers , Find the product of the k maximal numbers.
function maxProduct(numbers, size){
    let sorted = numbers.sort((a, b) => b - a)
    return sorted.slice(0, size).reduce((a, b) => a * b)
  }

//   Given a series of digits as a string, determine if the number represented by the string is divisible by three.
function divisibleByThree(str){
    return str.split("").map(Number).reduce((a, b) => a + b) % 3 === 0
  }

//   A Tidy number is a number whose digits are in non-decreasing order.
//   The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .
  function tidyNumber(n){
    return [...n += ""].sort().join(``) === n
  }




















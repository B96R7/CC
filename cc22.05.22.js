// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
  }

//   Complete the solution so that it reverses the string passed into it.
function solution(str){
    return str.split('').reverse().join('')
  }

//   It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
  function removeChar(str) {
    return str.slice(1, -1);
  }

//   Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
  function boolToWord( bool ){
    return bool ? 'Yes' : 'No'
  }


//   Write a function called repeatStr which repeats the given string string exactly n times.
  function repeatStr (n, s) {
    let str = ''
    for(let i = 0; i < n; i++){
      str += s
    }
    return str
  }

//   Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
    let sum = 0
    for(let i = 0; i <= num; i++){
      sum += i
    }
    return sum
  }

//   Given an array of integers your solution should find the smallest integer.
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

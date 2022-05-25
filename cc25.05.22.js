// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
    if(month <= 3){
      return 1
    } else if(month <= 6){
      return 2
    } else if( month <= 9){
      return 3
    } else {
      return 4
    }
  }

//   You are given two interior angles (in degrees) of a triangle.

//   Write a function to return the 3rd.
function otherAngle(a, b) {
    return 0;
  }

//   Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2)
  }

//   Given a number n, return the number of positive odd numbers below n, EASY!
function oddCount(n){
    return Math.floor(n/2)
  }

//   Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
function correct(string){
    return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')
  }

//   Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
  function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }

//   Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message
  function hoopCount (n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"  
 }

//  Define String.prototype.toAlternatingCase such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
  }

//   You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

//   Write a program that returns the girl's age (0-9) as an integer.
  function getAge(inputString){
    return Number(inputString[0])
  }

//   Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
  function strCount(str, letter){  
    let count = 0
    for(let i = 0; i < str.length; i++){
      if(str[i] === letter){
        count++
      }
    }
    return count
  }






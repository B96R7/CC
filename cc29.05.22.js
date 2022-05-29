// Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin){
    return parseInt(bin, 2)
  }

//   Write a function that returns a string in which firstname is swapped with last name.
  function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
   }

//    Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
   function take(arr, n) {
    return arr.slice(0, n);
  }

//   If the tail is right return true, else return false.
  function correctTail(bod, tail) {
    return bod[bod.length-1] === tail
  }

//   This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
  function plural(n) {
    return n !== 1;
  }

//   You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
  function dutyFree(normPrice, discount, hol){
    return(Math.floor(hol / normPrice / discount * 100))
  }














  
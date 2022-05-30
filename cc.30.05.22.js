// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(s){
    if(s.length % 2 === 0){
      return s[(s.length / 2) - 1] + s[s.length / 2]
    } else {
      return s[(Math.floor(s.length / 2))]
    }
  }

//   Given an integral number, determine if it's a square number:
  function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }

//   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
  function descendingOrder(n){
    return parseInt(String(n).split('').sort((a, b) => b - a).join(''))
  }

//   In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
  function filter_list(l) {
    return l.filter(v => typeof v === "number")
   }

//    accum("abcd") -> "A-Bb-Ccc-Dddd"
   function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }









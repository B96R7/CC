// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.
const stray = nums => nums.reduce((a, b) => a ^ b)

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
function solution(nums){
    if(nums === null || nums === []){
      return []
    } else {
      return nums.sort((a, b) => a - b)
    }
  }

//   Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
  function solution(digits){
    let s = [];
    for (var i = 0; i < digits.length - 4; i++){
        s.push(digits.substr(i,5));
    };
    return Math.max(...s);
}

// For str = "ultr53o?n", the output should be "nortlu".
function reverseLetter(str) {
    return str.split("").filter(x => x.toUpperCase() !== x.toLowerCase()).reverse().join("")
  }

//   if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
  function solve(s){
    let arrLower = s.split("").filter(x => x === x.toLowerCase())
    let arrUpper = s.split("").filter(x => x === x.toUpperCase())
    return arrLower.length >= arrUpper.length ? s.toLowerCase() : s.toUpperCase()
  }

//   Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };
















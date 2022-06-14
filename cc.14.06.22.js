// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.
const findDup = arr => (arr.filter((item, index) => arr.indexOf(item) !== index))[0]

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
function divCon(x){
    return x.reduce((a, b) => typeof b === 'number'? a + b : a - Number(b),0)
  }












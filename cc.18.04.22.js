// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

function addLength(str) {
    return str.split(' ').map(function(v){return v+' '+v.length})
  }

//   To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
  var findAverage = function (nums) {
    return (nums.reduce((acc, c) => c + acc,0)) / nums.length
  }

//   Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
  function differenceInAges(ages){
    let max = Math.max(...ages)
    let min = Math.min(...ages)
    let diff = Math.max(...ages) - Math.min(...ages)
    return [min, max, diff]
  }

//   You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
  function check(a,x){
    return a.includes(x)
  };
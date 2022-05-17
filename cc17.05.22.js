// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }

//   Return an array containing the numbers from 1 to N, where N is the parametered value.

//   Replace certain values however if any of the following conditions are met:
  
//   If the value is a multiple of 3: use the value "Fizz" instead
//   If the value is a multiple of 5: use the value "Buzz" instead
//   If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
  function fizzbuzz(n){
    let arr = []
    for(let i = 1; i <= n; i++){
      if(i % 3 === 0 && i % 5 === 0){
        arr.push("FizzBuzz")
      } else if(i % 3 === 0) {
        arr.push("Fizz")
      } else if(i % 5 === 0) {
        arr.push("Buzz")
      } else {
        arr.push(i)
      }
    }
    return arr
  }
// Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(arr){
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)]
  }
//   In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
  function dontGiveMeFive(start, end){
    let arr = []
    for(let i = start; i <= end; i++){
      if(!i.toString().includes('5')){
        arr.push(i)
      }
     } 
    return arr.length
  }
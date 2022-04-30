// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
function sumTwoSmallestNumbers(numbers) {  
    let sortedNumbers = numbers.sort(function(a,b){
      return a - b
    })
    return sortedNumbers[0] + sortedNumbers[1]
  }


  
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.
function countDevelopers(list) {
    return list.filter(x => x.continent == 'Europe' && x.language == 'JavaScript').length
  }

//   JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
  function getEvenNumbers(numbersArray){
    return numbersArray.filter(i => i % 2 === 0)
  }

//   Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
  function adjacentElementsProduct(array) {
    let arr = []
    for(let i = 0; i < array.length - 1; i++){
      arr.push(array[i] * array[i+1])
    }
    return Math.max(...arr)
  }



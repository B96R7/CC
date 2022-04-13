// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.
function firstNonConsecutive (arr) {
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] + 1 !== arr[i + 1]){
        return arr[i + 1]
      }
    }
    return null
}

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
function removeEveryOther(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i+=2){
      newArr.push(arr[i])
    }
    return newArr
  }

//   You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

//   The returned value must be a string, and have "***" between each of its letters.
  function twoSort(s) {
    return s.sort()[0].split('').join('***')
  }
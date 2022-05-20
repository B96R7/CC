// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
function cubeOdd(arr) {
    let isNumeric = arr.every(x=>!isNaN(x))
    return isNumeric ? arr.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
  }
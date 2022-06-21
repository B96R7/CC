// 4 --> 3 (1, 2, 4)
function getDivisorsCnt(n){
    let count = 0
    for(let i = 1; i <= n; i++){
      if(n % i === 0){
        count++
      }
    }
  return count
}

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.
function nbDig(n, d) {
    let res = 0 
    for (let i = 0; i <= n; i++){
      let square=(i * i + "").split("");
      square.forEach((x) => x == d ? res++ : null)
    }
    return res
  }

//   For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1
//   If input is below 0 or above 12 throw an exception
function factorial(n){
    if(n > 12 || n < 0){
      throw new RangeError()
    }
    
    let fac = 1
    for(let i = 1; i <= n; i++){
      fac *= i
    }
    return fac
  }





















// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
    let square = arr.map(x => x * x)
    let sum = square.reduce((a, b) => a + b)
    return Math.floor(Math.sqrt(sum) / 2)
  }

//   Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry: 
  function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n))
  }











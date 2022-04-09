// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
  
// Given a non-empty array of integers, return the result of multiplying the values together in order.
const grow=x=> x.reduce((a,b) => a*b)




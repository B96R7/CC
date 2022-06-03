// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
function removeDuplicateWords (s) {
    const set = new Set(s.split(" "))
    return Array.from(set).join(" ")
  }

//   Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
const flatten = function (array){
    return [].concat.apply([], array)
  }

















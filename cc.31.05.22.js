// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

//   An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

//   Simple, given a string of words, return the length of the shortest word(s).
  function findShort(s){
    let arr = s.split(' ')
    let smallest = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i]
      }
    }
    return smallest.length
  }





















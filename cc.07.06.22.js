// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
function keysAndValues(data){
    return [Object.keys(data), Object.values(data)]
  }

//   Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
  function getMissingElement(superImportantArray){
    for (i = 0; i < 10; i++) {
      if (superImportantArray.indexOf(i) === -1) return i;
    }
  }









{/* < firstName here >, < country here > of the first Python developer who has signed up; or
{ firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' } */}
function getFirstPython(list) {
    const dev = list.find(x => x.language === "Python")
    return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
  }

//   Given an array/list [] of integers , Find the Nth smallest element in this array of integers
function nthSmallest(arr, pos){
    let sorted = arr.sort((a, b) => a - b)
    return sorted[pos - 1]
  }







  
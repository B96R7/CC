// Your task is to return either:
// true if all developers in the list code in the same language; or
// false otherwise.
// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ]
function isSameLanguage(list) {
    return list.every(x => x.language === list[0].language)
  }

//   Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
//   deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to'])

  function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }



























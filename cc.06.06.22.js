// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
function head(a) {
    return a[0]
  }
  
  function last(a) {
    return a[a.length - 1]
  }
  
  function init(a) {
    return a.slice(0, -1)
  }
  
  function tail(a) {
    return a.slice(1)
  }
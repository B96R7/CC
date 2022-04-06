// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
    let count = 0
    for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i] === true) {
        count += 1
      }
    }
    return count
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
function abbrevName(name){
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
 }

//  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    let arr = n.toString().split('')
    let reverse = arr.reverse()
    const arrOfNum = reverse.map(str => {
      return Number(str)
    })
    return arrOfNum
}
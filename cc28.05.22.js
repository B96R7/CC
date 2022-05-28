// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
function getChar(c){
  return String.fromCharCode(c)
}

// Make a function that receive age, and return what they drink.
function peopleWithAgeDrink(old) {
    if(old < 14){
      return "drink toddy"
    } else if(old < 18){
      return "drink coke"
    } else if(old < 21){
      return "drink beer"
    } else if(old >= 21){
      return "drink whisky"
    }
  };

//   Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
function replace(s){
    var newS = ''
    var vowels = "aAeEiIoOuU"
    for (var i = 0; i < s.length; i++) {
      if (vowels.indexOf(s[i]) === -1) {
        newS += s[i]
      }  else {
        newS += '!'
      }
    }
    return newS
  }

//   make the first character in the string "word" upper case
  function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

//   Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
  function remove (string) {
    if(string[string.length - 1] === "!"){
      return string.slice(0, string.length - 1)
    }  else {
      return string
    }
  }

//   Complete the function which converts hex number (given as a string) to a decimal number.
  function hexToDec(hexString){
    return parseInt(hexString, 16)
  }

















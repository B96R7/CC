// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
function checkExam(array1, array2) {
    let score = 0
    
    for(let i = 0; i < array1.length; i++){
      if(array1[i] === array2[i]){
        score += 4
      } else if(array2[i] === ""){
        score += 0 
      } else {
        score -= 1
      }
      
    } if(score < 0) {
      return 0
    } else {
      return score
    }
  }

//   Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
function capitals(word) {
    let caps = [];
    for(let i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() === word[i]) caps.push(i);
    }
    return caps;
  }

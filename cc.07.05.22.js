// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"
function leo(oscar){
    if(oscar > 88){
      return "Leo got one already!"
    } else if(oscar === 88){
      return "Leo finally won the oscar! Leo is happy"
    } else if(oscar === 86){
      return "Not even for Wolf of wallstreet?!"
    } else {
      return "When will you give Leo an Oscar?"
    }
  }

//   Time to test your basic knowledge in functions! Return the odds from a list
function odds(values){
    // arrow it
    return values.filter(v => v % 2);
  }

//   Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
function combineNames(a, b){
    return a + ' ' + b
  }

//   Create a function that takes a number as an argument and returns a grade based on that number.
  function grader(score) {
    if(score > 1 || score < .6){
      return "F"
    } else if(score >= .9){
      return "A"
    } else if(score >= .8){
      return "B"
    } else if(score >= .7){
      return "C"
    } else {
      return "D"
    }
  }



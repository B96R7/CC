// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = function(l , w) {
    return w === l ? w * l : 2*w + 2*l
  };

//   Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
  function removeExclamationMarks(s) {
    return s.split('!').join('')
  }

//   Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
  function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  }

//   Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
  function getGrade (s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3
    if(90 <= score && score <= 100){
      return 'A'
    } else if(80 <= score && score < 90){
      return 'B'
    } else if(70 <= score && score < 80){
      return 'C'
    } else if(60 <= score && score < 70){
      return 'D'
    } else {
      return 'F'
    }
  }





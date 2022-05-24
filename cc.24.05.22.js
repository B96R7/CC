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

//   The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
  function cockroachSpeed(s) {
    return Math.floor((s * 100000) / (60 * 60))
  }

//   The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
  function setAlarm(employed, vacation){
    return employed && !vacation
  }

//   Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
  function doubleChar(str) {
    return str.split('').map((a) => a + a, 0).join('')
  }

//   Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
  function updateLight(current) {
    if(current === "green"){
      return "yellow"
    } else if(current === "yellow"){
      return "red"
    } else {
      return "green"
    }
  }

//   You have to write a function that accepts three parameters:
  function enough(cap, on, wait) {
    return (on+wait > cap) ? on+wait-cap : 0;
  }




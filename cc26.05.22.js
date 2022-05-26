// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }

//   Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//   In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
  function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    )
  }

//   In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
  function findDifference(a, b) {
    return Math.abs((a.reduce((a, b) => a * b)) - (b.reduce((a, b) => a * b)))
  }

//   Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string
function sumStr(a,b) {
    return String(Number(a) + Number(b))
  }

//   write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
  function stringy(size) {
    let str = ''
    for(let i = 1; i <= size; i++)
      str += i % 2
    return str
  }

//   Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
  function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10){
      return 100
    } else if(exam > 75 && projects >= 5){
      return 90
    } else if(exam > 50 && projects >= 2){
      return 75
    } else {
      return 0
    }
  }

//   Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
  }
















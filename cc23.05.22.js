// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
function century(year) {
    return Math.floor((year + 99) / 100)
  }

//   Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// //   Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 !== 0){
      return true
    } else if(flower2 % 2 === 0 && flower1 % 2 !== 0){
      return true
    } else {
      return false
    }
  }

//   It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length)
  }

//   A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
function hero(bullets, dragons){
    return bullets >= 2*dragons ? true : false
  }

//   Write a function which converts the input string to uppercase.
  function makeUpperCase(str) {
    return str.toUpperCase()
  }

//   Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
  function DNAtoRNA(dna) {
    let arr = dna.split('')
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'T'){
        arr[i] = 'U'
      }
    }
    return arr.join('')
  }

//   Create a function which answers the question "Are you playing banjo?".
//   If your name starts with the letter "R" or lower case "r", you are playing banjo!
  function areYouPlayingBanjo(name) {
    let nameToUpper = name.toUpperCase()
    return nameToUpper.split('')[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
  }

//   This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
  function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft >= distanceToPump / mpg ? true : false
  };

//   Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

//   The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
  function sumArray(array) {
    if(array === undefined || array === null || array.length < 3){
      return 0
    } else {
      return array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0)
    }
  }

//   Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
  function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`
  }

//   Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
  function isDivideBy(number, a, b) {
    return (number % a === 0 && number % b === 0)
  }












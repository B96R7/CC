// Write a function that given a floor in the american system returns the floor in the european system.
function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
  }

//   Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x){
    return typeof x === "number" ? x * 50 + 6 : "Error"
  }

//   Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:
  String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }

//   By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
  const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

  const howManyDalmatians = number  => number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));

//   E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
  function tripleTrouble(one, two, three){
    let str = ""
    for(let i = 0; i < one.length; i++){
      str += one[i] + two[i] + three[i]
    }
    return str
   }

//    Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.
   function seatsInTheater(nCols, nRows, col, row) {
    //coding and coding..
    return (nCols-col+1) * (nRows - row)
    
  }

//   For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
function findMultiples(integer, limit) {
    let arr = []
    for(let i = integer; i <= limit; i+= integer){
      arr.push(i)
    }
    return arr
  }

//   Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
function combat(health, damage) {
    return (health - damage) >= 0 ? health - damage : 0
  }

//   Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String)
function hello(name){
    if (name){
      return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
      return "Hello, World!";
    }
  }

//   Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8 
  function pipeFix(numbers){
    let arr = []
    for(let i = numbers[0]; i <= numbers[numbers.length - 1]; i++){
      arr.push(i)
    }
    return arr
  }






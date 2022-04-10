// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
function monkeyCount(n) {
    let arr = []
    for(let i = 1; i < n + 1; i++){
      arr.push(i)
    }
    return arr
}

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum (numbers) {
    return numbers.reduce((acc, c) => acc + c, 0)
};

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash (words) {
    return words.join(" ")
 };

//  Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
function sumMix(x){
    let sum = 0
    for(let i = 0; i < x.length; i++){
      sum += parseInt(x[i])
    }
    return sum
}
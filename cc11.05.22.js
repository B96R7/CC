// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
function smallEnough(a, limit){
    for (let i = 0; i < a.length; i++){
      if (a[i] > limit) {
        return false
      }
    }
    return true
  }

//   Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
  function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
  }

//   Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
function rowWeights(array){
    let arr = [0, 0]
    for (let i = 0; i < array.length; i++) {
      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i]
    }
    return arr
  }

//   Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
  function flattenAndSort(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++)
    {
      for(let j = 0; j<array[i].length; j++)
      {
        newArray.push(array[i][j]);
      }
    }
      
    return newArray.sort((a,b) =>  a-b);
  }
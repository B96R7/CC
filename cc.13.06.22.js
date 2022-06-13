// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
function pairs(array, count = 0) {
    for (let i = 0; i < array.length; i += 2)
      if (Math.abs(array[i] - array[i + 1]) === 1)
        count += 1;
    return count;
  }

//   Your task is to return:
// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby')
  }
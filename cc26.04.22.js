// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" 
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if(name === 'Santa Claus' && password === 'Ho Ho Ho!'){
    return true
  } else {
    return false
  }
};

// You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.
function sixToast(num) {
    if(num === 6){
      return 0
    } else if(num > 6) {
      return num - 6
    } else {
      return 6 - num
    }
  }

//   So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
  function checkTheBucket(bucket){
    if(bucket.includes("gold")){
      return true
    } else {
      return false
    }
  }

//   Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
  function calculateTip(amount, rating) {
    switch(rating.toLowerCase()){
      case "terrible":return 0;
      case "poor":return Math.ceil(amount * 0.05);
      case "good":return Math.ceil(amount * 0.1);
      case "great":return Math.ceil(amount * 0.15);
      case "excellent":return Math.ceil(amount * 0.2);
      default:return "Rating not recognised";
    }
  }
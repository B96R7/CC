// We want to generate a function that computes the series starting from 0 and ending until the given number.
// "0+1+2+3+4+5+6 = 21"
var SequenceSum = (function() {
    function SequenceSum() {}
  
function showSequence(count) {
      var sum = 0;
      var str = "";
      if (count === 0) {
        return "0=0";
      } else if (count < 0) {
        return count + "<0";
      } else {
        for (var i = 0; i < count; i++) {
          sum += i;
          str += i + "+";
        };
      sum += count;
      str += count + " = " + sum;
      return str;
      };
    };
  
    return SequenceSum;
  
  })();
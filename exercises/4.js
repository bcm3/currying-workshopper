let total = 0;

let delay = function (a) {

    if (a === undefined) {
        var result = total;
        total = null;
        return result;
      } else {
        total = total + a;
        return delay;
      }  
    };
  
  module.exports = delay;
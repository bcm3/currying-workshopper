let curry = function (a){
    return function(b){
        return a+b;
    }
}




module.exports = curry;
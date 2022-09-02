function curry(f) { // curry(f)
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
// without currying
function sum(a, b) {
return a + b;
}

let curriedSum = curry(sum);

// currying
console.log(curriedSum(1)(2)); // 3
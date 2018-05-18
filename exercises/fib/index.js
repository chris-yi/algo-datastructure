// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// First solution
// function fib(n) {
//     const fibArr = [0, 1];
//     for(let i = 2; i <= n ; i++) {
//       let num = 1
//       num = fibArr[i - 2] + fibArr[i - 1]
//       fibArr.push(num)
//     }
//     return fibArr[n]
// }

// Better iterative solution
// Runtime complexity === linear runtime (n)
// function fib(n) {
//     const result = [0, 1];

//     for(let i = 2; i <= n; i++) {
//         const a = result[i - 1]
//         const b = result[i - 2]

//         result.push(a + b)
//     }
//     return result[n]
// }


// Solution using Recursion
// Runtime complexity === Exponential Time(2 ^ n)
// function fib(n) {
//     if(n < 2) {
//         return n
//     }
//     return fib(n - 1) + fib(n - 2)
// }


// fib(5)
// With n = 5, it will call fib(4) and fib(3), then fib(4) will call fib(3) and fib(2)..... this continues until it does down to fib(0) and fib(1) in each branch and you sum up all the fib(1) to get the answer.







// If the interviewer ever asks if there is a way we can imporve the recursive solution to fib?

// Answer = memoization

// Memoization : Store the arguments of each function call along with the result.  If the function is called again with the same arguments, return the precomputed result, rather than running the function again.


// Below is a generic memoization function!

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args]
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

function slowFib(n) {
    if(n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}



const fib = memoize(slowFib)







module.exports = fib;

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
function fib(n) {
    if(n < 2) {
        return n
    }
    return fib(n -1) + fib(n - 2)
}



module.exports = fib;

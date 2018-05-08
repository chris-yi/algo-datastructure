// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// First Solution
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// Solution not using reverse()
function reverse(str) {
    let reversed = "";
    for(let character of str) {
        reversed = character + reversed;
    }
    return reversed;
  }

module.exports = reverse;

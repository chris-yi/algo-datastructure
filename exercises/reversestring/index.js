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
// }

// Solution not using reverse()
// function reverse(str) {
//   let reversedStr = "";

//   for (let char of str) {
//     reversedStr = char + reversedStr;
//   }
//   return reversedStr;
// }

// Solution using reduce
  const reverse = (str) => {
    return str.split("").reduce((reversed, curr) => {
      return curr + reversed;
    }, "")
  }
// };

module.exports = reverse;

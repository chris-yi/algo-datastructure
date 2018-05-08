// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// First solution
// function palindrome(str) {
//   let newStr = str
//     .split("")
//     .reverse()
//     .join("");
//   return str === newStr;
// }

// Using the every method (not optimal as you are double checking)
function palindrome(str) {
  str = str.split("");
  return str.every((e, i) => {
    return e === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// First solution
// function vowels(str) {
//     let vowelCount = 0
//     str = str.toLowerCase();
//     for(let char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             vowelCount ++
//         }
//     }
//     return vowelCount
// }

// Second solution using switch
// function vowels(str) {
//     str = str.toLowerCase();
//     let vowelCount = 0;
//     for(let char of str) {
//         switch(char) {
//             case char = "a":
//             case char = "e":
//             case char = "i":
//             case char = "o":
//             case char = "u":
//                 vowelCount ++
//                 break;
//             default:
//             break
//         }
//     }
//     return vowelCount
// }

// Using includes
// function vowels(str) {
//     let count = 0;
//     const vowelChecker = ["a", "e", "i", "o", "u"]
//     for(let char of str.toLowerCase()) {
//         if(vowelChecker.includes(char)) {
//             count++
//         }
//     }
//     return count
// }

// Using regex
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
}




module.exports = vowels;

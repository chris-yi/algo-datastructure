// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const letterMap = {};
    let maxNum = 0;
    let maxChar = ""

    for(let char of str) {
        letterMap[char] ? letterMap[char]++ : letterMap[char] = 1
    }
    for(let char in letterMap) {
        if(letterMap[char] > maxNum) {
            maxNum = letterMap[char];
            maxChar = char
        }
    }
    return maxChar;
}

module.exports = maxChar;

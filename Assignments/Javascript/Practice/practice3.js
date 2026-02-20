/* A pangram is a sentence that contains every letter of the alphabet, like:
    "The quick brown fox jumps over the lazy dog"

Write a function called isPanagram, which checks to see if a given sentence contains every letter of the alphabet. Make sure to ignore string casing

isPanagram('The five boxing wizards jump quickly) //true
isPanagram('The five boxing wizards jump quick') //false
*/

function isPangram(sentence) {
    let lowerCase = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (lowerCase.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
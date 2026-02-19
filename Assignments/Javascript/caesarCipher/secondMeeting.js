const friend = "BRUTUS"
const shiftValue = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let encryptedName = ""
    for(let i=0; i < friend.length; i++) {
        const letter = friend[i];
        const index  = alphabet.indexOf(letter.toLowerCase());
        const updatedIndex = (index+shiftValue) % alphabet.length;
        encryptedName += alphabet[updatedIndex].toUpperCase();
}

/*
Question 1 -  We're looping the code so we don't have to go back to original javascript file and reuse the same code over and over again for each letter of 'BRUTUS's name. This method allows for shorter code and makes it easier to read.

Question 2 - We're using 'alaphabet.length' to aid our code by allowing the usage of the letters index characters (1-26) By adding the modulo (%) it allows us to cycle through the index using the index to wrap all the characters together.
*/


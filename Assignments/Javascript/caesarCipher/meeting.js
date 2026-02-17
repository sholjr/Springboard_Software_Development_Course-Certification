console.log ("Caeser's Secret Meeting w/ friend")


const friend = "BRUTUS"
const shiftValue = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());

// Question 1 - B is the 1st letter because A = 0 in alphabet's index 

const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex]; 

// Question 2 - Using the modulo opperator (%) will use division to wrap the index.  This in turn will allow 28 to give the index of 2 or the third letter "c" 

const encryptedMessage = "EUXWXV";
const teaser = encryptedMessage.slice(0,3);




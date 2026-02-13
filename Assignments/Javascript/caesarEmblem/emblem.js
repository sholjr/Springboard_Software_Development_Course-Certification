const decimal = Math.random()
const range = 33 - 3 + 1;

// Question 1 - The 1 is added to ensure that all 31 numbers are possible to be generated from 3 - 33 without the extra +1 we could be missing an end point. 

const randomRange = decimal * range;

// Question 2 - We're mutiplying the random decimal by the range to keep the range between 0 and 31

const randomInt = Math.floor(randomRange);

// Question 3 -  We're using Math.floor() to always round down to the nearest whole number. We don't want the number to round up to the nearest whole because our count could be off by an additional digit. If the decimal was over 0.5000 it would automatically round up to "1" causing our range to be 1 + 33 - 3 + 1 which would be 32 and would exceed our character by that 1 digit

const shiftValue = randomInt + 3;

// Question 4 - We're adding the 3 to randomInt because there is a chance the random integer could be 0,1, or 2. If this was the case it fall outside of Caesar's 3-33 range. 




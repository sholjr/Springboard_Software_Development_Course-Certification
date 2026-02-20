/* 
Write a getCard() function that returns a random playing card object like:
    {
        value: 'K'
        suit : 'clubs'
    }
Pick a random value from
----2,3,4,5,6,7,8,9,10,J,Q,K,A
Picj a random suit from
----clubs, spades, hearts, diamonds
Return both in an object
*/

function pick(arr) {
    const idx =Math.floor(Math.random() * arr.length);
    return arr[idx]
}

function getCard() {
   const values = ['2','3','4','5','6','7','8','9','A','K','Q','J']
/*
        const valIdx = Math.floor(Math.random() * values.length);

        const value =values[valIdx]

        const suitIdx = Math.floor(Math.random() * suits.length);
        const suit = suits[suitIdx];
            return { value: value, suit: suit };
*/ 

//const value = pick(values);
const suits = ['Clubs','Spades','Hearts','Diamonds']
//const suit = pick(suits);
    //return {value: value, suit: suit};
    return {values: pick(values), suit: pick(suits)}

}


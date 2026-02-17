const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

guests.unshift("BRUTUS");


//Question 1 -- You can check the arrays index to ensure that [0] is equal to BRUTUS.

guests.push ("AUGUSTUS", "LUCIA" );

const spartacusIndex = guests.indexOf("SPARTACUS");

//Question 2 -- If Spartacus wasn't invited to the party then 'indexOf' would return a result of '-1' has he was not found in the list of invitations.

const absent = guests.indexOf("CASSIUS");
guests.splice(absent, 1);

const vip = guests.slice(0, 3);

const theHonoredOne = guests.slice(0,1)
const otherGuests = guests.slice(1)
    otherGuests.sort

const orderedGuestList = theHonoredOne.concat(otherGuests);

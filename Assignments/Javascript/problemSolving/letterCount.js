/*
algorithm LetterCount, takes word, returns a dictionary with letter counts:
	if word is not a string of alphabetical characters:
		print Error and stop

	create a dictionary to hold letter counts

	for each letter in word:
		if dictionary already has the letter:
	        increment the count of the letter by 1
	    else
		    set the count of the letter to 1

	return the dictionary that holds the letter counts

*/

function letterOccurrence (word)
{
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    if (typeof word !== "string")
    {
        console.error("Error");
        return;
    }

    for (const letter of word)
    {
        if(!alphabet.includes(letter.toLowerCase()))
        {
            console.error("Error");
            return;
        }
    }

    let letterCounts = {};

    for( let letter of word)
    {
        let lowerCasedLetters = letter.toLowerCase();
        if (letterCounts[lowerCasedLetters] !== undefined)
        {
            letterCounts[lowerCasedLetters]++;
        }
        else
        {
            letterCounts[lowerCasedLetters] = 1;
        }
    }

    return letterCounts;
}

letterOccurrence("Caesar42");
console.log(letterOccurrence("Caesar"));
console.log(letterOccurrence("AAbaBa"));

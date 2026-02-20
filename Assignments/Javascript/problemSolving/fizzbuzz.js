/*
algorithm FizzBuzz, takes n, returns nothing:
	if n is not a positive integer that is less than 100:
		print Error and stop

	for each integer from 1 to n (both included):
		if the number is divisible by 3:
			print Fizz
		if the number is divisible by 5:
			print Buzz
		if the number is divisible by 3 and 5:
			print FizzBuzz
		if the number is not divisible by 3 or 5:
			print the number
*/
function fizzBuzz (n) 
{
    if (!Number.isInteger(n) || n < 1 || n >=100)
    {
        console.error("Error");
        return;
    }
    for(let i = 1; i <=n; i++)
    {
        const divisableby3 = i % 3;
        const divisableby5 = i % 5;

        if(divisableby3 === 0 && divisableby5 === 0)
        {
            console.log('FizzBuzz')
        }
        else if(divisableby3 === 0) {
            console.log("Fizz")
        }
        else if(divisableby5 === 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }

}

fizzBuzz(0);
fizzBuzz(100);
fizzBuzz(16);
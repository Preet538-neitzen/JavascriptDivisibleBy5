function binaryToDecimal(binary) 
{
	power=0, decimal=0;

	while(binary != 0)
	{
		lastDigit = binary % 10;
		binary = Math.floor(binary / 10);

		decimal = decimal + lastDigit * Math.floor((Math.pow(2, power)));
		power++;
	}

	return decimal;
}

var readline = require('readline-sync');
var n = readline.question('Enter the total number of binary numbers you want to input must by positive');


if(n < 0)
{
	console.log("The input number should be positive");
	return;
}
var binaryArr = [];

console.log("Enter " + n + " binary numbers");
for(var i=0; i<n; i++)
{ 
	  binaryArr[i] = readline.question();
}

console.log("Here are the binary number(s) divisible by 5");

for(var i=0; i<n; i++)
{
	if(binaryToDecimal(binaryArr[i]) % 5 == 0)
	{
		console.log(binaryArr[i]);
	}
}
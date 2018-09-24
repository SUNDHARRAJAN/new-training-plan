var secretNumber=7;

var guessNumber=Number(prompt("enter the Guess Number"));

if(guessNumber === secretNumber)
{
	alert("your are correctly guess a number congrats!");
}

else if(guessNumber>secretNumber)
{
	alert("Too high.Try Again");
}

else
{
	alert("Too low.Try Again");
}

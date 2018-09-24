var age=prompt("enter your age");

if(age<0){
	console.log("enter age is negative age");
}

if(age == 21 || age == 23)
{
	console.log("Happy " + age +" birthday" );
}

if(age % 2 !== 0)
{
	console.log("Your age is odd!");
}
else
{
	console.log("your age is even!");
}

if(age % Math.sqrt(age) === 0)
{
	console.log("Your age is a perfect square!");
}
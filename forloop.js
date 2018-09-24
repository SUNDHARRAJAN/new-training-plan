console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
for(var num=-10;num<=19;num++){
		console.log(num);
}


console.log("PRINT EVEN NUMBERS BETWEEN 10 AND 40");
for(var num1=10;num1<40;num1++)
{
	if(num1 %2 == 0)
	{
	console.log(num1);
	}

}

console.log("PRINT ODD NUMBERS BETWEEN 300 AND 333");
for(var num2=300;num2<=333;num2++)
{
	if(num2 %2 !== 0)
	{
	console.log(num2);
	}
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
for(var i=5;i<=50;i++)
{
	if((i % 5 == 0) && (i% 3 ==0))
	{
	console.log(i);
	}
	
}
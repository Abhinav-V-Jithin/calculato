function operation()
{
	'using strict';
	let op = document.getElementById('OperationHTML').value;
	let Num1 = Number(document.getElementById('Num1').value);
	let Num2 = Number(document.getElementById('Num2').value);
	let result, symbol;
	if(op == "Add")
	{
		result = Num1 + Num2;
		symbol = '+';
	}
	else if(op == "Subtraction")
	{
		result = Num1 - Num2;
		symbol = '-';
	}
	else if(op == "Multiply")
	{
		result = Num1 * Num2;
		symbol = 'x';
	}
	else if(op == "	Division")
	{
		result = Num1 / Num2;
		symbol = ' divided by ';
	}
	document.write(symbol + "This is the symbol" + "<br>");
	document.write("<br>"+`${Num1}`+` ${symbol}`+` ${Num2}`+` = ${result}` + "<br> <br>");
}
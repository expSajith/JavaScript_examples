
var op1;
var op2;
var ans;

function opp(o)
{
	document.getElementById("op").value=o;

}
function answer()
{
	var op=document.getElementById("op").value;
	op1=parseInt(document.getElementById('op1').value);
	op2=parseInt(document.getElementById('op2').value);
	switch(op)
	{
		case '+' : ans=op1+op2;
		break;
		case '-' : ans=op1-op2;
		break;
		case '*' : ans=op1*op2;
		break;
		case '/' : ans=op1/op2;
		break;
	}
	document.getElementById("ans").value=ans;
}

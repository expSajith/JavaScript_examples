
var op1;
var op2;
var ans;

function add()
{
	op1=parseInt(document.getElementById('op1').value);
	op2=parseInt(document.getElementById('op2').value);
	document.getElementById("op").value="+";
	ans=op1+op2;
	alert(op1);
}
function sub()
{
	op1=parseInt(document.getElementById('op1').value);
	op2=parseInt(document.getElementById('op2').value);
	document.getElementById("op").value="-";
	ans=op1-op2;
}
function mul()
{
	op1=parseInt(document.getElementById('op1').value);
	op2=parseInt(document.getElementById('op2').value);
	document.getElementById("op").value="*";
	ans=op1*op2;
}
function div()
{
	op1=parseInt(document.getElementById('op1').value);
	op2=parseInt(document.getElementById('op2').value);
	document.getElementById("op").value="/";
	ans=op1/op2;
}
function answer()
{
	document.getElementById("ans").value=ans;
}

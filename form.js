function validate()
{
	console.log(document.login.name.value);
	var name=document.getElementById('name').value;
	var mob=document.getElementById('mob').value;
	var email=document.getElementById('email').value;
	var cookieval=escape(document.login.name.value)+";";
		document.cookie="name="+cookieval;
	var allcookies = document.cookie;
     document.write ("All Cookies : " + allcookies );
	if(name.length<1)
	{
		document.getElementById('para1').innerHTML="enter your name";
		document.getElementById('para1').style.color='red';
		
		return false;
	}
	else if(mob.length!=10)
	{
		document.getElementById('para2').innerHTML="enter correct mobile number";
		document.getElementById('para2').style.color='red';
		
		return false;
	}
	else if(email.length<1)
	{
		document.getElementById('para3').innerHTML="enter email id";
		document.getElementById('para3').style.color='red';
		
		return false;
	}
	else{
		return true;
	}
		
}

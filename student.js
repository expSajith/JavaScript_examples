var p="<p>";
var p1="</p>";
function Student()
{

	this.readInfo=function(info)
	{
		console.log("readInfo");
		this.name=info[0];
		this.address=info[1];
		this.phone=info[2];
		this.fname=info[3];
		console.log(this.name);
		console.log(this.address);
		console.log(this.phone);
		console.log(this.fname);
	}
	this.readClass=function(info)
	{
		this.std=info[0];
		this.number=info[1];
		this.school=info[2];
		console.log(this.std);
		console.log(this.number);
		console.log(this.school);
	}
	this.displayInfo=function()
	{
		document.getElementById("show_info").innerHTML=p+"name :"+this.name+p1+p+"address :"+this.address+p1+p+"phone:"+this.phone+p1+p+"Father's name :"+this.fname+p1;
	}
	this.displayClass=function()
	{
		document.getElementById("show_class").innerHTML=p+"standard :"+this.std+p1+p+"roll no :"+this.number+p1+p+"school:"+this.school+p1;
	}
}
var obj=new Student();
function read()
{
	console.log("read");
	var info=[];
	var n;
	n=document.getElementById("sName").value;
	info.push(n);
	n=document.getElementById("address").value;
	info.push(n);
	n=document.getElementById("phone").value;
	info.push(n);
	n=document.getElementById("fName").value;
	info.push(n);
	obj.readInfo(info);
	return false;
}
function read_class()
{
	console.log("read class");
	var info=[];
	var n;
	n=document.getElementById("std").value;
	info.push(n);
	n=document.getElementById("roll").value;
	info.push(n);
	n=document.getElementById("school").value;
	info.push(n);
	obj.readClass(info);
	return false;
}
function display_info()
{
	obj.displayInfo();
}
function display_class()
{
	obj.displayClass();
}


// Class Person have variables name and mob,
//  And a prototype which add a method read() to assign and print values of name and mob.


function Person()
{
	this.name=null;
	this.mob=null;
}
Person.prototype.read=function(name,mob){
	this.name=name;
	this.mob=mob;
	document.getElementById('para').innerHTML="Name:"+this.name;
	document.getElementById('para1').innerHTML="Mobile:"+this.mob;
}

 // students Class contain its own variable school and a method input for reading  and displaying school.
 // Class person is inherited by student, now students class can access name and mob using the method read()

function students()
{
	this.input=function(s)
	{
		this.school=s;
		document.getElementById('para3').innerHTML="School:"+this.school;
	}
}

students.prototype=Object.create(Person.prototype);
var student=new students();

// method get is called when button is clicked, inside the get() method read() is invoked using object of class students.

function get()
{
	var name=document.getElementById('name').value;
	var mob=document.getElementById('mob').value;
	var s=document.getElementById('school').value;
	student.read(name,mob);
	student.input(s);
}
var obj=new Age();
function Age()
{
	this.calculate=function(age)
	{
			this.age=age;
			var year=(new Date()).getFullYear();
			if(this.age>=0 && !isNaN(this.age))
			{
				document.getElementById("para").innerHTML="Birth Year is  "+(year-this.age);
			}
			else
			{
				alert("Invalid age");
			}
	}

}
function findYear()
{

	obj.calculate(parseInt(document.getElementById("age").value));
	
}
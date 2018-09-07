/*var myday=document.getElementById("day");
	
myday.onload= function(){ //on load this is for facebook page
		 "use strict";
		var days;
	document.write("<select>");
   for(days=1;days<=31;days=days+1)
		{
			document.write("<option>"+days+"</option>");
		}
	  document.write("</select>");
	 };*/
   $(document).ready(function(){
	   
	    "use strict";
	   
	   for(var i=1905;i<=2017;i++)
	  {
		 
		  $("<option>",{value:i,text:i}).appendTo($("#years"));
	  }
	   for(var i=1;i<=31;i++)
	  {
		  $("<option>",{value:i,text:i}).appendTo($("#days"));
	  }
	   var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	   
	    for(var i=0;i<=month.length;i++)
	  {
		  $("<option>",{value:month[i],text:month[i]}).appendTo($("#months"));
	  }
   });
	   
   
   
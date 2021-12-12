var $ = function (id)
{
    return document.getElementById(id);
}

var calculateTotalSleep= function()
{
	//define user input variables
	var userFirstName = $("firstname").value;
	var userAge = $("age").value;
	var userHoursSlept = $("hours_slept").value;
	
	//convert strings to ints
	var userAgeInt = parseInt(userAge);
	var userHoursSleptInt = parseInt(userHoursSlept);
	
	//perform calculations
	var userTotalSleep = userAgeInt * (userHoursSleptInt / 24);
	var userTotalSleepRounded = Math.round(userTotalSleep);
	
	//generate final string and link it to the HTML code
	var finalMessage = "Hello " + userFirstName + ", you have slept for a total of " +
	userTotalSleepRounded + " years.";
	$("final_message").innerHTML = finalMessage;
}

window.onload = function ()
{
   $("mybutton").onclick = calculateTotalSleep;
}
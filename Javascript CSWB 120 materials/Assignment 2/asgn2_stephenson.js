var $ = function (id)
{
    return document.getElementById(id);
}

var processInfo = function()
{
	//define variables from user inputs from html
	var userFirstName = $("firstname").value;
	var userLastName = $("lastname").value;
	var userNumPets = $("numpets").value;
	var userNumPetsInt = parseInt(userNumPets);
	
	//defining an empty variable for our for loop
	var petNames = "";
	
	//defining date and formatting
	var today = new Date();
	var todaymm = today.getMonth() + 1;
	var todaydd = today.getDate();
	var todayyyy = today.getFullYear();
	//combining date format into a single variable to make final string cleaner
	var finalDate = todaymm + "-" + todaydd + "-" + todayyyy;
	
	//defining an error flag to verify for final message
	var errorFlag = "N";
	
	
	//error message for first name
	if (userFirstName == "") 
	{
		$("firstname_error").innerHTML = "Please enter your first name";
		errorFlag = "Y";
	}
	else
	{
		$("firstname_error").innerHTML = "";
	}
	
	//error message for last name
	if (userLastName == "")
	{
		$("lastname_error").innerHTML = "Please enter your last name";
		errorFlag = "Y";
	}
	else
	{
		$("lastname_error").innerHTML = "";
	}
	
	//error message for number of pets
	if (userNumPets != "")
	{
		if (userNumPetsInt < 0 || userNumPetsInt > 3)
		{
			$("numpets_error").innerHTML = "Please enter a valid number of pets (0-3)";
			errorFlag = "Y";
		}
		else
		{
			//for loop to construct our petName string
			//will continue if no name is entered rather than giving an error
			for (cntr = 1; cntr < userNumPetsInt + 1; cntr++)
			{
				var petID = "pet" + cntr;
				var petName = $(petID).value;
				if (petName == "")
				{
					continue
				}
				petNames += "Your Pet #" + cntr + " is named " + petName + ". ";
			}
			$("numpets_error").innerHTML = "";
		}
	}
	else
	{
		$("numpets_error").innerHTML = "Please enter how many pets you have (0-3)";
		errorFlag = "Y";
	}
	
	
	//Final Print: will only execute if there are no error flags
	if (errorFlag == "N")
	{
		$("message").innerHTML = "Your Name is listed as " + userLastName + ", " + 
		userFirstName + " and today's date is " + finalDate + ". " + petNames;
	}
	else
	{
		$("message").innerHTML = ""
	}
}

window.onload = function ()
{
   $("mybutton").onclick = processInfo;
}
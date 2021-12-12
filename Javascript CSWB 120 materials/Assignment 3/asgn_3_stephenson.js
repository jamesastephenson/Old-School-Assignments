var $ = function (id)
{
    return document.getElementById(id);
}

//validateItems() will contain logic statements to check if the user input-
//-is the proper format to submit
var validateItems = function()
{
	var firstName = $("firstname").value;
	var lastName = $("lastname").value;
	var email = $("email").value;
	var city = $("city").value;
	var donation = $("donation").value;

	var errorFlag = "N";
	
	//verify that first name field is filled
	if (firstName == "")
	{
		$("firstnameerror").innerHTML = "Please enter your first name.";
		errorFlag = "Y";
	}
	else
	{
		$("firstnameerror").innerHTML = "";
	}
	
	//verify that last name field is filled
	if (lastName == "")
	{
		$("lastnameerror").innerHTML = "Please enter your last name.";
		errorFlag = "Y";
	}
	else
	{
		$("lastnameerror").innerHTML = "";
	}
	
	//verify that email field is filled
	if (email == "")
	{
		$("emailerror").innerHTML = "Please enter your email address.";
		errorFlag = "Y";
	}
	else
	{
		$("emailerror").innerHTML = "";
	}
	
	//verify that the city field is not "-" option on dropdown
	if (city == "-")
	{
		$("cityerror").innerHTML = "Please select a city of residence.";
		errorFlag = "Y";
	}
	else
	{
		$("cityerror").innerHTML = "";
	}
	
	//verify that donation field is filled and is a value
	if (donation == "" || isNaN(parseInt(donation)) == true)
	{
		$("donationerror").innerHTML = "Please enter a valid, numeric donation value (Minimum: 0)";
		errorFlag = "Y";
	}
	else
	{
		$("donationerror").innerHTML = "";
	}
	
	if (errorFlag != "Y")
	{
		return true
	}
	else
	{
		return false
	}
}

//addPatrons uses the validateItems function to see if the form is valid-
//-addPatrons then submits the form if true and sends an error message if false
var addPatrons = function()
{
	var isValid = validateItems();
	if (isValid == true)
	{
		$("endmessage").innerHTML = "";
		$("myform").submit();
	}
	else
	{
		$("endmessage").innerHTML = "Patron Not Added!";
	}
}

var clearFields = function()
{
	//defining html code lines to re-create dropdown menu
	var dropdown1 = '<option value="-">-</option>';
	var dropdown2 = '<option value="Chicago">Chicago</option>';
	var dropdown3 = '<option value="Detroit">Detroit</option>';
	var dropdown4 = '<option value="Toronto">Toronto</option>';
		
	$("firstname").innerHTML = "";
	$("lastname").innerHTML = "";
	$("email").innerHTML = "";
	$("donation").innerHTML = "";
	//re-creating the dropdown menu html with this string concatenation
	$("city").innerHTML = dropdown1 + dropdown2 + dropdown3 + dropdown4;
	
	$("firstnameerror").innerHTML = "";
	$("lastnameerror").innerHTML = "";
	$("emailerror").innerHTML = "";
	$("cityerror").innerHTML = "";
	$("donationerror").innerHTML = "";
	$("endmessage").innerHTML = "";
}


window.onload = function ()
{
   $("addpatron").onclick = addPatrons;
   $("clearfields").onclick = clearFields;
}
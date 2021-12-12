$(document).ready(function() {
	
	//defining empty variables globally to be used across functions
	var firstName = "";
	var lastName = "";
	var gender = "";
	//note: genderFull is to account for the gender form data being abbreviated 
	var genderFull = "";
	var yearsExperience = "";
	//note: building final message with multiple chunking variables for line spacing
	var message_1 = "";
	var message_2 = "";
	var message_3 = "";
	
	//initializing the click event
	$("#mysubmit").click(function() {
		//retrieving values from the html using jquery val() method
		firstName = $("#first_name").val();
		lastName = $("#last_name").val();
		//note: special syntax for getting the val of a radio button
		gender = $("input[name='gender']:checked").val();
		yearsExperience = $("#years").val();
		
		//logic statements grow in complexity as the form is filled out
		//this is to account for the focus() method needing to apply in the correct order for the form
		//video example did not show all errors at once, so made sure to code this in a similar fashion 
		
		//no first name condition
		if (firstName == "")
		{
			$("#first_error").html("You must enter a First Name");
			//use the focus() event method to move cursor to appropriate text box
			$("#first_name").focus();
		}

		//first name but no last name condition
		if (firstName != "" && lastName == "")
		{
			$("#first_error").html("");
			//clear previous errors, display relevant error message
			$("#last_error").html("You must enter a Last Name");
			//use the focus() event method to move cursor to appropriate text box
			$("#last_name").focus();
		}
		
		//first and last name present, but no gender selected
		if (firstName != "" && lastName != "" && gender == null)
		{
			$("#first_error").html("");
			$("#last_error").html("");
			//clear previous errors, display relevant error message
			$("#gender_error").html("You must choose a Gender")
		}
		
		//first and last name present, gender selected (!= null), years experience not selected
		if (firstName != "" && lastName != "" && gender != null && yearsExperience == "-")
		{
			$("#first_error").html("");
			$("#last_error").html("");
			$("#gender_error").html("");
			//clear previous errors, display relevant error message
			$("#years_error").html("You must choose select a number")
		}
		
		//all variables present, program is now able to give full result and final message
		if (firstName != "" && lastName != "" && gender != null && yearsExperience != "-")
		{
			//clear all error messages by affecting the html
			$("#first_error").html("");
			$("#last_error").html("");
			$("#gender_error").html("");
			$("#years_error").html("");
			
			//quick logic statement to get genderFull for final message
			if (gender == "M")
			{
				genderFull = "Male";
			}
			if (gender == "F")
			{
				genderFull = "Female";
			}
			
			//apply CSS to the background div, affecting background-color attribute
			$("#message").css("background-color", "yellow");
			
			//construct final message through concatenation
			//note: added HTML tags to account for CSS formatting
			message_1 = "<h2>Employment Stats for " + firstName + " " + lastName + "</h2>";
			message_2 = "<p>You are a: " + genderFull + "</p>";
			message_3 = "<p>You have: " + yearsExperience + " years experience</p>";
			//construct final message and apply to the html 
			$("#message").html(message_1 + message_2 + message_3);
		}
	}) //end of click
	
}) //end of ready
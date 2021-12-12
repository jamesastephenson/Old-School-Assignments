//James Stephenson Asgn 7

//defining global variables
var firstName = "";
var lastName = "";
var startDate = "";
var signUpMessage = "";
var chosenPlan = "";  //used as a trigger variable for future logic statements

var callback = function() //defining callback function globally for use in effects later
	{
		setTimeout(function()
		{
			$("#feelingWindow").removeAttr("style").fadeIn();
		}, 100);
	}

//beginning of ready function
$(document).ready(function() {
	
	//jquery for tab widget
	$("#tabs").tabs();
	
	//jquery for datepicker widget
	$("#datePicker").datepicker();
	
//START OF "SIGN UP" TAB -----------------------------
	//initializing click event for Sign Up tab
	//validator for the account form
	$("#createAccount").click(function() {
		//extract values from html using .val() method
		firstName = $("#firstName").val();
		lastName = $("#lastName").val();
		startDate = $("#datePicker").val();
		
		//basic validation for first name
		if (firstName == "")
		{
			$("#firstError").html("You must enter your first name");
		}
		else
		{
			$("#firstError").html("");
		}
		
		//basic validation for last name
		if (lastName == "")
		{
			$("#lastError").html("You must enter your last name");
		}
		else
		{
			$("#lastError").html("");
		}
		
		//basic validation for start date
		//this will use the datepicker() widget we set up earlier
		if (startDate == "")
		{
			$("#dateError").html("You must select a starting date");
		}
		else
		{
			$("#dateError").html("");
		}
		
		//condition for when all fields are filled
		if (firstName != "" && lastName != "" && startDate !="")
		{
			//construct sign up message and assign to html
			signUpMessage = "<br><br>Success: " + firstName + " " + lastName + "<br>";
			signUpMessage += "Use the Start Date as your Password";  //concatenate message string
			$("#signUpError").html("");  //clear error message
			$("#signUpMessage").html(signUpMessage);
		}
		else  //error condition in this case
		{
			$("#signUpError").html("Please fill out all info");
		}
	})
//END OF "SIGN UP" TAB -------------------------------------
	
	
//START OF "PICK A PLAN" TAB ---------------------------------
	//initializing draggable function
	$(".draggable").draggable(
		{cursor: "move"});
	
	//initializing droppable function
	$(".droppable").droppable({
		drop: function(event, ui) {
			//logic statement for which draggable object is dropped in 
			if (ui.draggable.attr("id") == "greatPlan")
			{
				chosenPlan = "Great";
				$(this).addClass(
				"dropped").find("p").html("Great Plan Picked!");
			}
			if (ui.draggable.attr("id") == "poorPlan")
			{
				chosenPlan = "Poor";
				$(this).addClass(
				"dropped").find("p").html("Poor Plan Picked!");
			}
		}
	});
//END OF "PICK A PLAN" TAB --------------------------------------
	
	
//START OF "HOW DO YOU FEEL" TAB ----------------------------------
	//initializing click event for How Do You Feel tab
	$("#feelingClick").click(function() {
		var options = [];  //defining empty list variable for use in the effects methods
		
		//logic statement for each plan chosen, using chosenPlan as the flag/trigger variable
		if (chosenPlan == "")
		{
			//change html text
			$("#feelingText").html("I don't know");
			//apply bounce effect w/ callback
			$("#feelingWindow").effect("bounce", options, 1000, callback);
		}
		
		if (chosenPlan == "Great")
		{
			//change html text and css
			$("#feelingText").html("Great!");	
			$("#feelingText").css("color", "Green");
			//apply blind effect w/ callback
			$("#feelingWindow").effect("blind", options, 1000, callback);
		}
		
		if (chosenPlan == "Poor")
		{
			//change html text and css
			$("#feelingText").html("My head hurts!");
			$("#feelingText").css("color", "Red");
			//apply shake effect w/ callback
			$("#feelingWindow").effect("shake", options, 1000, callback);
		}
	}); //end of click event
//END OF "HOW DO YOU FEEL" TAB ---------------------------------
	
}); //end of ready function

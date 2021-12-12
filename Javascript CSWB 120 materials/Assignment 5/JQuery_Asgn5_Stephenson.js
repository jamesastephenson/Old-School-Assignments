$(document).ready(function() {
	//defining clickedImage and imageFlag variables here to preserve scope
	//we want the clickedImage name used in the finalString
	var clickedImage = "";
	var imageFlag = "";
	
	//editing border for when image is hovered over
	$("img").hover(
		function() {
			$(this).css("border", "outset 10px")	
		}), //end mousein, comma here for both parts of hover handlers
	$("img").mouseout(
		function() {
			$(this).css("border", "none")
		}) //end mouseout
	
	//clicking on image event
	$("#vacationimages img").click( 
		function() {
			clickedImage = $(this).attr("alt");
			imageFlag = "Y"
			
			//each if statement changes the source attribute for #currentimage to the corresponding image
			if (clickedImage == "Mountain Vacation")
			{
				$("#bigimage #currentimage").attr("src", "http://profperry.com/Classes20/JQuery/mountain.jpg");
				$("#imagedesc").text(clickedImage);
				$("#bigimage").css("display", "block");
				return imageFlag;
				return clickedImage;
			}
			
			if (clickedImage == "Desert Vacation")
			{
				$("#bigimage #currentimage").attr("src", "http://profperry.com/Classes20/JQuery/desert.jpg");
				$("#imagedesc").text(clickedImage);
				$("#bigimage").css("display", "block");
				return imageFlag;
				return clickedImage;
			}
			
			if (clickedImage == "Ocean Vacation")
			{
				$("#bigimage #currentimage").attr("src", "http://profperry.com/Classes20/JQuery/ocean.jpg");
				$("#imagedesc").text(clickedImage);
				$("#bigimage").css("display", "block");
				return imageFlag;
				return clickedImage;
			}
		})  //end of image click event
		
	//name entry submit event, activates when submitme button is clicked
	$("#submitme").click( function() {
		var firstName = $("#firstname").val();
		
		//error message for blank name entry
		if (firstName == "")
		{
			$("span").text("Must enter first name");
			return;
		}
		//removes error message once name is entered
		else 
		{
			$("span").text("");
		}
		
		//name must be entered and image must be selected
		//this will give our finalString
		if (firstName != "" && imageFlag == "Y")
		{
			//FIX ALL THIS, MAINLY NAME AND IMAGE FLAGS
			$("span").text("");
			nameFlag = "Y";
			var finalString = firstName + " you want a " + clickedImage;
			
			$("#submitdiv #mymessage").text(finalString);
		}
	}) //end of submitme click event
	
	
	//hide button event
	//makes the showhidebutton hide/show the image and changes text to reflect status
	$("#showhidebutton").click( function() {
		hideButtonVal = $(this).attr("value");
		
		if (hideButtonVal == "Hide Image")
		{
			$(this).attr("value", "Show Image");
			$("#bigimage").hide("slow");
		}
		
		if (hideButtonVal == "Show Image")
		{
			$(this).attr("value", "Hide Image");
			$("#bigimage").show("slow");
		}
	})  //end of hide button event
}) //end of ready
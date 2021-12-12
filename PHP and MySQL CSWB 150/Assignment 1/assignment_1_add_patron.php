<!doctype html>
<html lang="en">

<head>
	<meta chraset="utf-8">
	<title>James Stephenson CWB 150 - Assignment 1: Add Patron</title>
	
	<link rel="stylesheet" href="css/assignment_1.css">
	
</head>

<body>
	<div id="logo">
		<img src="http://profperry.com/Classes20/PHPwithMySQL/KingLibLogo.jpg" alt="King Real Estate logo">
	</div>
	
	<p id="promptText">Thank you for registering!</p>
	
	<?php
		//extract data from the form and put them into variables
		$firstName = $_POST['firstName'];
		$lastName = $_POST['lastName'];
		$email = $_POST['email'];
		$cityName = $_POST['cityName'];
		
		//concatenate the first and last names into a single variable 
		$fullName = $firstName." ".$lastName;
		
		//lay out the full print statements with our new variables
		print "<p id='registerInfo'>Name: ".$fullName;
		print "<br>Email: ".$email;
		print "<br>City: ".$cityName."</p>"
	?>
</body>
</html>
	
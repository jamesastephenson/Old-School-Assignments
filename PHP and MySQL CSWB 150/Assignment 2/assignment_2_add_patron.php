<!doctype html>
<html lang="en">

<head>
	<meta chraset="utf-8">
	<title>James Stephenson CWB 150 - Assignment 2: Add Patron</title>
	
	<link rel="stylesheet" href="css/KingLib_2.css">
	
</head>

<body>
	<div id="logo">
		<img src="http://profperry.com/Classes20/PHPwithMySQL/KingLibLogo.jpg" alt="King Real Estate logo">
	</div>
	
	<?php
		print "<div id='formField'>";
		//extract data from the form and put them into variables
		$firstName = $_POST['firstName'];
		$lastName = $_POST['lastName'];
		$email = $_POST['email'];
		$birthYear = $_POST['birthYear'];
		$cityName = $_POST['cityName'];
		
		//extract the current year variable 
		$currentYear = date('Y');
		
		//defining section as an empty string to change later
		$section = "";
		
		//setting a validation flag to Y by default
		//will become N if it encounters an error in the validator
		$validationFlag = 'Y';
		
		//run validation for firstName field
		if (empty($firstName))
		{
			$validationFlag = 'N';
			print "<p>Error: You must enter a First Name</p><br>";
		}
				
		//run validation for lastName field
		if (empty($lastName))
		{
			$validationFlag = 'N';
			print "<p>Error: You must enter a Last Name</p><br>";
		}
		
		//run validation for email field
		if (empty($email))
		{
			$validationFlag = 'N';
			print "<p>Error: You must enter an Email Address</p><br>";
		}
		
		//run validation for birth year
		if (empty($birthYear) || !is_numeric($birthYear))
		{
			$validationFlag = 'N';
			print "<p>Error: You must enter a Numeric Birth Year</p><br>";
		}
		else
		{
			$approximateAge = $currentYear - $birthYear;
			
			//nested if statement to find which section the user is in
			if ($approximateAge > 0 && $approximateAge <= 15)
			{
				$section = "Children";
			}
			elseif ($approximateAge > 15 && $approximateAge <= 54)
			{
				$section = "Adult";
			}
			elseif ($approximateAge >= 55)
			{
				$section = "Senior";
			}
			else
			{
				print "<p>Error: You cannot be born in the future</p><br>";
				$validationFlag = 'N';
			}
		}
		
		//run validation for city of residence
		if ($cityName == "-")
		{
			$validationFlag = 'N';
			print "<p>Error: You must select a City</p><br>";
		}
		
		if ($validationFlag == 'Y')
		{
			//concatenate the first and last names into a single variable 
			$fullName = $firstName." ".$lastName;
		
			print "<p>Thank you for registering!</p>";

			//lay out the full print statements with our new variables
			print "<p>Name: ".$fullName;
			print "<br>Email: ".$email;
			print "<br>Section: ".$section;
			print "<br>City: ".$cityName."</p>";
		}
		else
		{
			print "<p>Please GO BACK and try again</p>";
		}
		print "</div>";
	?>
</body>
</html>
	
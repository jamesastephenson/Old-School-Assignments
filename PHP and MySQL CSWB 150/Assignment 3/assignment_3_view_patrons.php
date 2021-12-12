<!doctype html>
<html lang="en">

<head>
	<meta chraset="utf-8">
	<title>James Stephenson CWB 150 - Assignment 3: View Patrons</title>
	
	<link rel="stylesheet" href="css/KingLib_3.css">
	
</head>

<body>
	<div id="logo">
		<img src="http://profperry.com/Classes20/PHPwithMySQL/KingLibLogo.jpg" alt="King Real Estate logo">
	</div>

	<div id="formField">
	<h1>View Patrons</h1>
	
	<table border="1">
		<tr>
			<th>Last Name</th>
			<th>First Name</th>
			<th>Email</th>
			<th>City</th>
			<th>Birth Year</th>
		</tr>
		
	<?php
	//define fileName variable
	$fileName = "data/patrons.txt";
	
	//logic statement to check if the file is populated
	if (file_exists($fileName))
	{
		echo "";
	}
	else
	{
		echo "No Patrons Found";
	}
	
	//define empty display string to append to
	$display = "";
	//define counter variable for loop 
	$lineCounter = 0;
	
	//define empty variables for each piece of user info
	$lastName = "";
	$firstName = "";
	$email = "";
	$city = "";
	$birthYear = "";
	
	//open file in read mode
	$filePointer = fopen($fileName, 'r');
	
	//loop will continue until we tell it to stop
	while(true)
	{
		//fgets() retrieves one line of file
		$line = fgets($filePointer);
		
		//break from loop if the end of the txt file is reached
		if (feof($filePointer))
		{
			break;
		}
		
		//increase counter by 1
		$lineCounter++;
		//take modulo of counter in order to achieve zebra stripe effect
		$lineCounterRemainder = $lineCounter % 2;
		
		//styling zebra stripe effect for table 
		//even gets #FFFFCC, odd gets white
		if ($lineCounterRemainder == 0)
		{
			$style = "style='background-color: #FFFFCC;'";
		}
		else
		{
			$style = "style='background-color: white;'";
		}
		
		list($lastName, $firstName, $email, $city, $birthYear) = explode('|',$line);
		
		$display .= "<tr $style>";
			$display .="<td>".$lastName."</td>";
			$display .="<td>".$firstName."</td>";
			$display .="<td>".$email."</td>";
			$display .="<td>".$city."</td>";
			$display .="<td>".$birthYear."</td>";
		$display .= "</tr>\n";
	}
	
	fclose($filePointer);
	
	print $display;
	?>
	
	</table>
	</div>
</body>
</html>
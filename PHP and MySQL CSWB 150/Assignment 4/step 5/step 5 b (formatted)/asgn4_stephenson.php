<!doctype html>
<html lang="en">

<head>
	<meta chraset="utf-8">
	<title>James Stephenson CSWB 150 - Assignment 4</title>
</head>

<body style="background-color: lightblue;">
	<div id="logo">
		<img src="http://profperry.com/Classes20/PHPwithMySQL/KingLibLogo.jpg" alt="King Real Estate logo">
	</div>
	
	<h2>Current Titles</h2>
	
	<?php
		//Gather Data From Form
		$userSearch = $_POST['userSearch'];
		$searchOrder = $_POST['searchOrder'];
		
		//define display variable to build on for final output
		$display = "<table border='1'>
					<tr>
						<th>Title</th>
						<th>ISBN</th>
						<th>Type</th>
						<th>Publication Date</th>
					</tr>";
		
		processSearch($userSearch, $searchOrder);
		print $display;
			
		function processSearch($searchTerm, $sortOrder)
		{
			//**********************************
			//Defining Variables
			//**********************************
			$filename = 'data/'.'booklist.txt';
			
			//set display as a global variable since it was defined outside function
			global $display;
			
			//define empty array to append to
			$bookArray = array();
			
			//empty variables for each heading's values
			$title = '';
			$isbn = '';
			$type = '';
			$publicationDate = '';
			
			//line counter for zebra stripe styling effect
			$line_ctr = 0;
			
			//****************************
			//Open file and populate array
			//****************************
			$fp = fopen($filename, 'r');  //open in read mode
			
			//loop through file until end is reached, push each line into array
			while(true)
			{
				//read line by line through file
				$line = fgets($fp);
				
				//break if the end of the file is reached
				if (feof($fp))
				{
					break;
				}
			
				//will append the full $line to corresponding index value
				array_push($bookArray, $line);
			}
			//close file
			fclose($fp);
		
			//*************************************************************************************
			//logic statement to determine sorting order (sort for ascending, rsort for descending)
			//*************************************************************************************
			if ($sortOrder == 'ascending')
			{
				sort($bookArray);
				
				//iterate through the array with a foreach loop
				foreach($bookArray as $row)
				{
					//explode function, use * to delimit data and set them to appropriate variables
					list($title, $type, $publicationDate, $isbn) = explode('*',$row);
					
					//create zebra strype effect with line counter and remainder
					$line_ctr++;
					$line_ctr_remainder = $line_ctr % 2;
				
					if ($line_ctr_remainder == 0)
					{
						$style = "style='background-color: #FFFFCC;'";
					}
					else
					{
						$style = "style='background-color: white;'";
					}
					
					$display .= "<tr $style>";
						$display .= "<td>".$title."</td>";
						$display .= "<td>".$isbn."</td>";
						$display .= "<td>".$type."</td>";
						$display .= "<td>".$publicationDate."</td>";
					$display .= "</tr>\n";
				}
				$display .= "</table>";
				return $display;
			}
			else
			{
				rsort($bookArray);
				
				//iterate through the array with a foreach loop
				foreach($bookArray as $row)
				{
					//explode function, use * to delimit data and set them to appropriate variables
					list($title, $type, $publicationDate, $isbn) = explode('*',$row);
					
					//create zebra strype effect with line counter
					$line_ctr++;
					$line_ctr_remainder = $line_ctr % 2;
				
					if ($line_ctr_remainder == 0)
					{
						$style = "style='background-color: #FFFFCC;'";
					}
					else
					{
						$style = "style='background-color: white;'";
					}
					
					//building table line in each loop 
					$display .= "<tr $style>";
						$display .= "<td>".$title."</td>";
						$display .= "<td>".$isbn."</td>";
						$display .= "<td>".$type."</td>";
						$display .= "<td>".$publicationDate."</td>";
					$display .= "</tr>\n";
				}
				$display .= "</table>";
				return $display;
			}
		}
		
		/*Part 3 code
		function openFile($a_file)
		{
			$fp = fopen($a_file, 'r'); //opens in read mode
			
			while (true)
			{
				$line = fgets($fp);
		
				//break if the end of the file is reached
				if (feof($fp))
				{
					break;
				}
				
				$line_ctr++;
				$line_ctr_remainder = $line_ctr % 2;
				
				if ($line_ctr_remainder == 0)
				{
					$style = "style='background-color: #FFFFCC;'";
				}
				else
				{
					$style = "style='background-color: white;'";
				}
				
	
				if ($userSearch == '')
				{
					//use the explode function to break up each item into variables
					//note: these are put in the order they appear in the txt file-
					//-they will be ordered differently in the table
					list($title, $type, $publicationDate, $isbn) = explode('*',$line);
					
					$display .= "<tr $style>";
						$display .= "<td>".$title."</td>";
						$display .= "<td>".$isbn."</td>";
						$display .= "<td>".$type."</td>";
						$display .= "<td>".$publicationDate."</td>";
					$display .= "</tr>\n";
				}
			}
			fclose($fp);
			$display .= "</table>";
			print "$display";
		}
		*/
		
		/*
		function populateArray($a_file)
		{
			global $bookArray;
			$fp = fopen($a_file, 'r'); //opens in read mode
			
			while(true)
			{
				$line = fgets($fp);
				
				//break if the end of the file is reached
				if (feof($fp))
				{
					break;
				}
				
				//will append the full $line to corresponding index value
				array_push($bookArray, $line);
			}
			fclose($fp);
		}*/
	?>
</body>
</html>
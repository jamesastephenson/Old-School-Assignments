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
	
	<?php
		//Gather Data From Form
		$userSearch = $_POST['userSearch'];
		$searchOrder = $_POST['searchOrder'];
		
		//define display variable to build on for final output
		//(display will built our table, including its rows and cels 
		$display = "<table border='1'>
					<tr>
						<th>Title</th>
						<th>ISBN</th>
						<th>Type</th>
						<th>Publication Date</th>
					</tr>";
		
		//apply the processSearch function
		//*processSearch will open the file, put it in an array, sort the array,-
		//-and add table HTML to our $display variable
		//*processSearch will also take a search term and only create rows that-
		//contain that search term in the title
		processSearch($userSearch, $searchOrder);
		
		//text display for user's search term (providing user feedback)
		if ($userSearch == "")
		{
			print "<h2>Current Titles That Match: ALL</h2>";
		}
		else
		{
			print "<h2>Current Titles That Match: $userSearch</h2>";
		}
		
		//text display for alphabetical and reverse alphabetical ordering
		//(user feedback)
		if ($searchOrder == 'ascending')
		{
			print "<h3>(Sorted in alphabetical order)</h3>";
		}
		else
		{
			print "<h3>(Sorted in reverse alphabetical order)</h3>";
		}
		
		//print the table our function constructed
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
			//Opening file and populating array
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
				
				//array_push to add the line to the array as an item
				array_push($bookArray, $line);
			}
			//close file
			fclose($fp);
		
			//*************************************************************************************
			//logic statement to determine sorting order (sort for ascending, rsort for descending)
			//*************************************************************************************
			if ($sortOrder == 'ascending')
			{
				//sort() the array so it's alphabetical
				sort($bookArray);
				
				//iterate through the array with a foreach loop
				foreach($bookArray as $row)
				{
					//explode function, use * to delimit data and set them to appropriate variables
					list($title, $type, $publicationDate, $isbn) = explode('*',$row);
					
					//use stripos() to see if searchTerm is in the title variable
					//returns true if the searchTerm is in the title
					$pos = stripos($title, $searchTerm);
					
					//skips rest of loop if the searchTerm was not in the title
					//therefore it is not added to the display variable
					if ($pos === false && $searchTerm != "")
					{
						continue;
					}
					
					//create zebra stripe effect with line counter and remainder
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
					
					//building our table row by building on display
					$display .= "<tr $style>";
						$display .= "<td>".$title."</td>";
						$display .= "<td>".$isbn."</td>";
						$display .= "<td>".$type."</td>";
						$display .= "<td>".$publicationDate."</td>";
					$display .= "</tr>\n";
				}
				//add table's end tag AFTER the loop has completed and return $display
				$display .= "</table>";
				return $display;
			}
			else
			{
				//rsort() the array so it's reverse alphabetical
				rsort($bookArray);
				
				//iterate through the array with a foreach loop
				foreach($bookArray as $row)
				{
					//explode function, use * to delimit data and set them to appropriate variables
					list($title, $type, $publicationDate, $isbn) = explode('*',$row);
					
					//use stripos() to see if searchTerm is in the title variable
					//returns false if the searchTerm is not in the title
					$pos = stripos($title, $searchTerm);
					
					//skips rest of loop if the searchTerm was not in the title
					//therefore it is not added to the display variable
					//note to self: use triple equals sign when using stripos
					if ($pos === false && $searchTerm != "")
					{
						continue;
					}
					
					//create zebra stripe effect with line counter
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
					
					//building table row in each loop iteration
					$display .= "<tr $style>";
						$display .= "<td>".$title."</td>";
						$display .= "<td>".$isbn."</td>";
						$display .= "<td>".$type."</td>";
						$display .= "<td>".$publicationDate."</td>";
					$display .= "</tr>\n";
				}
				//add table's end tag AFTER the loop has completed and return $display
				$display .= "</table>";
				return $display;
			}
		}
	?>
</body>
</html>
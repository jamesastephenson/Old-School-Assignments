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
	
	<table border='1'>
		<tr>
			<th>Title</th>
			<th>ISBN</th>
			<th>Type</th>
			<th>Publication Date</th>
		</tr>
	
	<?php
		//Gather Data From Form
		$userSearch = $_POST['userSearch'];
		$searchOrder = $_POST['searchOrder'];
		
		$filename = 'data/'.'booklist.txt';
		
		$display = '';
		$line_ctr = 0;
		
		$title = '';
		$isbn = '';
		$type = '';
		$publicationDate = '';
		
		openFile($filename);
		
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
	?>
</body>
</html>
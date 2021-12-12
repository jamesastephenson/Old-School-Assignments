$(document).ready(function() {
	//check to see if login button was clicked
	$("#loginButton").click(function() {
		//use val method to save info from html as variables
		var userID = $("#userID").val();
		var userPassword = $("#userPassword").val();
		
		//concatenate the previous variables in the proper format
		var data = userID + "|" + userPassword;
		
		//post function takes the url, data, function code to run, and-
		//-type of data returned
		//note to self: AJAX is linked in html, this will only work on test server
		$.post(
			"http://profperrytest.com/AJAXPHP/validate_logon.php",
			'data='+data,
			function(result){
				$("#endMessage").html(result);
			}
		);
		
	})

}) //end of ready
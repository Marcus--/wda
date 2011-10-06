/* Purpose: js validation form for login */

function validate() //checks input individually
{
		  var valid_form = false; //valid form false  
		  var log_details = ""; //details for the login
		  
		  //User name check
		  var unameX = document.getElementById("loginForm").user.value;
		  
		  if ((registerInput == null) || (registerInput.length == 0)) //if there is no input
		  {
			  document.alert("Please enter a valid user name!");
			  valid_form = false; //flag error
		  }
		  log_details += unameX; //add unameX to reg_details
		  log_details += " "; //add space to reg_details
		  
		  //Password creds, left simple
		  var passwordX = document.getElementById("registerForm").password.value;
		  if (passwordX.length <= 5)
		  {
			  document.alert("Please enter a valid password.\nMore than six characters.");
			  valid_form = false; //flag error
		  }
		  log_details += passwordX; //add passwordX to log_details
		  log_details += "\n"; //add newline to log_details
		  
		  valid_form = true; //flag from as true to process
		  
		  document.alert("DEBUG: Valid log details: " + log_details); // display debug
}

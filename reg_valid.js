/* Purpose: js validation form */
/* No password validation for simplicity */

function validate() //checks input individually
{
		  var valid_form = false; //valid form false  
		  var reg_details = ""; //details for the registraion
		  
		  //User name check
		  var unameX = document.getElementById("registerForm").user.value;
		  
		  if ((registerInput == null) || (registerInput.length == 0)) //if there is no input
		  {
			  document.alert("Please enter a valid user name!");
			  valid_form = false; //flag error
		  }
		  reg_details += unameX; //add unameX to reg_details
		  reg_details += " "; //add space to reg_details
		  
		  //First name check
		  var fnameX = document.getElementById("registerForm").first.value;
		  
		  if ((registerInput == null) || (registerInput.length == 0)) //if there is no input
		  {
			  document.alert("Please enter a valid first name!");
			  valid_form = false; //flag error
		  }
		  reg_details += fnameX; //add fnameX to reg_details
		  reg_details += " "; //add space to reg_details
		  
		  //Last name check
		  var lnameX = document.getElementById("registerForm").last.value;
		  
		  if ((registerInput == null) || (registerInput.length == 0)) //if there is no input
		  {
			  document.alert("Please enter a valid last name!");
			  valid_form = false; //flag error
		  }
		  reg_details += lnameX; //add lnameX to reg_details
		  reg_details += " "; //add space to reg_details
		  
		  //Age Check
		  var ageX = document.getElementById("registerForm").age.value; //sets the age value to the input var
		  if ((registerInput == null) || (isNaN(registerInput)) || (registerInput.length ==0)) //if input is null or is not a number or is = 0
		  {
			  if (ageX <= 17 || ageX >= 90)
			  {
 			  	document.alert("Please enter a valid age.\n(18 - 90)");
			  	valid_form = false; //flag error
			  }
		  }
		  reg_details += ageX; //add ageX to reg_details
		  reg_details += " "; //add space to reg_details
		  
		  //Password creds, left simple
		  var passwordX = document.getElementById("registerForm").password.value;
		  if (passwordX.length < 5)
		  {
			  document.alert("Please enter a valid password.\nMore than six characters.");
			  valid_form = false; //flag error
		  }
		  
		  //Email Check
		  var emailX = document.getElementById("registerForm").email.value;
		  if (email_check(registerInput) == false) //if the email field is false
		  {
			  document.alert("Please enter a valid e-mail.\nExample: cat@emails.com");
			  valid_form = false; //flag error
		  }
		  reg_details += emailX; //add emailX to reg_details
		  reg_details += "\n"; //add newline to end of reg_details
		  
		  valid_form = true; //flag from as true to process
		  
		  document.alert("DEBUG: Valid reg details: " + reg_details); // display debug
}
		  
function email_check(str) 
{
		  var at = "@" //the '@' symbol
		  var dot = "." //the '.'
		  var lat = str.indexOf(at) //variable of the '@' symbol
		  var lstr = str.length //length of the email string
		  var ldot = str.indexOf(dot) //variable of the '.' symbol
		  if (str.indexOf(at)==-1){ return false } //no '@' symbol
		  if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){ return false } //no @ symbol or if the @ is null or if there is only the @ symbol
		  if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){ return false } //no . symbol or if the . is null or if there is only the . symbol
		  if (str.indexOf(at,(lat+1))!=-1){ return false }
		  if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){ return false }
		  if (str.indexOf(dot,(lat+2))==-1){ return false }
		  if (str.indexOf(" ")!=-1){ return false } //if the first character is a space
		  return true //return a true, meaning the email is checked with this function		
}
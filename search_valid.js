/* Purpose: js validation form for searching */

function validate() //checks city
{
		  var valid_form = false; //valid form false  
		  var search_details = ""; //details for searching
		  
		  //User name check
		  var cityX = document.getElementById("searchForm").city.value;
		  
		  if((cityX==null)||(cityX.length==0)) //if there is no input
		  {
			  document.alert("Please enter a valid city!");
			  valid_form = false; //flag error
		  }
		  search_details += cityX; //add cityX to search_details
		  search_details += "\n"; //add newline to search_details
		  
		  valid_form = true; //flag from as true to process
		  
		  document.alert("DEBUG: Valid search details: " + search_details); // display debug
}

// Purpose: js validation form
// Validation based off of http://www.tizag.com/javascriptT/javascriptform.php
// http://developer.apple.com/internet/webcontent/validation.html
// http://www.jslab.dk/tools.regex.php

function search_valid(){	
	// Get the user input
	var user=reg_form.user.value;
	var error=""; // Errors to be collected
	
	//var email	= document.getElementById('email');

	// DEBUG
	alert(user+"\n"+first+"\n"+last+"\n"+age+"\n"+pass+"\n"+email+"\n"+"Error: "+error);
	
	// Validate in order, collecting errors
	error += check_user(user);
	error += check_first(first);
	error += check_last(last);
	error += check_age(age);
	error += check_pass(pass);
	//error += check_email(email);
	
	// DEBUG
	//alert("Submission error:\n"+error);
	
	if(error!=""){
		alert("Form not submitted:\n"+error);
		return false;
	}else{
		alert("Good form.\n");
		return false;
	}
}

// Simple checking functions

// Username, 4-15, alpha
function check_user(user){
	var error=""; // Errors
	var expression = /[a-zA-Z]/; //Alphabet
	if(user=="") // Blank
		error="Please enter a username.\n"
	else if((user.length<=3)||(user.length>=16)) // 4-16
    	error="Username must be four to 15 characters.\n";
	else if(!expression.test(user)) // Alpha test
		error="Usernames must be alphabetical.\n";
	return error; // Return what's wrong
}

// Firstname, 4-15, alpha
function check_first(first){
	var error=""; // Errors
	var expression = /[a-zA-Z]/; //Alphabet
	if(first=="") // Blank
		error="Please enter a first name.\n"
	else if((first.length<=3)||(first.length>=16)) // 4-16
    	error="First names must be four to 15 characters.\n";
	else if(!expression.test(first)) // Alpha test
		error="First names must be alphabetical.\n";
	return error; // Return what's wrong
}

// Lastname, 4-15, alpha
function check_last(last){
	var error=""; // Errors
	var expression=/[a-zA-Z]/; //Alphabet
	if(last=="") // Blank
		error="Please enter a last name.\n"
	else if((last.length<=3)||(last.length>=16)) // 4-16
    	error="Last names must be four to 15 characters.\n";
	else if(!expression.test(last)) // Alpha test
		error="Last names must be alphabetical.\n";
	return error; // Return what's wrong
}

// Age, 18-99, numeric
function check_age(age){
	var error=""; // Errors
	var expression=/[0-9]/; //Numbers
	if(age=="")
		error="Please enter your age.\n"
	else if(!expression.test(age)) // Num test
		error="Ages must be numeric.\n";
	else if(age <= 17||age>= 100) // 18 - 99 age
		error="Ages must be between 18 and 99.\n";
	return error; // Return errors
}

// Password, 6-10, alpha + numeric + _
function check_pass(pass){
	var error=""; // Errors
	var expression=/[a-zA-Z]|\d|\s*/; //Numbers, letters and _
	if(pass=="")
		error="Please enter a password.\n"
	else if((pass.length<=5)||(pass.length>=11)) // 6-10
    	error="Passwords must be six to 10 characters.\n";
	else if(!expression.test(pass)) // Passwords test
		error="Accepted passwords can contain a-Z, 0-9 and spaces.\n";
	return error; // Return what's wrong
}

// Email
function email_check(email){
	var error=""; // Errors
	var email_format=/^.+@.+\..{2,3}$/; // Email format
	var illegal_chars=/[\(\)\<\>\,\;\:\\\"\[\]]/ // Illegal characters
	if(email=="")
   		error="Please enter your e-mail address.\n";
    if(!(email_format.test(email))) 
       error="Your e-mail is not a valid format.\n";
    else if(email.match(illegal_chars))
		error="Your e-mail contains illegal characters.\n";
	return error; // Return what's wrong
}

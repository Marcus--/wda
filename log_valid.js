// Purpose: js validation form
// Validation based off of http://www.tizag.com/javascriptT/javascriptform.php
// http://developer.apple.com/internet/webcontent/validation.html
// http://www.jslab.dk/tools.regex.php

function log_valid(){	
	// Get the user input
	var user=log_form.user.value;
	var pass=log_form.pass.value;
	var error=""; // Errors to be collected

	// DEBUG
	alert(user+"\n"+pass);
	
	// Validate in order, collecting errors
	error += check_user(user);
	error += check_pass(pass);
	
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

/* Purpose: js validation form for searching */

function search_valid(){
	
	// Get the user input
	var arrive=search_form.arrive.value;
	var depart=search_form.depart.value;
	var airline=search_form.airline.value;
	var price=search_form.price.value;
	var dep_from=search_form.dep_from.value;
	var dep_to=search_form.dep_to.value;
	
	// Errors to be collected
	var error=""; 
	
	// DEBUG
	//alert(arrive+"\n"+depart+"\n"+airline+"\n"+price+"\n"+dep_from+"\n"+dep_to+"\n"+error);
	
	// Validate in order, collecting errors
	error += check_depart(depart, arrive);
	error += check_price(price);
	//error += check_dep_from(dep_from);
	error += check_dep_to(dep_to, dep_from);
	
	if(error!=""){
		alert("Form not submitted:\n"+error);
		return false;
	}else{
		//alert("Good form.\n");
		return true;
	}
}

// Simple checking functions

// Check depart
function check_depart(depart, arrive){
	var error=""; // Errors
	if(depart==arrive)
		error="Departure location cannot be the same as arrival.\n";
	return error;
}

// Check OPTIONAL price
function check_price(price){
	var error=""; // Errors
	var expression=/^\s*\d+\s*$/; //Numbers
	if(price!=""){
		if(!expression.test(price))
			error="Price must be numerical and in dollars.\n";
		if(price>=10001)
			error="Maximum price to search for is $10,000.\n";
	}
	return error;
}

// Check Dates
function check_dep_to(dep_to, dep_from){
	var error=""; // Errors
	//if(dep_from==""||dep_to=="")
		//error="Please select departure to and from dates.\n";
	if(dep_from>dep_to)
		error="Departure dates are inconsistent.\n"
	return error;
}

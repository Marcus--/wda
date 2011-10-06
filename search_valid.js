/* Purpose: js validation form for searching */

function validate() //checks city
{
		  var valid_form = false; //valid form false  
		  var search_details = ""; //details for searching
		  
		  //User name check
		  var cityX = document.getElementById("searchForm").city.value;
		  
		  if((cityX == null) || (cityX.length == 0)) //if there is no input
		  {
			  document.alert("Please enter a valid city!");
			  valid_form = false; //flag error
		  }
		  search_details += cityX; //add cityX to search_details
		  search_details += "\n"; //add newline to search_details
		  
		  valid_form = true; //flag from as true to process
		  
		  document.alert("DEBUG: Valid search details: " + search_details); // display debug
}

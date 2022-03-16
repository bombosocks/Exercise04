
var i = 1;
function jsStyle() {
    "use strict";
    var sentence = document.getElementById("text");

    if (i == 1) {
        sentence.style.color="blue";
        sentence.style.backgroundColor="red";
        sentence.style.fontSize="2.25em";
    }
    else {
        sentence.style="null";
    }
}

function getFormValues() {
    // function to send first and last names
    // to an 'alert' message.

}

function getOptions() {
	// function to display the number of options in an alert()
}


	//put a mouseover and a mouseout event on the p tag below

	//create a function that is called on the mouseover that turns the text red

	//create a function that is called on the mouseout that turns the text black
    function mouseout() {
        "use strict";
        document.getElementById("rb").style.color=null;
        document.getElementById("rb").style.fontSize="1em";
    }

// code two functions multiply and divide functions here
	//hints:
		//when you get a value out of an input, you are getting a string.  To get a number, use parseInt()
		//When you want to output something into the HTML you can use .innerHTML - like document.getElementById("result").innerHTML= "fred";



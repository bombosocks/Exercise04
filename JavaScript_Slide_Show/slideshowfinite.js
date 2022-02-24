
//Create an array of images 
var imageArray = ["images/main0.png","images/main1.png","images/main2.png", "images/main3.png"];

//Save total size of array to variable arraySize
var arraySize = imageArray.length;

//Variable repeat equals the product of arraySize * 4
//Can be used to stop slide show after certain amount of //repated slides
var repeat = (arraySize * 4)

//Set wait time between slides in milliseconds 
//(1000 milliseconds = 1 sec)
var transition = setInterval(runit,2000);

var i = 0; //Used to count up to repeat
var x = 1; //Used to count up to arraySize
/**
 * Function runit play slideshow when called 
 * 
 */
function runit()
{
        //Test where the loop is and what values are currently inside of each variable 
        //console.log("Start of Loop");
        //console.log(imageArray[x]);
        //console.log("loop iteration: " + i);
        //console.log("Currently inside of variable image: " + document.getElementById('slideshow'));
        
        //Set image to next picture in image array
        document.getElementById('slideshow').src = imageArray[x];
        
        //setTimeout("image.src = imageArray[x]",3000);
        //console.log("New image source: " + image.src);
        
        //Increase count by 1
        x++;
        i++;
        
        //If count has reached the last index of imageArray than set count back to starting index.
        if(x == arraySize)
        {
            x = 0;
        }
    
    // Allows slideshow to be stopped after specified amount of repeats
    if(i==repeat)
    {
        clearInterval(transition);
        console.log("End interval")
    }
}


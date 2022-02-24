//Create an array of images 
var imageArray = ["images/main0.png", "images/main1.png", "images/main2.png", "images/main3.png"];

//Save total size of array to variable arraySize
var arraySize = imageArray.length;

//Set wait time between slides in milliseconds 
setInterval(runit, 2000);

var x = 1; //Used to count up to arraySize

//Function runit play slideshow when called 
function runit() {
    //Set image to next picture in image array
    document.getElementById('slideshow').src = imageArray[x];

    //Increase count by 1
    x++;

    //If count has reached the last index of imageArray than set count back to starting index.
    if (x === arraySize) {
        x = 0;
    }
}


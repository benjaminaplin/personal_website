console.log("rock 'n rollll")

// Setting up an array of awesome song lyrics
songLines = [
"JAVASCRIPT",
"HTML5/CSS",
"Node",
"Ruby on Rails",
"D3.js",
"Backbone.js",
"MongoDB",
"PostgreSQL"
]

// Setting our incrementor to start at zero OUTSIDE of the code that will be repeated
var i = 0;

// Defining the behavior we want repeated 
var repeatedBehavior = function repeatedBehavior () {

  if (i < songLines.length) {
    $('.web-dev').text("").text(songLines[i]);
    // Increment our counter
    i = i + 1;
  } else if (i === songLines.length) {
    // If we've reached the end of the array, clear the there interval
    clearInterval(intervalId);
  }

}

// Starting the interval going and grabbing the interval's ID from setInterval's return value
var intervalId = setInterval(repeatedBehavior, 2000);


/* Morning Example:

var i = 0;

var intervalId = setInterval(function() {
  if (i <= 42) {
    console.log(i);
    i = i + 1;
  } else {
    clearInterval(intervalId);
  }
}, 100)

*/
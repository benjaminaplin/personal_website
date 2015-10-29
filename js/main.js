skills = [
  "Javascript",
  "HTML5/CSS",
  "Node",
  "Ruby on Rails",
  "D3.js",
  "Backbone.js",
  "MongoDB",
  "PostgreSQL",
  "WEB DEVELOPER"
]


var i = 0;
var repeatMarqueeText = function repeatMarqueeText () {

  if (i < skills.length) {
    $('.web-dev').addClass('animated bounceInDown')
    $('.web-dev').text("").text(skills[i])
        $('.web-dev').addClass('animated bounceInDown')

    i++;
  }
  if (i === skills.length) {
    i = 0;
  }
}

// Starting the interval going and grabbing the interval's ID from setInterval's return value
var intervalId = setInterval(repeatMarqueeText, 1000);


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
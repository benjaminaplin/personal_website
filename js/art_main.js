$('.isotope').css("display", "block");


$(function() {
  
  $('#container').imagesLoaded( function() {


    var $container = $('.isotope').isotope({
      itemSelector: '.painting',
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });
  var filterFns = {
      numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
      }
    };
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
    console.log(this);
    matchData(filterValue);

    });
  });
  
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
});
$('.fancybox').fancybox({
  padding : 0,
  openEffect  : 'elastic'
  });

$("#menu").click(function() {
  $(".navclose").toggleClass("navopen");
  });

$("#bio").on('click', function(){
  $(this).addClass('tossing');
});

    //function below looks to see if the sort navigation has filter value == * 
    //if so, select everything with fancy box class and update rel to gallery; 
    //else, if not, select filter value (for landscape/still life)
    //chain it with children(), find(), 'fancybox'
    //chain it with updating attribute 'rel' to be filter value

function matchData (filterData) {
  if (filterData==="*") {
    $(".fancybox").attr("rel","gallery");
  } else {
    $(filterData).find(".fancybox").attr("rel", filterData);
  }
}



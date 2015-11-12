console.log('main is linked');

$('div.eventr').on('mouseover', function(e){
  $('#eventr-modal').toggle();
})

$('img#eventr').on('mouseout', function(e){
  $('#eventr-modal').toggle();
})
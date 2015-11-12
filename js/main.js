console.log('main is linked');

$('div.eventr').on('mouseover', function(e){
  $('img#eventr').css('opacity','0.3');
  $('#eventr-modal').toggle();
})

$('div.eventr').on('mouseout', function(e){
  $('img#eventr').css('opacity','1');
  $('#eventr-modal').toggle();
})
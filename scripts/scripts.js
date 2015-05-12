//function for removing and adding class on click//

function classSelect(){
 	$('.default li').removeClass('selected');
  $(this).addClass('selected');
}

//function for toggling color controls//
function displayControl(){
  $('#new-color').next().toggle();
}

//function for selecting color range and changing span color//
function displayColor(){
  var r = $('#red').val();
  var g = $('#green').val();
  var b = $('#blue').val();
	console.log(r);
  console.log(g);
  console.log(b);
  $('.display-screen').css('background-color', 'rgb(' + r + ',' + g + ',' + b +')');
}

function appendPalette(){
  var $newList = $('<li></li>');
  $newList.addClass('color-unit').css('background-color', $('.display-screen').css('background-color'));
  $('#default-colors').append($newList);
}

////////////jQuery EVENTS////////
//click event for removing and adding class//
$('.default li').click(classSelect);

//click event for toggling color controls//
$('#new-color').click(displayControl);

//input change event on input type=range change color value of span//
$('input[type=range]').on('input', displayColor);

//click event for appending color palette//
$('.add_color').click(appendPalette);

$('.default').on('click','li', classSelect);

//canvas API//
var $canvas = $('canvas');
var context = $canvas[0].getContext('2d');
var lastEvent;
var mousedown = false;

//mousedown//
$canvas.mousedown(function(e){
  lastEvent = e;
  mousedown = true;
}).mousemove(function(e){
  var color = $('.selected').css('background-color');
  if(mousedown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
    context.lineTo(e.offsetX,e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mousedown=false;
});
	//when mouse is down, let's grab the location with x,y coordinates//
//mousemove//
//mouseup//


$(document).ready(function () {
  var speed=500; //fade speed
  var autoswitch = true; //autoswitch speed
  var autoswitchspeed  = 4000;
  $('.slide').first().addClass('active');
  $('.slide').hide();
  $('.active').show();
  $('#next').on('click',NextSlide);
  $('#prev').on('click',PrevSlide);
  if (autoswitch == true) {
    setInterval(NextSlide,autoswitchspeed);
  }
function NextSlide() {
  $('.active').removeClass('active').addClass('oldActive');
  if($('.oldActive').is(':last-child')){
    $('.slide').first().addClass('active');
  }else {
    $('.oldActive').next().addClass('active');
  }
  $('.oldActive').removeClass('oldActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
}
function PrevSlide() {
  $('.active').removeClass('active').addClass('oldActive');
  if($('.oldActive').is(':first-child')){
    $('.slide').last().addClass('active');
  }else {
    $('.oldActive').prev().addClass('active');
  }
  $('.oldActive').removeClass('oldActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
}
});


// $(document).ready(function(){
// 	// Set Options
// 	var speed = 500;			// Fade speed
// 	var autoswitch = true;		// Auto slider options
// 	var autoswitch_speed = 4000	// Auto slider speed
// 	// Add initial active class
// 	$('.slide').first().addClass('active');
// 	// Hide all slides
// 	$('.slide').hide();
// 	// Show first slide
// 	$('.active').show();
// 	// Next Handler
// 	$('#next').on('click', nextSlide);
// 	// Prev Handler
// 	$('#prev').on('click', prevSlide);
// 	// Auto Slider Handler
// 	if(autoswitch == true){
// 		setInterval(nextSlide,autoswitch_speed);
// 	}
// 	// Switch to next slide
// 	function nextSlide(){
// 		$('.active').removeClass('active').addClass('oldActive');
// 		if($('.oldActive').is(':last-child')){
// 			$('.slide').first().addClass('active');
// 		} else {
// 			$('.oldActive').next().addClass('active');
// 		}
// 		$('.oldActive').removeClass('oldActive');
// 		$('.slide').fadeOut(speed);
// 		$('.active').fadeIn(speed);
// 	}
// 	// Switch to prev slide
// 	function prevSlide(){
// 		$('.active').removeClass('active').addClass('oldActive');
// 		if($('.oldActive').is(':first-child')){
// 			$('.slide').last().addClass('active');
// 		} else {
// 			$('.oldActive').prev().addClass('active');
// 		}
// 		$('.oldActive').removeClass('oldActive');
// 		$('.slide').fadeOut(speed);
// 		$('.active').fadeIn(speed);
// 	}
// });

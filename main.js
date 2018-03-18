$(function() {  

    // Default
    jQuery.scrollSpeed(100, 800);
    
    
    
});
$(' nav ul li a').click(function(){
	var element = $(this).attr('href');
	var dist = $(element).offset().top;

	$('html,body').animate({'scrollTop':dist},1000);
	return false;
});

function initMap() {
  var uluru = {lat: 49.85, lng: 24.0166666667};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}


$(window).on('scroll',function(){
	if($(window).scrollTop()){
		$('nav').addClass('black');

	}
	else
	{
		$('nav').removeClass('black');
	}
})
$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 694) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 1000);
return false;
});
 
});


$(window).on('load',function(){
	$('.preloader').delay(2000).fadeOut(500);
});
 

 $(document).ready(function() {
 
 
   $("a.topLink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
 
 
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    
	if (scroll >= 0 && scroll < 694 ) {
        $("#mainnav li #homenav").addClass("active");
    } else {
        $("#mainnav li #homenav").removeClass("active");
    }
    if (scroll >= 694 && scroll < 1810 ) {
        $("#mainnav li #aboutnav").addClass("active");
    } else {
        $("#mainnav li #aboutnav").removeClass("active");
    }
    if (scroll >= 1810 && scroll < 3225 ) {
        $("#mainnav li #gallerynav").addClass("active");
    } else {
        $("#mainnav li #gallerynav").removeClass("active");
    }
    if (scroll >= 3225 && scroll < 3945 ) {
        $("#mainnav li #skillsnav").addClass("active");
    } else {
        $("#mainnav li #skillsnav").removeClass("active");
    }
    if (scroll >= 3945 ) {
        $("#mainnav li #contactnav").addClass("active");
    } else {
        $("#mainnav li #contactnav").removeClass("active");
    }
});


